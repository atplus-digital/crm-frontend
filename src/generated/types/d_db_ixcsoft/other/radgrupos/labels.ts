/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RADGRUPOS_ALTERACAOVELOCIDADE_LABELS = {
	C: "C",
	P: "P",
} as const;

export const RADGRUPOS_ATIVAPARAMETROV6JUNIPER_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADGRUPOS_ATIVONORMAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADGRUPOS_CISCOATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADGRUPOS_CISCODINAMICQOS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADGRUPOS_CISCOSTATICQOS_LABELS = {
	N: "N",
	S: "S",
} as const;

export const RADGRUPOS_DICITIPOCONEXAOMAPA_LABELS = {
	58: "58",
	24: "24",
	F: "F",
	L: "L",
	A: "A",
	LTE: "LTE",
	LDD: "LDD",
} as const;

export const RADGRUPOS_GERAPARAMACCEL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADGRUPOS_JUNIPERSTATICPOLICY_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADGRUPOS_PRIORIDADE_LABELS = {
	1: "1",
	2: "2",
	3: "3",
	4: "4",
	5: "5",
	6: "6",
	7: "7",
	8: "8",
} as const;

export const RADGRUPOS_QOSATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADGRUPOS_REDATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADGRUPOS_REDPRIORIDADE_LABELS = {
	1: "1",
	2: "2",
	3: "3",
	4: "4",
	5: "5",
	6: "6",
	7: "7",
	8: "8",
} as const;

export const RADGRUPOS_SICIDEDICADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADGRUPOS_TIPO_LABELS = {
	I: "I",
	T: "T",
	S: "S",
} as const;

export const RADGRUPOS_TIPOFRANQUIA_LABELS = {
	M: "M",
	U: "U",
	P: "P",
} as const;

export const RADGRUPOS_TIPOINTEGRACAONEUTRA_LABELS = {
	fibrasil: "fibrasil",
	ixcsoft: "ixcsoft",
} as const;

export const RADGRUPOS_TURATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADGRUPOS_TURPRIORIDADE_LABELS = {
	1: "1",
	2: "2",
	3: "3",
	4: "4",
	5: "5",
	6: "6",
	7: "7",
	8: "8",
} as const;

export const RADGRUPOS_TYPEBANDCONTROL_LABELS = {
	l2: "l2",
	l3: "l3",
} as const;

export const RADGRUPOS_USAACTIVE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADGRUPOS_USAPERFILHUAWEI_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADGRUPOS_USAPERFILHUAWEIDINAMICO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADGRUPOS_USAPERFILNOKIA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADGRUPOS_USAPERFILNOKIADINAMICO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADGRUPOS_USARPERFILNOKIAE_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const radgruposAlteracaoVelocidadeSchema = z.enum(["C", "P"], {
	error: () => ({
		message: "alteracao_velocidade: valores válidos são [C, P]",
	}),
});

export const radgruposAtivaParametroV6JuniperSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "ativa_parametro_v6_juniper: valores válidos são [S, N]",
	}),
});

export const radgruposAtivoNormalSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo_normal: valores válidos são [S, N]" }),
});

export const radgruposCiscoAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "cisco_ativo: valores válidos são [S, N]" }),
});

export const radgruposCiscoDinamicQosSchema = z.enum(["S", "N"], {
	error: () => ({ message: "cisco_dinamic_qos: valores válidos são [S, N]" }),
});

export const radgruposCiscoStaticQosSchema = z.enum(["N", "S"], {
	error: () => ({ message: "cisco_static_qos: valores válidos são [N, S]" }),
});

export const radgruposDiciTipoConexaoMapaSchema = z.enum(
	["58", "24", "F", "L", "A", "LTE", "LDD"],
	{
		error: () => ({
			message:
				"dici_tipo_conexao_mapa: valores válidos são [58, 24, F, L, A, LTE, LDD]",
		}),
	},
);

export const radgruposGeraParamAccelSchema = z.enum(["S", "N"], {
	error: () => ({ message: "gera_param_accel: valores válidos são [S, N]" }),
});

export const radgruposJuniperStaticPolicySchema = z.enum(["S", "N"], {
	error: () => ({
		message: "juniper_static_policy: valores válidos são [S, N]",
	}),
});

export const radgruposPrioridadeSchema = z.enum(
	["1", "2", "3", "4", "5", "6", "7", "8"],
	{
		error: () => ({
			message: "prioridade: valores válidos são [1, 2, 3, 4, 5, 6, 7, 8]",
		}),
	},
);

export const radgruposQosAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "qos_ativo: valores válidos são [S, N]" }),
});

export const radgruposRedAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "red_ativo: valores válidos são [S, N]" }),
});

export const radgruposRedPrioridadeSchema = z.enum(
	["1", "2", "3", "4", "5", "6", "7", "8"],
	{
		error: () => ({
			message: "red_prioridade: valores válidos são [1, 2, 3, 4, 5, 6, 7, 8]",
		}),
	},
);

export const radgruposSiciDedicadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "sici_dedicado: valores válidos são [S, N]" }),
});

