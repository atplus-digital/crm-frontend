/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RADUSUARIOS_ATIVO_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const RADUSUARIOS_AUTENTICACAO_LABELS = {
	L: "L",
	M: "M",
	H: "H",
	V: "V",
	D: "D",
	I: "I",
	E: "E",
} as const;

export const RADUSUARIOS_AUTENTICACAOMAC_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADUSUARIOS_AUTENTICACAOPORMAC_LABELS = {
	P: "P",
	N: "N",
	S: "S",
	MK: "MK",
	UN: "UN",
	WP: "WP",
} as const;

export const RADUSUARIOS_AUTENTICACAOWPS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADUSUARIOS_AUTOPREENCHERIP_LABELS = {
	H: "H",
	S: "S",
	N: "N",
} as const;

export const RADUSUARIOS_AUTOPREENCHERIPV6_LABELS = {
	H: "H",
	S: "S",
	N: "N",
} as const;

export const RADUSUARIOS_AUTOPREENCHERMAC_LABELS = {
	H: "H",
	S: "S",
	N: "N",
} as const;

export const RADUSUARIOS_CACHE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADUSUARIOS_CLIENTETEMASENHA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADUSUARIOS_ENDERECOPADRAOCLIENTE_LABELS = {
	S: "S",
	N: "N",
	C: "C",
} as const;

export const RADUSUARIOS_FIXARIP_LABELS = {
	H: "H",
	S: "S",
	N: "N",
} as const;

export const RADUSUARIOS_FIXARIPV6_LABELS = {
	H: "H",
	S: "S",
	N: "N",
} as const;

export const RADUSUARIOS_FRAMEDAUTOPREENCHERIPV6_LABELS = {
	H: "H",
	S: "S",
	N: "N",
} as const;

export const RADUSUARIOS_FRAMEDFIXARIPV6_LABELS = {
	H: "H",
	S: "S",
	N: "N",
} as const;

export const RADUSUARIOS_FRAMEDRELACIONAIPV6AOLOGIN_LABELS = {
	H: "H",
	S: "S",
	N: "N",
} as const;

export const RADUSUARIOS_FRAMEDRELACIONARIPV6AOLOGIN_LABELS = {
	H: "H",
	S: "S",
	N: "N",
} as const;

export const RADUSUARIOS_FRANQUIAATINGIDA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADUSUARIOS_ONLINE_LABELS = {
	S: "S",
	N: "N",
	SS: "SS",
} as const;

export const RADUSUARIOS_ONUCOMPARTILHADA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADUSUARIOS_PONTA_LABELS = {
	A: "A",
	B: "B",
	C: "C",
} as const;

export const RADUSUARIOS_RELACIONARCONCENTRADORAOLOGIN_LABELS = {
	S: "S",
	N: "N",
	H: "H",
} as const;

export const RADUSUARIOS_RELACIONARIPAOLOGIN_LABELS = {
	H: "H",
	S: "S",
	N: "N",
} as const;

export const RADUSUARIOS_RELACIONARIPV6AOLOGIN_LABELS = {
	H: "H",
	S: "S",
	N: "N",
} as const;

export const RADUSUARIOS_RELACIONARMACAOLOGIN_LABELS = {
	H: "H",
	S: "S",
	N: "N",
} as const;

export const RADUSUARIOS_SENHAMD5_LABELS = {
	N: "N",
	S: "S",
} as const;

export const RADUSUARIOS_SERVICETAGVLAN_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADUSUARIOS_TIPOACESSO_LABELS = {
	https: "https",
	http: "http",
} as const;

export const RADUSUARIOS_TIPOCONEXAOMAPA_LABELS = {
	58: "Rádio 5.8",
	24: "Rádio 2.4",
	F: "Fibra",
	L: "L",
	A: "A",
	LTE: "LTE",
	LDD: "Link IP Dedicado",
} as const;

export const RADUSUARIOS_TIPOEQUIPAMENTO_LABELS = {
	C: "C",
	P: "P",
} as const;

export const RADUSUARIOS_TIPOVINCULOPLANO_LABELS = {
	D: "D",
	C: "C",
	P: "P",
	G: "G",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const radusuariosAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [Sim, Não]" }),
});

export const radusuariosAutenticacaoSchema = z.enum(
	["L", "M", "H", "V", "D", "I", "E"],
	{
		error: () => ({
			message: "autenticacao: valores válidos são [L, M, H, V, D, I, E]",
		}),
	},
);

export const radusuariosAutenticacaoMacSchema = z.enum(["S", "N"], {
	error: () => ({ message: "autenticacao_mac: valores válidos são [S, N]" }),
});

