import type { RouteObject } from "react-router";
import { routePaths, toRouterPath } from "../route-paths";

export const errorRoutes = [
	{
		path: toRouterPath(routePaths.forbidden),
		lazy: () => import("./forbidden/index"),
	},
	{
		path: "*",
		lazy: () => import("./not-found/index"),
	},
] satisfies RouteObject[];
