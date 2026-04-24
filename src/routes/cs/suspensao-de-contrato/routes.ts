import type { RouteObject } from "react-router";
import { routePaths, toRouterPath } from "#/routes/route-paths";

export const suspensaoDeContratoRoutes = [
	{
		path: toRouterPath(routePaths.cs_suspensao_de_contrato),
		lazy: () => import("./index"),
	},
	{
		path: toRouterPath(routePaths.cs_suspensao_de_contrato_id),
		lazy: () => import("./$id"),
	},
] satisfies RouteObject[];
