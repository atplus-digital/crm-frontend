/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	assinatura_digital_signatarioStatusAssinaturaSchema,
	assinatura_digital_signatarioTipoSignatarioSchema,
} from "./labels";

export const ASSINATURA_DIGITAL_SIGNATARIO_TABLE_NAME =
	"assinatura_digital_signatario";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const assinatura_digital_signatarioBaseSchema = z.object({
	id: z.number(),
	cpf_cnpj: z.string(),
	email: z.string(),
	id_assinatura_digital_historico: z.number(),
	id_externo: z.string(),
	nome: z.string(),
	status_assinatura: assinatura_digital_signatarioStatusAssinaturaSchema,
	tipo_signatario: assinatura_digital_signatarioTipoSignatarioSchema,
	token_signatario: z.string(),
	url_assinatura_digital: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const assinatura_digital_signatarioSchema =
	assinatura_digital_signatarioBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const assinatura_digital_signatarioCreateSchema =
	assinatura_digital_signatarioSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const assinatura_digital_signatarioUpdateSchema =
	assinatura_digital_signatarioCreateSchema.partial();
