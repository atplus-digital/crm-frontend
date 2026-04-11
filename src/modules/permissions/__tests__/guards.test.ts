import {
	afterEach,
	beforeAll,
	beforeEach,
	describe,
	expect,
	it,
	vi,
} from "vitest";

const { mockRedirect } = vi.hoisted(() => ({
	mockRedirect: vi.fn((options: { to: string }) => {
		throw new Error(`Redirect to ${options.to}`);
	}),
}));

const { mockPermissionsStoreState } = vi.hoisted(() => ({
	mockPermissionsStoreState: {
		effectiveActions: [] as string[],
		effectiveSnippets: [] as string[],
	},
}));

vi.mock("@tanstack/react-router", () => ({
	redirect: mockRedirect,
}));

vi.mock("#/modules/permissions/store", () => ({
	permissionsStore: {
		get state() {
			return mockPermissionsStoreState;
		},
	},
}));

import { requireAction, requireSnippet } from "#/modules/permissions/guards";

beforeAll(() => {
	vi.stubGlobal("window", {});
});

describe("requireSnippet", () => {
	beforeEach(() => {
		mockPermissionsStoreState.effectiveSnippets = [];
		mockRedirect.mockClear();
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	it("returns without throwing when window is undefined (SSR)", () => {
		vi.stubGlobal("window", undefined);
		expect(() => requireSnippet("pm")).not.toThrow();
		vi.stubGlobal("window", {});
	});

	it("returns without throwing when snippet is granted (exact match)", () => {
		mockPermissionsStoreState.effectiveSnippets = ["app", "pm"];
		expect(() => requireSnippet("pm")).not.toThrow();
		expect(mockRedirect).not.toHaveBeenCalled();
	});

	it("throws redirect to /forbidden when snippet is not granted", () => {
		mockPermissionsStoreState.effectiveSnippets = ["app"];
		expect(() => requireSnippet("pm")).toThrow("Redirect to /forbidden");
		expect(mockRedirect).toHaveBeenCalledWith({ to: "/forbidden" });
	});

	it("throws redirect when effectiveSnippets is empty", () => {
		mockPermissionsStoreState.effectiveSnippets = [];
		expect(() => requireSnippet("pm")).toThrow("Redirect to /forbidden");
	});

	it("matches wildcard prefix (ui matches ui.menu)", () => {
		mockPermissionsStoreState.effectiveSnippets = ["ui.menu", "ui.settings"];
		expect(() => requireSnippet("ui")).not.toThrow();
	});

	it("throws redirect for denial string starting with !", () => {
		mockPermissionsStoreState.effectiveSnippets = ["app"];
		expect(() => requireSnippet("!app")).toThrow("Redirect to /forbidden");
	});
});

describe("requireAction", () => {
	beforeEach(() => {
		mockPermissionsStoreState.effectiveActions = [];
		mockRedirect.mockClear();
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	it("returns without throwing when window is undefined (SSR)", () => {
		vi.stubGlobal("window", undefined);
		expect(() => requireAction("create")).not.toThrow();
		vi.stubGlobal("window", {});
	});

	it("returns without throwing when action is granted (exact match)", () => {
		mockPermissionsStoreState.effectiveActions = ["create", "view"];
		expect(() => requireAction("create")).not.toThrow();
		expect(mockRedirect).not.toHaveBeenCalled();
	});

	it("throws redirect to /forbidden when action is not granted", () => {
		mockPermissionsStoreState.effectiveActions = ["create", "view"];
		expect(() => requireAction("destroy")).toThrow("Redirect to /forbidden");
		expect(mockRedirect).toHaveBeenCalledWith({ to: "/forbidden" });
	});

	it("throws redirect when effectiveActions is empty", () => {
		mockPermissionsStoreState.effectiveActions = [];
		expect(() => requireAction("create")).toThrow("Redirect to /forbidden");
	});

	it("returns without throwing for :own action when base action exists", () => {
		mockPermissionsStoreState.effectiveActions = ["update"];
		expect(() => requireAction("update:own")).not.toThrow();
	});

	it("throws redirect for base action when only :own variant exists", () => {
		mockPermissionsStoreState.effectiveActions = ["update:own"];
		expect(() => requireAction("update")).toThrow("Redirect to /forbidden");
	});

	it("throws redirect for action not in effectiveActions even with :own suffix", () => {
		mockPermissionsStoreState.effectiveActions = ["view"];
		expect(() => requireAction("update:own")).toThrow("Redirect to /forbidden");
	});
});
