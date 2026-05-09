/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const GERACAOVINCULOCONVENIONFCONTRATO_TIPOCOBRANCA_LABELS = {
	Pos: "Pos",
	Pre: "Pre",
	P: "P",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const geracao_vinculo_convenio_nf_contratoTipoCobrancaSchema = z.enum(
	["Pos", "Pre", "P"],
	{
		error: () => ({
			message: "tipo_cobranca: valores válidos são [Pos, Pre, P]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type GeracaoVinculoConvenioNfContratoTipoCobranca = z.infer<
	typeof geracao_vinculo_convenio_nf_contratoTipoCobrancaSchema
>;
