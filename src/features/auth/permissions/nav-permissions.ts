/**
 * Declarative navigation configuration with permission-based filtering.
 *
 * APP_NAV_SECTIONS is the source of truth for top-level and sidebar nav items.
 * filterNavByPermissions() prunes items the current user can't access.
 */

import type { NavItem, NavSection } from "#/components/layout/nav-config";
import { hasGrantedAction, hasGrantedSnippet } from "./matchers";

type PermissionBoundNavEntry = {
	requiresSnippet?: string;
	requiresAction?: string;
};

type NavSecPermission = PermissionBoundNavEntry & NavSection;

function canAccessNavEntry(
	item: PermissionBoundNavEntry,
	actions: string[],
	snippets: string[],
): boolean {
	// No permission requirement → always visible
	if (!item.requiresSnippet && !item.requiresAction) return true;

	// Check snippet requirement
	if (item.requiresSnippet) {
		return hasGrantedSnippet(snippets, item.requiresSnippet);
	}

	// Check action requirement
	if (item.requiresAction) {
		return hasGrantedAction(actions, item.requiresAction);
	}

	return true;
}

export function filterNavSectionsByPermissions(
	sections: NavSecPermission[],
	actions: string[],
	snippets: string[],
): NavSecPermission[] {
	return sections.flatMap((section) => {
		if (!canAccessNavEntry(section, actions, snippets)) {
			return [];
		}

		const items = filterNavByPermissions(section.items, actions, snippets);
		if (items.length === 0) {
			return [];
		}

		return [{ ...section, items }];
	});
}

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
		.filter((item) => canAccessNavEntry(item, actions, snippets))
		.map((item) => ({
			...item,
			// Recursively filter children
			...(item.children
				? { children: filterNavByPermissions(item.children, actions, snippets) }
				: {}),
		}));
}
