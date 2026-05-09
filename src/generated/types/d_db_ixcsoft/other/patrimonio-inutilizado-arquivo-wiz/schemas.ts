/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	patrimonio_inutilizado_arquivo_wizClassificacaoArquivoSchema,
	patrimonio_inutilizado_arquivo_wizStatusInutilizadoSchema,
	patrimonio_inutilizado_arquivo_wizTipoSchema,
} from "./labels";

export const PATRIMONIO_INUTILIZADO_ARQUIVO_WIZ_TABLE_NAME =
	"patrimonio_inutilizado_arquivo_wiz";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const patrimonio_inutilizado_arquivo_wizBaseSchema = z.object({
	id: z.number(),
	classificacao_arquivo:
		patrimonio_inutilizado_arquivo_wizClassificacaoArquivoSchema,
	data_envio: z.string(),
	descricao: z.string(),
	id_inutilizado: z.number(),
	id_patrimonio: z.number(),
	ids_patrimonio: z.string(),
	local_arquivo: z.string(),
	nome_arquivo: z.string(),
	status_inutilizado: patrimonio_inutilizado_arquivo_wizStatusInutilizadoSchema,
	tipo: patrimonio_inutilizado_arquivo_wizTipoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const patrimonio_inutilizado_arquivo_wizSchema =
	patrimonio_inutilizado_arquivo_wizBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const patrimonio_inutilizado_arquivo_wizCreateSchema =
	patrimonio_inutilizado_arquivo_wizSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const patrimonio_inutilizado_arquivo_wizUpdateSchema =
	patrimonio_inutilizado_arquivo_wizCreateSchema.partial();
