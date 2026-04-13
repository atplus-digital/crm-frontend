import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "react-router";
import { ErrorBoundary } from "./components/error-boundary";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { isDev } from "./env";
import { getQueryContext } from "./integrations/tanstack/query/root-provider";

const { queryClient } = getQueryContext();

export function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<QueryClientProvider client={queryClient}>
				<TooltipProvider>
					<ErrorBoundary>
						<Outlet />
						<Toaster />
						{isDev && <ReactQueryDevtools initialIsOpen={false} />}
					</ErrorBoundary>
				</TooltipProvider>
			</QueryClientProvider>
		</ThemeProvider>
	);
}
