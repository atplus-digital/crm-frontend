import { describe, expect, it } from "vitest";
import { mergeSnippets } from "./compute";
import { hasGrantedAction, hasGrantedSnippet } from "./matchers";

describe("permissions matching", () => {
	it("accepts wildcard snippet grants for nested snippets", () => {
		expect(hasGrantedSnippet(["ui.*"], "ui.reports")).toBe(true);
	});

	it("keeps backward-compatible base snippet matching for nested grants", () => {
		expect(hasGrantedSnippet(["ui.reports"], "ui")).toBe(true);
	});

	it("accepts action qualifiers when base action is requested", () => {
		expect(hasGrantedAction(["update:own"], "update")).toBe(true);
	});

	it("accepts own-qualified action when base action is granted", () => {
		expect(hasGrantedAction(["update"], "update:own")).toBe(true);
	});
});

describe("permissions merge", () => {
	it("removes nested snippets when wildcard deny exists", () => {
		expect(mergeSnippets([["pm.menu", "!pm.*"]])).toEqual([]);
	});
});
