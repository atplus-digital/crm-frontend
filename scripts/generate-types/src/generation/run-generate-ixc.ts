import type { GenerateTypesResult } from "../@types/script";
import { runGenerateTypesForDatasources } from "../generate-types";

const IXC_DATASOURCE_NAME = "d_db_ixcsoft";

export async function runGenerateIxc(): Promise<GenerateTypesResult> {
	return runGenerateTypesForDatasources([IXC_DATASOURCE_NAME]);
}