export const radgruposTipoSchema = z.enum(["I", "T", "S"], {
	error: () => ({ message: "tipo: valores válidos são [I, T, S]" }),
});

export const radgruposTipoFranquiaSchema = z.enum(["M", "U", "P"], {
	error: () => ({ message: "tipo_franquia: valores válidos são [M, U, P]" }),
});

export const radgruposTipoIntegracaoNeutraSchema = z.enum(
	["fibrasil", "ixcsoft"],
	{
		error: () => ({
			message:
				"tipo_integracao_neutra: valores válidos são [fibrasil, ixcsoft]",
		}),
	},
);

export const radgruposTurAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "tur_ativo: valores válidos são [S, N]" }),
});

export const radgruposTurPrioridadeSchema = z.enum(
	["1", "2", "3", "4", "5", "6", "7", "8"],
	{
		error: () => ({
			message: "tur_prioridade: valores válidos são [1, 2, 3, 4, 5, 6, 7, 8]",
		}),
	},
);

export const radgruposTypeBandControlSchema = z.enum(["l2", "l3"], {
	error: () => ({ message: "type_band_control: valores válidos são [l2, l3]" }),
});

export const radgruposUsaActiveSchema = z.enum(["S", "N"], {
	error: () => ({ message: "usa_active: valores válidos são [S, N]" }),
});

export const radgruposUsaPerfilHuaweiSchema = z.enum(["S", "N"], {
	error: () => ({ message: "usa_perfil_huawei: valores válidos são [S, N]" }),
});

export const radgruposUsaPerfilHuaweiDinamicoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "usa_perfil_huawei_dinamico: valores válidos são [S, N]",
	}),
});

export const radgruposUsaPerfilNokiaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "usa_perfil_nokia: valores válidos são [S, N]" }),
});

export const radgruposUsaPerfilNokiaDinamicoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "usa_perfil_nokia_dinamico: valores válidos são [S, N]",
	}),
});

export const radgruposUsarPerfilNokiaESchema = z.enum(["S", "N"], {
	error: () => ({ message: "usar_perfil_nokia_e: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RadgruposAlteracaoVelocidade = z.infer<
	typeof radgruposAlteracaoVelocidadeSchema
>;

export type RadgruposAtivaParametroV6Juniper = z.infer<
	typeof radgruposAtivaParametroV6JuniperSchema
>;

export type RadgruposAtivoNormal = z.infer<typeof radgruposAtivoNormalSchema>;

export type RadgruposCiscoAtivo = z.infer<typeof radgruposCiscoAtivoSchema>;

export type RadgruposCiscoDinamicQos = z.infer<
	typeof radgruposCiscoDinamicQosSchema
>;

export type RadgruposCiscoStaticQos = z.infer<
	typeof radgruposCiscoStaticQosSchema
>;

export type RadgruposDiciTipoConexaoMapa = z.infer<
	typeof radgruposDiciTipoConexaoMapaSchema
>;

export type RadgruposGeraParamAccel = z.infer<
	typeof radgruposGeraParamAccelSchema
>;

export type RadgruposJuniperStaticPolicy = z.infer<
	typeof radgruposJuniperStaticPolicySchema
>;

export type RadgruposPrioridade = z.infer<typeof radgruposPrioridadeSchema>;

export type RadgruposQosAtivo = z.infer<typeof radgruposQosAtivoSchema>;

export type RadgruposRedAtivo = z.infer<typeof radgruposRedAtivoSchema>;

export type RadgruposRedPrioridade = z.infer<
	typeof radgruposRedPrioridadeSchema
>;

export type RadgruposSiciDedicado = z.infer<typeof radgruposSiciDedicadoSchema>;

export type RadgruposTipo = z.infer<typeof radgruposTipoSchema>;

export type RadgruposTipoFranquia = z.infer<typeof radgruposTipoFranquiaSchema>;

export type RadgruposTipoIntegracaoNeutra = z.infer<
	typeof radgruposTipoIntegracaoNeutraSchema
>;

export type RadgruposTurAtivo = z.infer<typeof radgruposTurAtivoSchema>;

export type RadgruposTurPrioridade = z.infer<
	typeof radgruposTurPrioridadeSchema
>;

export type RadgruposTypeBandControl = z.infer<
	typeof radgruposTypeBandControlSchema
>;

export type RadgruposUsaActive = z.infer<typeof radgruposUsaActiveSchema>;

export type RadgruposUsaPerfilHuawei = z.infer<
	typeof radgruposUsaPerfilHuaweiSchema
>;

export type RadgruposUsaPerfilHuaweiDinamico = z.infer<
	typeof radgruposUsaPerfilHuaweiDinamicoSchema
>;

export type RadgruposUsaPerfilNokia = z.infer<
	typeof radgruposUsaPerfilNokiaSchema
>;

export type RadgruposUsaPerfilNokiaDinamico = z.infer<
	typeof radgruposUsaPerfilNokiaDinamicoSchema
>;

export type RadgruposUsarPerfilNokiaE = z.infer<
	typeof radgruposUsarPerfilNokiaESchema
>;
