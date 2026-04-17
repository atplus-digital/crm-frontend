import { createBrowserRouter, Outlet } from "react-router";
import { App } from "#/app";
import { DashboardLayout } from "#/components/layout/dashboard-layout";
import { authStore, validateTokenOnInit } from "#/features/auth";
import { NotFoundPage } from "#/pages/not-found-page";

export const router = createBrowserRouter([
	{
		path: "/",
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
						lazy: () => import("./dashboard"),
					},
					{
						path: "profile",
						lazy: () => import("./profile"),
					},
					{
						path: "cs/pessoas",
						lazy: () => import("./cs/cs"),
					},
					{
						path: "cs/negociacoes",
						lazy: () => import("./cs/cs-negociacoes"),
					},
					{
						path: "cs/negociacoes/:id",
						lazy: () => import("./cs/cs-negociacao-detail"),
					},
					{
						path: "cs/contratos",
						lazy: () => import("./cs/cs-contratos"),
					},
					{
						path: "cs/contratos/:id",
						lazy: () => import("./cs/cs-contrato-detail"),
					},
				],
			},
			{
				path: "login",
				lazy: () => import("./auth/login"),
			},
			{
				path: "forbidden",
				lazy: () => import("./forbidden"),
			},
			{
				path: "reset-password",
				lazy: () => import("./auth/reset-password"),
			},
			{
				path: "reset-password-confirm",
				lazy: () => import("./auth/reset-password-confirm"),
			},
			{
				path: "*",
				element: <NotFoundPage />,
			},
		],
	},
]);
