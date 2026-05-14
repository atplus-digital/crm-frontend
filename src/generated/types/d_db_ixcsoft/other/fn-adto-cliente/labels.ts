/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FNADTOCLIENTE_FIELD_LABELS = {
	data: "data",
	filial_id: "filial_id",
	id: "id",
	id_cliente: "id_cliente",
	id_conta: "id_conta",
	id_mov_fin_mestre: "id_mov_fin_mestre",
	obs: "obs",
	status: "status",
	valor: "valor",
	valor_aberto: "valor_aberto",
	valor_baixado: "valor_baixado",
} as const;

export const FNADTOCLIENTE_STATUS_LABELS = {
	A: "A",
	B: "B",
	P: "P",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_adto_clienteStatusSchema = z.enum(["A", "B", "P"], {
	error: () => ({ message: "status: valores válidos são [A, B, P]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FnAdtoClienteStatus = z.infer<typeof fn_adto_clienteStatusSchema>;
