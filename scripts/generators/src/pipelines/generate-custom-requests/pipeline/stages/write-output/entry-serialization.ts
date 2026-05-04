import {
	escapeString,
	serializePayloadData,
} from "@scripts/generators/src/lib/strings";
import type { GeneratedRegistryEntry } from "../../../@types/generated-registry";

export interface SerializedEntryFields {
	escapedCollection: string;
	escapedDataSourceKey: string;
	escapedKey: string;
	escapedMethod: string;
	escapedName: string;
	escapedUrl: string;
	payloadDataStr: string;
}

export function serializeEntryFields(
	entry: GeneratedRegistryEntry,
	displayName = entry.name,
): SerializedEntryFields {
	return {
		escapedCollection: escapeString(entry.collection),
		escapedDataSourceKey: escapeString(entry.dataSourceKey),
		escapedKey: escapeString(entry.key),
		escapedMethod: escapeString(entry.method),
		escapedName: escapeString(displayName),
		escapedUrl: escapeString(entry.url),
		payloadDataStr: serializePayloadData(entry.payloadData),
	};
}
