import { createBrowserRouter, Outlet, redirect } from "react-router";
import { App } from "#/app";
import { authStore, validateTokenOnInit } from "#/features/auth";
import { DashboardLayout } from "#/layout/dashboard-layout";
import { routePaths, toRouterPath } from "#/routes/route-paths";
import { authRoutes } from "./auth/routes";
import { csRoutes } from "./cs/routes";
import NotFoundPage from "./error/not-found";

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
				children: [
					{
						index: true,
						loader: () => redirect("/cs"),
					},
					...csRoutes,
					{
						path: toRouterPath(routePaths.profile),
						lazy: () => import("./profile/index"),
					},
				],
			},
			...authRoutes,
			{
				path: toRouterPath(routePaths.forbidden),
				lazy: () => import("./error/forbidden/index"),
			},
			{
				path: "*",
				element: <NotFoundPage />,
			},
		],
	},
]);
