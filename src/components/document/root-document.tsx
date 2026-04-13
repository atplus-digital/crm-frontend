import { HeadContent, Scripts } from "@tanstack/react-router";
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
				{import.meta.env.DEV && <TanstackDevTools />}
				<ThemeScript />
				<Scripts />
			</body>
		</html>
	);
}

export { RootDocument };
