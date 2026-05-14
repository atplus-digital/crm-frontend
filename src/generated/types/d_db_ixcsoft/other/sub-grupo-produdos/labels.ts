/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SUBGRUPOPRODUDOS_FIELD_LABELS = {
	codigo_alternativo: "codigo_alternativo",
	ecommerce: "ecommerce",
	id: "id",
	id_centro_resultado_rel_centro_custo_categoria_padrao:
		"id_centro_resultado_rel_centro_custo_categoria_padrao",
	id_classe_financeira: "id_classe_financeira",
	id_conta_comodato: "id_conta_comodato",
	id_conta_despesa: "id_conta_despesa",
	id_conta_estoque: "id_conta_estoque",
	id_conta_receita: "id_conta_receita",
	id_conta_receita2: "id_conta_receita2",
	id_grupo: "id_grupo",
	margem_lucro: "margem_lucro",
	sub_grupo: "sub_grupo",
	tipo_produto: "tipo_produto",
} as const;

export const SUBGRUPOPRODUDOS_ECOMMERCE_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const sub_grupo_produdosEcommerceSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ecommerce: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type SubGrupoProdudosEcommerce = z.infer<
	typeof sub_grupo_produdosEcommerceSchema
>;
