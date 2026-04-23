const ROUTE_PARAM_REGEX = /:([A-Za-z0-9_]+)/g;

export const routePaths = {
	home: "/",
	profile: "/profile",
	cs_pessoas: "/cs/pessoas",
	cs_negociacoes: "/cs/negociacoes",
	cs_negociacoes_id: "/cs/negociacoes/:id",
	cs_contratos: "/cs/contratos",
	cs_contratos_id: "/cs/contratos/:id",
	cs_troca_de_titularidade: "/cs/troca-de-titularidade",
	cs_troca_de_titularidade_id: "/cs/troca-de-titularidade/:id",
	cs_troca_de_endereco: "/cs/troca-de-endereco",
	cs_troca_de_endereco_id: "/cs/troca-de-endereco/:id",
	cs_suspensao_de_contrato: "/cs/suspensao-de-contrato",
	cs_suspensao_de_contrato_id: "/cs/suspensao-de-contrato/:id",
	cs_vendas: "/cs/vendas",
	cs_vendas_id: "/cs/vendas/:id",
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
