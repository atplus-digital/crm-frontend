/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ENTRADADFE_FIELD_LABELS = {
	chnfe: "chnfe",
	cnpj: "cnpj",
	csitnfe: "csitnfe",
	data: "data",
	dfe_importado: "dfe_importado",
	id: "id",
	id_filial: "id_filial",
	id_fornecedor: "id_fornecedor",
	ie: "ie",
	manifestado: "manifestado",
	nprot: "nprot",
	nsu: "nsu",
	tpnf: "tpnf",
	ultimo_nsu: "ultimo_nsu",
	vnf: "vnf",
	xnome: "xnome",
} as const;

export const ENTRADADFE_ULTIMONSU_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const entrada_dfeUltimoNsuSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ultimo_nsu: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type EntradaDfeUltimoNsu = z.infer<typeof entrada_dfeUltimoNsuSchema>;
