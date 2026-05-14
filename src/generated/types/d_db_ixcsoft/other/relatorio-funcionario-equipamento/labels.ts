/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RELATORIOFUNCIONARIOEQUIPAMENTO_FIELD_LABELS = {
	apartamento: "apartamento",
	ativo: "ativo",
	bairro: "bairro",
	bloco: "bloco",
	cep: "cep",
	cnh_numero: "cnh_numero",
	complemento: "complemento",
	cpf_cnpj: "cpf_cnpj",
	creation_date: "creation_date",
	creation_user: "creation_user",
	ctps_numero: "ctps_numero",
	data_admissao_final: "data_admissao_final",
	data_admissao_inicial: "data_admissao_inicial",
	data_admissao_periodo: "data_admissao_periodo",
	data_descarte_final: "data_descarte_final",
	data_descarte_inicial: "data_descarte_inicial",
	data_descarte_periodo: "data_descarte_periodo",
	data_devolve_final: "data_devolve_final",
	data_devolve_inicial: "data_devolve_inicial",
	data_devolve_periodo: "data_devolve_periodo",
	data_empresta_final: "data_empresta_final",
	data_empresta_inicial: "data_empresta_inicial",
	data_empresta_periodo: "data_empresta_periodo",
	data_nascimento_final: "data_nascimento_final",
	data_nascimento_inicial: "data_nascimento_inicial",
	data_nascimento_periodo: "data_nascimento_periodo",
	data_ultima_impres: "data_ultima_impres",
	endereco: "endereco",
	exibir_colaborador_inmap: "exibir_colaborador_inmap",
	filial_id: "filial_id",
	id: "id",
	id_almox: "id_almox",
	id_cidade: "id_cidade",
	id_condominio: "id_condominio",
	id_conta: "id_conta",
	id_conta_decimo: "id_conta_decimo",
	id_funcao: "id_funcao",
	id_patrimonio: "id_patrimonio",
	id_produto: "id_produto",
	id_tecnico: "id_tecnico",
	ie_identidade: "ie_identidade",
	impresso_por: "impresso_por",
	nome: "nome",
	numero: "numero",
	ramal: "ramal",
	referencia: "referencia",
	relatorio: "relatorio",
	setor: "setor",
	tipo_data_admissao: "tipo_data_admissao",
	tipo_data_descarte: "tipo_data_descarte",
	tipo_data_devolve: "tipo_data_devolve",
	tipo_data_empresta: "tipo_data_empresta",
	tipo_data_nascimento: "tipo_data_nascimento",
} as const;

export const RELATORIOFUNCIONARIOEQUIPAMENTO_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RELATORIOFUNCIONARIOEQUIPAMENTO_EXIBIRCOLABORADORINMAP_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RELATORIOFUNCIONARIOEQUIPAMENTO_TIPODATAADMISSAO_LABELS = {
	D: "D",
	P: "P",
} as const;

export const RELATORIOFUNCIONARIOEQUIPAMENTO_TIPODATADESCARTE_LABELS = {
	D: "D",
	P: "P",
} as const;

export const RELATORIOFUNCIONARIOEQUIPAMENTO_TIPODATADEVOLVE_LABELS = {
	D: "D",
	P: "P",
} as const;

export const RELATORIOFUNCIONARIOEQUIPAMENTO_TIPODATAEMPRESTA_LABELS = {
	D: "D",
	P: "P",
} as const;

export const RELATORIOFUNCIONARIOEQUIPAMENTO_TIPODATANASCIMENTO_LABELS = {
	D: "D",
	P: "P",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const relatorio_funcionario_equipamentoAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const relatorio_funcionario_equipamentoExibirColaboradorInmapSchema =
	z.enum(["S", "N"], {
		error: () => ({
			message: "exibir_colaborador_inmap: valores válidos são [S, N]",
		}),
	});

export const relatorio_funcionario_equipamentoTipoDataAdmissaoSchema = z.enum(
	["D", "P"],
	{
		error: () => ({
			message: "tipo_data_admissao: valores válidos são [D, P]",
		}),
	},
);

export const relatorio_funcionario_equipamentoTipoDataDescarteSchema = z.enum(
	["D", "P"],
	{
		error: () => ({
			message: "tipo_data_descarte: valores válidos são [D, P]",
		}),
	},
);

export const relatorio_funcionario_equipamentoTipoDataDevolveSchema = z.enum(
	["D", "P"],
	{
		error: () => ({ message: "tipo_data_devolve: valores válidos são [D, P]" }),
	},
);

export const relatorio_funcionario_equipamentoTipoDataEmprestaSchema = z.enum(
	["D", "P"],
	{
		error: () => ({
			message: "tipo_data_empresta: valores válidos são [D, P]",
		}),
	},
);

export const relatorio_funcionario_equipamentoTipoDataNascimentoSchema = z.enum(
	["D", "P"],
	{
		error: () => ({
			message: "tipo_data_nascimento: valores válidos são [D, P]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RelatorioFuncionarioEquipamentoAtivo = z.infer<
	typeof relatorio_funcionario_equipamentoAtivoSchema
>;

export type RelatorioFuncionarioEquipamentoExibirColaboradorInmap = z.infer<
	typeof relatorio_funcionario_equipamentoExibirColaboradorInmapSchema
>;

export type RelatorioFuncionarioEquipamentoTipoDataAdmissao = z.infer<
	typeof relatorio_funcionario_equipamentoTipoDataAdmissaoSchema
>;

export type RelatorioFuncionarioEquipamentoTipoDataDescarte = z.infer<
	typeof relatorio_funcionario_equipamentoTipoDataDescarteSchema
>;

export type RelatorioFuncionarioEquipamentoTipoDataDevolve = z.infer<
	typeof relatorio_funcionario_equipamentoTipoDataDevolveSchema
>;

export type RelatorioFuncionarioEquipamentoTipoDataEmpresta = z.infer<
	typeof relatorio_funcionario_equipamentoTipoDataEmprestaSchema
>;

export type RelatorioFuncionarioEquipamentoTipoDataNascimento = z.infer<
	typeof relatorio_funcionario_equipamentoTipoDataNascimentoSchema
>;
