import {
	toDataSourceOutputFolder,
	toSafePathSegment,
} from "@scripts/generators/src/lib/path-utils";

export { toSafePathSegment };

export function toDataSourceDir(dataSourceKey: string): string {
	return toDataSourceOutputFolder(dataSourceKey);
}
