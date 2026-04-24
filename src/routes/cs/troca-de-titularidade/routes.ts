import type { RouteObject } from "react-router";
import { routePaths, toRouterPath } from "#/routes/route-paths";

export const trocaDeTitularidadeRoutes = [
	{
		path: toRouterPath(routePaths.cs_troca_de_titularidade),
		lazy: () => import("./index"),
	},
	{
		path: toRouterPath(routePaths.cs_troca_de_titularidade_id),
		lazy: () => import("./$id"),
	},
] satisfies RouteObject[];
