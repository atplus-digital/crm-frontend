import type { TrocaEndereco } from "#/generated/types/nocobase/troca-endereco";
import { getErrorMessage } from "#/lib/api-errors";
import { createLogger } from "#/lib/logger";
import { nocobaseRepository } from "#/repositories";

const log = createLogger("services:cs:troca-endereco");

// ---------------------------------------------------------------------------
// Create
// ---------------------------------------------------------------------------

export type CreateTrocaEnderecoInput = Pick<
	TrocaEndereco,
	| "f_cep"
	| "f_bairro"
	| "f_endereco_cidade"
	| "f_endereco_estado"
	| "f_endereco"
	| "f_endereco_numero"
	| "f_endereco_complemento"
	| "f_endereco_referencia"
	| "f_obs"
	| "f_telefone_contato"
	| "f_taxa_instalacao"
	| "f_id_contrato"
	| "f_cliente"
>;

export async function createTrocaEndereco(
	data: CreateTrocaEnderecoInput,
): Promise<TrocaEndereco> {
	try {
		const payload: Record<string, unknown> = {
			...data,
			f_status: "1", // Atendimento Gerado
		};

		const result = await nocobaseRepository.create(
			"t_troca_endereco",
			payload as Partial<TrocaEndereco>,
		);
		return result as TrocaEndereco;
	} catch (error) {
		const message = getErrorMessage(error, "Erro desconhecido");
		log.error("Failed to create troca de endereço", { error: message });
		throw error;
	}
}
