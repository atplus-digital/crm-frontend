import { cn } from "#/lib/utils";

interface DetailFieldProps {
	label: string;
	children: React.ReactNode;
	gap?: "1" | "2";
}

export function DetailField({ label, children, gap = "1" }: DetailFieldProps) {
	return (
		<div className={cn("flex flex-col", gap === "2" ? "gap-2" : "gap-1")}>
			<span className="text-sm font-medium text-muted-foreground">{label}</span>
			<span className="text-sm">{children}</span>
		</div>
	);
}
