/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PRODUTOS_FIELD_LABELS = {
	createdAt: "Criado em",
	createdBy: "Criado por",
	createdById: "createdById",
	f_descricao_produto: "Descrição do Produto",
	f_id_ixc: "ID IXC",
	f_mensalidade_com_desconto: "Mensalidade com desconto",
	f_mensalidade_sem_desconto: "Mensalidade sem desconto",
	f_nome_produto: "Nome do Produto",
	f_opcoes_smp_template: "Opções SMP",
	f_opcoes_STFC: "Opções STFC",
	f_tipo_ixc: "Tipo de Produto no IXC",
	f_tipo_produto: "Tipo de Produto",
	id: "ID",
	updatedAt: "Última atualização em",
	updatedBy: "Última atualização por",
	updatedById: "updatedById",
} as const;

export const PRODUTOS_TIPOIXC_LABELS = {
	I: "INTERNET",
	SMP: "SMP/MVNO",
	TV: "TV/STREAMING",
	S: "SERVICO",
	T: "STFC/TELEFONE",
	SVA: "SVA",
} as const;

export const PRODUTOS_TIPOPRODUTO_LABELS = {
	SVA: "SVA",
	INTERNET: "INTERNET",
	STFC: "STFC",
	MVNO: "MVNO",
	TV: "TV",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const produtosTipoIxcSchema = z.enum(
	["I", "SMP", "TV", "S", "T", "SVA"],
	{
		error: () => ({
			message:
				"tipo_ixc: valores válidos são [INTERNET, SMP/MVNO, TV/STREAMING, SERVICO, STFC/TELEFONE, SVA]",
		}),
	},
);

export const produtosTipoProdutoSchema = z.enum(
	["SVA", "INTERNET", "STFC", "MVNO", "TV"],
	{
		error: () => ({
			message:
				"tipo_produto: valores válidos são [SVA, INTERNET, STFC, MVNO, TV]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ProdutosTipoIxc = z.infer<typeof produtosTipoIxcSchema>;

export type ProdutosTipoProduto = z.infer<typeof produtosTipoProdutoSchema>;
