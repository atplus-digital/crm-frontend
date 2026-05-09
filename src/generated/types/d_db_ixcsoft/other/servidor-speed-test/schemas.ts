/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { servidor_speed_testApacheSchema } from "./labels";

export const SERVIDOR_SPEED_TEST_TABLE_NAME = "servidor_speed_test";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const servidor_speed_testBaseSchema = z.object({
	id: z.number(),
	apache: servidor_speed_testApacheSchema,
	certificado_ca: z.string(),
	certificado_crt: z.string(),
	certificado_csr: z.string(),
	certificado_key: z.string(),
	nome: z.string(),
	nome_ssls: z.string(),
	online: z.string(),
	servidor_caminho: z.string(),
	servidor_instalacao: z.string(),
	servidor_ping: z.string(),
	servidor_porta: z.number(),
	servidor_senha: z.string(),
	servidor_usuario: z.string(),
	status: z.string(),
	status_port_443: z.string(),
	status_port_80: z.string(),
	txt_ssls: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const servidor_speed_testSchema = servidor_speed_testBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const servidor_speed_testCreateSchema = servidor_speed_testSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const servidor_speed_testUpdateSchema =
	servidor_speed_testCreateSchema.partial();