export const radusuariosAutenticacaoPorMacSchema = z.enum(
	["P", "N", "S", "MK", "UN", "WP"],
	{
		error: () => ({
			message:
				"autenticacao_por_mac: valores válidos são [P, N, S, MK, UN, WP]",
		}),
	},
);

export const radusuariosAutenticacaoWpsSchema = z.enum(["S", "N"], {
	error: () => ({ message: "autenticacao_wps: valores válidos são [S, N]" }),
});

export const radusuariosAutoPreencherIpSchema = z.enum(["H", "S", "N"], {
	error: () => ({
		message: "auto_preencher_ip: valores válidos são [H, S, N]",
	}),
});

export const radusuariosAutoPreencherIpv6Schema = z.enum(["H", "S", "N"], {
	error: () => ({
		message: "auto_preencher_ipv6: valores válidos são [H, S, N]",
	}),
});

export const radusuariosAutoPreencherMacSchema = z.enum(["H", "S", "N"], {
	error: () => ({
		message: "auto_preencher_mac: valores válidos são [H, S, N]",
	}),
});

export const radusuariosCacheSchema = z.enum(["S", "N"], {
	error: () => ({ message: "cache: valores válidos são [S, N]" }),
});

export const radusuariosClienteTemASenhaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "cliente_tem_a_senha: valores válidos são [S, N]" }),
});

export const radusuariosEnderecoPadraoClienteSchema = z.enum(["S", "N", "C"], {
	error: () => ({
		message: "endereco_padrao_cliente: valores válidos são [S, N, C]",
	}),
});

export const radusuariosFixarIpSchema = z.enum(["H", "S", "N"], {
	error: () => ({ message: "fixar_ip: valores válidos são [H, S, N]" }),
});

export const radusuariosFixarIpv6Schema = z.enum(["H", "S", "N"], {
	error: () => ({ message: "fixar_ipv6: valores válidos são [H, S, N]" }),
});

export const radusuariosFramedAutopreencherIpv6Schema = z.enum(
	["H", "S", "N"],
	{
		error: () => ({
			message: "framed_autopreencher_ipv6: valores válidos são [H, S, N]",
		}),
	},
);

export const radusuariosFramedFixarIpv6Schema = z.enum(["H", "S", "N"], {
	error: () => ({
		message: "framed_fixar_ipv6: valores válidos são [H, S, N]",
	}),
});

export const radusuariosFramedRelacionaIpv6AoLoginSchema = z.enum(
	["H", "S", "N"],
	{
		error: () => ({
			message: "framed_relaciona_ipv6_ao_login: valores válidos são [H, S, N]",
		}),
	},
);

export const radusuariosFramedRelacionarIpv6AoLoginSchema = z.enum(
	["H", "S", "N"],
	{
		error: () => ({
			message: "framed_relacionar_ipv6_ao_login: valores válidos são [H, S, N]",
		}),
	},
);

export const radusuariosFranquiaAtingidaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "franquia_atingida: valores válidos são [S, N]" }),
});

export const radusuariosOnlineSchema = z.enum(["S", "N", "SS"], {
	error: () => ({ message: "online: valores válidos são [S, N, SS]" }),
});

export const radusuariosOnuCompartilhadaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "onu_compartilhada: valores válidos são [S, N]" }),
});

export const radusuariosPontaSchema = z.enum(["A", "B", "C"], {
	error: () => ({ message: "ponta: valores válidos são [A, B, C]" }),
});

export const radusuariosRelacionarConcentradorAoLoginSchema = z.enum(
	["S", "N", "H"],
	{
		error: () => ({
			message:
				"relacionar_concentrador_ao_login: valores válidos são [S, N, H]",
		}),
	},
);

export const radusuariosRelacionarIpAoLoginSchema = z.enum(["H", "S", "N"], {
	error: () => ({
		message: "relacionar_ip_ao_login: valores válidos são [H, S, N]",
	}),
});

export const radusuariosRelacionarIpv6AoLoginSchema = z.enum(["H", "S", "N"], {
	error: () => ({
		message: "relacionar_ipv6_ao_login: valores válidos são [H, S, N]",
	}),
});

export const radusuariosRelacionarMacAoLoginSchema = z.enum(["H", "S", "N"], {
	error: () => ({
		message: "relacionar_mac_ao_login: valores válidos são [H, S, N]",
	}),
});

export const radusuariosSenhaMd5Schema = z.enum(["N", "S"], {
	error: () => ({ message: "senha_md5: valores válidos são [N, S]" }),
});

export const radusuariosServiceTagVlanSchema = z.enum(["S", "N"], {
	error: () => ({ message: "service_tag_vlan: valores válidos são [S, N]" }),
});

