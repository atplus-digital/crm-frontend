/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PARTICAOASSINANTESUMMIT_FIELD_LABELS = {
	ativar_bloqueio_categoria: "ativar_bloqueio_categoria",
	categoria_bloqueio: "categoria_bloqueio",
	categoria_bloqueio_parcial: "categoria_bloqueio_parcial",
	categoria_cancelamento: "categoria_cancelamento",
	categoria_padrao: "categoria_padrao",
	codigo: "codigo",
	descricao: "descricao",
	id: "id",
} as const;

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
