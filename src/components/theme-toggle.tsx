import { Moon, Sun } from "lucide-react";
import { Button } from "#/components/ui/button";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
	const { toggleTheme, theme } = useTheme();

	return (
		<Button
			type="button"
			size="icon-lg"
			onClick={toggleTheme}
			aria-label={`Theme: ${theme}. Click to switch.`}
			title={`Theme: ${theme}. Click to switch.`}
		>
			{theme === "dark" ? <Moon /> : <Sun />}
		</Button>
	);
}
