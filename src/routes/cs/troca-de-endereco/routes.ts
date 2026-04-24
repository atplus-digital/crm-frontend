import type { RouteObject } from "react-router";
import { routePaths, toRouterPath } from "#/routes/route-paths";

export const trocaDeEnderecoRoutes = [
	{
		path: toRouterPath(routePaths.cs_troca_de_endereco),
		lazy: () => import("./index"),
	},
	{
		path: toRouterPath(routePaths.cs_troca_de_endereco_id),
		lazy: () => import("./$id"),
	},
] satisfies RouteObject[];
