import { createBrowserRouter, Outlet } from "react-router";
import { App } from "#/app";
import { authStore, validateTokenOnInit } from "#/features/auth";
import { DashboardLayout } from "#/layout/dashboard-layout";
import { NotFoundPage } from "#/pages/not-found/not-found";

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
						lazy: () => import("./dashboard/index"),
					},
					{
						path: "profile",
						lazy: () => import("./dashboard/profile/index"),
					},
					{
						path: "cs/pessoas",
						lazy: () => import("./cs/pessoas/index"),
					},
					{
						path: "cs/negociacoes",
						lazy: () => import("./cs/negociacoes/index"),
					},
					{
						path: "cs/negociacoes/:id",
						lazy: () => import("./cs/negociacoes/$id"),
					},
					{
						path: "cs/contratos",
						lazy: () => import("./cs/contratos/index"),
					},
					{
						path: "cs/contratos/:id",
						lazy: () => import("./cs/contratos/$id"),
					},
					{
						path: "cs/troca-de-titularidade",
						lazy: () => import("./cs/troca-de-titularidade/index"),
					},
					{
						path: "cs/troca-de-titularidade/:id",
						lazy: () => import("./cs/troca-de-titularidade/$id"),
					},
				],
			},
			{
				path: "login",
				lazy: () => import("./auth/login/index"),
			},
			{
				path: "forbidden",
				lazy: () => import("./forbidden/index"),
			},
			{
				path: "reset-password",
				lazy: () => import("./auth/reset-password/index"),
			},
			{
				path: "reset-password-confirm",
				lazy: () => import("./auth/reset-password-confirm/index"),
			},
			{
				path: "*",
				element: <NotFoundPage />,
			},
		],
	},
]);
