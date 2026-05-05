import type { RouteObject } from "react-router";
import { routePaths, toRouterPath } from "../route-paths";

export const configRoutes = [
	{
		path: toRouterPath(routePaths.profile),
		lazy: () => import("./profile/index"),
	},
] satisfies RouteObject[];
