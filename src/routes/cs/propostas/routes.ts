import type { RouteObject } from "react-router";
import { routePaths, toRouterPath } from "#/routes/route-paths";

export const propostasRoutes = [
	{
		path: toRouterPath(routePaths.cs_propostas),
		lazy: () => import("./index"),
		children: [
			{
				index: true,
				lazy: () => import("./lista"),
			},
		],
	},
] satisfies RouteObject[];
