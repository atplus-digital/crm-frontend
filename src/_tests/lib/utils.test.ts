import { describe, expect, it } from "vitest";

import { cn } from "#/lib/utils";

describe("cn", () => {
	it("merges class names", () => {
		expect(cn("foo", "bar")).toBe("foo bar");
	});

	it("handles conditional classes", () => {
		expect(cn("foo", false && "bar", "baz")).toBe("foo baz");
	});

	it("merges tailwind conflicts", () => {
		expect(cn("px-2", "px-4")).toBe("px-4");
	});

	it("handles undefined/null", () => {
		expect(cn("foo", undefined, null, "bar")).toBe("foo bar");
	});

	it("handles arrays", () => {
		expect(cn(["foo", "bar"])).toBe("foo bar");
	});

	it("handles objects", () => {
		expect(cn({ foo: true, bar: false })).toBe("foo");
	});

	it("returns empty string for no inputs", () => {
		expect(cn()).toBe("");
	});

	it("handles mixed inputs", () => {
		expect(cn("foo", { bar: true }, ["baz"])).toBe("foo bar baz");
	});
});
