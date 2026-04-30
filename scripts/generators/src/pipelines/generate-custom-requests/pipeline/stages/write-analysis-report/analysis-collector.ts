import type { CustomRequestApiEntry } from "../../../@types/custom-request-api";

interface AnalyzedRequestSummaryItem {
	key: string;
	name?: string;
	collectionName?: string;
	method?: string;
	url?: string;
	dataSourceKey?: string;
}

export interface CustomRequestsAnalysisReport {
	totalAnalyzed: number;
	withoutOptions: AnalyzedRequestSummaryItem[];
	withoutDataSourceKey: AnalyzedRequestSummaryItem[];
}

export function collectAnalysisReport(
	entries: CustomRequestApiEntry[],
): CustomRequestsAnalysisReport {
	const withoutOptions: AnalyzedRequestSummaryItem[] = [];
	const withoutDataSourceKey: AnalyzedRequestSummaryItem[] = [];

	for (const entry of entries) {
		if (!entry.options) {
			withoutOptions.push({
				key: entry.key,
				name: entry.name,
			});
			continue;
		}

		if (!entry.options.dataSourceKey) {
			withoutDataSourceKey.push({
				key: entry.key,
				name: entry.name,
				collectionName: entry.options.collectionName,
				method: entry.options.method,
				url: entry.options.url,
			});
		}
	}

	withoutOptions.sort((a, b) => a.key.localeCompare(b.key));
	withoutDataSourceKey.sort((a, b) => a.key.localeCompare(b.key));

	return {
		totalAnalyzed: entries.length,
		withoutOptions,
		withoutDataSourceKey,
	};
}
