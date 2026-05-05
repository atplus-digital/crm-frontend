import type { RouteObject } from "react-router";
import { TestesRoute, testesLoader } from "./index";

export const testesRoutes = [
	{
		path: "testes",
		loader: testesLoader,
		Component: TestesRoute,
	},
] satisfies RouteObject[];
