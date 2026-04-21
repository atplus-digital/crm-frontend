import type { RelationsAdapter } from "../@types/script";

/**
 * Mapeamento manual de relações do IXC baseado na documentação da Wiki.
 * Estas relações são explícitas e não dependem de inferência.
 *
 * IMPORTANTE: Mapeia campos EXISTENTES (id_*) para relações (f_*).
 * O gerador vai:
 * 1. Manter id_* como scalar (number)
 * 2. Adicionar f_* como relação tipada
 *
 * Formato: id_campo → f_campo
 * Exemplo: id_cliente → f_cliente
 */
const IXC_RELATIONS_MAP: Record<
	string,
	Record<
		string,
		{
			target: string;
			type: "belongsTo" | "hasMany";
			relationFieldName?: string; // nome do campo de relação (default: f_{target})
		}
	>
> = {
	cliente: {
		cidade_naturalidade: {
			target: "cidade",
			type: "belongsTo",
			relationFieldName: "f_cidade_naturalidade",
		},
		estado_nascimento: {
			target: "uf",
			type: "belongsTo",
			relationFieldName: "f_estado_nascimento",
		},
		id_condominio: {
			target: "cliente_condominio",
			type: "belongsTo",
			relationFieldName: "f_condominio",
		},
		cidade: {
			target: "cidade",
			type: "belongsTo",
			relationFieldName: "f_cidade",
		},
		uf: { target: "uf", type: "belongsTo", relationFieldName: "f_uf" },
		cidade_cob: {
			target: "cidade",
			type: "belongsTo",
			relationFieldName: "f_cidade_cob",
		},
		uf_cob: { target: "uf", type: "belongsTo", relationFieldName: "f_uf_cob" },
		id_conta: {
			target: "contas",
			type: "belongsTo",
			relationFieldName: "f_conta",
		},
		id_vendedor: {
			target: "vendedor",
			type: "belongsTo",
			relationFieldName: "f_vendedor",
		},
		id_perfil: {
			target: "perfis",
			type: "belongsTo",
			relationFieldName: "f_perfil",
		},
		id_segmento: {
			target: "segmentos",
			type: "belongsTo",
			relationFieldName: "f_segmento",
		},
		id_operadora_celular: {
			target: "operadora_celular",
			type: "belongsTo",
			relationFieldName: "f_operadora_celular",
		},
		id_tipo_cliente: {
			target: "tipo_cliente",
			type: "belongsTo",
			relationFieldName: "f_tipo_cliente",
		},
		responsavel: {
			target: "funcionarios",
			type: "belongsTo",
			relationFieldName: "f_responsavel",
		},
		id_candato_tipo: {
			target: "candato_tipo",
			type: "belongsTo",
			relationFieldName: "f_candato_tipo",
		},
		id_concorrente: {
			target: "concorrente",
			type: "belongsTo",
			relationFieldName: "f_concorrente",
		},
		id_fornecedor_conversao: {
			target: "fornecedor",
			type: "belongsTo",
			relationFieldName: "f_fornecedor_conversao",
		},
	},
	cliente_contrato: {
		id_cliente: {
			target: "cliente",
			type: "belongsTo",
			relationFieldName: "f_cliente",
		},
		id_vd_contrato: {
			target: "vd_contratos_produtos",
			type: "belongsTo",
			relationFieldName: "f_vd_contrato",
		},
		id_tipo_contrato: {
			target: "cliente_contrato_tipo",
			type: "belongsTo",
			relationFieldName: "f_tipo_contrato",
		},
		id_modelo: {
			target: "cliente_contrato_modelo",
			type: "belongsTo",
			relationFieldName: "f_modelo",
		},
		id_filial: {
			target: "filial",
			type: "belongsTo",
			relationFieldName: "f_filial",
		},
		id_motivo_inclusao: {
			target: "cliente_contrato_motivo_inclusao",
			type: "belongsTo",
			relationFieldName: "f_motivo_inclusao",
		},
		id_indexador_reajuste: {
			target: "cliente_contrato_indexadores",
			type: "belongsTo",
			relationFieldName: "f_indexador_reajuste",
		},
		id_tipo_documento: {
			target: "tipo_documento",
			type: "belongsTo",
			relationFieldName: "f_tipo_documento",
		},
		id_carteira_cobranca: {
			target: "fn_carteira_cobranca",
			type: "belongsTo",
			relationFieldName: "f_carteira_cobranca",
		},
		id_vendedor: {
			target: "vendedor",
			type: "belongsTo",
			relationFieldName: "f_vendedor",
		},
		moeda: {
			target: "moedas",
			type: "belongsTo",
			relationFieldName: "f_moeda",
		},
		id_contrato_principal: {
			target: "cliente_contrato",
			type: "belongsTo",
			relationFieldName: "f_contrato_principal",
		},
		id_responsavel: {
			target: "funcionarios",
			type: "belongsTo",
			relationFieldName: "f_responsavel",
		},
		id_cond_pag_ativ: {
			target: "condicoes_pagamento",
			type: "belongsTo",
			relationFieldName: "f_cond_pag_ativ",
		},
		id_produto_ativ: {
			target: "produtos",
			type: "belongsTo",
			relationFieldName: "f_produto_ativ",
		},
		id_tipo_doc_ativ: {
			target: "tipo_documento",
			type: "belongsTo",
			relationFieldName: "f_tipo_doc_ativ",
		},
		indicacao_contrato_id: {
			target: "indicacao_contrato",
			type: "belongsTo",
			relationFieldName: "f_indicacao_contrato",
		},
	},
	fn_areceber: {
		id_cliente: {
			target: "cliente",
			type: "belongsTo",
			relationFieldName: "f_cliente",
		},
		id_conta: {
			target: "planejamento_analitico",
			type: "belongsTo",
			relationFieldName: "f_conta",
		},
		id_conta_class_finan_a: {
			target: "planejamento_analitico_finan",
			type: "belongsTo",
			relationFieldName: "f_conta_class_finan_a",
		},
		filial_id: {
			target: "filial",
			type: "belongsTo",
			relationFieldName: "f_filial",
		},
		id_carteira_cobranca: {
			target: "fn_carteira_cobranca",
			type: "belongsTo",
			relationFieldName: "f_carteira_cobranca",
		},
		id_saida: {
			target: "fn_apagar",
			type: "belongsTo",
			relationFieldName: "f_saida",
		},
		id_sip: {
			target: "sip",
			type: "belongsTo",
			relationFieldName: "f_sip",
		},
		id_renegociacao: {
			target: "fn_renegociacao",
			type: "belongsTo",
			relationFieldName: "f_renegociacao",
		},
		id_renegociacao_novo: {
			target: "fn_renegociacao",
			type: "belongsTo",
			relationFieldName: "f_renegociacao_novo",
		},
		id_lote_geracao_financeiro_fatura: {
			target: "lote_geracao_financeiro_fatura",
			type: "belongsTo",
			relationFieldName: "f_lote_geracao_financeiro_fatura",
		},
	},
	linha_mvno: {
		id_cliente: {
			target: "cliente",
			type: "belongsTo",
			relationFieldName: "f_cliente",
		},
		id_plano: {
			target: "mvno_planos",
			type: "belongsTo",
			relationFieldName: "f_plano",
		},
		id_chip: {
			target: "mvno_chips",
			type: "belongsTo",
			relationFieldName: "f_chip",
		},
	},
	vd_contratos_produtos: {
		id_grupo: {
			target: "grupo_produto",
			type: "belongsTo",
			relationFieldName: "f_grupo",
		},
		id_subgrupo: {
			target: "subgrupo_produto",
			type: "belongsTo",
			relationFieldName: "f_subgrupo",
		},
		id_unidade: {
			target: "unidades",
			type: "belongsTo",
			relationFieldName: "f_unidade",
		},
		id_classificacao: {
			target: "classificacao_franquia",
			type: "belongsTo",
			relationFieldName: "f_classificacao",
		},
	},
	su_ticket: {
		id_cliente: {
			target: "cliente",
			type: "belongsTo",
			relationFieldName: "f_cliente",
		},
		id_contrato: {
			target: "cliente_contrato",
			type: "belongsTo",
			relationFieldName: "f_contrato",
		},
		id_assunto: {
			target: "su_assuntos",
			type: "belongsTo",
			relationFieldName: "f_assunto",
		},
		id_equipe: {
			target: "su_equipes",
			type: "belongsTo",
			relationFieldName: "f_equipe",
		},
		id_responsavel: {
			target: "funcionarios",
			type: "belongsTo",
			relationFieldName: "f_responsavel",
		},
		id_status: {
			target: "su_status",
			type: "belongsTo",
			relationFieldName: "f_status",
		},
		id_prioridade: {
			target: "su_prioridades",
			type: "belongsTo",
			relationFieldName: "f_prioridade",
		},
	},
};

export function createIXCRelationsAdapter(): RelationsAdapter {
	return {
		name: "IXC Relations Mapper",
		async fetchRelations(
			collectionName: string,
		): Promise<
			Record<string, { target: string; type: "belongsTo" | "hasMany" }>
		> {
			const collectionRelations = IXC_RELATIONS_MAP[collectionName] ?? {};

			// Converter para o formato esperado pelo gerador
			// Chave: nome do campo de relação (f_*), não o campo scalar (id_*)
			const result: Record<
				string,
				{ target: string; type: "belongsTo" | "hasMany" }
			> = {};

			for (const [, relation] of Object.entries(collectionRelations)) {
				const relationFieldName =
					relation.relationFieldName ?? `f_${relation.target}`;
				result[relationFieldName] = {
					target: relation.target,
					type: relation.type,
				};
			}

			return result;
		},
	};
}
