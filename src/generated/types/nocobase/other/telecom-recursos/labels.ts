/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const TELECOMRECURSOS_FINALIDADE_LABELS = {
	"3": "Insumo para Serviço",
	"2": "Serviço",
	"4": "Facilidade",
	"1": "Acesso",
} as const;

export const TELECOMRECURSOS_STATUS_LABELS = {
	"1": "Planejado",
	"2": "Ativo",
	"3": "Desativado",
} as const;

export const TELECOMRECURSOS_TIPO_LABELS = {
	"1": "L2 - PTP",
	"13": "L3 - PTP",
	"6": "L2 - P2MP",
	"4": "L2 - Last Mile",
	"2": "L3 - Link IP",
	"7": "L3 - Banda Larga",
	"5": "L1 - Fibra Apagada",
	"8": "L1 - Canal DWDM",
	"3": "Colocation",
	"9": "VPN",
	"10": "Trunk Flex",
	"11": "Transito IP Internet ",
	"12": "Transito IP CDN",
	"14": "Contrato",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const telecom_recursosFinalidadeSchema = z.enum(["3", "2", "4", "1"], {
	error: () => ({
		message:
			"finalidade: valores válidos são [Insumo para Serviço, Serviço, Facilidade, Acesso]",
	}),
});

export const telecom_recursosStatusSchema = z.enum(["1", "2", "3"], {
	error: () => ({
		message: "status: valores válidos são [Planejado, Ativo, Desativado]",
	}),
});

export const telecom_recursosTipoSchema = z.enum(
	["1", "13", "6", "4", "2", "7", "5", "8", "3", "9", "10", "11", "12", "14"],
	{
		error: () => ({
			message:
				"tipo: valores válidos são [L2 - PTP, L3 - PTP, L2 - P2MP, L2 - Last Mile, L3 - Link IP, L3 - Banda Larga, L1 - Fibra Apagada, L1 - Canal DWDM, Colocation, VPN, Trunk Flex, Transito IP Internet , Transito IP CDN, Contrato]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type TelecomRecursosFinalidade = z.infer<
	typeof telecom_recursosFinalidadeSchema
>;

export type TelecomRecursosStatus = z.infer<
	typeof telecom_recursosStatusSchema
>;

export type TelecomRecursosTipo = z.infer<typeof telecom_recursosTipoSchema>;
