/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const MODELOAUTOPROVISIONAMENTO_FIELD_LABELS = {
	ativo: "ativo",
	dispositivos_vinculados: "dispositivos_vinculados",
	id: "id",
	id_hardware: "id_hardware",
	id_perfil: "id_perfil",
	id_transmissor: "id_transmissor",
	tipo: "tipo",
} as const;

export const MODELOAUTOPROVISIONAMENTO_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const MODELOAUTOPROVISIONAMENTO_TIPO_LABELS = {
	bridge: "bridge",
	router: "router",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const modelo_autoprovisionamentoAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const modelo_autoprovisionamentoTipoSchema = z.enum(
	["bridge", "router"],
	{
		error: () => ({ message: "tipo: valores válidos são [bridge, router]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ModeloAutoprovisionamentoAtivo = z.infer<
	typeof modelo_autoprovisionamentoAtivoSchema
>;

export type ModeloAutoprovisionamentoTipo = z.infer<
	typeof modelo_autoprovisionamentoTipoSchema
>;
