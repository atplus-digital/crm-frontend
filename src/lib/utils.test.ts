import { cn } from "./utils";
import { describe, expect, it } from "vitest";

describe("cn", () => {
	it("deve mesclar classes com deduplicação do tailwind-merge", () => {
		expect(cn("px-2", false && "hidden", "px-4", "text-sm")).toBe(
			"px-4 text-sm",
		);
	});
});
