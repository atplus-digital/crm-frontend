import type { z } from "zod";

// ─── Error Codes ───────────────────────────────────────────────────────────────

/**
 * Unified error codes for custom request operations.
 */
export enum CustomRequestErrorCode {
	VALIDATION = "VALIDATION",
	NETWORK = "NETWORK",
	TIMEOUT = "TIMEOUT",
	NOT_FOUND = "NOT_FOUND",
	UNKNOWN = "UNKNOWN",
}

// ─── Base Error ────────────────────────────────────────────────────────────────

/**
 * Base error class for all custom request errors.
 */
export class CustomRequestError extends Error {
	public readonly code: CustomRequestErrorCode;

	constructor(
		message: string,
		code: CustomRequestErrorCode = CustomRequestErrorCode.UNKNOWN,
	) {
		super(message);
		this.name = "CustomRequestError";
		this.code = code;
	}
}

// ─── Validation Error ──────────────────────────────────────────────────────────

/**
 * Validation error with Zod error details.
 */
export class CustomRequestValidationError extends CustomRequestError {
	public readonly zodError: z.ZodError;

	constructor(zodError: z.ZodError) {
		const message = zodError.issues
			.map((e) => `${e.path.join(".") || "root"}: ${e.message}`)
			.join("; ");
		super(message, CustomRequestErrorCode.VALIDATION);
		this.name = "CustomRequestValidationError";
		this.zodError = zodError;
	}
}

// ─── Network Error ─────────────────────────────────────────────────────────────

/**
 * Network error with HTTP status code.
 */
export class CustomRequestNetworkError extends CustomRequestError {
	public readonly status: number;

	constructor(message: string, status: number) {
		super(message, CustomRequestErrorCode.NETWORK);
		this.name = "CustomRequestNetworkError";
		this.status = status;
	}
}

// ─── Timeout Error ─────────────────────────────────────────────────────────────

/**
 * Timeout error — extends NetworkError with code TIMEOUT.
 */
export class CustomRequestTimeoutError extends CustomRequestNetworkError {
	constructor(message = "A requisição excedeu o tempo limite") {
		super(message, 0);
		this.name = "CustomRequestTimeoutError";
	}

	public override readonly code = CustomRequestErrorCode.TIMEOUT;
}

// ─── Not Found Error ───────────────────────────────────────────────────────────

/**
 * Not found error for missing resources.
 */
export class CustomRequestNotFoundError extends CustomRequestError {
	public readonly resourceId: string | number;

	constructor(resource: string, resourceId: string | number) {
		super(
			`${resource} com ID "${resourceId}" não encontrado`,
			CustomRequestErrorCode.NOT_FOUND,
		);
		this.name = "CustomRequestNotFoundError";
		this.resourceId = resourceId;
	}
}

// ─── Zod Error Mapping ─────────────────────────────────────────────────────────

type TooSmallIssue = Extract<z.core.$ZodIssue, { code: "too_small" }>;
type TooBigIssue = Extract<z.core.$ZodIssue, { code: "too_big" }>;
type InvalidFormatIssue = Extract<z.core.$ZodIssue, { code: "invalid_format" }>;

/**
 * Map a Zod 4 error issue to a user-friendly Portuguese message.
 * Covers ALL Zod 4 issue codes.
 *
 * @param error - Zod 4 issue
 * @param fieldName - Optional human-readable field name override
 * @returns Portuguese error message
 */
export function mapZodErrorToPortuguese(
	error: z.core.$ZodIssue,
	fieldName?: string,
): string {
	const field = fieldName ?? error.path.join(".") ?? "Este campo";

	switch (error.code) {
		case "invalid_type": {
			const e = error as z.core.$ZodIssue & { expected: string };
			if (e.expected === "undefined") return `${field} é obrigatório`;
			if (e.expected === "null") return `${field} não pode ser nulo`;
			return `${field} deve ser do tipo ${e.expected}`;
		}

		case "too_small":
			return formatTooSmall(field, error as TooSmallIssue);

		case "too_big":
			return formatTooBig(field, error as TooBigIssue);

		case "invalid_format":
			return formatInvalidFormat(field, error as InvalidFormatIssue);

		case "invalid_value": {
			const e = error as Extract<z.core.$ZodIssue, { code: "invalid_value" }>;
			return `${field} deve ser um dos seguintes valores: ${e.values.join(", ")}`;
		}

		case "unrecognized_keys": {
			const e = error as Extract<
				z.core.$ZodIssue,
				{ code: "unrecognized_keys" }
			>;
			return `Chave(s) não reconhecida(s): ${e.keys.join(", ")}`;
		}

		case "not_multiple_of": {
			const e = error as Extract<z.core.$ZodIssue, { code: "not_multiple_of" }>;
			return `${field} deve ser múltiplo de ${e.divisor}`;
		}

		case "invalid_union":
			return `${field} não corresponde a nenhum formato válido`;

		case "invalid_key": {
			const e = error as Extract<z.core.$ZodIssue, { code: "invalid_key" }>;
			return `Chave inválida em ${e.origin}`;
		}

		case "invalid_element": {
			const e = error as Extract<z.core.$ZodIssue, { code: "invalid_element" }>;
			return `Elemento inválido em ${e.origin}`;
		}

		case "custom":
			return error.message;
		default:
			return "Erro desconhecido";
	}
}

