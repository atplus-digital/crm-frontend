import { FileText, Handshake, LayoutDashboard, Users } from "lucide-react";
import type { ReactNode } from "react";
import type { AppRoutePath } from "#/routes/route-paths";
import { routePaths } from "#/routes/route-paths";

const CS_SECTION_PREFIX =
	routePaths.cs_pessoas.match(/^\/[^/]+/)?.[0] ?? routePaths.cs_dashboard;

/**
 * A single navigation item in the app shell.
 * Children are rendered as nested sub-items.
 */
export interface NavItem {
	label: string;
	/** Optional JSX icon rendered by the app shell. */
	icon?: ReactNode;
	/** TanStack Router `to` path. */
	to: AppRoutePath;
	/** Whether a submenu should start expanded when rendered. */
	defaultOpen?: boolean;
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
	to: AppRoutePath;
	/** Additional path prefixes used to mark the section as active. */
	matches?: string[];
	items: NavItem[];
}

export const APP_NAV_SECTIONS: NavSection[] = [
	{
		label: "Customer Success",
		icon: <Users className="size-4" />,
		to: routePaths.cs_dashboard,
		matches: [CS_SECTION_PREFIX],
		items: [
			{
				label: "Dashboard",
				icon: <LayoutDashboard />,
				to: routePaths.cs_dashboard,
			},
			{
				label: "Clientes",
				icon: <Users />,
				to: routePaths.cs_contratos,
				defaultOpen: true,
				children: [
					{
						label: "Contratos",
						icon: <FileText />,
						to: routePaths.cs_contratos,
					},
					{
						label: "Pessoas",
						icon: <Users />,
						to: routePaths.cs_pessoas,
					},
					{
						label: "Vendas",
						icon: <Users />,
						to: routePaths.cs_vendas,
					},
				],
			},

			{
				label: "Operações",
				icon: <Handshake />,
				to: routePaths.cs_negociacoes,
				defaultOpen: true,
				children: [
					{
						label: "Negociações",
						icon: <Handshake />,
						to: routePaths.cs_negociacoes,
					},

					{
						label: "Troca de Titularidade",
						icon: <FileText />,
						to: routePaths.cs_troca_de_titularidade,
					},
					{
						label: "Troca de Endereço",
						icon: <FileText />,
						to: routePaths.cs_troca_de_endereco,
					},
					{
						label: "Suspensão de Contrato",
						icon: <FileText />,
						to: routePaths.cs_suspensao_de_contrato,
					},
				],
			},
		],
	},
];

export function isNavPathActive(pathname: string, to: string): boolean {
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
