import { Skeleton } from "#/components/ui/skeleton";
import {
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	Table as TablePrimitive,
	TableRow,
} from "#/components/ui/table";

interface DataTableSkeletonProps {
	rowCount?: number;
}

export function DataTableSkeleton({ rowCount = 10 }: DataTableSkeletonProps) {
	return (
		<div className="w-full relative overflow-x-auto rounded-lg border">
			<TablePrimitive>
				<TableHeader>
					<TableRow>
						<TableHead>
							<Skeleton className="h-7 w-full" />
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{Array.from({ length: rowCount }).map((_, rowIndex) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: static skeleton, never reorders
						<TableRow key={`skeleton-row-${rowIndex}`}>
							<TableCell>
								<Skeleton className="h-8 w-full" />
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</TablePrimitive>
		</div>
	);
}
