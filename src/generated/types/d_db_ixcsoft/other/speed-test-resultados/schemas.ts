/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const SPEED_TEST_RESULTADOS_TABLE_NAME = "speed_test_resultados";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const speed_test_resultadosBaseSchema = z.object({
	id: z.number(),
	download: z.string(),
	id_user: z.number(),
	insert_date: z.string(),
	ip_user: z.string(),
	ping: z.string(),
	ping_server: z.string(),
	upload: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const speed_test_resultadosSchema = speed_test_resultadosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const speed_test_resultadosCreateSchema =
	speed_test_resultadosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const speed_test_resultadosUpdateSchema =
	speed_test_resultadosCreateSchema.partial();
