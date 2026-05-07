import type { CollectionRelationsMap } from "#/generated/types/nocobase/collections";
import type { CrmTrocaTitularidade } from "#/generated/types/nocobase/crm-troca-titularidade";
import type { Empresas } from "#/generated/types/nocobase/empresas";
import type { Pessoas } from "#/generated/types/nocobase/pessoas";
import { getErrorMessage } from "#/lib/api-errors";
import { includes } from "#/lib/filter-builder";
import { createLogger } from "#/lib/logger";
import { nocobaseRepository } from "#/repositories";

const log = createLogger("services:cs:troca-titularidade");

// ---------------------------------------------------------------------------
// Create
// ---------------------------------------------------------------------------

export type CreateTrocaTitularidadeInput = Pick<
	CrmTrocaTitularidade,
	| "f_cedente"
	| "f_cedente_documento"
	| "f_cedente_responsavel_legal"
	| "f_cedente_telefone"
	| "f_cedente_email"
	| "f_tipo_pessoa"
	| "f_cessionario"
	| "f_cessionario_documento"
	| "f_cessionario_responsavel"
	| "f_cessionario_telefone"
	| "f_cessionario_email"
	| "f_id_contrato"
	| "f_cep"
	| "f_endereco"
	| "f_numero"
	| "f_bairro"
	| "f_complemento"
	| "f_cidade"
	| "f_estado"
> & {
	f_pessoa_pf?: number | null;
	f_pessoa_pj?: number | null;
};

export async function createTrocaTitularidade(
	data: CreateTrocaTitularidadeInput,
): Promise<CrmTrocaTitularidade> {
	try {
		const payload: Record<string, unknown> = {
			...data,
			f_status: "0", // Novo
		};

		// NocoBase expects relation FK fields as { id: number } for belongsTo
		if (data.f_pessoa_pf != null) {
			payload.f_pessoa_pf = { id: data.f_pessoa_pf };
		} else {
			payload.f_pessoa_pf = null;
		}

		if (data.f_pessoa_pj != null) {
			payload.f_pessoa_pj = { id: data.f_pessoa_pj };
		} else {
			payload.f_pessoa_pj = null;
		}

		// Remove raw FK fields — NocoBase uses the relation objects
		delete payload.f_fk_pessoa_negociacao;
		delete payload.f_fk_pessoa_pj_negociacao;

		const result = await nocobaseRepository.create(
			"t_crm_troca_titularidade",
			payload as Partial<CrmTrocaTitularidade>,
		);
		return result as CrmTrocaTitularidade;
	} catch (error) {
		const message = getErrorMessage(error, "Erro desconhecido");
		log.error("Failed to create troca de titularidade", { error: message });
		throw error;
	}
}

// ---------------------------------------------------------------------------
// Lookup helpers (for PF/PJ search)
// ---------------------------------------------------------------------------

export async function searchPessoasFisicas(
	query: string,
): Promise<Pick<Pessoas, "id" | "f_nome" | "f_cpf" | "f_credito">[]> {
	if (!query || query.length < 2) return [];

	try {
		const filter = includes("f_nome", query);
		const response = await nocobaseRepository.list("t_pessoas", {
			page: 1,
			pageSize: 20,
			filter,
			appends: [] as Array<keyof CollectionRelationsMap["t_pessoas"]>,
		});

		return (response.data as Pessoas[]).map((p) => ({
			id: p.id,
			f_nome: p.f_nome,
			f_cpf: p.f_cpf,
			f_credito: p.f_credito,
		}));
	} catch (error) {
		const message = getErrorMessage(error, "Erro desconhecido");
		log.error("Failed to search pessoas físicas", { error: message });
		return [];
	}
}

export async function searchPessoasJuridicas(
	query: string,
): Promise<Pick<Empresas, "id" | "f_razao_social" | "f_cnpj">[]> {
	if (!query || query.length < 2) return [];

	try {
		const filter = includes("f_razao_social", query);
		const response = await nocobaseRepository.list("t_empresas", {
			page: 1,
			pageSize: 20,
			filter,
			appends: [] as Array<keyof CollectionRelationsMap["t_empresas"]>,
		});

		return (response.data as Empresas[]).map((e) => ({
			id: e.id,
			f_razao_social: e.f_razao_social,
			f_cnpj: e.f_cnpj,
		}));
	} catch (error) {
		const message = getErrorMessage(error, "Erro desconhecido");
		log.error("Failed to search pessoas jurídicas", { error: message });
		return [];
	}
}