export const radusuariosTipoAcessoSchema = z.enum(["https", "http"], {
	error: () => ({ message: "tipo_acesso: valores válidos são [https, http]" }),
});

export const radusuariosTipoConexaoMapaSchema = z.enum(
	["58", "24", "F", "L", "A", "LTE", "LDD"],
	{
		error: () => ({
			message:
				"tipo_conexao_mapa: valores válidos são [Rádio 5.8, Rádio 2.4, Fibra, L, A, LTE, Link IP Dedicado]",
		}),
	},
);

export const radusuariosTipoEquipamentoSchema = z.enum(["C", "P"], {
	error: () => ({ message: "tipo_equipamento: valores válidos são [C, P]" }),
});

export const radusuariosTipoVinculoPlanoSchema = z.enum(["D", "C", "P", "G"], {
	error: () => ({
		message: "tipo_vinculo_plano: valores válidos são [D, C, P, G]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RadusuariosAtivo = z.infer<typeof radusuariosAtivoSchema>;

export type RadusuariosAutenticacao = z.infer<
	typeof radusuariosAutenticacaoSchema
>;

export type RadusuariosAutenticacaoMac = z.infer<
	typeof radusuariosAutenticacaoMacSchema
>;

export type RadusuariosAutenticacaoPorMac = z.infer<
	typeof radusuariosAutenticacaoPorMacSchema
>;

export type RadusuariosAutenticacaoWps = z.infer<
	typeof radusuariosAutenticacaoWpsSchema
>;

export type RadusuariosAutoPreencherIp = z.infer<
	typeof radusuariosAutoPreencherIpSchema
>;

export type RadusuariosAutoPreencherIpv6 = z.infer<
	typeof radusuariosAutoPreencherIpv6Schema
>;

export type RadusuariosAutoPreencherMac = z.infer<
	typeof radusuariosAutoPreencherMacSchema
>;

export type RadusuariosCache = z.infer<typeof radusuariosCacheSchema>;

export type RadusuariosClienteTemASenha = z.infer<
	typeof radusuariosClienteTemASenhaSchema
>;

export type RadusuariosEnderecoPadraoCliente = z.infer<
	typeof radusuariosEnderecoPadraoClienteSchema
>;

export type RadusuariosFixarIp = z.infer<typeof radusuariosFixarIpSchema>;

export type RadusuariosFixarIpv6 = z.infer<typeof radusuariosFixarIpv6Schema>;

export type RadusuariosFramedAutopreencherIpv6 = z.infer<
	typeof radusuariosFramedAutopreencherIpv6Schema
>;

export type RadusuariosFramedFixarIpv6 = z.infer<
	typeof radusuariosFramedFixarIpv6Schema
>;

export type RadusuariosFramedRelacionaIpv6AoLogin = z.infer<
	typeof radusuariosFramedRelacionaIpv6AoLoginSchema
>;

export type RadusuariosFramedRelacionarIpv6AoLogin = z.infer<
	typeof radusuariosFramedRelacionarIpv6AoLoginSchema
>;

export type RadusuariosFranquiaAtingida = z.infer<
	typeof radusuariosFranquiaAtingidaSchema
>;

export type RadusuariosOnline = z.infer<typeof radusuariosOnlineSchema>;

export type RadusuariosOnuCompartilhada = z.infer<
	typeof radusuariosOnuCompartilhadaSchema
>;

export type RadusuariosPonta = z.infer<typeof radusuariosPontaSchema>;

export type RadusuariosRelacionarConcentradorAoLogin = z.infer<
	typeof radusuariosRelacionarConcentradorAoLoginSchema
>;

export type RadusuariosRelacionarIpAoLogin = z.infer<
	typeof radusuariosRelacionarIpAoLoginSchema
>;

export type RadusuariosRelacionarIpv6AoLogin = z.infer<
	typeof radusuariosRelacionarIpv6AoLoginSchema
>;

export type RadusuariosRelacionarMacAoLogin = z.infer<
	typeof radusuariosRelacionarMacAoLoginSchema
>;

export type RadusuariosSenhaMd5 = z.infer<typeof radusuariosSenhaMd5Schema>;

export type RadusuariosServiceTagVlan = z.infer<
	typeof radusuariosServiceTagVlanSchema
>;

export type RadusuariosTipoAcesso = z.infer<typeof radusuariosTipoAcessoSchema>;

export type RadusuariosTipoConexaoMapa = z.infer<
	typeof radusuariosTipoConexaoMapaSchema
>;

export type RadusuariosTipoEquipamento = z.infer<
	typeof radusuariosTipoEquipamentoSchema
>;

export type RadusuariosTipoVinculoPlano = z.infer<
	typeof radusuariosTipoVinculoPlanoSchema
>;
