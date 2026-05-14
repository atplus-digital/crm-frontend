/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const MODULOSSFP_FIELD_LABELS = {
	createdAt: "Criado em",
	createdBy: "Criado por",
	createdById: "createdById",
	f_alcance: "Alcance",
	f_comprimento_onda_rx: "Comprimento de Onda RX",
	f_comprimento_onda_tx: "Comprimento de Onda TX",
	f_conector_fibra: "Conector da Fibra",
	f_descricao: "Descrição",
	f_fabricante: "Fabricante",
	f_fibras: "Fibras",
	f_formato: "Formato",
	f_id_modulo: "ID Módulo",
	f_interface: "Interface",
	f_local: "Local",
	f_obs: "Observação",
	f_pn: "PN",
	f_sn: "SN",
	f_status: "Status",
	f_taxa: "Taxa",
	f_tipo_fibra: "Tipo de Fibra",
	id: "ID",
	updatedAt: "Última atualização em",
	updatedBy: "Última atualização por",
	updatedById: "updatedById",
} as const;

export const MODULOSSFP_ALCANCE_LABELS = {
	"20km": "20KM",
	"10km": "10KM",
	"40km": "40KM",
	"60km": "60KM",
	"80km": "80KM",
	"100km": "100KM",
	"110km": "110KM",
	"140km": "140KM",
	"100m": "100M",
	"15km": "15KM",
	"0-5km": "0.5KM",
	"1-4km": "1.4KM",
	"300m": "300M",
	"0-8km": "0.8KM",
	"0-3km": "0.3KM",
	"1m": "1M",
} as const;

export const MODULOSSFP_COMPRIMENTOONDARX_LABELS = {
	120: "120",
	550: "550",
	850: "850",
	1270: "1270",
	1309: "1309",
	1310: "1310",
	1330: "1330",
	1360: "1360",
	1490: "1490",
} as const;

export const MODULOSSFP_COMPRIMENTOONDATX_LABELS = {
	550: "550",
	850: "850",
	1250: "1250",
	1270: "1270",
	1291: "1291",
	1295: "1295",
	1310: "1310",
	1311: "1311",
	1330: "1330",
	1360: "1360",
	1490: "1490",
	1510: "1510",
	1550: "1550",
} as const;

export const MODULOSSFP_CONECTORFIBRA_LABELS = {
	lc: "LC",
	mpo: "MPO",
	rj45: "RJ45",
	sc: "SC",
} as const;

export const MODULOSSFP_FIBRAS_LABELS = {
	1: "1",
	2: "2",
} as const;

export const MODULOSSFP_FORMATO_LABELS = {
	qsfp28: "QSFP28",
	sfp: "SFP",
	"sfp-epon": "SFP EPON",
	"sfp-gpon": "SFP GPON",
	"spf-mais": "SPF+",
	xfp: "XFP",
} as const;

export const MODULOSSFP_INTERFACE_LABELS = {
	eletrico: "Elétrico",
	optico: "Óptico",
	"optico-gpon": "Óptico GPON",
} as const;

export const MODULOSSFP_STATUS_LABELS = {
	estoque: "Estoque",
	"em-uso": "Em uso",
} as const;

export const MODULOSSFP_TAXA_LABELS = {
	"125g": "1.25G",
	"100g": "100G",
	"10g": "10G",
	"155mb": "155MB",
	"1g": "1G",
	"25g": "2.5G",
	"45g": "4.5G",
	"6g": "6G",
	"8g": "8G",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const modulos_sfpAlcanceSchema = z.enum(
	[
		"20km",
		"10km",
		"40km",
		"60km",
		"80km",
		"100km",
		"110km",
		"140km",
		"100m",
		"15km",
		"0-5km",
		"1-4km",
		"300m",
		"0-8km",
		"0-3km",
		"1m",
	],
	{
		error: () => ({
			message:
				"alcance: valores válidos são [20KM, 10KM, 40KM, 60KM, 80KM, 100KM, 110KM, 140KM, 100M, 15KM, 0.5KM, 1.4KM, 300M, 0.8KM, 0.3KM, 1M]",
		}),
	},
);

export const modulos_sfpComprimentoOndaRxSchema = z.enum(
	["120", "550", "850", "1270", "1309", "1310", "1330", "1360", "1490"],
	{
		error: () => ({
			message:
				"comprimento_onda_rx: valores válidos são [120, 550, 850, 1270, 1309, 1310, 1330, 1360, 1490]",
		}),
	},
);

export const modulos_sfpComprimentoOndaTxSchema = z.enum(
	[
		"550",
		"850",
		"1250",
		"1270",
		"1291",
		"1295",
		"1310",
		"1311",
		"1330",
		"1360",
		"1490",
		"1510",
		"1550",
	],
	{
		error: () => ({
			message:
				"comprimento_onda_tx: valores válidos são [550, 850, 1250, 1270, 1291, 1295, 1310, 1311, 1330, 1360, 1490, 1510, 1550]",
		}),
	},
);

export const modulos_sfpConectorFibraSchema = z.enum(
	["lc", "mpo", "rj45", "sc"],
	{
		error: () => ({
			message: "conector_fibra: valores válidos são [LC, MPO, RJ45, SC]",
		}),
	},
);

export const modulos_sfpFibrasSchema = z.enum(["1", "2"], {
	error: () => ({ message: "fibras: valores válidos são [1, 2]" }),
});

export const modulos_sfpFormatoSchema = z.enum(
	["qsfp28", "sfp", "sfp-epon", "sfp-gpon", "spf-mais", "xfp"],
	{
		error: () => ({
			message:
				"formato: valores válidos são [QSFP28, SFP, SFP EPON, SFP GPON, SPF+, XFP]",
		}),
	},
);

export const modulos_sfpInterfaceSchema = z.enum(
	["eletrico", "optico", "optico-gpon"],
	{
		error: () => ({
			message: "interface: valores válidos são [Elétrico, Óptico, Óptico GPON]",
		}),
	},
);

export const modulos_sfpStatusSchema = z.enum(["estoque", "em-uso"], {
	error: () => ({ message: "status: valores válidos são [Estoque, Em uso]" }),
});

export const modulos_sfpTaxaSchema = z.enum(
	["125g", "100g", "10g", "155mb", "1g", "25g", "45g", "6g", "8g"],
	{
		error: () => ({
			message:
				"taxa: valores válidos são [1.25G, 100G, 10G, 155MB, 1G, 2.5G, 4.5G, 6G, 8G]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ModulosSfpAlcance = z.infer<typeof modulos_sfpAlcanceSchema>;

export type ModulosSfpComprimentoOndaRx = z.infer<
	typeof modulos_sfpComprimentoOndaRxSchema
>;

export type ModulosSfpComprimentoOndaTx = z.infer<
	typeof modulos_sfpComprimentoOndaTxSchema
>;

export type ModulosSfpConectorFibra = z.infer<
	typeof modulos_sfpConectorFibraSchema
>;

export type ModulosSfpFibras = z.infer<typeof modulos_sfpFibrasSchema>;

export type ModulosSfpFormato = z.infer<typeof modulos_sfpFormatoSchema>;

export type ModulosSfpInterface = z.infer<typeof modulos_sfpInterfaceSchema>;

export type ModulosSfpStatus = z.infer<typeof modulos_sfpStatusSchema>;

export type ModulosSfpTaxa = z.infer<typeof modulos_sfpTaxaSchema>;
