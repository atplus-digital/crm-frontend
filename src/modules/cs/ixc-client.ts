import { nocobaseClient } from "#/modules/auth/client";

const IXC_DATASOURCE_HEADER = { "X-Data-Source": "d_db_ixcsoft" } as const;

export async function ixcRequest<T>(config: {
	url: string;
	method?: string;
	params?: Record<string, unknown>;
}): Promise<T> {
	const response = await nocobaseClient.request({
		...config,
		headers: IXC_DATASOURCE_HEADER,
	});
	return response.data;
}
