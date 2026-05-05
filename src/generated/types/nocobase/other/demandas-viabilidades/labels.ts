/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const DEMANDASVIABILIDADES_FORMAATENDIMENTO_LABELS = {
	1: "Rede Própria",
	2: "Ultima Milha de Terceiros",
} as const;

export const DEMANDASVIABILIDADES_SERVICOPRETENDIDO_LABELS = {
	1: "Link Dedicado",
	2: "E-Line",
} as const;

export const DEMANDASVIABILIDADES_STATUS_LABELS = {
	1: "Aguardando",
	2: "Viável",
	3: "Não Viável",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const demandas_viabilidadesFormaAtendimentoSchema = z.enum(["1", "2"], {
	error: () => ({
		message:
			"forma_atendimento: valores válidos são [Rede Própria, Ultima Milha de Terceiros]",
	}),
});

export const demandas_viabilidadesServicoPretendidoSchema = z.enum(["1", "2"], {
	error: () => ({
		message: "servico_pretendido: valores válidos são [Link Dedicado, E-Line]",
	}),
});

export const demandas_viabilidadesStatusSchema = z.enum(["1", "2", "3"], {
	error: () => ({
		message: "status: valores válidos são [Aguardando, Viável, Não Viável]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type DemandasViabilidadesFormaAtendimento = z.infer<
	typeof demandas_viabilidadesFormaAtendimentoSchema
>;

export type DemandasViabilidadesServicoPretendido = z.infer<
	typeof demandas_viabilidadesServicoPretendidoSchema
>;

export type DemandasViabilidadesStatus = z.infer<
	typeof demandas_viabilidadesStatusSchema
>;
