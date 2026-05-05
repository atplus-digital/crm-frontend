import { beforeEach, describe, expect, it, vi } from "vitest";

const runGeneratorCliMock = vi.fn();
const createGenerateCustomRequestsGeneratorMock = vi.fn(() => ({
	name: "generate-custom-requests",
	context: {},
	tasks: [],
}));

vi.mock("@scripts/generators/src/lib/cli", () => ({
	runGeneratorCli: runGeneratorCliMock,
}));

vi.mock(
	"@scripts/generators/src/pipelines/generate-custom-requests/generator/create-generator",
	() => ({
		createGenerateCustomRequestsGenerator:
			createGenerateCustomRequestsGeneratorMock,
	}),
);

describe("generate-custom-requests index", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it("não executa main automaticamente quando importado", async () => {
		const module = await import(
			"@scripts/generators/src/pipelines/generate-custom-requests/index"
		);

		expect(module.config).toBeDefined();
		expect(module.createGenerateCustomRequestsGenerator).toBeDefined();
		expect(runGeneratorCliMock).not.toHaveBeenCalled();
	});
});
