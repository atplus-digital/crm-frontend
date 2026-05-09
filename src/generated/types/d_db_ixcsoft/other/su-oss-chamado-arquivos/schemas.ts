/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	su_oss_chamado_arquivosClassificacaoArquivoSchema,
	su_oss_chamado_arquivosTipoSchema,
} from "./labels";

export const SU_OSS_CHAMADO_ARQUIVOS_TABLE_NAME = "su_oss_chamado_arquivos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const su_oss_chamado_arquivosBaseSchema = z.object({
	id: z.number(),
	classificacao_arquivo: su_oss_chamado_arquivosClassificacaoArquivoSchema,
	data_envio: z.string(),
	descricao: z.string(),
	id_oss_chamado: z.number(),
	id_oss_chamado_mensagem: z.number(),
	local_arquivo: z.string(),
	nome_arquivo: z.string(),
	tipo: su_oss_chamado_arquivosTipoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const su_oss_chamado_arquivosSchema = su_oss_chamado_arquivosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const su_oss_chamado_arquivosCreateSchema =
	su_oss_chamado_arquivosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const su_oss_chamado_arquivosUpdateSchema =
	su_oss_chamado_arquivosCreateSchema.partial();
