/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FFUNCIONARIOS_ATIVO_LABELS = {
	Sim: "Sim",
	Não: "Não",
} as const;

export const FFUNCIONARIOS_CHECKLISTADMISSIONAL_LABELS = {
	"aso-admissional": "ASO Admissional",
	rg: "RG",
	"e-cnh": "e-CNH",
	"comprovante-residencia": "Comprovante de Residência",
	"certidao-casamento-uniao-estavel": "Certidão de Casamento / União Estável",
	"e-titulo-eleitoral": "e-Título Eleitoral",
	"certificado-de-reservista": "Certificado de Reservista",
	"rg-certidao-nascimento-filhos":
		"RG ou Certidão de Nascimento dos filhos menores de 21 anos",
	"nr10-nr35": "Certificado NR 10 e NR 35 (Opcional)",
	"termos-responsabilidade": "Termos de Responsabilidade",
} as const;

export const FFUNCIONARIOS_EMPRESA_LABELS = {
	ATPlus: "ATPlus",
	Platon: "Platon",
} as const;

export const FFUNCIONARIOS_EPICALCADO_LABELS = {
	35: "35",
	36: "36",
	37: "37",
	38: "38",
	39: "39",
	40: "40",
	41: "41",
	42: "42",
	43: "43",
	44: "44",
} as const;

export const FFUNCIONARIOS_ESCOLARIDADE_LABELS = {
	"Ensino Médio": "Ensino Médio",
	Superior: "Superior",
	"Pós, MBA": "Pós, MBA",
	Mestrado: "Mestrado",
	Doutorado: "Doutorado",
} as const;

export const FFUNCIONARIOS_ESTADOCIVIL_LABELS = {
	Solteiro: "Solteiro",
	Casado: "Casado",
	"União Estável": "União Estável",
	Viúvo: "Viúvo",
	Divorciado: "Divorciado",
	Separado: "Separado",
} as const;

export const FFUNCIONARIOS_GENERO_LABELS = {
	Masculino: "Masculino",
	Feminino: "Feminino",
} as const;

export const FFUNCIONARIOS_MOBILIDADE_LABELS = {
	"Vale Transporte (Transul)": "Vale Transporte (Transul)",
	"Mobilidade (Cartão Benefícios)": "Mobilidade (Cartão Benefícios)",
} as const;

export const FFUNCIONARIOS_PCD_LABELS = {
	Sim: "Sim",
	Não: "Não",
} as const;

export const FFUNCIONARIOS_PRAZOEXPERIENCIA_LABELS = {
	"40-50": "40 / 50",
	"45-45": "45 / 45",
} as const;

export const FFUNCIONARIOS_RESERVISTA_LABELS = {
	Sim: "Sim",
	Não: "Não",
} as const;

export const FFUNCIONARIOS_SITUACAOESCOLARIDADE_LABELS = {
	Completo: "Completo",
	Cursando: "Cursando",
	Trancado: "Trancado",
} as const;

export const FFUNCIONARIOS_TERCEIRO_LABELS = {
	Sim: "Sim",
	Não: "Não",
} as const;

export const FFUNCIONARIOS_TIPOCONTRATO_LABELS = {
	CLT: "CLT",
	"Prestador de Serviços": "Prestador de Serviços",
	Estagiário: "Estagiário",
	"Jovem Aprendiz": "Jovem Aprendiz",
	Sócio: "Sócio",
	Temporário: "Temporário",
	"CLT + Comissão": "CLT + Comissão",
} as const;

export const FFUNCIONARIOS_UNIDADE_LABELS = {
	Matriz: "Matriz",
	"Loja Centro Lages": "Loja Centro Lages",
	"Loja Curitibanos": "Loja Curitibanos",
	Platon: "Platon",
} as const;

export const FFUNCIONARIOS_UNIVERSIDADE_LABELS = {
	IFSC: "IFSC",
	UNIPLAC: "UNIPLAC",
	CIEE: "CIEE",
	UNIFACVEST: "UNIFACVEST",
	Outros: "Outros",
} as const;

