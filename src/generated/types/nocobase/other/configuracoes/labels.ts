/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CONFIGURACOES_ESCOPO_LABELS = {
	IXC: "IXCSoft",
	GERAL: "GERAL",
	SPC: "SPCBRASIL",
	ZAPSIGN: "ZAPSIGN",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const configuracoesEscopoSchema = z.enum(
	["IXC", "GERAL", "SPC", "ZAPSIGN"],
	{
		error: () => ({
			message:
				"escopo: valores válidos são [IXCSoft, GERAL, SPCBRASIL, ZAPSIGN]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ConfiguracoesEscopo = z.infer<typeof configuracoesEscopoSchema>;
