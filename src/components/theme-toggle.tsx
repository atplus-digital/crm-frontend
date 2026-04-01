import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "#/components/ui/button";
import { getStoredTheme, type ThemeMode, toggleTheme } from "#/lib/theme";

export function ThemeToggle() {
	const [mode, setMode] = useState<ThemeMode>("light");
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMode(getStoredTheme());
		setMounted(true);
	}, []);

	function handleToggle() {
		setMode(toggleTheme(mode));
	}

	return (
		<Button
			type="button"
			size="icon-lg"
			onClick={handleToggle}
			aria-label={`Theme: ${mode}. Click to switch.`}
			title={`Theme: ${mode}. Click to switch.`}
		>
			{mounted ? mode === "dark" ? <Moon /> : <Sun /> : <Sun />}
		</Button>
	);
}
