import crypto from "node:crypto";
import {
	deleteCookie,
	getCookie,
	getRequestProtocol,
	setCookie,
} from "@tanstack/start-server-core";
import { env } from "#/env";

// ── Constants ────────────────────────────────────────────────────────

const COOKIE_NAME = "crm_session";

/** Default session duration when token TTL is not available (8 hours) */
const DEFAULT_MAX_AGE_SECONDS = 8 * 60 * 60;

/** AES-GCM parameters */
const ALGORITHM = "aes-256-gcm";
const IV_LENGTH = 12;
const AUTH_TAG_LENGTH = 16;

// ── Internal crypto helpers ──────────────────────────────────────────

function deriveKeys(): {
	encryptionKey: Buffer;
	signingKey: Buffer;
} {
	const master = Buffer.from(env.AUTH_SESSION_SECRET, "utf-8");
	const encryptionKey = crypto.createHash("sha256").update(master).digest();
	const signingKey = crypto.createHash("sha512").update(master).digest();
	return { encryptionKey, signingKey };
}

/**
 * Encrypts a plaintext string using AES-256-GCM.
 * Returns a base64 string: iv + ciphertext + authTag
 */
function encrypt(plaintext: string): string {
	const { encryptionKey } = deriveKeys();
	const iv = crypto.randomBytes(IV_LENGTH);
	const cipher = crypto.createCipheriv(ALGORITHM, encryptionKey, iv);

	const encrypted = Buffer.concat([
		cipher.update(plaintext, "utf-8"),
		cipher.final(),
	]);

	const authTag = cipher.getAuthTag();

	// Layout: iv (12 bytes) + ciphertext + authTag (16 bytes)
	return Buffer.concat([iv, encrypted, authTag]).toString("base64");
}

/**
 * Decrypts a base64-encoded encrypted string using AES-256-GCM.
 * Returns the original plaintext or undefined if decryption fails.
 */
function decrypt(encoded: string): string | undefined {
	try {
		const { encryptionKey } = deriveKeys();
		const buffer = Buffer.from(encoded, "base64");

		const iv = buffer.subarray(0, IV_LENGTH);
		const authTag = buffer.subarray(buffer.length - AUTH_TAG_LENGTH);
		const ciphertext = buffer.subarray(
			IV_LENGTH,
			buffer.length - AUTH_TAG_LENGTH,
		);

		const decipher = crypto.createDecipheriv(ALGORITHM, encryptionKey, iv);
		decipher.setAuthTag(authTag);

		const decrypted = Buffer.concat([
			decipher.update(ciphertext),
			decipher.final(),
		]);

		return decrypted.toString("utf-8");
	} catch {
		return undefined;
	}
}

/**
 * Creates an HMAC-SHA256 signature for the given data.
 */
function sign(data: string): string {
	const { signingKey } = deriveKeys();
	const hmac = crypto.createHmac("sha256", signingKey);
	hmac.update(data);
	return hmac.digest("base64");
}

/**
 * Verifies that the signature matches the data using constant-time comparison.
 */
function verify(data: string, signature: string): boolean {
	const expected = sign(data);
	try {
		return crypto.timingSafeEqual(
			Buffer.from(expected),
			Buffer.from(signature),
		);
	} catch {
		return false;
	}
}

// ── Cookie options ───────────────────────────────────────────────────

function getCookieOptions(maxAge?: number): {
	httpOnly: boolean;
	sameSite: "lax";
	path: string;
	secure: boolean;
	maxAge?: number;
} {
	const protocol = getRequestProtocol();
	return {
		httpOnly: true,
		sameSite: "lax",
		path: "/",
		secure: protocol === "https",
		...(maxAge !== undefined ? { maxAge } : {}),
	};
}

// ── Public API ───────────────────────────────────────────────────────

/**
 * Persists the NocoBase token into the crm_session cookie.
 *
 * The token is encrypted with AES-256-GCM and signed with HMAC-SHA256
 * before being stored. The format stored in the cookie is:
 * `encrypted_token.signature`
 *
 * @param token - The raw NocoBase access token
 * @param expiresInMs - Optional token TTL in milliseconds. Falls back to 8 hours.
 */
export function createSession(token: string, expiresInMs?: number): void {
	const maxAge = expiresInMs
		? Math.floor(expiresInMs / 1000)
		: DEFAULT_MAX_AGE_SECONDS;

	const encrypted = encrypt(token);
	const signature = sign(encrypted);
	const cookieValue = `${encrypted}.${signature}`;

	setCookie(COOKIE_NAME, cookieValue, getCookieOptions(maxAge));
}

/**
 * Reads and validates the crm_session cookie.
 *
 * Decrypts the token and verifies its HMAC signature.
 * Returns the raw NocoBase token if valid, or undefined if
 * the cookie is missing, tampered, or expired.
 */
export function getSession(): string | undefined {
	const raw = getCookie(COOKIE_NAME);
	if (!raw) return undefined;

	const separatorIndex = raw.lastIndexOf(".");
	if (separatorIndex === -1) return undefined;

	const encrypted = raw.substring(0, separatorIndex);
	const signature = raw.substring(separatorIndex + 1);

	const valid = verify(encrypted, signature);
	if (!valid) return undefined;

	const token = decrypt(encrypted);
	return token;
}

/**
 * Immediately removes the crm_session cookie by setting
 * an empty value with maxAge=0.
 */
export function removeSession(): void {
	deleteCookie(COOKIE_NAME, getCookieOptions());
}
