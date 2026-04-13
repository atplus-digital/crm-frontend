import React from "react";
import { Button } from "./ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";

interface Props {
	children: React.ReactNode;
}

interface State {
	hasError: boolean;
	error?: Error;
}

class RouteErrorBoundary extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error): State {
		return { hasError: true, error };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
		console.error("Route error caught by boundary:", error, errorInfo);
	}

	render(): React.ReactNode {
		if (this.state.hasError) {
			return (
				<div className="flex min-h-screen flex-col items-center justify-center bg-background p-6">
					<Card className="w-full max-w-md">
						<CardHeader>
							<CardTitle className="text-destructive">Erro na página</CardTitle>
							<CardDescription>
								Ocorreu um problema ao carregar esta página. Tente recarregar ou
								volte mais tarde.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							{import.meta.env.DEV && this.state.error && (
								<div className="rounded bg-red-50 p-4 text-sm text-red-800">
									<pre className="whitespace-pre-wrap break-words">
										{this.state.error.stack}
									</pre>
								</div>
							)}
							<div className="flex gap-2">
								<Button variant="outline" onClick={() => window.history.back()}>
									Voltar
								</Button>
								<Button onClick={() => window.location.reload()}>
									Recarregar
								</Button>
							</div>
						</CardContent>
					</Card>
				</div>
			);
		}

		return this.props.children;
	}
}

export { RouteErrorBoundary };
