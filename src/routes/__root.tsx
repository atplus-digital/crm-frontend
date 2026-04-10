import type { QueryClient } from "@tanstack/react-query";

import { createRootRouteWithContext } from "@tanstack/react-router";
import { NotFoundPage } from "#/components/document/not-found-page";
import { RootDocument } from "#/components/document/root-document";
import { authStore, validateTokenOnInit } from "#/modules/auth";
import appCss from "#/styles.css?url";

interface AppRouterContext {
	queryClient: QueryClient;
	authStore: typeof authStore;
}

export const Route = createRootRouteWithContext<AppRouterContext>()({
	beforeLoad: async () => {
		if (typeof window === "undefined") return;

		const state = authStore.state;
		if (state.token && !state.user) {
			await validateTokenOnInit();
		}
	},
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "CRM ATPlus",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon-96x96.png",
				sizes: "96x96",
			},
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg",
			},
			{
				rel: "shortcut icon",
				href: "/favicon.ico",
			},
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/apple-touch-icon.png",
			},
			{
				rel: "manifest",
				href: "/site.webmanifest",
			},
		],
	}),
	shellComponent: RootDocument,
	notFoundComponent: NotFoundPage,
});
