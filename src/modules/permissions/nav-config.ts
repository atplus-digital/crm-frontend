/**
 * Declarative navigation configuration with permission-based filtering.
 *
 * NAV_CONFIG is the source of truth for sidebar/main nav items.
 * filterNavByPermissions() prunes items the current user can't access.
 */

/**
 * A single navigation item in the app shell.
 * Children are rendered as nested sub-items.
 */
export interface NavItem {
	label: string;
	/** Icon name (e.g. "home", "settings"). Optional. */
	icon?: string;
	/** TanStack Router `to` path. */
	to: string;
	/** Snippet required to see this item. If omitted, item is always visible. */
	requiresSnippet?: string;
	/** Action required to see this item. If omitted, item is always visible. */
	requiresAction?: string;
	/** Nested nav items. Rendered as sub-menu or children. */
	children?: NavItem[];
}

/**
 * Navigation configuration — EMPTY for now.
 * Populate when building the sidebar/layout component.
 */
export const NAV_CONFIG: NavItem[] = [];

/**
 * Recursively filter nav items by the user's granted snippets and actions.
 * Items without `requiresSnippet` or `requiresAction` are always included.
 * Denial strings (`!X`) in the user's grants are already stripped by mergeSnippets.
 *
 * @param items - Nav items to filter.
 * @param actions - Effective actions granted to the current user.
 * @param snippets - Effective snippets granted to the current user.
 * @returns A filtered nav tree containing only accessible items.
 */
export function filterNavByPermissions(
	items: NavItem[],
	actions: string[],
	snippets: string[],
): NavItem[] {
	return items
		.filter((item) => {
			// No permission requirement → always visible
			if (!item.requiresSnippet && !item.requiresAction) return true;

			// Check snippet requirement
			if (item.requiresSnippet) {
				// Denial prefix means user explicitly lacks this
				if (item.requiresSnippet.startsWith("!")) return false;

				// Wildcard: "ui" matches "ui.menu"
				if (snippets.includes(item.requiresSnippet)) return true;
				const withDot = `${item.requiresSnippet}.`;
				if (snippets.some((s) => s.startsWith(withDot))) return true;

				// Snippet not granted → hide
				return false;
			}

			// Check action requirement
			if (item.requiresAction) {
				// Denial prefix
				if (item.requiresAction.startsWith("!")) return false;

				// Wildcard: "update" matches "update:own"
				if (actions.includes(item.requiresAction)) return true;
				const withColon = `${item.requiresAction}:`;
				if (actions.some((a) => a.startsWith(withColon))) return true;

				return false;
			}

			return true;
		})
		.map((item) => ({
			...item,
			// Recursively filter children
			...(item.children
				? { children: filterNavByPermissions(item.children, actions, snippets) }
				: {}),
		}));
}
