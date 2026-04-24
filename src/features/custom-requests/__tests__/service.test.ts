import { describe, expect, it } from "vitest";
import { CustomRequestError, CustomRequestValidationError } from "../errors";
import {
	buildTemplateContext,
	getRequestConfig,
	getRequestsByCollection,
	interpolateTemplate,
	validatePayload,
} from "../utils/service";

describe("service", () => {
	describe("validatePayload", () => {
		it("validates criarContratoIxc payload", () => {
			const payload = {
				id_contrato: 1,
				id_cliente: 2,
				produto: "TV",
			};
			const result = validatePayload("criarContratoIxc", payload) as {
				id_contrato: number;
			};
			expect(result.id_contrato).toBe(1);
		});

		it("throws CustomRequestValidationError for invalid payload", () => {
			const payload = { id_contrato: "not a number" };
			expect(() => validatePayload("criarContratoIxc", payload)).toThrow(
				CustomRequestValidationError,
			);
		});

		it("throws CustomRequestError for unknown key", () => {
			expect(() => validatePayload("unknownKey" as never, {})).toThrow(
				CustomRequestError,
			);
		});
	});

	describe("buildTemplateContext", () => {
		it("builds template context", () => {
			const record = { id: 1, name: "Test" };
			const user = { id: 1, email: "test@test.com", username: "test" };
			const ctx = buildTemplateContext(record, user);
			expect(ctx.currentRecord).toEqual(record);
			expect(ctx.currentUser).toEqual(user);
			expect(ctx.currentTime).toBeDefined();
		});

		it("uses provided time", () => {
			const record = { id: 1 };
			const user = { id: 1, email: "test@test.com", username: "test" };
			const ctx = buildTemplateContext(record, user, "2024-01-01T00:00:00Z");
			expect(ctx.currentTime).toBe("2024-01-01T00:00:00Z");
		});
	});

	describe("interpolateTemplate", () => {
		it("interpolates currentRecord fields", () => {
			const ctx = {
				currentRecord: { id: 1, name: "Test" },
				currentUser: { id: 1, email: "test@test.com", username: "test" },
				currentTime: "2024-01-01T00:00:00Z",
			};
			const result = interpolateTemplate("Record: {{currentRecord.name}}", ctx);
			expect(result).toBe("Record: Test");
		});

		it("interpolates currentUser fields", () => {
			const ctx = {
				currentRecord: {},
				currentUser: { id: 1, email: "test@test.com", username: "testuser" },
				currentTime: "2024-01-01T00:00:00Z",
			};
			const result = interpolateTemplate("User: {{currentUser.username}}", ctx);
			expect(result).toBe("User: testuser");
		});

		it("interpolates currentTime", () => {
			const ctx = {
				currentRecord: {},
				currentUser: { id: 1, email: "test@test.com", username: "test" },
				currentTime: "2024-01-01T00:00:00Z",
			};
			const result = interpolateTemplate("Time: {{currentTime}}", ctx);
			expect(result).toBe("Time: 2024-01-01T00:00:00Z");
		});

		it("returns template unchanged when no placeholders", () => {
			const ctx = {
				currentRecord: {},
				currentUser: { id: 1, email: "test@test.com", username: "test" },
				currentTime: "2024-01-01T00:00:00Z",
			};
			const result = interpolateTemplate("No placeholders", ctx);
			expect(result).toBe("No placeholders");
		});
	});

	describe("getRequestConfig", () => {
		it("returns config for valid key", () => {
			const config = getRequestConfig("criarContratoIxc");
			expect(config.key).toBe("criarContratoIxc");
			expect(config.method).toBe("POST");
		});

		it("throws for unknown key", () => {
			expect(() => getRequestConfig("unknown" as never)).toThrow(
				CustomRequestError,
			);
		});
	});

	describe("getRequestsByCollection", () => {
		it("returns all requests", () => {
			const requests = getRequestsByCollection("all");
			expect(requests.length).toBe(3);
		});
	});
});
