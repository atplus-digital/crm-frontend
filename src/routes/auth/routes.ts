import type { RouteObject } from "react-router";
import { routePaths, toRouterPath } from "#/routes/route-paths";

export const authRoutes = [
	{
		path: toRouterPath(routePaths.login),
		lazy: () => import("./login/index"),
	},
	{
		path: toRouterPath(routePaths.reset_password),
		lazy: () => import("./reset-password/index"),
	},
	{
		path: toRouterPath(routePaths.reset_password_confirm),
		lazy: () => import("./reset-password-confirm/index"),
	},
] satisfies RouteObject[];
