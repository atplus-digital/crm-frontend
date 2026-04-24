import type { RouteObject } from "react-router";
import { routePaths, toRouterPath } from "#/routes/route-paths";

export const kanbanDashboardRoutes = [
	{
		path: toRouterPath(routePaths.cs_dashboard),
		lazy: () => import("./index"),
	},
] satisfies RouteObject[];
