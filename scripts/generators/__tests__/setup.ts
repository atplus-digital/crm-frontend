import { createMockCustomRequestsConfig } from "@scripts/generators/src/pipelines/generate-custom-requests/test/mock-config";
import { createMockRuntimeConfig } from "@scripts/generators/src/pipelines/generate-types/test/mock-config";
import { beforeEach, vi } from "vitest";

let currentTypesMockConfig = createMockRuntimeConfig();
let currentCustomReqsMockConfig = createMockCustomRequestsConfig();

vi.mock("@scripts/generators/src/pipelines/generate-types/config", () => ({
	get config() {
		return currentTypesMockConfig;
	},
}));

vi.mock(
	"@scripts/generators/src/pipelines/generate-custom-requests/config",
	() => ({
		get config() {
			return currentCustomReqsMockConfig;
		},
	}),
);

if (typeof beforeEach !== "undefined") {
	beforeEach(() => {
		currentTypesMockConfig = createMockRuntimeConfig();
		currentCustomReqsMockConfig = createMockCustomRequestsConfig();
	});
}
