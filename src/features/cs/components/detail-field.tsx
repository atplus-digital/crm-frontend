interface DetailFieldProps {
	label: string;
	children: React.ReactNode;
}

export function DetailField({ label, children }: DetailFieldProps) {
	return (
		<div className="flex flex-col gap-1">
			<span className="text-sm font-medium text-muted-foreground">{label}</span>
			<span className="text-sm">{children}</span>
		</div>
	);
}
