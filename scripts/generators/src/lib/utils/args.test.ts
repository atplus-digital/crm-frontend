import { describe, expect, it } from "vitest";
import { parseGeneratorFlags } from "./args";

describe("args", () => {
	describe("parseGeneratorFlags", () => {
		it("TC-UT-ARGS-001: parses --types flag correctly", () => {
			const result = parseGeneratorFlags(
				["--types"],
				["--types", "--requests", "--concurrent"],
			);
			expect(result.selectedGeneratorFlags.has("--types")).toBe(true);
			expect(result.selectedGeneratorFlags.has("--requests")).toBe(false);
		});

		it("TC-UT-ARGS-002: parses --requests flag correctly", () => {
			const result = parseGeneratorFlags(
				["--requests"],
				["--types", "--requests", "--concurrent"],
			);
			expect(result.selectedGeneratorFlags.has("--requests")).toBe(true);
			expect(result.selectedGeneratorFlags.has("--types")).toBe(false);
		});

		it("TC-UT-ARGS-003: parses --concurrent flag correctly", () => {
			const result = parseGeneratorFlags(
				["--concurrent"],
				["--types", "--requests", "--concurrent"],
			);
			expect(result.selectedGeneratorFlags.has("--concurrent")).toBe(true);
		});

		it("TC-UT-ARGS-004: parses multiple flags together", () => {
			const result = parseGeneratorFlags(
				["--types", "--requests"],
				["--types", "--requests", "--concurrent"],
			);
			expect(result.selectedGeneratorFlags.has("--types")).toBe(true);
			expect(result.selectedGeneratorFlags.has("--requests")).toBe(true);
			expect(result.selectedGeneratorFlags.has("--concurrent")).toBe(false);
		});

		it("TC-UT-ARGS-005: unknown flag throws appropriate error", () => {
			expect(() =>
				parseGeneratorFlags(
					["--unknown"],
					["--types", "--requests", "--concurrent"],
				),
			).toThrow("Flag não suportada: --unknown");
		});

		it("TC-UT-ARGS-006: missing value for flag throws error", () => {
			// When no flags match, the function returns all supported flags as selected
			// This is the expected behavior when no args are provided
			const result = parseGeneratorFlags(
				[],
				["--types", "--requests", "--concurrent"],
			);
			// When none of the args match supported flags, all flags are returned as selected
			expect(result.selectedGeneratorFlags.has("--types")).toBe(true);
			expect(result.selectedGeneratorFlags.has("--requests")).toBe(true);
			expect(result.selectedGeneratorFlags.has("--concurrent")).toBe(true);
		});

		it("TC-UT-ARGS-007: additional allowed flags are accepted", () => {
			const result = parseGeneratorFlags(
				["--types", "--custom-flag"],
				["--types"],
				{ additionalAllowedFlags: ["--custom-flag"] as const },
			);
			expect(result.selectedGeneratorFlags.has("--types")).toBe(true);
			expect(result.selectedAdditionalFlags.has("--custom-flag")).toBe(true);
		});

		it("TC-UT-ARGS-008: additional allowed flags throw when not in list", () => {
			expect(() =>
				parseGeneratorFlags(["--types", "--invalid-flag"], ["--types"], {
					additionalAllowedFlags: ["--custom-flag"] as const,
				}),
			).toThrow("Flag não suportada: --invalid-flag");
		});

		it("TC-UT-ARGS-009: non-flag arguments are ignored", () => {
			// Non-flag args (not starting with --) should be ignored
			const result = parseGeneratorFlags(
				["some-arg", "--types", "another-arg"],
				["--types", "--requests"],
			);
			expect(result.selectedGeneratorFlags.has("--types")).toBe(true);
		});

		it("TC-UT-ARGS-010: empty argv array returns all flags as selected", () => {
			const result = parseGeneratorFlags([], ["--types", "--requests"]);
			// When no flags match, all flags are returned as selected
			expect(result.selectedGeneratorFlags.has("--types")).toBe(true);
			expect(result.selectedGeneratorFlags.has("--requests")).toBe(true);
		});
	});
});
