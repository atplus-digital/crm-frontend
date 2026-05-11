import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NuqsAdapter } from "nuqs/adapters/react-router/v7";
import { Suspense } from "react";
import { Outlet } from "react-router";

import { ErrorBoundary } from "./components/error-boundary";
import { getQueryContext } from "./components/providers/query-provider";
import { ThemeProvider } from "./components/providers/theme-provider";
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
						<Suspense
							fallback={
								<div className="flex h-screen items-center justify-center">
									<p className="text-muted-foreground">Carregando...</p>
								</div>
							}
						>
							<Outlet />
						</Suspense>
					</NuqsAdapter>
					<Toaster />
					{isDev && <ReactQueryDevtools initialIsOpen={false} />}
				</ErrorBoundary>
			</QueryClientProvider>
		</ThemeProvider>
	);
}
