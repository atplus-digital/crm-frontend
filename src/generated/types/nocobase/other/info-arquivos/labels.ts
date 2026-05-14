/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const INFOARQUIVOS_FIELD_LABELS = {
	createdAt: "Criado em",
	createdBy: "Criado por",
	createdById: "createdById",
	f_arquivo_externo: "Arquivo Externo?",
	f_arquivos: "Arquivos",
	f_fk_funcionarios: "f_fk_funcionarios",
	f_funcionarios: "Funcionários",
	f_titulo: "Título",
	id: "ID",
	updatedAt: "Última atualização em",
	updatedBy: "Última atualização por",
	updatedById: "updatedById",
} as const;

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
