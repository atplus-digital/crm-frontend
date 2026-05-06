import { CheckCircle2Icon, Loader2Icon, XCircleIcon } from "lucide-react";
import type { MinimumLoadingState } from "#/hooks/use-minimum-loading";
import { cn } from "#/lib/utils";

// ── State → icon mapping ───────────────────────────────────────────────

const STATE_ICONS: Record<string, typeof Loader2Icon> = {
	loading: Loader2Icon,
	success: CheckCircle2Icon,
	error: XCircleIcon,
};

// ── State → Tailwind classes ───────────────────────────────────────────

const STATE_CLASSES: Record<MinimumLoadingState, string> = {
	idle: "",
	loading: "pointer-events-none",
	success: "pointer-events-none text-emerald-500 dark:text-emerald-600",
	error:
		"pointer-events-none border-destructive/50 text-destructive dark:text-destructive",
};

// ── Helpers ────────────────────────────────────────────────────────────

/** Returns the icon component for the given state, or `undefined` for idle. */
export function getStateIcon(state: MinimumLoadingState) {
	return STATE_ICONS[state];
}

/** Returns extra Tailwind classes for the given state. */
export function getStateClasses(state: MinimumLoadingState) {
	return STATE_CLASSES[state];
}

/** Renders the state icon with the correct animation, or null for idle. */
export function renderStateIcon(state: MinimumLoadingState) {
	const Icon = STATE_ICONS[state];
	if (!Icon) return null;

	return (
		<Icon
			className={cn("size-5 shrink-0", state === "loading" && "animate-spin")}
			aria-hidden="true"
		/>
	);
}
