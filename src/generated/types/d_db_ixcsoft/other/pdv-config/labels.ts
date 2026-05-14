/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PDVCONFIG_FIELD_LABELS = {
	cliente_id: "cliente_id",
	cliente_nome: "cliente_nome",
	id: "id",
	id_tipo_doc_pedido: "id_tipo_doc_pedido",
	id_tipo_doc_venda: "id_tipo_doc_venda",
	pagamento_id: "pagamento_id",
	pagamento_nome: "pagamento_nome",
	parcelamento_id: "parcelamento_id",
	parcelamento_nome: "parcelamento_nome",
	tipo: "tipo",
} as const;

export const PDVCONFIG_TIPO_LABELS = {
	P: "P",
	V: "V",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const pdv_configTipoSchema = z.enum(["P", "V"], {
	error: () => ({ message: "tipo: valores válidos são [P, V]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type PdvConfigTipo = z.infer<typeof pdv_configTipoSchema>;
