import { GenericTableSkeleton } from "./generic-table-skeleton";

/**
 * @deprecated Use GenericTableSkeleton instead
 * This wrapper is kept for backward compatibility
 */
export function MovelTableSkeleton() {
	return <GenericTableSkeleton columns={1} rows={4} />;
}
