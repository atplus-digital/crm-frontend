import type { RouteObject } from "react-router";
import { routePaths, toRouterPath } from "#/routes/route-paths";

export const dashboardRoutes = [
	{
		index: true,
		lazy: () => import("./index"),
	},
	{
		path: toRouterPath(routePaths.profile),
		lazy: () => import("./profile/index"),
	},
] satisfies RouteObject[];
