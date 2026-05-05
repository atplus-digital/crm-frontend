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
	L: "PPPoE",
	H: "Hotspot",
	M: "IP x MAC",
	V: "VLAN",
	D: "IPoE",
	I: "Integração",
	E: "Externa",
} as const;

export const RADUSUARIOS_AUTENTICACAOPORMAC_LABELS = {
	N: "Não",
	S: "Sim",
	P: "Padrão",
	MK: "Mikrotik",
	UN: "UBNT",
	WP: "WPA2-AES",
} as const;

export const RADUSUARIOS_AUTOPREENCHERIP_LABELS = {
	H: "Configuração padrão",
	S: "Sempre",
	N: "Nunca",
} as const;

export const RADUSUARIOS_AUTOPREENCHERIPV6_LABELS = {
	H: "Configuração padrão",
	S: "Sempre",
	N: "Nunca",
} as const;

export const RADUSUARIOS_AUTOPREENCHERMAC_LABELS = {
	H: "Configuração padrão",
	S: "Sempre",
	N: "Nunca",
} as const;

export const RADUSUARIOS_ENDERECOPADRAOCLIENTE_LABELS = {
	S: "Padrão cliente",
	N: "Manual",
} as const;

export const RADUSUARIOS_FIXARIP_LABELS = {
	H: "Configuração padrão",
	S: "Sempre",
	N: "Nunca",
} as const;

export const RADUSUARIOS_FIXARIPV6_LABELS = {
	H: "Configuração padrão",
	S: "Sempre",
	N: "Nunca",
} as const;

export const RADUSUARIOS_FRAMEDAUTOPREENCHERIPV6_LABELS = {
	H: "Configuração padrão",
	S: "Sempre",
	N: "Nunca",
} as const;

export const RADUSUARIOS_FRAMEDFIXARIPV6_LABELS = {
	H: "Configuração padrão",
	S: "Sempre",
	N: "Nunca",
} as const;

export const RADUSUARIOS_FRAMEDRELACIONARIPV6AOLOGIN_LABELS = {
	H: "Configuração padrão",
	S: "Sempre",
	N: "Nunca",
} as const;

export const RADUSUARIOS_FRANQUIAATINGIDA_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const RADUSUARIOS_ONLINE_LABELS = {
	S: "Sim",
	N: "Não",
	SS: "Sem status",
} as const;

export const RADUSUARIOS_ONUCOMPARTILHADA_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const RADUSUARIOS_PONTA_LABELS = {
	A: "A",
	B: "B",
	C: "C",
} as const;

export const RADUSUARIOS_RELACIONARCONCENTRADORAOLOGIN_LABELS = {
	H: "Configuração padrão",
	S: "Sempre",
	N: "Nunca",
} as const;

export const RADUSUARIOS_RELACIONARIPAOLOGIN_LABELS = {
	H: "Configuração padrão",
	S: "Sempre",
	N: "Nunca",
} as const;

export const RADUSUARIOS_RELACIONARIPV6AOLOGIN_LABELS = {
	H: "Configuração padrão",
	S: "Sempre",
	N: "Nunca",
} as const;

export const RADUSUARIOS_RELACIONARMACAOLOGIN_LABELS = {
	H: "Configuração padrão",
	S: "Sempre",
	N: "Nunca",
} as const;

export const RADUSUARIOS_SENHAMD5_LABELS = {
	N: "Não",
	S: "Sim",
} as const;

export const RADUSUARIOS_TIPOACESSO_LABELS = {
	https: "HTTPS",
	http: "HTTP",
} as const;

export const RADUSUARIOS_TIPOCONEXAOMAPA_LABELS = {
	58: "5.8",
	24: "2.4",
	F: "Fibra",
	L: "Cabo",
	A: "ADSL",
	LTE: "LTE",
	LDD: "Link dedicado",
} as const;

export const RADUSUARIOS_TIPOEQUIPAMENTO_LABELS = {
	C: "Comodato",
	P: "Próprio",
} as const;

export const RADUSUARIOS_TIPOVINCULOPLANO_LABELS = {
	D: "Padrão",
	C: "Contrato",
	P: "Pré-pago",
	G: "Grátis",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const radusuariosAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [Sim, Não]" }),
});

export const radusuariosAutenticacaoSchema = z.enum(
	["L", "H", "M", "V", "D", "I", "E"],
	{
		error: () => ({
			message:
				"autenticacao: valores válidos são [PPPoE, Hotspot, IP x MAC, VLAN, IPoE, Integração, Externa]",
		}),
	},
);

export const radusuariosAutenticacaoPorMacSchema = z.enum(
	["N", "S", "P", "MK", "UN", "WP"],
	{
		error: () => ({
			message:
				"autenticacao_por_mac: valores válidos são [Não, Sim, Padrão, Mikrotik, UBNT, WPA2-AES]",
		}),
	},
);

export const radusuariosAutoPreencherIpSchema = z.enum(["H", "S", "N"], {
	error: () => ({
		message:
			"auto_preencher_ip: valores válidos são [Configuração padrão, Sempre, Nunca]",
	}),
});

