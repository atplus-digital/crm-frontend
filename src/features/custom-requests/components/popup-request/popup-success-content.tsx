import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "#/components/ui/button";
import { DialogClose } from "#/components/ui/dialog";
import { cn } from "#/lib/utils";
import { getSuccessDisplayMessage, safeStringify } from "./popup-request.utils";

interface PopupSuccessContentProps {
	data: unknown;
	identifier?: string;
}

export function PopupSuccessContent({
	data,
	identifier,
}: PopupSuccessContentProps) {
	const [isExpanded, setIsExpanded] = useState(false);

	const displayMessage = getSuccessDisplayMessage(data);

	return (
		<div className="space-y-2 grid">
			<p className="text-sm mb-6 bg-muted p-2 rounded-lg text-foreground font-medium">
				{displayMessage}
			</p>
			<div className="flex items-center justify-between">
				<Button
					variant="ghost"
					size="sm"
					className="justify-start text-muted-foreground hover:text-foreground"
					onClick={() => setIsExpanded((prev) => !prev)}
				>
					{isExpanded ? (
						<ChevronUpIcon className="mr-2 h-4 w-4" />
					) : (
						<ChevronDownIcon className="mr-2 h-4 w-4" />
					)}
					{isExpanded ? "Ocultar" : "Ver detalhes"}
				</Button>
				<DialogClose asChild>
					<Button type="button">Fechar</Button>
				</DialogClose>
			</div>
			<div
				className={cn(
					"overflow-hidden transition-all duration-200",
					isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
				)}
			>
				<span className="text-sm font-medium text-muted-foreground">
					{identifier}
				</span>
				<pre className="rounded-lg bg-muted p-3 text-xs overflow-auto max-h-64">
					{safeStringify(data)}
				</pre>
			</div>
		</div>
	);
}
