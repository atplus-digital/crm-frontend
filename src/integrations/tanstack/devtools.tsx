import { TanStackDevtools } from "@tanstack/react-devtools";

import TanStackQueryDevtool from "./query/devtool";
import TanStackRouterDevtool from "./router/devtool";

function TanstackDevTools() {
	return (
		<TanStackDevtools
			config={{
				position: "bottom-right",
			}}
			plugins={[TanStackRouterDevtool, TanStackQueryDevtool]}
		/>
	);
}

export { TanstackDevTools };
