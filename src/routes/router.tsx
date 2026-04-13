import { createBrowserRouter, Outlet } from "react-router";
import { App } from "#/app";
import { DashboardLayout } from "#/components/layout/dashboard-layout";
import { NotFoundPage } from "#/components/not-found-page";
import { authStore, validateTokenOnInit } from "#/modules/auth";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
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
						lazy: () => import("./dashboard"),
					},
				],
			},
			{
				path: "login",
				lazy: () => import("./login"),
			},
			{
				path: "forbidden",
				lazy: () => import("./forbidden"),
			},
			{
				path: "reset-password",
				lazy: () => import("./reset-password"),
			},
			{
				path: "reset-password-confirm",
				lazy: () => import("./reset-password-confirm"),
			},
			{
				path: "*",
				element: <NotFoundPage />,
			},
		],
	},
]);
