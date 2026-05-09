/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ROTINAIMPORTACAOSERVICOSADICIONAIS_STATUS_LABELS = {
	A: "A",
	F: "F",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const rotina_importacao_servicos_adicionaisStatusSchema = z.enum(
	["A", "F"],
	{
		error: () => ({ message: "status: valores válidos são [A, F]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RotinaImportacaoServicosAdicionaisStatus = z.infer<
	typeof rotina_importacao_servicos_adicionaisStatusSchema
>;
