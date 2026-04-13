import { HeadContent, Scripts } from "@tanstack/react-router";
import { isDev } from "#/env";
import { TanstackDevTools } from "#/integrations/tanstack/devtools";
import { ErrorBoundary } from "../error-boundary";
import { ThemeScript } from "./theme-script";

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-BR" suppressHydrationWarning>
			<head>
				<HeadContent />
			</head>
			<body className="font-sans antialiased wrap-anywhere">
				<ErrorBoundary>{children}</ErrorBoundary>
				{isDev && <TanstackDevTools />}
				<ThemeScript />
				<Scripts />
			</body>
		</html>
	);
}

export { RootDocument };
