interface DetailItemProps {
	label: string;
	value: string | React.ReactNode;
	icon: React.ReactNode;
}

export function DetailItem({ label, value, icon }: DetailItemProps) {
	return (
		<div className="flex flex-col gap-1">
			<span className="text-xs font-medium text-muted-foreground uppercase">
				{label}
			</span>
			<div className="flex items-center gap-2">
				{icon}
				<span className="text-sm">{value}</span>
			</div>
		</div>
	);
}
