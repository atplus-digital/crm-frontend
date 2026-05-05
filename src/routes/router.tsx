import { createBrowserRouter, redirect } from "react-router";
import { App } from "#/app";
import { validateTokenOnInit } from "#/features/auth";
import { DashboardLayout } from "#/layout/dashboard-layout";
import { routePaths } from "#/routes/route-paths";
import { authRoutes } from "./auth/routes";
import { configRoutes } from "./config/routes";
import { csRoutes } from "./cs/routes";
import { errorRoutes } from "./error/routes";
import { testesRoutes } from "./testes/routes";

export const router = createBrowserRouter([
	{
		path: routePaths.home,
		element: <App />,
		hydrateFallbackElement: <App />,
		loader: async () => {
			await validateTokenOnInit();
			return null;
		},
		children: [
			{
				element: <DashboardLayout />,
				children: [
					{
						index: true,
						loader: () => redirect(routePaths.cs_dashboard),
					},
					...csRoutes,
					...testesRoutes,
					...configRoutes,
				],
			},
			...authRoutes,
			...errorRoutes,
		],
	},
]);
