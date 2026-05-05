import { createDataSourceClient } from "@scripts/generators/src/pipelines/generate-types/utils/create-dataSource-client";
import { describe, expect, it } from "vitest";

describe("createDataSourceClient", () => {
	it("uses runtime config credentials instead of global config", () => {
		const client = createDataSourceClient(
			{
				name: "nocobase",
				type: "nocobase",
				dataSource: "main",
			},
			{
				baseUrl: "https://example-runtime.local",
				token: "runtime-token",
				requestTimeoutMs: 9123,
			},
		);

		expect(client.baseUrl).toBe("https://example-runtime.local");
	});
});
