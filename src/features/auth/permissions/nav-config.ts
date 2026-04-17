/**
 * Declarative navigation configuration with permission-based filtering.
 *
 * APP_NAV_SECTIONS is the source of truth for top-level and sidebar nav items.
 * filterNavByPermissions() prunes items the current user can't access.
 */

import { hasGrantedAction, hasGrantedSnippet } from "./matchers";

type PermissionBoundNavEntry = {
	requiresSnippet?: string;
	requiresAction?: string;
};

export type NavIconName = "fileText" | "handshake" | "home" | "user" | "users";

/**
 * A single navigation item in the app shell.
 * Children are rendered as nested sub-items.
 */
export interface NavItem {
	label: string;
	/** Icon name rendered by the app shell. Optional. */
	icon?: NavIconName;
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
 * A top-level app section rendered in the header.
 * Each section owns the sidebar items rendered while it is active.
 */
export interface NavSection extends PermissionBoundNavEntry {
	label: string;
	to: string;
	/** Additional path prefixes used to mark the section as active. */
	matches?: string[];
	items: NavItem[];
}

export const APP_NAV_SECTIONS: NavSection[] = [
	{
		label: "Geral",
		to: "/",
		matches: ["/", "/profile"],
		items: [
			{
				label: "Dashboard",
				icon: "home",
				to: "/",
			},
			{
				label: "Perfil",
				icon: "user",
				to: "/profile",
			},
		],
	},
	{
		label: "Customer Success",
		to: "/cs/pessoas",
		matches: ["/cs"],
		items: [
			{
				label: "Pessoas",
				icon: "users",
				to: "/cs/pessoas",
			},
			{
				label: "Negociações",
				icon: "handshake",
				to: "/cs/negociacoes",
			},
			{
				label: "Contratos",
				icon: "fileText",
				to: "/cs/contratos",
			},
		],
	},
];

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

export function isNavPathActive(pathname: string, to: string): boolean {
	if (to === "/") return pathname === "/";
	return pathname === to || pathname.startsWith(`${to}/`);
}

export function filterNavSectionsByPermissions(
	sections: NavSection[],
	actions: string[],
	snippets: string[],
): NavSection[] {
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

export function getActiveNavSection(
	sections: NavSection[],
	pathname: string,
): NavSection | undefined {
	return (
		sections.find((section) => {
			const matchers = section.matches?.length ? section.matches : [section.to];
			return matchers.some((matcher) => isNavPathActive(pathname, matcher));
		}) ?? sections[0]
	);
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
