import React from "react";
import { isDev } from "#/env";

interface Props {
	children: React.ReactNode;
}

interface State {
	hasError: boolean;
	error?: Error;
}

class ErrorBoundary extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error): State {
		return { hasError: true, error };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
		console.error("Error caught by boundary:", error, errorInfo);
	}

	render(): React.ReactNode {
		if (this.state.hasError) {
			return (
				<div className="flex min-h-screen flex-col items-center justify-center bg-background p-6">
					<div className="w-full max-w-md rounded-lg border bg-card p-6 shadow-sm">
						<h2 className="mb-4 text-xl font-bold text-destructive">
							Algo deu errado
						</h2>
						<p className="mb-4 text-muted-foreground">
							Ocorreu um erro inesperado. Por favor, recarregue a página para
							tentar novamente.
						</p>
						{isDev && this.state.error && (
							<div className="mt-4 rounded bg-red-50 p-4 text-sm text-red-800">
								<pre className="whitespace-pre-wrap wrap-break-word">
									{this.state.error.stack}
								</pre>
							</div>
						)}
						<button
							type="button"
							onClick={() => window.location.reload()}
							className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
						>
							Recarregar a página
						</button>
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}

export { ErrorBoundary };
