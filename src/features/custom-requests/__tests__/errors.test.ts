import { describe, expect, it } from "vitest";
import { z } from "zod";
import {
	CustomRequestError,
	CustomRequestErrorCode,
	CustomRequestNetworkError,
	CustomRequestNotFoundError,
	CustomRequestTimeoutError,
	CustomRequestValidationError,
	mapZodErrorToPortuguese,
} from "../errors";

describe("errors", () => {
	describe("CustomRequestError", () => {
		it("creates error with code UNKNOWN by default", () => {
			const error = new CustomRequestError("test error");
			expect(error.message).toBe("test error");
			expect(error.code).toBe(CustomRequestErrorCode.UNKNOWN);
		});

		it("creates error with specified code", () => {
			const error = new CustomRequestError(
				"test",
				CustomRequestErrorCode.NETWORK,
			);
			expect(error.code).toBe(CustomRequestErrorCode.NETWORK);
		});
	});

	describe("CustomRequestValidationError", () => {
		it("extends CustomRequestError with VALIDATION code", () => {
			const result = z.string().min(1).safeParse("");
			expect(result.success).toBe(false);
			if (!result.success) {
				const error = new CustomRequestValidationError(result.error);
				expect(error.code).toBe(CustomRequestErrorCode.VALIDATION);
				expect(error.zodError).toBe(result.error);
			}
		});
	});

	describe("CustomRequestNetworkError", () => {
		it("extends CustomRequestError with NETWORK code", () => {
			const error = new CustomRequestNetworkError("Not found", 404);
			expect(error.code).toBe(CustomRequestErrorCode.NETWORK);
			expect(error.status).toBe(404);
		});
	});

	describe("CustomRequestTimeoutError", () => {
		it("extends CustomRequestNetworkError with TIMEOUT code", () => {
			const error = new CustomRequestTimeoutError();
			expect(error.code).toBe(CustomRequestErrorCode.TIMEOUT);
			expect(error.status).toBe(0);
		});
	});

	describe("CustomRequestNotFoundError", () => {
		it("extends CustomRequestError with NOT_FOUND code", () => {
			const error = new CustomRequestNotFoundError("Request", "abc123");
			expect(error.code).toBe(CustomRequestErrorCode.NOT_FOUND);
			expect(error.resourceId).toBe("abc123");
		});
	});

	describe("mapZodErrorToPortuguese", () => {
		it("handles invalid_type for undefined expected", () => {
			const error = {
				code: z.ZodIssueCode.invalid_type,
				expected: "undefined",
				path: ["field"],
				message: "",
			} as z.ZodIssue;
			const msg = mapZodErrorToPortuguese(error, "Field");
			expect(msg).toBe("Field é obrigatório");
		});

		it("handles too_small for number", () => {
			const zodError = z
				.object({ age: z.number().min(18) })
				.safeParse({ age: 15 });
			if (!zodError.success) {
				const error = zodError.error.issues[0];
				const msg = mapZodErrorToPortuguese(error, "Age");
				expect(msg).toContain("maior ou igual a 18");
			}
		});

		it("handles invalid_value", () => {
			const error = {
				code: z.ZodIssueCode.invalid_value,
				values: ["a", "b"],
				path: ["field"],
				message: "",
			} as z.ZodIssue;
			const msg = mapZodErrorToPortuguese(error, "Field");
			expect(msg).toContain("um dos seguintes valores");
		});

		it("handles unrecognized_keys", () => {
			const error = {
				code: z.ZodIssueCode.unrecognized_keys,
				keys: ["a", "b"],
				path: [],
				message: "",
			} as z.ZodIssue;
			const msg = mapZodErrorToPortuguese(error, "Object");
			expect(msg).toContain("não reconhecida(s)");
		});

		it("handles custom error", () => {
			const error = {
				code: z.ZodIssueCode.custom,
				path: [],
				message: "custom message",
			} as z.ZodIssue;
			const msg = mapZodErrorToPortuguese(error);
			expect(msg).toBe("custom message");
		});
	});
});
