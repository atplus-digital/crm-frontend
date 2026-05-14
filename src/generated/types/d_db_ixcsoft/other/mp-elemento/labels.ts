/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const MPELEMENTO_FIELD_LABELS = {
	capacidade: "capacidade",
	codigo_estilo: "codigo_estilo",
	comprimento: "comprimento",
	descricao: "descricao",
	id: "id",
	id_elemento_replicado: "id_elemento_replicado",
	id_mini_projeto: "id_mini_projeto",
	id_tipo_elemento: "id_tipo_elemento",
	id_transmissor: "id_transmissor",
	replicado: "replicado",
	tabela_elemento_replicado: "tabela_elemento_replicado",
	tipo: "tipo",
} as const;

export const MPELEMENTO_REPLICADO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const mp_elementoReplicadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "replicado: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type MpElementoReplicado = z.infer<typeof mp_elementoReplicadoSchema>;
