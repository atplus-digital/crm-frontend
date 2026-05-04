/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PATRIMONIO_ESTADOUSO_LABELS = {
	NOVO: "NOVO",
	UsadoEmEstadoDeNovo: "USADO, EM ESTADO DE NOVO",
	UsadoComMarcasDeUso: "USADO, COM MARCAS DE USO",
} as const;

export const PATRIMONIO_TIPOPATRIMONIO_LABELS = {
	"1": "Equipamento",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const patrimonioEstadoUsoSchema = z.enum(
	["NOVO", "USADO, EM ESTADO DE NOVO", "USADO, COM MARCAS DE USO"],
	{
		error: () => ({
			message:
				"estado_uso: valores válidos são [NOVO, USADO, EM ESTADO DE NOVO, USADO, COM MARCAS DE USO]",
		}),
	},
);

export const patrimonioTipoPatrimonioSchema = z.enum(["1"], {
	error: () => ({
		message: "tipo_patrimonio: valores válidos são [Equipamento]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type PatrimonioEstadoUso = z.infer<typeof patrimonioEstadoUsoSchema>;

export type PatrimonioTipoPatrimonio = z.infer<
	typeof patrimonioTipoPatrimonioSchema
>;
