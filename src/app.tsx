import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NuqsAdapter } from "nuqs/adapters/react-router/v7";
import { Outlet } from "react-router";

import { ErrorBoundary } from "./components/error-boundary";
import { getQueryContext } from "./components/query-provider";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "./components/ui/sonner";
import { env, isDev } from "./env";

const { queryClient } = getQueryContext();

export function App() {
	return (
		<ThemeProvider
			defaultTheme="dark"
			storageKey={`${env.VITE_LOCAL_STORAGE_BASE_KEY}-ui-theme`}
		>
			<QueryClientProvider client={queryClient}>
				<ErrorBoundary>
					<NuqsAdapter>
						<Outlet />
					</NuqsAdapter>
					<Toaster />
					{isDev && <ReactQueryDevtools initialIsOpen={false} />}
				</ErrorBoundary>
			</QueryClientProvider>
		</ThemeProvider>
	);
}
