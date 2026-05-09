/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	usuarios_grupo_permissoes_fiberdocsAcessoExclusivoFiberdocsSchema,
	usuarios_grupo_permissoes_fiberdocsConfiguracaoElementoSchema,
	usuarios_grupo_permissoes_fiberdocsConfiguracaoSistemaSchema,
	usuarios_grupo_permissoes_fiberdocsCorrecaoElementosSchema,
	usuarios_grupo_permissoes_fiberdocsEditorFusaoSchema,
	usuarios_grupo_permissoes_fiberdocsElementoCaboSchema,
	usuarios_grupo_permissoes_fiberdocsElementoCaixaAtendimentoSchema,
	usuarios_grupo_permissoes_fiberdocsElementoCaixaEmendaSchema,
	usuarios_grupo_permissoes_fiberdocsElementoCaixaSubterraneaSchema,
	usuarios_grupo_permissoes_fiberdocsElementoLoginSchema,
	usuarios_grupo_permissoes_fiberdocsElementoOnuSchema,
	usuarios_grupo_permissoes_fiberdocsElementoPopSchema,
	usuarios_grupo_permissoes_fiberdocsElementoPosteSchema,
	usuarios_grupo_permissoes_fiberdocsElementoPredioSchema,
	usuarios_grupo_permissoes_fiberdocsElementoRegiaoCoberturaSchema,
	usuarios_grupo_permissoes_fiberdocsExportarElemenetosSchema,
	usuarios_grupo_permissoes_fiberdocsImportarElementosSchema,
	usuarios_grupo_permissoes_fiberdocsMapaConexaoSchema,
	usuarios_grupo_permissoes_fiberdocsMesclarProjetosSchema,
	usuarios_grupo_permissoes_fiberdocsModoDesenhoSchema,
	usuarios_grupo_permissoes_fiberdocsModoEdicaoSchema,
	usuarios_grupo_permissoes_fiberdocsPermitirAcessoTodosProjetosSchema,
	usuarios_grupo_permissoes_fiberdocsPermitirCriarProjetoSchema,
	usuarios_grupo_permissoes_fiberdocsProjetoExecucaoSchema,
} from "./labels";

export const USUARIOS_GRUPO_PERMISSOES_FIBERDOCS_TABLE_NAME =
	"usuarios_grupo_permissoes_fiberdocs";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const usuarios_grupo_permissoes_fiberdocsBaseSchema = z.object({
	id: z.number(),
	acesso_exclusivo_fiberdocs:
		usuarios_grupo_permissoes_fiberdocsAcessoExclusivoFiberdocsSchema,
	configuracao_elemento:
		usuarios_grupo_permissoes_fiberdocsConfiguracaoElementoSchema,
	configuracao_sistema:
		usuarios_grupo_permissoes_fiberdocsConfiguracaoSistemaSchema,
	correcao_elementos:
		usuarios_grupo_permissoes_fiberdocsCorrecaoElementosSchema,
	editor_fusao: usuarios_grupo_permissoes_fiberdocsEditorFusaoSchema,
	elemento_cabo: usuarios_grupo_permissoes_fiberdocsElementoCaboSchema,
	elemento_caixa_atendimento:
		usuarios_grupo_permissoes_fiberdocsElementoCaixaAtendimentoSchema,
	elemento_caixa_emenda:
		usuarios_grupo_permissoes_fiberdocsElementoCaixaEmendaSchema,
	elemento_caixa_subterranea:
		usuarios_grupo_permissoes_fiberdocsElementoCaixaSubterraneaSchema,
	elemento_login: usuarios_grupo_permissoes_fiberdocsElementoLoginSchema,
	elemento_onu: usuarios_grupo_permissoes_fiberdocsElementoOnuSchema,
	elemento_pop: usuarios_grupo_permissoes_fiberdocsElementoPopSchema,
	elemento_poste: usuarios_grupo_permissoes_fiberdocsElementoPosteSchema,
	elemento_predio: usuarios_grupo_permissoes_fiberdocsElementoPredioSchema,
	elemento_regiao_cobertura:
		usuarios_grupo_permissoes_fiberdocsElementoRegiaoCoberturaSchema,
	exportar_elemenetos:
		usuarios_grupo_permissoes_fiberdocsExportarElemenetosSchema,
	id_grupo: z.number(),
	importar_elementos:
		usuarios_grupo_permissoes_fiberdocsImportarElementosSchema,
	mapa_conexao: usuarios_grupo_permissoes_fiberdocsMapaConexaoSchema,
	mesclar_projetos: usuarios_grupo_permissoes_fiberdocsMesclarProjetosSchema,
	modo_desenho: usuarios_grupo_permissoes_fiberdocsModoDesenhoSchema,
	modo_edicao: usuarios_grupo_permissoes_fiberdocsModoEdicaoSchema,
	permitir_acesso_todos_projetos:
		usuarios_grupo_permissoes_fiberdocsPermitirAcessoTodosProjetosSchema,
	permitir_criar_projeto:
		usuarios_grupo_permissoes_fiberdocsPermitirCriarProjetoSchema,
	projeto_execucao: usuarios_grupo_permissoes_fiberdocsProjetoExecucaoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const usuarios_grupo_permissoes_fiberdocsSchema =
	usuarios_grupo_permissoes_fiberdocsBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const usuarios_grupo_permissoes_fiberdocsCreateSchema =
	usuarios_grupo_permissoes_fiberdocsSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const usuarios_grupo_permissoes_fiberdocsUpdateSchema =
	usuarios_grupo_permissoes_fiberdocsCreateSchema.partial();
