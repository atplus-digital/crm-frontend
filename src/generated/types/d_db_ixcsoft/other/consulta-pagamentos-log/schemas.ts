/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	consulta_pagamentos_logStatusSchema,
	consulta_pagamentos_logTipoIntegracaoSchema,
} from "./labels";

export const CONSULTA_PAGAMENTOS_LOG_TABLE_NAME = "consulta_pagamentos_log";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const consulta_pagamentos_logBaseSchema = z.object({
	id: z.number(),
	created_at: z.string(),
	id_carteira_cobranca: z.number(),
	log: z.string(),
	method: z.string(),
	request_body: z.string(),
	request_headers: z.string(),
	response_body: z.string(),
	response_http_status: z.string(),
	status: consulta_pagamentos_logStatusSchema,
	tipo_integracao: consulta_pagamentos_logTipoIntegracaoSchema,
	url: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const consulta_pagamentos_logSchema = consulta_pagamentos_logBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const consulta_pagamentos_logCreateSchema =
	consulta_pagamentos_logSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const consulta_pagamentos_logUpdateSchema =
	consulta_pagamentos_logCreateSchema.partial();
