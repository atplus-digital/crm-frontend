/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PARTICAOASSINANTESUMMIT_ATIVARBLOQUEIOCATEGORIA_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const particao_assinante_summitAtivarBloqueioCategoriaSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "ativar_bloqueio_categoria: valores válidos são [S, N]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ParticaoAssinanteSummitAtivarBloqueioCategoria = z.infer<
	typeof particao_assinante_summitAtivarBloqueioCategoriaSchema
>;
