/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const MOVIMENTOCOMODATOS_STATUSNOTA_LABELS = {
	AG: "AG",
	F: "F",
	A: "A",
	C: "C",
	D: "D",
} as const;

export const MOVIMENTOCOMODATOS_TIPO_LABELS = {
	E: "E",
	S: "S",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const movimento_comodatosStatusNotaSchema = z.enum(
	["AG", "F", "A", "C", "D"],
	{
		error: () => ({
			message: "status_nota: valores válidos são [AG, F, A, C, D]",
		}),
	},
);

export const movimento_comodatosTipoSchema = z.enum(["E", "S"], {
	error: () => ({ message: "tipo: valores válidos são [E, S]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type MovimentoComodatosStatusNota = z.infer<
	typeof movimento_comodatosStatusNotaSchema
>;

export type MovimentoComodatosTipo = z.infer<
	typeof movimento_comodatosTipoSchema
>;
