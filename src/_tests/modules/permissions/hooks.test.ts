import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const { mockUseStore } = vi.hoisted(() => {
	let selector: ((state: Record<string, unknown>) => unknown) | null = null;
	return {
		mockUseStore: vi.fn(
			(_store: unknown, sel: (state: Record<string, unknown>) => unknown) => {
				selector = sel;
				const state: Record<string, unknown> = {
					effectiveActions: [],
					effectiveSnippets: [],
					roleNames: [],
					allowConfigure: false,
				};
				return sel(state);
			},
		),
		getSelector: () => selector,
	};
});

vi.mock("@tanstack/react-store", () => ({
	useStore: mockUseStore,
}));

vi.mock("#/modules/permissions/store", () => ({
	permissionsStore: {},
}));

import {
	useCan,
	useCanEdit,
	useHasSnippet,
	useIsAdmin,
	useRoleNames,
} from "#/modules/permissions/hooks";

function setupStoreState(overrides: Record<string, unknown> = {}): void {
	const defaultState: Record<string, unknown> = {
		effectiveActions: [],
		effectiveSnippets: [],
		roleNames: [],
		allowConfigure: false,
	};
	mockUseStore.mockImplementation(
		(_store: unknown, sel: (state: Record<string, unknown>) => unknown) =>
			sel({ ...defaultState, ...overrides }),
	);
}

describe("useCan", () => {
	beforeEach(() => {
		setupStoreState();
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	it("returns true when action is in effectiveActions (exact match)", () => {
		setupStoreState({ effectiveActions: ["create", "view", "update"] });
		expect(useCan("create")).toBe(true);
	});

	it("returns false when action is not in effectiveActions", () => {
		setupStoreState({ effectiveActions: ["create", "view"] });
		expect(useCan("destroy")).toBe(false);
	});

	it("returns true for :own action when base action exists", () => {
		setupStoreState({ effectiveActions: ["update"] });
		expect(useCan("update:own")).toBe(true);
	});

	it("returns false when effectiveActions is empty", () => {
		setupStoreState({ effectiveActions: [] });
		expect(useCan("create")).toBe(false);
	});

	it("handles wildcard * action", () => {
		setupStoreState({ effectiveActions: ["*"] });
		expect(useCan("anything")).toBe(false);
		expect(useCan("*")).toBe(true);
	});
});

describe("useHasSnippet", () => {
	beforeEach(() => {
		setupStoreState();
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	it("returns true for exact snippet match", () => {
		setupStoreState({ effectiveSnippets: ["app", "pm", "ui"] });
		expect(useHasSnippet("app")).toBe(true);
	});

	it("returns false for missing snippet", () => {
		setupStoreState({ effectiveSnippets: ["app", "pm"] });
		expect(useHasSnippet("ui")).toBe(false);
	});

	it("returns true for wildcard prefix match (ui matches ui.menu)", () => {
		setupStoreState({ effectiveSnippets: ["ui.menu", "ui.settings"] });
		expect(useHasSnippet("ui")).toBe(true);
	});

	it("returns false when no wildcard match exists", () => {
		setupStoreState({ effectiveSnippets: ["app.menu", "app.settings"] });
		expect(useHasSnippet("ui")).toBe(false);
	});

	it("returns false for denial strings (starting with !)", () => {
		setupStoreState({ effectiveSnippets: ["app"] });
		expect(useHasSnippet("!app")).toBe(false);
	});

	it("returns false when effectiveSnippets is empty", () => {
		setupStoreState({ effectiveSnippets: [] });
		expect(useHasSnippet("app")).toBe(false);
	});

	it("does not match partial prefix (app matches app.menu but not application)", () => {
		setupStoreState({ effectiveSnippets: ["application"] });
		expect(useHasSnippet("app")).toBe(false);
	});
});

describe("useCanEdit", () => {
	beforeEach(() => {
		setupStoreState();
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	it("returns true when 'update' action is granted", () => {
		setupStoreState({ effectiveActions: ["update", "view"] });
		expect(useCanEdit()).toBe(true);
	});

	it("returns false when 'update' action is not granted", () => {
		setupStoreState({ effectiveActions: ["view", "create"] });
		expect(useCanEdit()).toBe(false);
	});

	it("checks specific action when provided", () => {
		setupStoreState({ effectiveActions: ["delete"] });
		expect(useCanEdit("delete")).toBe(true);
		expect(useCanEdit("update")).toBe(false);
	});

	it("returns false when only :own variant is granted and default checks 'update'", () => {
		setupStoreState({ effectiveActions: ["update:own"] });
		expect(useCanEdit()).toBe(false);
	});
});

describe("useRoleNames", () => {
	beforeEach(() => {
		setupStoreState();
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	it("returns role names from store", () => {
		setupStoreState({ roleNames: ["admin", "editor"] });
		expect(useRoleNames()).toEqual(["admin", "editor"]);
	});

	it("returns empty array when no roles", () => {
		setupStoreState({ roleNames: [] });
		expect(useRoleNames()).toEqual([]);
	});
});

describe("useIsAdmin", () => {
	beforeEach(() => {
		setupStoreState();
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	it("returns true when allowConfigure is true", () => {
		setupStoreState({ allowConfigure: true });
		expect(useIsAdmin()).toBe(true);
	});

	it("returns false when allowConfigure is false", () => {
		setupStoreState({ allowConfigure: false });
		expect(useIsAdmin()).toBe(false);
	});
});
