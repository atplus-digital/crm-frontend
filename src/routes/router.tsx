import { createBrowserRouter, Outlet } from "react-router";
import { App } from "#/app";
import { authStore, validateTokenOnInit } from "#/features/auth";
import { DashboardLayout } from "#/layout/dashboard-layout";
import { NotFoundPage } from "#/pages/not-found/not-found";
import { routePaths, toRouterPath } from "#/routes/route-paths";

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
						lazy: () => import("./dashboard/index"),
					},
					{
						path: toRouterPath(routePaths.profile),
						lazy: () => import("./dashboard/profile/index"),
					},
					{
						path: toRouterPath(routePaths.cs_pessoas),
						lazy: () => import("./cs/pessoas/index"),
					},
					{
						path: toRouterPath(routePaths.cs_negociacoes),
						lazy: () => import("./cs/negociacoes/index"),
					},
					{
						path: toRouterPath(routePaths.cs_negociacoes_id),
						lazy: () => import("./cs/negociacoes/$id"),
					},
					{
						path: toRouterPath(routePaths.cs_contratos),
						lazy: () => import("./cs/contratos/index"),
					},
					{
						path: toRouterPath(routePaths.cs_contratos_id),
						lazy: () => import("./cs/contratos/$id"),
					},
					{
						path: toRouterPath(routePaths.cs_troca_de_titularidade),
						lazy: () => import("./cs/troca-de-titularidade/index"),
					},
					{
						path: toRouterPath(routePaths.cs_troca_de_titularidade_id),
						lazy: () => import("./cs/troca-de-titularidade/$id"),
					},
					{
						path: toRouterPath(routePaths.cs_troca_de_endereco),
						lazy: () => import("./cs/troca-de-endereco/index"),
					},
					{
						path: toRouterPath(routePaths.cs_troca_de_endereco_id),
						lazy: () => import("./cs/troca-de-endereco/$id"),
					},
					{
						path: toRouterPath(routePaths.cs_suspensao_de_contrato),
						lazy: () => import("./cs/suspensao-de-contrato/index"),
					},
					{
						path: toRouterPath(routePaths.cs_suspensao_de_contrato_id),
						lazy: () => import("./cs/suspensao-de-contrato/$id"),
					},
					{
						path: toRouterPath(routePaths.cs_vendas),
						lazy: () => import("./cs/vendas/index"),
					},
					{
						path: toRouterPath(routePaths.cs_vendas_id),
						lazy: () => import("./cs/vendas/$id"),
					},
				],
			},
			{
				path: toRouterPath(routePaths.login),
				lazy: () => import("./auth/login/index"),
			},
			{
				path: toRouterPath(routePaths.forbidden),
				lazy: () => import("./forbidden/index"),
			},
			{
				path: toRouterPath(routePaths.reset_password),
				lazy: () => import("./auth/reset-password/index"),
			},
			{
				path: toRouterPath(routePaths.reset_password_confirm),
				lazy: () => import("./auth/reset-password-confirm/index"),
			},
			{
				path: "*",
				element: <NotFoundPage />,
			},
		],
	},
]);
