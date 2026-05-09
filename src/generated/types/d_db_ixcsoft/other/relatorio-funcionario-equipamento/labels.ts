/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
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
