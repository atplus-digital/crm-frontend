/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PEDIDO_FIELD_LABELS = {
	ativo: "ativo",
	cliente: "cliente",
	companhia_maritima: "companhia_maritima",
	comprador: "comprador",
	condicao_pagamento: "condicao_pagamento",
	data: "data",
	data_carga: "data_carga",
	data_draft: "data_draft",
	data_entrega: "data_entrega",
	data_navio: "data_navio",
	embalagem: "embalagem",
	filial_id: "filial_id",
	forma_entrega: "forma_entrega",
	forma_pagamento: "forma_pagamento",
	id: "id",
	id_fornecedor: "id_fornecedor",
	id_oss_mensagem: "id_oss_mensagem",
	incoterm: "incoterm",
	local_entrega: "local_entrega",
	marca_pintura: "marca_pintura",
	modalidade_frete: "modalidade_frete",
	numero_po: "numero_po",
	numero_reserva: "numero_reserva",
	obs: "obs",
	outra_forma_pgto: "outra_forma_pgto",
	percentual_desconto: "percentual_desconto",
	porto_destino: "porto_destino",
	porto_saida: "porto_saida",
	status: "status",
	tipo: "tipo",
	total_containers: "total_containers",
	vendedor: "vendedor",
} as const;

export const PEDIDO_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PEDIDO_TIPO_LABELS = {
	P: "P",
	M: "M",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const pedidoAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const pedidoTipoSchema = z.enum(["P", "M"], {
	error: () => ({ message: "tipo: valores válidos são [P, M]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type PedidoAtivo = z.infer<typeof pedidoAtivoSchema>;

export type PedidoTipo = z.infer<typeof pedidoTipoSchema>;
