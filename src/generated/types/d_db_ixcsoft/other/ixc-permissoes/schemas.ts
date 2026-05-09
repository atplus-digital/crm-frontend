/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	ixc_permissoesBloquearAcessoFormSchema,
	ixc_permissoesBloquearFormSchema,
	ixc_permissoesBotoesFormularioSchema,
	ixc_permissoesBotoesGridSchema,
	ixc_permissoesCamposFormularioSchema,
	ixc_permissoesFiltrarFiliaisSchema,
	ixc_permissoesMostraOsSemFuncionarioSchema,
	ixc_permissoesTipoBloqueioSchema,
	ixc_permissoesTipoPermissaoSchema,
} from "./labels";

export const IXC_PERMISSOES_TABLE_NAME = "ixc_permissoes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const ixc_permissoesBaseSchema = z.object({
	id: z.number(),
	bloquear_acesso_form: ixc_permissoesBloquearAcessoFormSchema,
	bloquear_form: ixc_permissoesBloquearFormSchema,
	botoes_formulario: ixc_permissoesBotoesFormularioSchema,
	botoes_grid: ixc_permissoesBotoesGridSchema,
	campos_formulario: ixc_permissoesCamposFormularioSchema,
	filtrar_filiais: ixc_permissoesFiltrarFiliaisSchema,
	form: z.string(),
	id_form: z.number(),
	id_grupo: z.number(),
	mostra_os_sem_funcionario: ixc_permissoesMostraOsSemFuncionarioSchema,
	tipo_bloqueio: ixc_permissoesTipoBloqueioSchema,
	tipo_permissao: ixc_permissoesTipoPermissaoSchema,
	usuario: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const ixc_permissoesSchema = ixc_permissoesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const ixc_permissoesCreateSchema = ixc_permissoesSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const ixc_permissoesUpdateSchema = ixc_permissoesCreateSchema.partial();
