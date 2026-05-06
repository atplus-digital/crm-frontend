import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

const THEME_VALUES = ["dark", "light", "system"] as const;

function isValidTheme(value: string | null): value is Theme {
	return value !== null && (THEME_VALUES as readonly string[]).includes(value);
}

type ThemeProviderProps = {
	children: React.ReactNode;
	defaultTheme?: Theme;
	storageKey?: string;
};

type ThemeProviderState = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
	toggleTheme: () => void;
};

const initialState: ThemeProviderState = {
	theme: "system",
	setTheme: () => null,
	toggleTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
	children,
	defaultTheme = "system",
	storageKey = "vite-ui-theme",
	...props
}: ThemeProviderProps) {
	const [theme, setTheme] = useState<Theme>(() => {
		const storedTheme = localStorage.getItem(storageKey);
		return isValidTheme(storedTheme) ? storedTheme : defaultTheme;
	});

	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.remove("light", "dark");

		if (theme === "system") {
			const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
				.matches
				? "dark"
				: "light";

			root.classList.add(systemTheme);
			return;
		}

		root.classList.add(theme);
	}, [theme]);

	useEffect(() => {
		const onStorage = (e: StorageEvent) => {
			if (
				e.key === storageKey &&
				e.newValue !== null &&
				isValidTheme(e.newValue)
			) {
				setTheme(e.newValue);
			}
		};
		window.addEventListener("storage", onStorage);
		return () => window.removeEventListener("storage", onStorage);
	}, [storageKey]);

	const handleSetTheme = (theme: Theme) => {
		localStorage.setItem(storageKey, theme);
		setTheme(theme);
	};
	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		handleSetTheme(newTheme);
	};

	const value = {
		theme,
		setTheme: handleSetTheme,
		toggleTheme,
	};

	return (
		<ThemeProviderContext.Provider {...props} value={value}>
			{children}
		</ThemeProviderContext.Provider>
	);
}

export const useTheme = () => {
	const context = useContext(ThemeProviderContext);

	if (context === undefined)
		throw new Error("useTheme must be used within a ThemeProvider");

	return context;
};
