import { describe, expect, it, vi } from "vitest";
import { NocoBaseClient } from "../src/generation/client";

describe("Client coverage tests", () => {
	it("should cover timeout error handling (line 85)", async () => {
		const originalFetch = global.fetch;
		const abortError = new DOMException(
			"The operation was aborted.",
			"AbortError",
		);

		const fetchMock = vi.fn(() => {
			return new Promise((_, reject) => {
				setTimeout(() => reject(abortError), 10);
			});
		}) as any;

		global.fetch = fetchMock;

		const client = new NocoBaseClient({
			baseUrl: "http://example.com",
			token: "fake-token",
			timeoutMs: 50,
			write: false,
			dryRun: false,
			showHelp: false,
			lockWorkspace: false,
		});

		await expect(client.fetchJson("/test")).rejects.toThrow("Timeout de 50ms");

		global.fetch = originalFetch;
	});
});
