/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CONFIGURACOES_FIELD_LABELS = {
	createdAt: "Criado em",
	createdBy: "Criado por",
	createdById: "createdById",
	f_chave: "Chave",
	f_descricao: "Descrição",
	f_escopo: "Escopo de Utilização",
	f_nome: "Nome da Opção",
	f_valor: "Valor da Opção",
	id: "ID",
	updatedAt: "Última atualização em",
	updatedBy: "Última atualização por",
	updatedById: "updatedById",
} as const;

export const CONFIGURACOES_ESCOPO_LABELS = {
	IXC: "IXCSoft",
	GERAL: "GERAL",
	SPC: "SPCBRASIL",
	ZAPSIGN: "ZAPSIGN",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const configuracoesEscopoSchema = z.enum(
	["IXC", "GERAL", "SPC", "ZAPSIGN"],
	{
		error: () => ({
			message:
				"escopo: valores válidos são [IXCSoft, GERAL, SPCBRASIL, ZAPSIGN]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ConfiguracoesEscopo = z.infer<typeof configuracoesEscopoSchema>;
