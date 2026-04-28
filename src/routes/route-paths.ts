const ROUTE_PARAM_REGEX = /:([A-Za-z0-9_]+)/g;

export const routePaths = {
	home: "/",
	profile: "/profile",
	cs_dashboard: "/cs",
	cs_pessoas: "/cs/pessoas",
	cs_pessoas_pj: "/cs/pessoas/pj",
	cs_negociacoes: "/cs/negociacoes",
	cs_negociacoes_lista: "/cs/negociacoes/lista",
	cs_negociacoes_id: "/cs/negociacoes/:id",
	cs_negociacoes_id_tab: "/cs/negociacoes/:id/:tab/*",
	cs_contratos: "/cs/contratos",
	cs_contratos_id: "/cs/contratos/:id",
	cs_contratos_id_tab: "/cs/contratos/:id/:tab/*",
	cs_troca_de_titularidade: "/cs/troca-de-titularidade",
	cs_troca_de_titularidade_id: "/cs/troca-de-titularidade/:id",
	cs_troca_de_endereco: "/cs/troca-de-endereco",
	cs_troca_de_endereco_id: "/cs/troca-de-endereco/:id",
	cs_suspensao_de_contrato: "/cs/suspensao-de-contrato",
	cs_suspensao_de_contrato_id: "/cs/suspensao-de-contrato/:id",
	cs_vendas: "/cs/vendas",
	cs_vendas_id: "/cs/vendas/:id",
	cs_vendas_lista: "/cs/vendas/lista",
	cs_vendas_id_tab: "/cs/vendas/:id/:tab/*",
	cs_propostas: "/cs/propostas",
	login: "/login",
	forbidden: "/forbidden",
	reset_password: "/reset-password",
	reset_password_confirm: "/reset-password-confirm",
} as const satisfies Record<string, string>;

export type AppRouteKey = keyof typeof routePaths;
export type AppRoutePath = (typeof routePaths)[AppRouteKey];

type ExtractRouteParamKeys<Path extends string> =
	Path extends `${string}:${infer Param}/${infer Rest}`
		? Param | ExtractRouteParamKeys<`/${Rest}`>
		: Path extends `${string}:${infer Param}`
			? Param
			: never;

export type RouteParams<K extends AppRouteKey> = {
	[P in ExtractRouteParamKeys<(typeof routePaths)[K]>]: string | number;
};

export function buildRoute<K extends AppRouteKey>(
	route: K,
	...[params]: keyof RouteParams<K> extends never
		? []
		: [params: RouteParams<K>]
): string {
	const template = routePaths[route];

	if (!params) {
		return template;
	}

	return template.replace(ROUTE_PARAM_REGEX, (_, rawParamName: string) => {
		const paramName = rawParamName as keyof RouteParams<K>;
		const value = params[paramName];

		if (value === undefined || value === null) {
			throw new Error(
				`Missing route param "${rawParamName}" for route "${String(route)}"`,
			);
		}

		return encodeURIComponent(String(value));
	});
}

export function toRouterPath(path: AppRoutePath): string {
	return path === "/" ? "" : path.replace(/^\//, "");
}
