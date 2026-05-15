import { z } from "zod";
import type { CrmTrocaTitularidade } from "#/generated/types/nocobase/crm-troca-titularidade";
import { crm_troca_titularidadeBaseSchema } from "#/generated/types/nocobase/crm-troca-titularidade/schemas";
import { getErrorMessage } from "#/lib/api-errors";
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

const createTrocaTitularidadeSchema = createTrocaTitularidadeInputSchema
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
