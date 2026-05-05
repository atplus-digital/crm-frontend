/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SITES_STATUS_LABELS = {
	repnmsclnb8: "Planejado",
	x2lk2z9p2ds: "Ativo",
	qw3vjvimoae: "Desativado",
} as const;

export const SITES_TIPO_LABELS = {
	1: "ATPLUS",
	2: "FORNECEDOR",
	3: "CLIENTE",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const sitesStatusSchema = z.enum(
	["repnmsclnb8", "x2lk2z9p2ds", "qw3vjvimoae"],
	{
		error: () => ({
			message: "status: valores válidos são [Planejado, Ativo, Desativado]",
		}),
	},
);

export const sitesTipoSchema = z.enum(["1", "2", "3"], {
	error: () => ({
		message: "tipo: valores válidos são [ATPLUS, FORNECEDOR, CLIENTE]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type SitesStatus = z.infer<typeof sitesStatusSchema>;

export type SitesTipo = z.infer<typeof sitesTipoSchema>;
