import { createBrowserRouter } from "react-router";
import { App } from "../app";
import { authStore, validateTokenOnInit } from "../modules/auth";

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
				index: true,
				lazy: () => import("./index"),
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
		],
	},
]);
