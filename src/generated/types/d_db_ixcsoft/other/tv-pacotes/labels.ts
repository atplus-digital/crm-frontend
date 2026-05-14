/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const TVPACOTES_FIELD_LABELS = {
	canais: "canais",
	codigo_pacote: "codigo_pacote",
	data_inicio: "data_inicio",
	descricao: "descricao",
	id: "id",
	id_de_linha: "id_de_linha",
	id_plataforma: "id_plataforma",
	isLifeLine: "isLifeLine",
	isWide: "isWide",
	ncm: "ncm",
	nome: "nome",
	plataforma: "plataforma",
	svods: "svods",
	tipo: "tipo",
	valor: "valor",
} as const;

export const TVPACOTES_ISLIFELINE_LABELS = {
	Y: "Y",
	N: "N",
} as const;

export const TVPACOTES_ISWIDE_LABELS = {
	Y: "Y",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const tv_pacotesIslifelineSchema = z.enum(["Y", "N"], {
	error: () => ({ message: "isLifeLine: valores válidos são [Y, N]" }),
});

export const tv_pacotesIswideSchema = z.enum(["Y", "N"], {
	error: () => ({ message: "isWide: valores válidos são [Y, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type TvPacotesIslifeline = z.infer<typeof tv_pacotesIslifelineSchema>;

export type TvPacotesIswide = z.infer<typeof tv_pacotesIswideSchema>;
