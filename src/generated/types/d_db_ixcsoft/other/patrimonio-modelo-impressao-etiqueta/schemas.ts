/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	patrimonio_modelo_impressao_etiquetaControleImpressaoSchema,
	patrimonio_modelo_impressao_etiquetaExibirDescricaoCompletaSchema,
	patrimonio_modelo_impressao_etiquetaModeloPadraoSchema,
	patrimonio_modelo_impressao_etiquetaModeloPadraoSistemaSchema,
	patrimonio_modelo_impressao_etiquetaOrigemLogoImpressaoSchema,
	patrimonio_modelo_impressao_etiquetaTamanhoEtiquetaSchema,
	patrimonio_modelo_impressao_etiquetaUtlizarDescricaoSchema,
} from "./labels";

export const PATRIMONIO_MODELO_IMPRESSAO_ETIQUETA_TABLE_NAME =
	"patrimonio_modelo_impressao_etiqueta";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const patrimonio_modelo_impressao_etiquetaBaseSchema = z.object({
	id: z.number(),
	altura_personalizada: z.number(),
	controle_impressao:
		patrimonio_modelo_impressao_etiquetaControleImpressaoSchema,
	criado_por: z.number(),
	data_criacao: z.string(),
	data_ultima_impressao: z.string(),
	descricao: z.string(),
	exibir_descricao_completa:
		patrimonio_modelo_impressao_etiquetaExibirDescricaoCompletaSchema,
	impresso_por: z.number(),
	largura_personalizada: z.number(),
	modelo_padrao: patrimonio_modelo_impressao_etiquetaModeloPadraoSchema,
	modelo_padrao_sistema:
		patrimonio_modelo_impressao_etiquetaModeloPadraoSistemaSchema,
	origem_logo_impressao:
		patrimonio_modelo_impressao_etiquetaOrigemLogoImpressaoSchema,
	qtde_colunas: z.number(),
	tamanho_etiqueta: patrimonio_modelo_impressao_etiquetaTamanhoEtiquetaSchema,
	utlizar_descricao: patrimonio_modelo_impressao_etiquetaUtlizarDescricaoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const patrimonio_modelo_impressao_etiquetaSchema =
	patrimonio_modelo_impressao_etiquetaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const patrimonio_modelo_impressao_etiquetaCreateSchema =
	patrimonio_modelo_impressao_etiquetaSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const patrimonio_modelo_impressao_etiquetaUpdateSchema =
	patrimonio_modelo_impressao_etiquetaCreateSchema.partial();
