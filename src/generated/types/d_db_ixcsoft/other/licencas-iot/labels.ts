/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const LICENCASIOT_FIELD_LABELS = {
	codigo_licenca_integracao: "codigo_licenca_integracao",
	descricao: "descricao",
	id: "id",
	id_assinatura_integracao: "id_assinatura_integracao",
	id_cliente_integracao: "id_cliente_integracao",
	id_contrato: "id_contrato",
	id_integracao: "id_integracao",
	id_licenca_integracao: "id_licenca_integracao",
	status: "status",
} as const;

export const LICENCASIOT_STATUS_LABELS = {
	A: "A",
	I: "I",
	B: "B",
	P: "P",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const licencas_iotStatusSchema = z.enum(["A", "I", "B", "P"], {
	error: () => ({ message: "status: valores válidos são [A, I, B, P]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type LicencasIotStatus = z.infer<typeof licencas_iotStatusSchema>;
