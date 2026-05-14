/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CLIENTECONTRATOSERVICOSADICIONAISINTEGRADOR_FIELD_LABELS = {
	aviso_email: "aviso_email",
	aviso_email_excedido: "aviso_email_excedido",
	aviso_limite: "aviso_limite",
	descricao: "descricao",
	id: "id",
	nome: "nome",
	plataforma_integracao: "plataforma_integracao",
} as const;

export const CLIENTECONTRATOSERVICOSADICIONAISINTEGRADOR_PLATAFORMAINTEGRACAO_LABELS =
	{
		zapsign: "zapsign",
		dialog360: "dialog360",
		opa_ia: "opa_ia",
		ixcsign: "ixcsign",
		ixcacs: "ixcacs",
		olli: "olli",
	} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const cliente_contrato_servicos_adicionais_integradorPlataformaIntegracaoSchema =
	z.enum(["zapsign", "dialog360", "opa_ia", "ixcsign", "ixcacs", "olli"], {
		error: () => ({
			message:
				"plataforma_integracao: valores válidos são [zapsign, dialog360, opa_ia, ixcsign, ixcacs, olli]",
		}),
	});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ClienteContratoServicosAdicionaisIntegradorPlataformaIntegracao =
	z.infer<
		typeof cliente_contrato_servicos_adicionais_integradorPlataformaIntegracaoSchema
	>;
