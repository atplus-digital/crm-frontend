import { parseAsString, useQueryState } from "nuqs";

/**
 * Synchronize the active tab with the URL search parameter `?tab=`.
 *
 * @param defaultTab - Fallback tab value when the URL parameter is absent
 * @returns Tuple of [activeTab, setActiveTab]
 *
 * @example
 * const [tab, setTab] = usePageTab("pf");
 */
export function usePageTab(defaultTab: string) {
	const [tab, setTab] = useQueryState(
		"tab",
		parseAsString.withDefault(defaultTab),
	);

	return [tab ?? defaultTab, setTab] as const;
}
