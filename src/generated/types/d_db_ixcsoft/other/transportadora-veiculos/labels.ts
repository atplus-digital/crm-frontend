/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const TRANSPORTADORAVEICULOS_FIELD_LABELS = {
	balsa: "balsa",
	descricao: "descricao",
	id: "id",
	id_transportadora: "id_transportadora",
	padrao: "padrao",
	placa: "placa",
	rntc: "rntc",
	uf: "uf",
	vagao: "vagao",
} as const;

export const TRANSPORTADORAVEICULOS_PADRAO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const transportadora_veiculosPadraoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "padrao: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type TransportadoraVeiculosPadrao = z.infer<
	typeof transportadora_veiculosPadraoSchema
>;
