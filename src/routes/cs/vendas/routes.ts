import type { RouteObject } from "react-router";
import { routePaths, toRouterPath } from "#/routes/route-paths";

export const vendasRoutes = [
	{
		path: toRouterPath(routePaths.cs_vendas),
		lazy: () => import("./index"),
		children: [
			{
				index: true,
				lazy: () => import("./lista"),
			},
			{
				path: ":id",
				lazy: () => import("./$id"),
				children: [
					{
						index: true,
						lazy: () => import("./$id/detalhes"),
					},
					{
						path: "itens/*",
						lazy: () => import("./$id/itens"),
					},
					{
						path: "anexos/*",
						lazy: () => import("./$id/anexos"),
					},
					{
						path: "comentarios/*",
						lazy: () => import("./$id/comentarios"),
					},
					{
						path: "*",
						index: true,
					},
				],
			},
		],
	},
] satisfies RouteObject[];
