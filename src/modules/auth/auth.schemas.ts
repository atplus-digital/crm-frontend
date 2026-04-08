import { z } from "zod";

// ── Login ────────────────────────────────────────────────────────────

export const loginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(1),
});

export type LoginInput = z.infer<typeof loginSchema>;

// ── NocoBase raw response from POST /auth:signIn ────────────────────

export const nocobaseAuthResponseSchema = z.object({
	data: z.number(),
	meta: z.object({
		token: z.string(),
		id: z.number(),
		email: z.string(),
		nickname: z.string().nullable().default(null),
		snippet: z.string().nullable().default(null),
		roles: z.array(z.unknown()),
	}),
});

export type NocoBaseAuthResponse = z.infer<typeof nocobaseAuthResponseSchema>;

// ── NocoBase raw response from GET /auth:check ──────────────────────

export const nocobaseCheckResponseSchema = z.object({
	data: z.number(),
	meta: z.object({
		id: z.number(),
		email: z.string(),
		username: z.string().nullable().default(null),
		nickname: z.string().nullable().default(null),
		snippet: z.string().nullable().default(null),
		roles: z.array(z.unknown()),
	}),
});

export type NocoBaseCheckResponse = z.infer<typeof nocobaseCheckResponseSchema>;

// ── Authenticated user (normalized) ─────────────────────────────────

export const authenticatedUserSchema = z.object({
	id: z.number(),
	email: z.string().email(),
	username: z.string().nullable().default(null),
	nickname: z.string().nullable().default(null),
	roles: z.array(z.string()),
});

export type AuthenticatedUser = z.infer<typeof authenticatedUserSchema>;

// ── Session ─────────────────────────────────────────────────────────

export const sessionSchema = z.object({
	token: z.string(),
	user: authenticatedUserSchema,
	expiresAt: z.date().optional(),
});

export type Session = z.infer<typeof sessionSchema>;
