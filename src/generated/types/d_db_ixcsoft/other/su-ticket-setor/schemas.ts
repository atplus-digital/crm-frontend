/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	su_ticket_setorAtivoSchema,
	su_ticket_setorExigeVinculoProdutoSchema,
	su_ticket_setorMostraHotsiteSchema,
	su_ticket_setorPrestaAtendimentoSchema,
} from "./labels";

export const SU_TICKET_SETOR_TABLE_NAME = "su_ticket_setor";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const su_ticket_setorBaseSchema = z.object({
	id: z.number(),
	ativo: su_ticket_setorAtivoSchema,
	email: z.string(),
	exige_vinculo_produto: su_ticket_setorExigeVinculoProdutoSchema,
	mostra_hotsite: su_ticket_setorMostraHotsiteSchema,
	ordem: z.number(),
	presta_atendimento: su_ticket_setorPrestaAtendimentoSchema,
	setor: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const su_ticket_setorSchema = su_ticket_setorBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const su_ticket_setorCreateSchema = su_ticket_setorSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const su_ticket_setorUpdateSchema =
	su_ticket_setorCreateSchema.partial();
