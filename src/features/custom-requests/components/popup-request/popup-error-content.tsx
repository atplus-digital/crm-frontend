import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { Badge } from "#/components/ui/badge";
import { buildErrorVisualizationData } from "./popup-request.utils";

interface PopupErrorContentProps {
	error: unknown;
}

export function PopupErrorContent({ error }: PopupErrorContentProps) {
	const errorData = buildErrorVisualizationData(error);
	const validationIssues = errorData.validationIssues ?? [];
	const hasValidationIssues = validationIssues.length > 0;

	return (
		<InlineErrorAlert className="space-y-3">
			<div className="space-y-1">
				<p className="font-medium">Falha ao executar a requisição</p>
				<p>{errorData.message}</p>
			</div>

			{(errorData.code || errorData.status) && (
				<div className="flex flex-wrap gap-2">
					{errorData.code ? (
						<Badge variant="destructive">Erro: {errorData.code}</Badge>
					) : null}
					{typeof errorData.status === "number" ? (
						<Badge variant="outline">HTTP {errorData.status}</Badge>
					) : null}
				</div>
			)}

			{hasValidationIssues ? (
				<div className="space-y-2">
					<p className="text-xs font-semibold tracking-wide uppercase">
						Campos com erro
					</p>
					<div className="max-h-52 space-y-2 overflow-auto">
						{validationIssues.map((issue) => (
							<div
								key={`${issue.path}-${issue.code}-${issue.message}`}
								className="rounded-md border border-destructive/35 bg-destructive/5 p-2"
							>
								<div className="mb-1 flex items-center gap-2">
									<Badge variant="outline" className="font-mono text-xs">
										{issue.path}
									</Badge>
									<span className="text-xs opacity-80">{issue.code}</span>
								</div>
								<p className="text-xs leading-relaxed">{issue.message}</p>
							</div>
						))}
					</div>
				</div>
			) : null}

			{errorData.details ? (
				<details className="rounded-md border border-destructive/30 bg-destructive/5 p-2">
					<summary className="cursor-pointer text-xs font-medium">
						Ver detalhes técnicos
					</summary>
					<pre className="mt-2 max-h-48 overflow-auto text-xs whitespace-pre-wrap break-word">
						{errorData.details}
					</pre>
				</details>
			) : null}
		</InlineErrorAlert>
	);
}
