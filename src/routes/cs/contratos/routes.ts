import type { RouteObject } from "react-router";
import { routePaths, toRouterPath } from "#/routes/route-paths";

export const contratosRoutes = [
	{
		path: toRouterPath(routePaths.cs_contratos),
		lazy: () => import("./index"),
	},
	{
		path: toRouterPath(routePaths.cs_contratos_id),
		lazy: () => import("./$id"),
		children: [
			{
				index: true,
				lazy: () => import("./$id/detalhes"),
			},
			{
				path: "movel/*",
				lazy: () => import("./$id/movel"),
			},
			{
				path: "negociacoes/*",
				lazy: () => import("./$id/negociacoes"),
			},
			{
				path: "atendimentos/*",
				lazy: () => import("./$id/atendimentos"),
			},
			{
				path: "registros/*",
				lazy: () => import("./$id/registros"),
			},
			{
				path: "*",
				index: true,
			},
		],
	},
] satisfies RouteObject[];
