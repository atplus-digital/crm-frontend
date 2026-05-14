/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const LINHACORPORATIVA_FIELD_LABELS = {
	createdAt: "Criado em",
	createdBy: "Criado por",
	createdById: "createdById",
	f_fk_funcionarios: "f_fk_funcionarios",
	f_funcionarios: "Funcionários",
	f_iccid_corporativo: "ICCID Corporativo",
	f_numero_movel_corporativo: "Número Móvel Corporativo",
	f_tipo: "Tipo",
	id: "ID",
	updatedAt: "Última atualização em",
	updatedBy: "Última atualização por",
	updatedById: "updatedById",
} as const;

export const LINHACORPORATIVA_TIPO_LABELS = {
	1: "Chip Corporativo",
	2: "DID Fixo",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const linha_corporativaTipoSchema = z.enum(["1", "2"], {
	error: () => ({
		message: "tipo: valores válidos são [Chip Corporativo, DID Fixo]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type LinhaCorporativaTipo = z.infer<typeof linha_corporativaTipoSchema>;
