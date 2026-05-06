import type { Users } from "#/generated/types/nocobase/users";
import { getErrorMessage } from "#/lib/api-errors";
import { createLogger } from "#/lib/logger";
import { nocobaseRepository } from "#/repositories";

const log = createLogger("services:cs:vendas");

export async function fetchVendedores(): Promise<Users[]> {
	try {
		const response = await nocobaseRepository.list("users", {
			page: 1,
			pageSize: 200,
			sort: ["nickname"],
		});

		return response.data as unknown as Users[];
	} catch (error) {
		const message = getErrorMessage(error, "Erro desconhecido");
		log.error("Failed to fetch vendedores", { error: message });
		throw error;
	}
}
