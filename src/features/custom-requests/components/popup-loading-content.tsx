import { Loader2Icon } from "lucide-react";

export function PopupLoadingContent() {
	return (
		<div className="flex items-center justify-center py-8">
			<Loader2Icon className="h-8 w-8 animate-spin text-muted-foreground" />
		</div>
	);
}
