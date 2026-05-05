/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const INFOARQUIVOS_ARQUIVOEXTERNO_LABELS = {
	sim: "Sim",
	não: "Não",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const info_arquivosArquivoExternoSchema = z.enum(["sim", "não"], {
	error: () => ({ message: "arquivo_externo: valores válidos são [Sim, Não]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type InfoArquivosArquivoExterno = z.infer<
	typeof info_arquivosArquivoExternoSchema
>;
