/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const MOVIMENTOCOMODATOS_FIELD_LABELS = {
	descricao: "descricao",
	filial_emissao: "filial_emissao",
	id: "id",
	id_cliente: "id_cliente",
	id_contrato: "id_contrato",
	id_devolucao: "id_devolucao",
	id_emprestimo: "id_emprestimo",
	id_entrada: "id_entrada",
	id_filial: "id_filial",
	id_movimento_produtos: "id_movimento_produtos",
	id_os: "id_os",
	id_produto: "id_produto",
	id_saida: "id_saida",
	motivo_dispensa_nf: "motivo_dispensa_nf",
	nf_complementar_comodato: "nf_complementar_comodato",
	nota_cancelada_em: "nota_cancelada_em",
	nota_emitida_em: "nota_emitida_em",
	nota_emitida_por: "nota_emitida_por",
	numero_nota: "numero_nota",
	status_nota: "status_nota",
	tipo: "tipo",
	tipo_documento: "tipo_documento",
} as const;

export const MOVIMENTOCOMODATOS_STATUSNOTA_LABELS = {
	AG: "AG",
	F: "F",
	A: "A",
	C: "C",
	D: "D",
} as const;

export const MOVIMENTOCOMODATOS_TIPO_LABELS = {
	E: "E",
	S: "S",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const movimento_comodatosStatusNotaSchema = z.enum(
	["AG", "F", "A", "C", "D"],
	{
		error: () => ({
			message: "status_nota: valores válidos são [AG, F, A, C, D]",
		}),
	},
);

export const movimento_comodatosTipoSchema = z.enum(["E", "S"], {
	error: () => ({ message: "tipo: valores válidos são [E, S]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type MovimentoComodatosStatusNota = z.infer<
	typeof movimento_comodatosStatusNotaSchema
>;

export type MovimentoComodatosTipo = z.infer<
	typeof movimento_comodatosTipoSchema
>;
