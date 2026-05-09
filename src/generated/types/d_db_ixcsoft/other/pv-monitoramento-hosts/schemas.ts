/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	pv_monitoramento_hostsAtivoSchema,
	pv_monitoramento_hostsProtocoloSchema,
	pv_monitoramento_hostsStatusSchema,
} from "./labels";

export const PV_MONITORAMENTO_HOSTS_TABLE_NAME = "pv_monitoramento_hosts";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const pv_monitoramento_hostsBaseSchema = z.object({
	id: z.number(),
	ativo: pv_monitoramento_hostsAtivoSchema,
	data_hora_ult_atualizacao: z.string(),
	descricao: z.string(),
	disponibilidade: z.number(),
	id_filial: z.number(),
	id_grupo_monitoramento: z.number(),
	ip: z.string(),
	latitude: z.string(),
	longitude: z.string(),
	nome_host: z.string(),
	protocolo: pv_monitoramento_hostsProtocoloSchema,
	qualidade: z.number(),
	status: pv_monitoramento_hostsStatusSchema,
	tempo_medio_resposta: z.number(),
	ultima_atualizacao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const pv_monitoramento_hostsSchema = pv_monitoramento_hostsBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const pv_monitoramento_hostsCreateSchema =
	pv_monitoramento_hostsSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const pv_monitoramento_hostsUpdateSchema =
	pv_monitoramento_hostsCreateSchema.partial();
