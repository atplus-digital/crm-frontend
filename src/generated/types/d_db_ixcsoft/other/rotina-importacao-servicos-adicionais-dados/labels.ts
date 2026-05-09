/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ROTINAIMPORTACAOSERVICOSADICIONAISDADOS_STATUSROTINA_LABELS = {
	A: "A",
	P: "P",
	D: "D",
	C: "C",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const rotina_importacao_servicos_adicionais_dadosStatusRotinaSchema =
	z.enum(["A", "P", "D", "C"], {
		error: () => ({
			message: "status_rotina: valores válidos são [A, P, D, C]",
		}),
	});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RotinaImportacaoServicosAdicionaisDadosStatusRotina = z.infer<
	typeof rotina_importacao_servicos_adicionais_dadosStatusRotinaSchema
>;
