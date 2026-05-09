/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	sva_usuariosAutenticacaoSchema,
	sva_usuariosStatusIntegracaoSchema,
	sva_usuariosTipoComunicacaoSchema,
	sva_usuariosUsarEmailSchema,
} from "./labels";

export const SVA_USUARIOS_TABLE_NAME = "sva_usuarios";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const sva_usuariosBaseSchema = z.object({
	id: z.number(),
	autenticacao: sva_usuariosAutenticacaoSchema,
	cnpj_cpf: z.string(),
	created_at: z.string(),
	criado_em: z.string(),
	id_contrato: z.number(),
	id_integracao: z.number(),
	id_produto_contrato: z.number(),
	msisdn: z.string(),
	quantidade_dispositivos: z.number(),
	redirect_url: z.string(),
	senha: z.string(),
	status_integracao: sva_usuariosStatusIntegracaoSchema,
	sub_dominio: z.string(),
	subscription_id: z.string(),
	tipo_comunicacao: sva_usuariosTipoComunicacaoSchema,
	tipo_dispositivo: z.string(),
	usar_email: sva_usuariosUsarEmailSchema,
	user: z.string(),
	user_id: z.string(),
	usuarios_adicionais: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const sva_usuariosSchema = sva_usuariosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const sva_usuariosCreateSchema = sva_usuariosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const sva_usuariosUpdateSchema = sva_usuariosCreateSchema.partial();
