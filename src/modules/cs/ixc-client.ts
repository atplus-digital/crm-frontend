import type { ApiRequestConfig } from "#/modules/repositories";
import { ixcRepository } from "#/modules/repositories";

export async function ixcRequest<T>(config: ApiRequestConfig): Promise<T> {
	return ixcRepository.request<T>(config);
}