// ─── Helpers ───────────────────────────────────────────────────────────────────

function formatTooSmall(field: string, error: TooSmallIssue): string {
	const min = error.minimum;
	const origin = error.origin;
	const inclusive = error.inclusive;
	const exact = error.exact;

	switch (origin) {
		case "string":
			if (exact) return `${field} deve ter exatamente ${min} caractere(s)`;
			if (inclusive) return `${field} deve ter no mínimo ${min} caractere(s)`;
			return `${field} deve ter mais de ${min} caractere(s)`;

		case "number":
		case "int":
			if (inclusive) return `${field} deve ser maior ou igual a ${min}`;
			return `${field} deve ser maior que ${min}`;

		case "date": {
			const dateStr = new Date(min as number).toLocaleDateString("pt-BR");
			if (inclusive) return `${field} deve ser maior ou igual a ${dateStr}`;
			return `${field} deve ser maior que ${dateStr}`;
		}

		case "array":
		case "set":
			if (exact) return `${field} deve ter exatamente ${min} item(ns)`;
			if (inclusive) return `${field} deve ter no mínimo ${min} item(ns)`;
			return `${field} deve ter mais de ${min} item(ns)`;

		case "file":
			if (inclusive) return `${field} deve ter no mínimo ${min} byte(s)`;
			return `${field} deve ter mais de ${min} byte(s)`;

		default:
			return `${field} é muito pequeno`;
	}
}

function formatTooBig(field: string, error: TooBigIssue): string {
	const max = error.maximum;
	const origin = error.origin;
	const inclusive = error.inclusive;
	const exact = error.exact;

	switch (origin) {
		case "string":
			if (exact) return `${field} deve ter exatamente ${max} caractere(s)`;
			if (inclusive) return `${field} deve ter no máximo ${max} caractere(s)`;
			return `${field} deve ter menos de ${max} caractere(s)`;

		case "number":
		case "int":
			if (inclusive) return `${field} deve ser menor ou igual a ${max}`;
			return `${field} deve ser menor que ${max}`;

		case "date": {
			const dateStr = new Date(max as number).toLocaleDateString("pt-BR");
			if (inclusive) return `${field} deve ser menor ou igual a ${dateStr}`;
			return `${field} deve ser menor que ${dateStr}`;
		}

		case "array":
		case "set":
			if (exact) return `${field} deve ter exatamente ${max} item(ns)`;
			if (inclusive) return `${field} deve ter no máximo ${max} item(ns)`;
			return `${field} deve ter menos de ${max} item(ns)`;

		case "file":
			if (inclusive) return `${field} deve ter no máximo ${max} byte(s)`;
			return `${field} deve ter menos de ${max} byte(s)`;

		default:
			return `${field} é muito grande`;
	}
}

function formatInvalidFormat(field: string, error: InvalidFormatIssue): string {
	switch (error.format) {
		case "email":
			return `${field} deve ser um e-mail válido`;
		case "url":
			return `${field} deve ser uma URL válida`;
		case "uuid":
			return `${field} deve ser um UUID válido`;
		case "cuid":
			return `${field} deve ser um CUID válido`;
		case "regex":
			return `${field} está em formato inválido`;
		case "emoji":
			return `${field} deve ser um emoji`;
		case "nanoid":
			return `${field} deve ser um NanoID válido`;
		case "ulid":
			return `${field} deve ser um ULID válido`;
		case "date":
			return `${field} deve ser uma data válida`;
		case "datetime":
			return `${field} deve ser uma data/hora válida`;
		case "base64":
			return `${field} deve ser uma string Base64 válida`;
		case "jwt":
			return `${field} deve ser um JWT válido`;
		case "ip":
			return `${field} deve ser um endereço IP válido`;
		case "starts_with": {
			const e = error as InvalidFormatIssue & { prefix: string };
			return `${field} deve começar com "${e.prefix}"`;
		}
		case "ends_with": {
			const e = error as InvalidFormatIssue & { suffix: string };
			return `${field} deve terminar com "${e.suffix}"`;
		}
		case "includes": {
			const e = error as InvalidFormatIssue & { includes: string };
			return `${field} deve conter "${e.includes}"`;
		}
		default:
			return `${field} está em formato inválido`;
	}
}
