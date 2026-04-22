export interface SingleFileResult {
	resultType: "single";
	outputPath: string;
	changed: boolean;
	skipped?: boolean;
}

export interface MultiFileResult {
	resultType: "multi";
	files: Array<{
		outputPath: string;
		changed: boolean;
		skipped?: boolean;
	}>;
	totalFiles: number;
	totalChanged: number;
	totalSkipped?: number;
}

export type GenerateTypesResult = SingleFileResult | MultiFileResult;

export interface DataSourceFilesResult {
	writeFiles: Array<{
		outputPath: string;
		changed: boolean;
		skipped?: boolean;
	}>;
}
