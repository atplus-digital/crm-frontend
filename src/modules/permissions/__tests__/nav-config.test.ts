import { describe, expect, it } from "vitest";

import type { NavItem } from "#/modules/permissions/nav-config";
import { filterNavByPermissions } from "#/modules/permissions/nav-config";

describe("filterNavByPermissions", () => {
	it("returns all items when no permission requirements", () => {
		const items: NavItem[] = [
			{ label: "Home", to: "/" },
			{ label: "About", to: "/about" },
		];
		const result = filterNavByPermissions(items, [], []);
		expect(result).toHaveLength(2);
	});

	it("filters out items requiring snippet user does not have", () => {
		const items: NavItem[] = [
			{ label: "App", to: "/app", requiresSnippet: "app" },
			{ label: "PM", to: "/pm", requiresSnippet: "pm" },
		];
		const result = filterNavByPermissions(items, [], ["app"]);
		expect(result).toHaveLength(1);
		expect(result[0].label).toBe("App");
	});

	it("includes items with snippet wildcard match (ui matches ui.menu)", () => {
		const items: NavItem[] = [
			{ label: "UI", to: "/ui", requiresSnippet: "ui" },
		];
		const result = filterNavByPermissions(items, [], ["ui.menu"]);
		expect(result).toHaveLength(1);
	});

	it("filters out items requiring action user does not have", () => {
		const items: NavItem[] = [
			{ label: "Create", to: "/create", requiresAction: "create" },
			{ label: "View", to: "/view", requiresAction: "view" },
		];
		const result = filterNavByPermissions(items, ["view"], []);
		expect(result).toHaveLength(1);
		expect(result[0].label).toBe("View");
	});

	it("includes items with action wildcard match (update matches update:own)", () => {
		const items: NavItem[] = [
			{ label: "Edit", to: "/edit", requiresAction: "update" },
		];
		const result = filterNavByPermissions(items, ["update:own"], []);
		expect(result).toHaveLength(1);
	});

	it("filters out items with denial snippet prefix (!X)", () => {
		const items: NavItem[] = [
			{ label: "Denied", to: "/denied", requiresSnippet: "!app" },
		];
		const result = filterNavByPermissions(items, ["app"], ["app"]);
		expect(result).toHaveLength(0);
	});

	it("filters out items with denial action prefix (!X)", () => {
		const items: NavItem[] = [
			{ label: "Denied", to: "/denied", requiresAction: "!update" },
		];
		const result = filterNavByPermissions(items, ["update"], []);
		expect(result).toHaveLength(0);
	});

	it("recursively filters nested children", () => {
		const items: NavItem[] = [
			{
				label: "Parent",
				to: "/parent",
				children: [
					{ label: "Child 1", to: "/child1", requiresSnippet: "app" },
					{ label: "Child 2", to: "/child2", requiresSnippet: "pm" },
					{ label: "Child 3", to: "/child3" },
				],
			},
		];
		const result = filterNavByPermissions(items, [], ["app"]);
		expect(result).toHaveLength(1);
		expect(result[0].children).toHaveLength(2);
		expect(result[0].children?.map((c) => c.label)).toEqual([
			"Child 1",
			"Child 3",
		]);
	});

	it("keeps parent even if all children are filtered out", () => {
		const items: NavItem[] = [
			{
				label: "Parent",
				to: "/parent",
				children: [
					{ label: "Child", to: "/child", requiresSnippet: "missing" },
				],
			},
		];
		const result = filterNavByPermissions(items, [], []);
		expect(result).toHaveLength(1);
		expect(result[0].children).toHaveLength(0);
	});

	it("returns empty array for empty input", () => {
		expect(filterNavByPermissions([], [], [])).toEqual([]);
	});

	it("includes item when snippet matches (action requirement not checked when snippet passes)", () => {
		const items: NavItem[] = [
			{
				label: "Restricted",
				to: "/restricted",
				requiresSnippet: "app",
				requiresAction: "create",
			},
		];
		const result = filterNavByPermissions(items, [], ["app"]);
		expect(result).toHaveLength(1);
	});

	it("includes item when both snippet and action are satisfied", () => {
		const items: NavItem[] = [
			{
				label: "Restricted",
				to: "/restricted",
				requiresSnippet: "app",
				requiresAction: "create",
			},
		];
		const result = filterNavByPermissions(items, ["create"], ["app"]);
		expect(result).toHaveLength(1);
	});

	it("preserves icon and other properties on filtered items", () => {
		const items: NavItem[] = [
			{ label: "Home", to: "/", icon: "home", requiresSnippet: "app" },
		];
		const result = filterNavByPermissions(items, [], ["app"]);
		expect(result[0].icon).toBe("home");
	});
});
