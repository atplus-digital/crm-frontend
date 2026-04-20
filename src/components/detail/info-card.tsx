interface InfoCardProps {
	title: string;
	value: string | React.ReactNode;
}

export function InfoCard({ title, value }: InfoCardProps) {
	return (
		<div className="bg-card rounded-lg border p-4">
			<h3 className="text-sm font-medium text-muted-foreground mb-1">
				{title}
			</h3>
			<p className="font-heading text-2xl font-semibold">{value}</p>
		</div>
	);
}
