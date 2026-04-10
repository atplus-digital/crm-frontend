import {
	afterEach,
	beforeAll,
	beforeEach,
	describe,
	expect,
	it,
	vi,
} from "vitest";

vi.mock("#/env", () => ({
	env: { VITE_LOCAL_STORAGE_BASE_KEY: "crm-atplus" },
}));

import {
	applyThemeMode,
	getStoredTheme,
	getSystemTheme,
	THEME_STORAGE_KEY,
	THEMES,
	toggleTheme,
} from "#/lib/theme";

describe("theme", () => {
	let mockLocalStorage: Map<string, string>;
	let mockMatchMedia: ReturnType<typeof vi.fn>;
	let mockStyle: { colorScheme: string };

	beforeAll(() => {
		vi.stubGlobal("window", {
			undefined,
		});
	});

	beforeEach(() => {
		mockLocalStorage = new Map<string, string>();
		mockMatchMedia = vi.fn().mockReturnValue({ matches: false });
		mockStyle = { colorScheme: "" } as { colorScheme: string };

		vi.stubGlobal("window", {
			localStorage: {
				getItem: (key: string) => mockLocalStorage.get(key) ?? null,
				setItem: (key: string, value: string) =>
					mockLocalStorage.set(key, value),
				removeItem: (key: string) => mockLocalStorage.delete(key),
				clear: () => mockLocalStorage.clear(),
			},
			matchMedia: mockMatchMedia,
		});

		vi.stubGlobal("document", {
			documentElement: {
				classList: {
					remove: vi.fn(),
					add: vi.fn(),
				},
				setAttribute: vi.fn(),
				getAttribute: vi.fn(),
				style: mockStyle,
			},
		});
	});

	afterEach(() => {
		vi.resetAllMocks();
	});

	describe("constants", () => {
		it("THEMES should contain light and dark", () => {
			expect(THEMES).toEqual(["light", "dark"]);
			expect(THEMES).toHaveLength(2);
		});

		it("THEME_STORAGE_KEY should use the env prefix", () => {
			expect(THEME_STORAGE_KEY).toBe("crm-atplus-theme");
		});
	});

	describe("getSystemTheme", () => {
		it("should return light when in browser and prefers light", () => {
			mockMatchMedia.mockReturnValue({ matches: false });
			const theme = getSystemTheme();
			expect(theme).toBe("light");
		});

		it("should return dark when in browser and prefers dark", () => {
			mockMatchMedia.mockReturnValue({ matches: true });
			const theme = getSystemTheme();
			expect(theme).toBe("dark");
		});

		it("should return light in SSR context", () => {
			const originalWindow = globalThis.window;
			vi.stubGlobal("window", undefined);
			const theme = getSystemTheme();
			expect(theme).toBe("light");
			vi.stubGlobal("window", originalWindow);
		});
	});

	describe("getStoredTheme", () => {
		it("should return stored theme when valid", () => {
			mockLocalStorage.set(THEME_STORAGE_KEY, "dark");
			const theme = getStoredTheme();
			expect(theme).toBe("dark");
		});

		it("should return system theme when stored value is invalid", () => {
			mockLocalStorage.set(THEME_STORAGE_KEY, "invalid-theme");
			mockMatchMedia.mockReturnValue({ matches: false });
			const theme = getStoredTheme();
			expect(theme).toBe("light");
		});

		it("should return system theme when nothing is stored", () => {
			mockMatchMedia.mockReturnValue({ matches: true });
			const theme = getStoredTheme();
			expect(theme).toBe("dark");
		});

		it("should return system theme in SSR context", () => {
			const originalWindow = globalThis.window;
			vi.stubGlobal("window", undefined);
			mockMatchMedia.mockReturnValue({ matches: false });
			const theme = getStoredTheme();
			expect(theme).toBe("light");
			vi.stubGlobal("window", originalWindow);
		});
	});

	describe("applyThemeMode", () => {
		it("should set theme classes and data attribute for light", () => {
			applyThemeMode("light");
			expect(document.documentElement.classList.remove).toHaveBeenCalledWith(
				"light",
				"dark",
			);
			expect(document.documentElement.classList.add).toHaveBeenCalledWith(
				"light",
			);
			expect(document.documentElement.setAttribute).toHaveBeenCalledWith(
				"data-theme",
				"light",
			);
			expect(document.documentElement.style).toHaveProperty(
				"colorScheme",
				"light",
			);
		});

		it("should set theme classes and data attribute for dark", () => {
			applyThemeMode("dark");
			expect(document.documentElement.classList.remove).toHaveBeenCalledWith(
				"light",
				"dark",
			);
			expect(document.documentElement.classList.add).toHaveBeenCalledWith(
				"dark",
			);
			expect(document.documentElement.setAttribute).toHaveBeenCalledWith(
				"data-theme",
				"dark",
			);
			expect(document.documentElement.style).toHaveProperty(
				"colorScheme",
				"dark",
			);
		});
	});

	describe("toggleTheme", () => {
		it("should toggle from light to dark", () => {
			const result = toggleTheme("light");
			expect(result).toBe("dark");
			expect(mockLocalStorage.get(THEME_STORAGE_KEY)).toBe("dark");
			expect(document.documentElement.classList.add).toHaveBeenCalledWith(
				"dark",
			);
		});

		it("should toggle from dark to light", () => {
			const result = toggleTheme("dark");
			expect(result).toBe("light");
			expect(mockLocalStorage.get(THEME_STORAGE_KEY)).toBe("light");
			expect(document.documentElement.classList.add).toHaveBeenCalledWith(
				"light",
			);
		});

		it("should store the new theme in localStorage", () => {
			toggleTheme("light");
			expect(mockLocalStorage.get(THEME_STORAGE_KEY)).toBe("dark");

			toggleTheme("dark");
			expect(mockLocalStorage.get(THEME_STORAGE_KEY)).toBe("light");
		});
	});
});
