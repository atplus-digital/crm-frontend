/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RELATORIOBALANCO_FIELD_LABELS = {
	ano_base: "ano_base",
	ano_final: "ano_final",
	balanco_patrimonial: "balanco_patrimonial",
	conta_contabil: "conta_contabil",
	creation_date: "creation_date",
	creation_user: "creation_user",
	data_ultima_impres: "data_ultima_impres",
	id: "id",
	id_filial: "id_filial",
	impresso_por: "impresso_por",
	nome: "nome",
	relatorio: "relatorio",
} as const;

export const RELATORIOBALANCO_BALANCOPATRIMONIAL_LABELS = {
	A: "A",
	PASS: "PASS",
	PATRI: "PATRI",
	T: "T",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const relatorio_balancoBalancoPatrimonialSchema = z.enum(
	["A", "PASS", "PATRI", "T"],
	{
		error: () => ({
			message: "balanco_patrimonial: valores válidos são [A, PASS, PATRI, T]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RelatorioBalancoBalancoPatrimonial = z.infer<
	typeof relatorio_balancoBalancoPatrimonialSchema
>;
