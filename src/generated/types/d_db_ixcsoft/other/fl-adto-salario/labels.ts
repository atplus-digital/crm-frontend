/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FLADTOSALARIO_FIELD_LABELS = {
	conta_: "conta_",
	data: "data",
	descricao: "descricao",
	documento: "documento",
	filial_id: "filial_id",
	id: "id",
	id_conta: "id_conta",
	id_funcionario: "id_funcionario",
	tipo_pagamento: "tipo_pagamento",
	valor: "valor",
} as const;

export const FLADTOSALARIO_TIPOPAGAMENTO_LABELS = {
	Dinheiro: "Dinheiro",
	Cheque: "Cheque",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fl_adto_salarioTipoPagamentoSchema = z.enum(
	["Dinheiro", "Cheque"],
	{
		error: () => ({
			message: "tipo_pagamento: valores válidos são [Dinheiro, Cheque]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FlAdtoSalarioTipoPagamento = z.infer<
	typeof fl_adto_salarioTipoPagamentoSchema
>;
