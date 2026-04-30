import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { Button } from "#/components/ui/button";

interface BackButtonProps {
	/** Fallback route when there's no navigation history (e.g. user opened the page directly). */
	fallbackTo: string;
}

/**
 * Back button that uses browser history when available, falling back to a
 * static route when the user landed on the page directly (no history entry).
 *
 * Detection: `window.navigation?.entries()?.length` (Navigation API) or
 * `performance.navigation.type` / `performance.getEntriesByType` as fallback.
 * When neither is available, we optimistically use `history.back()`.
 */
export function BackButton({ fallbackTo }: BackButtonProps) {
	const canGoBack = checkCanGoBack();

	if (canGoBack) {
		return (
			<Button
				variant="ghost"
				size="icon"
				onClick={() => window.history.back()}
				type="button"
			>
				<ArrowLeft className="size-4" />
			</Button>
		);
	}

	return (
		<Button variant="ghost" size="icon" asChild>
			<Link to={fallbackTo}>
				<ArrowLeft className="size-4" />
			</Link>
		</Button>
	);
}

/**
 * Determines whether there is a previous page in the session history that we
 * can navigate back to.
 *
 * Strategy:
 * 1. Navigation API (`window.navigation`) — check if there is a previous entry.
 * 2. Performance entries — if the only navigation entry is the current page's
 *    "navigate" event, the user likely landed here directly.
 * 3. Fall back to `true` so we optimistically use `history.back()`, which is
 *    harmless (it just won't navigate if there's nowhere to go).
 */
function checkCanGoBack(): boolean {
	// Navigation API (Chrome 102+, Edge 102+) — most reliable
	if ("navigation" in window && window.navigation) {
		const entries = window.navigation.entries();
		const currentIndex = window.navigation.currentEntry?.index ?? 0;
		return currentIndex > 0 && entries.length > 1;
	}

	// Performance-based heuristic: if the page was reached via "navigate" type
	// (i.e. typing URL or bookmark), there's likely no back history from within
	// our SPA. If there's a "reload" or "back_forward" entry, there is.
	const navEntries = performance.getEntriesByType("navigation");
	if (navEntries.length > 0) {
		const entry = navEntries[0] as PerformanceNavigationTiming;
		// type is exposed via the newer PerformanceNavigationTiming API
		if (entry.name === window.location.href && entry.type === "navigate") {
			return false;
		}
	}

	// Default to true — history.back() is safe even if there's nowhere to go
	return true;
}
