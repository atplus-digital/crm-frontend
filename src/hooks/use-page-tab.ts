import { useCallback, useMemo } from "react";
import { useLocation, useNavigate } from "react-router";

/**
 * Synchronize the active tab with the route path segment.
 *
 * First tab uses the base route (`/path`), remaining tabs use
 * `/path/<tab-value>`.
 *
 * For wildcard routes (`/path/*`), only the first splat segment is used to
 * resolve the active tab, which supports deeper paths like `/path/tab/deeper`.
 *
 * @param defaultTab - Fallback tab value when the path segment is absent/invalid
 * @param allowedTabs - Available tab values used for validation
 * @returns Tuple of [activeTab, setActiveTab]
 *
 * @example
 * const [tab, setTab] = usePageTab("kanban", ["kanban", "lista"]);
 */
export function usePageTab(defaultTab: string, allowedTabs: readonly string[]) {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const pathSegments = useMemo(
		() => pathname.split("/").filter(Boolean),
		[pathname],
	);

	const activeTabIndex = useMemo(
		() => pathSegments.findIndex((segment) => allowedTabs.includes(segment)),
		[allowedTabs, pathSegments],
	);

	const activeTab = useMemo(() => {
		if (activeTabIndex >= 0) {
			return pathSegments[activeTabIndex];
		}

		return defaultTab;
	}, [activeTabIndex, defaultTab, pathSegments]);

	const pathnameBase = useMemo(() => {
		if (activeTabIndex < 0) {
			return pathname;
		}

		const baseSegments = pathSegments.slice(0, activeTabIndex);
		if (baseSegments.length === 0) {
			return "/";
		}

		return `/${baseSegments.join("/")}`;
	}, [activeTabIndex, pathSegments, pathname]);

	const normalizedBasePath = pathnameBase === "/" ? "" : pathnameBase;

	const setActiveTab = useCallback(
		(nextTab: string) => {
			const targetTab = allowedTabs.includes(nextTab) ? nextTab : defaultTab;
			const targetPath =
				targetTab === defaultTab
					? normalizedBasePath || "/"
					: `${normalizedBasePath}/${targetTab}`;

			navigate(targetPath, { replace: true, preventScrollReset: true });
		},
		[allowedTabs, defaultTab, navigate, normalizedBasePath],
	);

	return [activeTab, setActiveTab] as const;
}
