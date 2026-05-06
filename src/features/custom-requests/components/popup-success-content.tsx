import { safeStringify } from "./popup-request.utils";

interface PopupSuccessContentProps {
	data: unknown;
}

export function PopupSuccessContent({ data }: PopupSuccessContentProps) {
	return (
		<div className="space-y-2">
			<p className="text-sm text-muted-foreground">Resposta:</p>
			<pre className="max-h-64 overflow-auto rounded-lg bg-muted p-3 text-xs">
				{safeStringify(data)}
			</pre>
		</div>
	);
}
