import { ScriptOnce } from "@tanstack/react-router";
import { THEME_STORAGE_KEY, THEMES } from "#/lib/theme";

const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = window.localStorage.getItem("${THEME_STORAGE_KEY}");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var mode = ${JSON.stringify(THEMES)}.indexOf(stored) >= 0 ? stored : (prefersDark ? "dark" : "light");

    var root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(mode);
    root.setAttribute("data-theme", mode);
    root.style.colorScheme = mode;
  } catch (err) {
    if (import.meta.env.DEV) {
      console.warn("[theme] initialization failed:", err instanceof Error ? err.message : String(err));
    }
  }
})();
`.trim();

function ThemeScript() {
	return <ScriptOnce>{THEME_INIT_SCRIPT}</ScriptOnce>;
}

export { ThemeScript };
