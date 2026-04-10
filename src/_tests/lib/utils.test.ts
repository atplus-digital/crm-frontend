import { describe, expect, it } from "vitest";

import { cn, formatDateInPortuguese, getInitials } from "#/lib/utils";

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

describe("formatDateInPortuguese", () => {
	it("formats January 1, 2024 (Monday) correctly", () => {
		const date = new Date("2024-01-01T12:00:00");
		expect(formatDateInPortuguese(date)).toBe(
			"Segunda-feira, 1 de janeiro de 2024",
		);
	});

	it("formats a date in the middle of the year", () => {
		const date = new Date("2024-06-15T12:00:00");
		expect(formatDateInPortuguese(date)).toBe("Sábado, 15 de junho de 2024");
	});

	it("formats a Sunday", () => {
		const date = new Date("2024-02-04T12:00:00");
		expect(formatDateInPortuguese(date)).toBe(
			"Domingo, 4 de fevereiro de 2024",
		);
	});

	it("formats a Saturday", () => {
		const date = new Date("2024-01-06T12:00:00");
		expect(formatDateInPortuguese(date)).toBe("Sábado, 6 de janeiro de 2024");
	});

	it("formats December", () => {
		const date = new Date("2024-12-25T12:00:00");
		expect(formatDateInPortuguese(date)).toBe(
			"Quarta-feira, 25 de dezembro de 2024",
		);
	});
});

describe("getInitials", () => {
	it("returns uppercase first character of name", () => {
		expect(getInitials("john")).toBe("J");
	});

	it("handles already uppercase name", () => {
		expect(getInitials("John")).toBe("J");
	});

	it("handles lowercase name", () => {
		expect(getInitials("alice")).toBe("A");
	});

	it("handles single character name", () => {
		expect(getInitials("A")).toBe("A");
	});

	it("handles name with leading whitespace (uppercases whitespace)", () => {
		expect(getInitials(" john")).toBe(" ");
	});
});
