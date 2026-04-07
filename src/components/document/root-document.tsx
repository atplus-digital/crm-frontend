import { HeadContent, Scripts } from "@tanstack/react-router";
import { TanstackDevTools } from "#/integrations/tanstack/devtools";
import { ThemeScript } from "./theme-script";

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-BR" suppressHydrationWarning>
			<head>
				<HeadContent />
			</head>
			<body className="font-sans antialiased wrap-anywhere">
				{children}
				<TanstackDevTools />
				<ThemeScript />
				<Scripts />
			</body>
		</html>
	);
}

export { RootDocument };
