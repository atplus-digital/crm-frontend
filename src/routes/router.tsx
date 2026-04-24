import { createBrowserRouter, Outlet } from "react-router";
import { App } from "#/app";
import { authStore, validateTokenOnInit } from "#/features/auth";
import { DashboardLayout } from "#/layout/dashboard-layout";
import { NotFoundPage } from "#/pages/not-found/not-found";
import { routePaths, toRouterPath } from "#/routes/route-paths";
import { authRoutes } from "./auth/routes";
import { csRoutes } from "./cs/routes";
import { dashboardRoutes } from "./dashboard/routes";

export const router = createBrowserRouter([
	{
		path: routePaths.home,
		element: <App />,
		hydrateFallbackElement: <App />,
		loader: async () => {
			const state = authStore.state;
			if (state.token && !state.user) {
				await validateTokenOnInit();
			}
			return null;
		},
		children: [
			{
				element: (
					<DashboardLayout>
						<Outlet />
					</DashboardLayout>
				),
				children: [...dashboardRoutes, ...csRoutes],
			},
			...authRoutes,
			{
				path: toRouterPath(routePaths.forbidden),
				lazy: () => import("./forbidden/index"),
			},
			{
				path: "*",
				element: <NotFoundPage />,
			},
		],
	},
]);
