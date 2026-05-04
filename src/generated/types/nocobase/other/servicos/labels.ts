/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SERVICOS_STATUS_LABELS = {
	"0": "Cancelado",
	"1": "Aguardando Ativação",
	"2": "Ativo",
} as const;

export const SERVICOS_TIPO_LABELS = {
	"1": "Link IP",
	"2": "PTP",
	"3": "PTMP",
	"4": "OUTRO",
	"5": "Lastmile",
	"6": "Colocation",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const servicosStatusSchema = z.enum(["0", "1", "2"], {
	error: () => ({
		message:
			"status: valores válidos são [Cancelado, Aguardando Ativação, Ativo]",
	}),
});

export const servicosTipoSchema = z.enum(["1", "2", "3", "4", "5", "6"], {
	error: () => ({
		message:
			"tipo: valores válidos são [Link IP, PTP, PTMP, OUTRO, Lastmile, Colocation]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ServicosStatus = z.infer<typeof servicosStatusSchema>;

export type ServicosTipo = z.infer<typeof servicosTipoSchema>;
