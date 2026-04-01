import { env } from "#/env";

export type ThemeMode = "light" | "dark";

export const THEME_STORAGE_KEY = `${env.VITE_LOCAL_STORAGE_BASE_KEY}-theme`;

export const THEMES: ThemeMode[] = ["light", "dark"];

export function getSystemTheme(): ThemeMode {
	if (typeof window === "undefined") {
		return "light";
	}

	const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	return prefersDark ? "dark" : "light";
}

export function getStoredTheme(): ThemeMode {
	if (typeof window === "undefined") {
		return getSystemTheme();
	}

	const stored = window.localStorage.getItem(THEME_STORAGE_KEY);

	if (THEMES.includes(stored as ThemeMode)) {
		return stored as ThemeMode;
	}

	return getSystemTheme();
}

export function applyThemeMode(mode: ThemeMode) {
	document.documentElement.classList.remove("light", "dark");
	document.documentElement.classList.add(mode);
	document.documentElement.setAttribute("data-theme", mode);
	document.documentElement.style.colorScheme = mode;
}

export function toggleTheme(current: ThemeMode): ThemeMode {
	const next = current === "light" ? "dark" : "light";
	applyThemeMode(next);
	window.localStorage.setItem(THEME_STORAGE_KEY, next);
	return next;
}
