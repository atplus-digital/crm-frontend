import { z } from "zod";
import type { CollectionRelationsMap } from "#/generated/types/nocobase/collections";
import type { CrmTrocaTitularidade } from "#/generated/types/nocobase/crm-troca-titularidade";
import { crm_troca_titularidadeBaseSchema } from "#/generated/types/nocobase/crm-troca-titularidade/schemas";
import type { Empresas } from "#/generated/types/nocobase/empresas";
import type { Pessoas } from "#/generated/types/nocobase/pessoas";
import { getErrorMessage } from "#/lib/api-errors";
import { includes, or } from "#/lib/filter-builder";
import { createLogger } from "#/lib/logger";
import { nocobaseRepository } from "#/repositories";

const log = createLogger("services:cs:troca-titularidade");

// ---------------------------------------------------------------------------
// Create
// ---------------------------------------------------------------------------

const createTrocaTitularidadeInputSchema =
	crm_troca_titularidadeBaseSchema.pick({
		f_cedente: true,
		f_cedente_documento: true,
		f_cedente_email: true,
		f_cedente_responsavel_legal: true,
		f_cedente_telefone: true,
		f_cessionario: true,
		f_cessionario_documento: true,
		f_cessionario_email: true,
		f_cessionario_responsavel: true,
		f_cessionario_telefone: true,
		f_id_contrato: true,
		f_tipo_pessoa: true,
	});

const createTrocaTitularidadeAddressSchema =
	crm_troca_titularidadeBaseSchema.pick({
		f_bairro: true,
		f_cep: true,
		f_cidade: true,
		f_complemento: true,
		f_endereco: true,
		f_estado: true,
		f_numero: true,
	});

export const createTrocaTitularidadeSchema = createTrocaTitularidadeInputSchema
	.merge(createTrocaTitularidadeAddressSchema)
	.extend({
		f_pessoa_pf: z.number().int().positive().nullable().optional(),
		f_pessoa_pj: z.number().int().positive().nullable().optional(),
	});

export type CreateTrocaTitularidadeInput = z.infer<
	typeof createTrocaTitularidadeSchema
>;

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
		const filter = or(includes("f_nome", query), includes("f_cpf", query));
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
		const filter = or(
			includes("f_razao_social", query),
			includes("f_cnpj", query),
		);
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
