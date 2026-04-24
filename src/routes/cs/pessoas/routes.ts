import type { RouteObject } from "react-router";
import { routePaths, toRouterPath } from "#/routes/route-paths";

export const pessoasRoutes = [
	{
		path: toRouterPath(routePaths.cs_pessoas),
		lazy: () => import("./index"),
		children: [
			{
				index: true,
				lazy: () => import("./pf"),
			},
			{
				path: "pj/*",
				lazy: () => import("./pj"),
			},
		],
	},
] satisfies RouteObject[];
