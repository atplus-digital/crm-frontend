/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ITENSPACOTES_FIELD_LABELS = {
	createdAt: "Criado em",
	createdBy: "Criado por",
	createdById: "createdById",
	f_ch3bjzt4zr7: "f_ch3bjzt4zr7",
	f_fk1: "f_fk1",
	f_fk2: "f_fk2",
	f_id_ixc: "ID IXC",
	f_mensalidade_com_desconto: "Mensalidade com Desconto",
	f_mensalidade_sem_desconto: "Mensalidade Sem Desconto",
	f_nome_do_produto: "Nome do Produto",
	f_tipo_ixc: "Tipo de Produto IXC",
	f_tipo_produto: "Tipo de Produto",
	f_vna9rme0f5j: "f_vna9rme0f5j",
	id: "ID",
	updatedAt: "Última atualização em",
	updatedBy: "Última atualização por",
	updatedById: "updatedById",
} as const;

export const ITENSPACOTES_TIPOIXC_LABELS = {
	I: "INTERNET",
	SMP: "MVNO/SMP",
	TV: "TV/STREAMING",
	S: "SERVICO",
	T: "STFC/TELEFONE",
	SVA: "SVA",
} as const;

export const ITENSPACOTES_TIPOPRODUTO_LABELS = {
	SVA: "SVA",
	INTERNET: "INTERNET",
	STFC: "STFC",
	MVNO: "MVNO",
	TV: "TV",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const itens_pacotesTipoIxcSchema = z.enum(
	["I", "SMP", "TV", "S", "T", "SVA"],
	{
		error: () => ({
			message:
				"tipo_ixc: valores válidos são [INTERNET, MVNO/SMP, TV/STREAMING, SERVICO, STFC/TELEFONE, SVA]",
		}),
	},
);

export const itens_pacotesTipoProdutoSchema = z.enum(
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
export type ItensPacotesTipoIxc = z.infer<typeof itens_pacotesTipoIxcSchema>;

export type ItensPacotesTipoProduto = z.infer<
	typeof itens_pacotesTipoProdutoSchema
>;