export const FFUNCIONARIOS_VINCULOCOMCOLABORADOR_LABELS = {
	Pais: "Pais",
	"Filho(a) ou Enteado(a)": "Filho(a) ou Enteado(a)",
	Avós: "Avós",
	Conjuge: "Conjuge",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const f_funcionariosAtivoSchema = z.enum(["Sim", "Não"], {
	error: () => ({ message: "ativo: valores válidos são [Sim, Não]" }),
});

export const f_funcionariosChecklistAdmissionalSchema = z.enum(
	[
		"aso-admissional",
		"rg",
		"e-cnh",
		"comprovante-residencia",
		"certidao-casamento-uniao-estavel",
		"e-titulo-eleitoral",
		"certificado-de-reservista",
		"rg-certidao-nascimento-filhos",
		"nr10-nr35",
		"termos-responsabilidade",
	],
	{
		error: () => ({
			message:
				"checklist_admissional: valores válidos são [ASO Admissional, RG, e-CNH, Comprovante de Residência, Certidão de Casamento / União Estável, e-Título Eleitoral, Certificado de Reservista, RG ou Certidão de Nascimento dos filhos menores de 21 anos, Certificado NR 10 e NR 35 (Opcional), Termos de Responsabilidade]",
		}),
	},
);

export const f_funcionariosEmpresaSchema = z.enum(["ATPlus", "Platon"], {
	error: () => ({ message: "empresa: valores válidos são [ATPlus, Platon]" }),
});

export const f_funcionariosEpiCalcadoSchema = z.enum(
	["35", "36", "37", "38", "39", "40", "41", "42", "43", "44"],
	{
		error: () => ({
			message:
				"epi_calcado: valores válidos são [35, 36, 37, 38, 39, 40, 41, 42, 43, 44]",
		}),
	},
);

export const f_funcionariosEscolaridadeSchema = z.enum(
	["Ensino Médio", "Superior", "Pós, MBA", "Mestrado", "Doutorado"],
	{
		error: () => ({
			message:
				"escolaridade: valores válidos são [Ensino Médio, Superior, Pós, MBA, Mestrado, Doutorado]",
		}),
	},
);

export const f_funcionariosEstadoCivilSchema = z.enum(
	["Solteiro", "Casado", "União Estável", "Viúvo", "Divorciado", "Separado"],
	{
		error: () => ({
			message:
				"estado_civil: valores válidos são [Solteiro, Casado, União Estável, Viúvo, Divorciado, Separado]",
		}),
	},
);

export const f_funcionariosGeneroSchema = z.enum(["Masculino", "Feminino"], {
	error: () => ({
		message: "genero: valores válidos são [Masculino, Feminino]",
	}),
});

export const f_funcionariosMobilidadeSchema = z.enum(
	["Vale Transporte (Transul)", "Mobilidade (Cartão Benefícios)"],
	{
		error: () => ({
			message:
				"mobilidade: valores válidos são [Vale Transporte (Transul), Mobilidade (Cartão Benefícios)]",
		}),
	},
);

export const f_funcionariosPcdSchema = z.enum(["Sim", "Não"], {
	error: () => ({ message: "pcd: valores válidos são [Sim, Não]" }),
});

export const f_funcionariosPrazoExperienciaSchema = z.enum(["40-50", "45-45"], {
	error: () => ({
		message: "prazo_experiencia: valores válidos são [40 / 50, 45 / 45]",
	}),
});

export const f_funcionariosReservistaSchema = z.enum(["Sim", "Não"], {
	error: () => ({ message: "reservista: valores válidos são [Sim, Não]" }),
});

export const f_funcionariosSituacaoEscolaridadeSchema = z.enum(
	["Completo", "Cursando", "Trancado"],
	{
		error: () => ({
			message:
				"situacao_escolaridade: valores válidos são [Completo, Cursando, Trancado]",
		}),
	},
);

export const f_funcionariosTerceiroSchema = z.enum(["Sim", "Não"], {
	error: () => ({ message: "terceiro: valores válidos são [Sim, Não]" }),
});

export const f_funcionariosTipoContratoSchema = z.enum(
	[
		"CLT",
		"Prestador de Serviços",
		"Estagiário",
		"Jovem Aprendiz",
		"Sócio",
		"Temporário",
		"CLT + Comissão",
	],
	{
		error: () => ({
			message:
				"tipo_contrato: valores válidos são [CLT, Prestador de Serviços, Estagiário, Jovem Aprendiz, Sócio, Temporário, CLT + Comissão]",
		}),
	},
);

export const f_funcionariosUnidadeSchema = z.enum(
	["Matriz", "Loja Centro Lages", "Loja Curitibanos", "Platon"],
	{
		error: () => ({
			message:
				"unidade: valores válidos são [Matriz, Loja Centro Lages, Loja Curitibanos, Platon]",
		}),
	},
);

export const f_funcionariosUniversidadeSchema = z.enum(
	["IFSC", "UNIPLAC", "CIEE", "UNIFACVEST", "Outros"],
	{
		error: () => ({
			message:
				"universidade: valores válidos são [IFSC, UNIPLAC, CIEE, UNIFACVEST, Outros]",
		}),
	},
);

export const f_funcionariosVinculoComColaboradorSchema = z.enum(
	["Pais", "Filho(a) ou Enteado(a)", "Avós", "Conjuge"],
	{
		error: () => ({
			message:
				"vinculo_com_colaborador: valores válidos são [Pais, Filho(a) ou Enteado(a), Avós, Conjuge]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FFuncionariosAtivo = z.infer<typeof f_funcionariosAtivoSchema>;

export type FFuncionariosChecklistAdmissional = z.infer<
	typeof f_funcionariosChecklistAdmissionalSchema
>;

export type FFuncionariosEmpresa = z.infer<typeof f_funcionariosEmpresaSchema>;

export type FFuncionariosEpiCalcado = z.infer<
	typeof f_funcionariosEpiCalcadoSchema
>;

export type FFuncionariosEscolaridade = z.infer<
	typeof f_funcionariosEscolaridadeSchema
>;

export type FFuncionariosEstadoCivil = z.infer<
	typeof f_funcionariosEstadoCivilSchema
>;

export type FFuncionariosGenero = z.infer<typeof f_funcionariosGeneroSchema>;

export type FFuncionariosMobilidade = z.infer<
	typeof f_funcionariosMobilidadeSchema
>;

export type FFuncionariosPcd = z.infer<typeof f_funcionariosPcdSchema>;

export type FFuncionariosPrazoExperiencia = z.infer<
	typeof f_funcionariosPrazoExperienciaSchema
>;

export type FFuncionariosReservista = z.infer<
	typeof f_funcionariosReservistaSchema
>;

export type FFuncionariosSituacaoEscolaridade = z.infer<
	typeof f_funcionariosSituacaoEscolaridadeSchema
>;

export type FFuncionariosTerceiro = z.infer<
	typeof f_funcionariosTerceiroSchema
>;

export type FFuncionariosTipoContrato = z.infer<
	typeof f_funcionariosTipoContratoSchema
>;

export type FFuncionariosUnidade = z.infer<typeof f_funcionariosUnidadeSchema>;

export type FFuncionariosUniversidade = z.infer<
	typeof f_funcionariosUniversidadeSchema
>;

export type FFuncionariosVinculoComColaborador = z.infer<
	typeof f_funcionariosVinculoComColaboradorSchema
>;
