import { JSDOM } from "jsdom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

describe("theme", () => {
	beforeEach(() => {
		vi.resetModules();
		vi.stubEnv("CRM_NOCOBASE_URL", "https://example.com/api");
		vi.stubEnv("VITE_LOCAL_STORAGE_BASE_KEY", "crm-atplus");
	});

	afterEach(() => {
		vi.restoreAllMocks();
		vi.unstubAllEnvs();
		vi.unstubAllGlobals();
	});

	it("deve retornar light como fallback sem window", async () => {
		const { getSystemTheme } = await import("@/lib/theme");

		expect(getSystemTheme()).toBe("light");
	});

	it("deve ler o tema do sistema e o tema armazenado", async () => {
		const dom = new JSDOM("<!doctype html><html><body></body></html>", {
			url: "https://example.com",
		});

		vi.stubGlobal(
			"window",
			dom.window as unknown as Window & typeof globalThis,
		);
		vi.stubGlobal("document", dom.window.document);
		Object.defineProperty(dom.window, "matchMedia", {
			value: vi.fn().mockReturnValue({ matches: true }),
			configurable: true,
		});

		const { getStoredTheme, getSystemTheme, THEME_STORAGE_KEY } = await import(
			"@/lib/theme"
		);

		expect(getSystemTheme()).toBe("dark");
		dom.window.localStorage.setItem(THEME_STORAGE_KEY, "dark");
		expect(getStoredTheme()).toBe("dark");
		dom.window.localStorage.setItem(THEME_STORAGE_KEY, "invalid");
		expect(getStoredTheme()).toBe("dark");
	});

	it("deve aplicar e alternar o tema no documento", async () => {
		const dom = new JSDOM("<!doctype html><html><body></body></html>", {
			url: "https://example.com",
		});

		vi.stubGlobal(
			"window",
			dom.window as unknown as Window & typeof globalThis,
		);
		vi.stubGlobal("document", dom.window.document);
		Object.defineProperty(dom.window, "matchMedia", {
			value: vi.fn().mockReturnValue({ matches: false }),
			configurable: true,
		});

		const { applyThemeMode, toggleTheme, THEME_STORAGE_KEY } = await import(
			"@/lib/theme"
		);

		applyThemeMode("dark");
		expect(dom.window.document.documentElement.classList.contains("dark")).toBe(
			true,
		);
		expect(dom.window.document.documentElement.getAttribute("data-theme")).toBe(
			"dark",
		);
		expect(dom.window.document.documentElement.style.colorScheme).toBe("dark");

		expect(toggleTheme("dark")).toBe("light");
		expect(dom.window.localStorage.getItem(THEME_STORAGE_KEY)).toBe("light");
	});
});
