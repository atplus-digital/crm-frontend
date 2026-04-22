import { House, Users } from "lucide-react";
import type { ReactNode } from "react";

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
export interface NavSection {
	label: string;
	/** Optional JSX icon rendered next to the section label. */
	icon?: ReactNode;
	to: string;
	/** Additional path prefixes used to mark the section as active. */
	matches?: string[];
	items: NavItem[];
}

export const APP_NAV_SECTIONS: NavSection[] = [
	{
		label: "Home",
		icon: <House className="size-4" />,
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
		icon: <Users className="size-4" />,
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
			{
				label: "Troca de Titularidade",
				icon: "fileText",
				to: "/cs/troca-de-titularidade",
			},
		],
	},
];

export function isNavPathActive(pathname: string, to: string): boolean {
	if (to === "/") return pathname === "/";
	return pathname === to || pathname.startsWith(`${to}/`);
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