export const radusuariosAutoPreencherIpv6Schema = z.enum(["H", "S", "N"], {
	error: () => ({
		message:
			"auto_preencher_ipv6: valores válidos são [Configuração padrão, Sempre, Nunca]",
	}),
});

export const radusuariosAutoPreencherMacSchema = z.enum(["H", "S", "N"], {
	error: () => ({
		message:
			"auto_preencher_mac: valores válidos são [Configuração padrão, Sempre, Nunca]",
	}),
});

export const radusuariosEnderecoPadraoClienteSchema = z.enum(["S", "N"], {
	error: () => ({
		message:
			"endereco_padrao_cliente: valores válidos são [Padrão cliente, Manual]",
	}),
});

export const radusuariosFixarIpSchema = z.enum(["H", "S", "N"], {
	error: () => ({
		message:
			"fixar_ip: valores válidos são [Configuração padrão, Sempre, Nunca]",
	}),
});

export const radusuariosFixarIpv6Schema = z.enum(["H", "S", "N"], {
	error: () => ({
		message:
			"fixar_ipv6: valores válidos são [Configuração padrão, Sempre, Nunca]",
	}),
});

export const radusuariosFramedAutopreencherIpv6Schema = z.enum(
	["H", "S", "N"],
	{
		error: () => ({
			message:
				"framed_autopreencher_ipv6: valores válidos são [Configuração padrão, Sempre, Nunca]",
		}),
	},
);

export const radusuariosFramedFixarIpv6Schema = z.enum(["H", "S", "N"], {
	error: () => ({
		message:
			"framed_fixar_ipv6: valores válidos são [Configuração padrão, Sempre, Nunca]",
	}),
});

export const radusuariosFramedRelacionarIpv6AoLoginSchema = z.enum(
	["H", "S", "N"],
	{
		error: () => ({
			message:
				"framed_relacionar_ipv6_ao_login: valores válidos são [Configuração padrão, Sempre, Nunca]",
		}),
	},
);

export const radusuariosFranquiaAtingidaSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "franquia_atingida: valores válidos são [Sim, Não]",
	}),
});

export const radusuariosOnlineSchema = z.enum(["S", "N", "SS"], {
	error: () => ({
		message: "online: valores válidos são [Sim, Não, Sem status]",
	}),
});

export const radusuariosOnuCompartilhadaSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "onu_compartilhada: valores válidos são [Sim, Não]",
	}),
});

export const radusuariosPontaSchema = z.enum(["A", "B", "C"], {
	error: () => ({ message: "ponta: valores válidos são [A, B, C]" }),
});

export const radusuariosRelacionarConcentradorAoLoginSchema = z.enum(
	["H", "S", "N"],
	{
		error: () => ({
			message:
				"relacionar_concentrador_ao_login: valores válidos são [Configuração padrão, Sempre, Nunca]",
		}),
	},
);

export const radusuariosRelacionarIpAoLoginSchema = z.enum(["H", "S", "N"], {
	error: () => ({
		message:
			"relacionar_ip_ao_login: valores válidos são [Configuração padrão, Sempre, Nunca]",
	}),
});

export const radusuariosRelacionarIpv6AoLoginSchema = z.enum(["H", "S", "N"], {
	error: () => ({
		message:
			"relacionar_ipv6_ao_login: valores válidos são [Configuração padrão, Sempre, Nunca]",
	}),
});

export const radusuariosRelacionarMacAoLoginSchema = z.enum(["H", "S", "N"], {
	error: () => ({
		message:
			"relacionar_mac_ao_login: valores válidos são [Configuração padrão, Sempre, Nunca]",
	}),
});

export const radusuariosSenhaMd5Schema = z.enum(["N", "S"], {
	error: () => ({ message: "senha_md5: valores válidos são [Não, Sim]" }),
});

export const radusuariosTipoAcessoSchema = z.enum(["https", "http"], {
	error: () => ({ message: "tipo_acesso: valores válidos são [HTTPS, HTTP]" }),
});

export const radusuariosTipoConexaoMapaSchema = z.enum(
	["58", "24", "F", "L", "A", "LTE", "LDD"],
	{
		error: () => ({
			message:
				"tipo_conexao_mapa: valores válidos são [5.8, 2.4, Fibra, Cabo, ADSL, LTE, Link dedicado]",
		}),
	},
);

export const radusuariosTipoEquipamentoSchema = z.enum(["C", "P"], {
	error: () => ({
		message: "tipo_equipamento: valores válidos são [Comodato, Próprio]",
	}),
});

export const radusuariosTipoVinculoPlanoSchema = z.enum(["D", "C", "P", "G"], {
	error: () => ({
		message:
			"tipo_vinculo_plano: valores válidos são [Padrão, Contrato, Pré-pago, Grátis]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RadusuariosAtivo = z.infer<typeof radusuariosAtivoSchema>;

export type RadusuariosAutenticacao = z.infer<
	typeof radusuariosAutenticacaoSchema
>;

export type RadusuariosAutenticacaoPorMac = z.infer<
	typeof radusuariosAutenticacaoPorMacSchema
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
