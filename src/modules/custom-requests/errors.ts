import type { ZodError } from "zod";

export enum CustomRequestErrorCode {
	VALIDATION_ERROR = "VALIDATION_ERROR",
	NETWORK_ERROR = "NETWORK_ERROR",
	TIMEOUT_ERROR = "TIMEOUT_ERROR",
	UNKNOWN_ERROR = "UNKNOWN_ERROR",
}

export class CustomRequestValidationError extends Error {
	constructor(
		message: string,
		public readonly code: CustomRequestErrorCode = CustomRequestErrorCode.VALIDATION_ERROR,
		public readonly zodError?: ZodError,
	) {
		super(message);
		this.name = "CustomRequestValidationError";
	}
}

export class CustomRequestNetworkError extends Error {
	constructor(
		message: string,
		public readonly code: CustomRequestErrorCode = CustomRequestErrorCode.NETWORK_ERROR,
	) {
		super(message);
		this.name = "CustomRequestNetworkError";
	}
}

/**
 * Map Zod error issues to Portuguese error messages.
 */
export function mapZodErrorToPortuguese(
	zodError: ZodError,
	fieldName?: string,
): string {
	const issues = zodError.issues;

	if (issues.length === 0) {
		return "Erro de validação desconhecido";
	}

	const messages = issues.map((issue) => {
		const fieldPath = issue.path.join(".");
		const field = fieldName ?? fieldPath ?? "Campo";

		if (issue.code === "invalid_type") {
			if (issue.expected === "string") {
				return `"${field}" deve ser uma string`;
			}
			if (issue.expected === "number") {
				return `"${field}" deve ser um número`;
			}
			if (issue.expected === "boolean") {
				return `"${field}" deve ser verdadeiro ou falso`;
			}
			return `"${field}" é obrigatório`;
		}

		if (issue.code === "too_small") {
			if ("origin" in issue && issue.origin === "number") {
				if (issue.minimum === 0 && !issue.inclusive) {
					return `"${field}" deve ser um número positivo`;
				}
				if (issue.inclusive) {
					return `"${field}" deve ser maior ou igual a ${issue.minimum}`;
				}
				return `"${field}" deve ser maior que ${issue.minimum}`;
			}
			return `"${field}" é obrigatório`;
		}

		if (issue.code === "invalid_format") {
			if ("validation" in issue && issue.validation === "email") {
				return `"${field}" deve ser um e-mail válido`;
			}
			return `"${field}" formato inválido`;
		}

		return `${fieldPath || field}: ${issue.message}`;
	});

	return messages.join("; ");
}
