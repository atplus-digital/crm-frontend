import { describe, expect, it } from "vitest";

import { mergeActions, mergeSnippets } from "#/modules/permissions/compute";

describe("mergeActions", () => {
	it("returns empty array for empty input", () => {
		expect(mergeActions([])).toEqual([]);
	});

	it("returns flat deduplicated actions from multiple roles", () => {
		const result = mergeActions([
			["create", "view"],
			["view", "destroy"],
		]);
		expect(result).toEqual(["create", "view", "destroy"]);
	});

	it("includes base action when :own suffixed action is present", () => {
		const result = mergeActions([["create"], ["update:own"]]);
		expect(result).toContain("update:own");
		expect(result).toContain("update");
	});

	it("does not duplicate base action if already present", () => {
		const result = mergeActions([["update"], ["update:own"]]);
		// "update" comes first from first role; "update:own" adds base "update" but it's already seen
		expect(result).toEqual(["update", "update:own"]);
	});

	it("ignores null/undefined inner arrays", () => {
		const result = mergeActions([["create"], null as unknown as string[]]);
		expect(result).toEqual(["create"]);
	});

	it("ignores falsy inner arrays (null entries in outer array)", () => {
		const result = mergeActions([
			["create"],
			null as unknown as string[],
			["view"],
		]);
		expect(result).toEqual(["create", "view"]);
	});

	it("deduplicates within a single role", () => {
		const result = mergeActions([["create", "create", "view"]]);
		expect(result).toEqual(["create", "view"]);
	});

	it("handles multiple :own suffixed actions", () => {
		const result = mergeActions([["create:own", "destroy:own"]]);
		expect(result).toContain("create:own");
		expect(result).toContain("create");
		expect(result).toContain("destroy:own");
		expect(result).toContain("destroy");
	});

	it("handles wildcard * action", () => {
		const result = mergeActions([["*"]]);
		expect(result).toEqual(["*"]);
	});

	it("preserves order of first appearance", () => {
		const result = mergeActions([
			["create", "view"],
			["destroy", "view", "create"],
		]);
		expect(result).toEqual(["create", "view", "destroy"]);
	});
});

describe("mergeSnippets", () => {
	it("returns empty array for empty input", () => {
		expect(mergeSnippets([])).toEqual([]);
	});

	it("returns empty array for array with single empty inner array", () => {
		expect(mergeSnippets([[]])).toEqual([]);
	});

	it("unions snippets from multiple roles", () => {
		const result = mergeSnippets([["app", "pm"], ["ui"]]);
		expect(result).toContain("app");
		expect(result).toContain("pm");
		expect(result).toContain("ui");
	});

	it("removes denials from result (denial prefix !X)", () => {
		const result = mergeSnippets([
			["!pm", "!ui.*"],
			["app", "pm"],
		]);
		// pm is denied by !pm; app is not denied
		expect(result).toEqual(["app"]);
		expect(result).not.toContain("pm");
		expect(result).not.toContain("!pm");
	});

	it("wildcard denial !X denies exact X but NOT X.*", () => {
		const result = mergeSnippets([["pm.*", "ui.*"], ["!pm"]]);
		// !pm denies exact "pm" only; "pm.*" is a different string
		expect(result).toContain("pm.*");
		expect(result).toContain("ui.*");
		expect(result).not.toContain("pm");
	});

	it("denial wins over grant", () => {
		const result = mergeSnippets([["!app"], ["app"]]);
		expect(result).toEqual([]);
	});

	it("wildcard denial !X.* removes X.* from result", () => {
		const result = mergeSnippets([["ui.menu", "ui.settings"], ["!ui.*"]]);
		// !ui.* denies all ui.* wildcards; exact "ui.menu" and "ui.settings" are NOT denied
		// because wildcard denial only denies "ui" and "ui.*" (the exact strings)
		expect(result).toContain("ui.menu");
		expect(result).toContain("ui.settings");
		expect(result).not.toContain("ui.*");
	});

	it("ignores null/undefined inner arrays", () => {
		const result = mergeSnippets([["app"], null as unknown as string[]]);
		expect(result).toEqual(["app"]);
	});

	it("does not include denial strings in result", () => {
		const result = mergeSnippets([["app", "!pm", "!ui.*"]]);
		expect(result).toContain("app");
		expect(result).not.toContain("!pm");
		expect(result).not.toContain("!ui.*");
	});

	it("deduplicates granted snippets", () => {
		const result = mergeSnippets([["app", "app"], ["app"]]);
		expect(result.filter((s) => s === "app")).toHaveLength(1);
	});

	it("handles multiple wildcard denials", () => {
		const result = mergeSnippets([
			["pm.*", "ui.*", "app"],
			["!pm.*", "!ui.*"],
		]);
		// !pm.* denies "pm.*"; !ui.* denies "ui.*"; "app" stays
		expect(result).toContain("app");
		expect(result).not.toContain("pm.*");
		expect(result).not.toContain("ui.*");
	});
});
