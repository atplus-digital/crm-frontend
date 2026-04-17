/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Empresas } from "./empresas";
import type { Negociacoes } from "./negociacoes";
import type { Pessoas } from "./pessoas";
import type { Users } from "./users";

export interface ColaboradoresDoSetor {
	f_fk_colaboradores_setor_1: number;
	f_fk_colaboradores_setor_2: number;
}

export type ColaboradoresDoSetorRelations = Record<string, never>;

export type ColaboradoresDoSetorRelationKey =
	keyof ColaboradoresDoSetorRelations;

export interface ColaboradoresXSetor {
	f_fk_colaboradores_setor_1: number;
	f_fk_colaboradores_setor_2: number;
}

export type ColaboradoresXSetorRelations = Record<string, never>;

export type ColaboradoresXSetorRelationKey = keyof ColaboradoresXSetorRelations;

export interface Departments {
	id: number;
	sort: number;
	isLeaf: boolean;
	title: string;
	updatedById: number | null;
	createdById: number | null;
}

export interface DepartmentsRelations {
	children?: Departments[];
	createdBy?: Users | null;
	members?: Users[];
	owners?: Users[];
	parent?: Departments | null;
	roles?: Roles[];
	updatedBy?: Users | null;
}

export type DepartmentsRelationKey = keyof DepartmentsRelations;

export interface EventosDemanda {
	f_fk1_eventos_demanda: number;
	f_fk2_eventos_demanda: number;
}

export type EventosDemandaRelations = Record<string, never>;

export type EventosDemandaRelationKey = keyof EventosDemandaRelations;

export interface FContatos {
	id: number;
	f_contato: string;
	f_nome: string;
	updatedAt: string;
	createdAt: string;
}

export interface FContatosRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type FContatosRelationKey = keyof FContatosRelations;

export interface FFkOrigemTipos {
	f_fk1_origem_tipo: number;
	f_fk2_origem_tipo: number;
}

export type FFkOrigemTiposRelations = Record<string, never>;

export type FFkOrigemTiposRelationKey = keyof FFkOrigemTiposRelations;

export interface FFuncionarios {
	id: number;
	f_fk_funcionarios: number;
	f_fk_funcionarios2: number;
	f_fk_setor: number;
	f_fk_turnos: number;
	f_id_tecnico_ixc: number;
	f_ativo: string;
	f_bairro: string;
	f_celular: string;
	f_cep: string;
	f_checklist_admissional: string[];
	f_cnh: string;
	f_cnpj: string;
	f_conta_salario_pix: string;
	f_cpf: string;
	f_curso: string;
	f_data_admissao: string;
	f_data_demissao: string;
	f_data_nascimento: string;
	f_email_corporativo: string;
	f_email_pessoal: string;
	f_empresa: string;
	f_endereco: string;
	f_endereco_cidade: string;
	f_endereco_cnpj: string;
	f_endereco_complemento: string;
	f_endereco_estado: string;
	f_endereco_numero: string;
	f_endereco_referencia: string;
	f_epi_calca: string;
	f_epi_calcado: string;
	f_epi_jaleco: string;
	f_escolaridade: string;
	f_estado_civil: string;
	f_genero: string;
	f_mes_nascimento: string;
	f_mobilidade: string;
	f_motivo_demissao: string;
	f_nacionalidade: string;
	f_naturalidade: string;
	f_nome: string;
	f_nome_contato_emergencia: string;
	f_orgao_expedidor: string;
	f_pcd: string;
	f_razao_social: string;
	f_reservista: string;
	f_rg: string;
	f_secao_eleitoral: string;
	f_situacao_escolaridade: string;
	f_telefone_emergencia: string;
	f_terceiro: string;
	f_tipo_contrato: string;
	f_tipo_deficiencia: string;
	f_titulo_eleitor: string;
	f_unidade: string;
	f_universidade: string;
	f_valor_rescisao: number;
	f_vencimento_contrato: string;
	f_vinculo_com_colaborador: string;
	f_zona_eleitoral: string;
	updatedAt: string;
	createdAt: string;
}

export interface FFuncionariosRelations {
	createdBy?: Users | null;
	f_aniversarios?: Aniversarios[];
	f_arquivos_funcionarios?: ArquivosFuncionarios[];
	f_asos?: Asos[];
	f_cargo?: Cargos | null;
	f_chip_corporativo?: LinhaCorporativa[];
	f_departamento?: Departamentos | null;
	f_foto_funcionarios?: FotoFuncionarios[];
	f_info_arquivos?: InfoArquivos[];
	f_info_aso?: InfoAso[];
	f_logs_cargos?: LogsCargos[];
	f_parentesco?: Parentesco[];
	f_patrimonio_funcionarios?: Patrimonio[];
	f_periodos_ferias?: PeriodosFerias[];
	f_qualirun_processos?: QualirunProcessos[];
	f_turnos?: Turnos | null;
	t_qualirun_info_adicionais?: QualirunInfoAdicionais[];
	updatedBy?: Users | null;
}

export type FFuncionariosRelationKey = keyof FFuncionariosRelations;

export interface FRecursosFilho {
	f_7q4zyk2d0kz: number;
	f_cn2m4i1kpqo: number;
}

export type FRecursosFilhoRelations = Record<string, never>;

export type FRecursosFilhoRelationKey = keyof FRecursosFilhoRelations;

export interface InterfacesEquipamentos {
	f_fk_equipamentos_interfaces_1: number;
	f_fk_equipamentos_interfaces_2: number;
}

export type InterfacesEquipamentosRelations = Record<string, never>;

export type InterfacesEquipamentosRelationKey =
	keyof InterfacesEquipamentosRelations;

export interface LinksIndicadoresUsuarios {
	f_fk_links_usuarios_1: number;
	f_fk_links_usuarios_2: number;
}

export type LinksIndicadoresUsuariosRelations = Record<string, never>;

export type LinksIndicadoresUsuariosRelationKey =
	keyof LinksIndicadoresUsuariosRelations;

export interface OrigemXTipos {
	f_fk_origem_tipo_1: number;
	f_fk_origem_tipo_2: number;
}

export type OrigemXTiposRelations = Record<string, never>;

export type OrigemXTiposRelationKey = keyof OrigemXTiposRelations;

export interface Roles {
	sort: number;
	allowConfigure: boolean;
	allowNewMenu: boolean;
	allowNewMobileMenu: boolean;
	default: boolean;
	description: string;
	hidden: boolean;
	name: string;
	snippets: unknown[];
	strategy: Record<string, unknown>;
	title: string;
}

export interface RolesRelations {
	menuUiSchemas?: unknown[];
	mobileRoutes?: unknown[];
	resources?: unknown[];
	users?: Users[];
}

export type RolesRelationKey = keyof RolesRelations;

export interface _3advfk0gv0z {
	f_fk_insumos_servicos: number;
	f_fk_servicos_insumos: number;
}

export type _3advfk0gv0zRelations = Record<string, never>;

export type _3advfk0gv0zRelationKey = keyof _3advfk0gv0zRelations;

export interface _902ctke5dhq {
	id: number;
	updatedAt: string;
	createdAt: string;
}

export interface _902ctke5dhqRelations {
	createdBy?: Users | null;
	f_bmu9tsi11d4?: P10scfhrhkw | null;
	updatedBy?: Users | null;
}

export type _902ctke5dhqRelationKey = keyof _902ctke5dhqRelations;

export interface Acessos {
	id: number;
	f_fk_servicos_x_acessos: number;
	f_fk_site: number;
	f_tipo: string;
	f_x7w60fv71f9: number;
	updatedAt: string;
	createdAt: string;
}

export interface AcessosRelations {
	createdBy?: Users | null;
	f_equipamento?: Equipamentos | null;
	f_insumos?: Servicos[];
	f_interface?: TelecomInterfaces | null;
	f_site?: Sites | null;
	f_xzuv9d6zkhr?: Servicos | null;
	updatedBy?: Users | null;
}

export type AcessosRelationKey = keyof AcessosRelations;

export interface Aegis {
	id: number;
	f_idlogin: string;
	f_notas: string;
	f_notas_cliente: string;
	f_statusdesbloqueioconfiaca: string;
	f_statuslogin: string;
	f_statusmac: string;
	updatedAt: string;
	createdAt: string;
}

export interface AegisRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type AegisRelationKey = keyof AegisRelations;

export interface AnexosNegociacoes {
	id: number;
	extname: string;
	f_anexos_fk: number;
	filename: string;
	meta: Record<string, unknown>;
	mimetype: string;
	path: string;
	preview: string;
	size: number;
	storageId: number;
	title: string;
	url: string;
	updatedAt: string;
	createdAt: string;
}

export interface AnexosNegociacoesRelations {
	createdBy?: Users | null;
	storage?: unknown | null;
	updatedBy?: Users | null;
}

export type AnexosNegociacoesRelationKey = keyof AnexosNegociacoesRelations;

export interface AnexosTrocaTitularidade {
	id: number;
	extname: string;
	f_anexos_fk: number;
	filename: string;
	meta: Record<string, unknown>;
	mimetype: string;
	path: string;
	preview: string;
	size: number;
	storageId: number;
	title: string;
	url: string;
	updatedAt: string;
	createdAt: string;
}

export interface AnexosTrocaTitularidadeRelations {
	createdBy?: Users | null;
	storage?: unknown | null;
	updatedBy?: Users | null;
}

export type AnexosTrocaTitularidadeRelationKey =
	keyof AnexosTrocaTitularidadeRelations;

export interface Aniversarios {
	id: number;
	f_fk_funcionarios: number;
	f_data_execucao: string;
	f_dia_mes: string;
	f_status: string;
	updatedAt: string;
	createdAt: string;
}

export interface AniversariosRelations {
	createdBy?: Users | null;
	f_foto_aniversario?: FotoAniversario | null;
	f_funcionarios?: FFuncionarios | null;
	updatedBy?: Users | null;
}

export type AniversariosRelationKey = keyof AniversariosRelations;

export interface ArquivosFuncionarios {
	id: number;
	f_fk_funcionarios: number;
	f_fk_info_arquivos: number;
	extname: string;
	filename: string;
	meta: Record<string, unknown>;
	mimetype: string;
	path: string;
	preview: string;
	size: number;
	title: string;
	url: string;
	updatedAt: string;
	createdAt: string;
}

export interface ArquivosFuncionariosRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios | null;
	f_info_arquivos?: InfoArquivos | null;
	storage?: unknown | null;
	updatedBy?: Users | null;
}

export type ArquivosFuncionariosRelationKey =
	keyof ArquivosFuncionariosRelations;

export interface Asos {
	id: number;
	f_fk_funcionarios: number;
	f_fk_infos_aso: number;
	extname: string;
	filename: string;
	meta: Record<string, unknown>;
	mimetype: string;
	path: string;
	preview: string;
	size: number;
	title: string;
	url: string;
	updatedAt: string;
	createdAt: string;
}

export interface AsosRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios | null;
	f_info_aso?: InfoAso | null;
	storage?: unknown | null;
	updatedBy?: Users | null;
}

export type AsosRelationKey = keyof AsosRelations;

export interface AtendimentosIxc {
	id: number;
	f_assunto: string;
	f_cliente: string;
	f_contrato: string;
	f_datafim: string;
	f_datainicio: string;
	f_departamento: string;
	f_descricao: string;
	f_diagnosticos: string;
	f_finalizaatendimento: boolean;
	f_id_login: string;
	f_idatendimento: string;
	f_idcliente: string;
	f_idos: string;
	f_prioridade: string;
	f_processo: string;
	f_responsavel: string;
	f_tarefas: string;
	f_usuario: string;
	updatedAt: string;
	createdAt: string;
}

export interface AtendimentosIxcRelations {
	createdBy?: Users | null;
	f_templates_atendimentos?: TemplatesAtendimentoN1[];
	updatedBy?: Users | null;
}

export type AtendimentosIxcRelationKey = keyof AtendimentosIxcRelations;

export interface AuditoriaAutomatica {
	id: number;
	f_conferencia: boolean;
	f_id_negociacao: number;
	f_titulo_negociacao: string;
	f_valor_mensal: number;
	updatedAt: string;
	createdAt: string;
}

export interface AuditoriaAutomaticaRelations {
	createdBy?: Users | null;
	f_negociacoes?: Negociacoes | null;
	updatedBy?: Users | null;
}

export type AuditoriaAutomaticaRelationKey = keyof AuditoriaAutomaticaRelations;

export interface Cargos {
	id: number;
	f_fk_funcionarios: number;
	f_atividades: string;
	f_cbo: string;
	f_descricao: string;
	f_nome: string;
	updatedAt: string;
	createdAt: string;
}

export interface CargosRelations {
	createdBy?: Users | null;
	f_responsavel?: Users | null;
	updatedBy?: Users | null;
}

export type CargosRelationKey = keyof CargosRelations;

export interface ComentarioViagem {
	id: number;
	f_comentario: string;
	f_comentario_viagem: number;
	updatedAt: string;
	createdAt: string;
}

export interface ComentarioViagemRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type ComentarioViagemRelationKey = keyof ComentarioViagemRelations;

export interface ComentariosCompras {
	id: number;
	f_comentarios: string;
	f_comentarios_compras: number;
	updatedAt: string;
	createdAt: string;
}

export interface ComentariosComprasRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type ComentariosComprasRelationKey = keyof ComentariosComprasRelations;

export interface ComentariosSuspensaoDeContrato {
	id: number;
	f_fk_suspensao: number;
	f_comentario: string;
	updatedAt: string;
	createdAt: string;
}

export interface ComentariosSuspensaoDeContratoRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type ComentariosSuspensaoDeContratoRelationKey =
	keyof ComentariosSuspensaoDeContratoRelations;

export interface ComprasFornecedores {
	id: number;
	f_contato: string;
	f_nome: string;
	f_site: string;
	updatedAt: string;
	createdAt: string;
}

export interface ComprasFornecedoresRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type ComprasFornecedoresRelationKey = keyof ComprasFornecedoresRelations;

export interface ComprasProdutos {
	id: number;
	f_834gi7nhict: number;
	f_link_produto: string;
	f_produto: string;
	f_quantidade: number;
	f_sub_total: string;
	f_valor_uni: number;
	updatedAt: string;
	createdAt: string;
}

export interface ComprasProdutosRelations {
	createdBy?: Users | null;
	f_fk_produtos_solicitacao_compra?: SolicitacaoCompras | null;
	updatedBy?: Users | null;
}

export type ComprasProdutosRelationKey = keyof ComprasProdutosRelations;

export interface Configuracoes {
	id: number;
	f_chave: string;
	f_descricao: string;
	f_escopo: string[];
	f_nome: string;
	f_valor: string;
	updatedAt: string;
	createdAt: string;
}

export interface ConfiguracoesRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type ConfiguracoesRelationKey = keyof ConfiguracoesRelations;

export interface ConsultasPf {
	id: number;
	f_id_pessoa_fk: number;
	f_justificativa: string;
	f_retorno_spc: string;
	f_status_consulta: string;
	updatedAt: string;
	createdAt: string;
}

export interface ConsultasPfRelations {
	createdBy?: Users | null;
	f_id_pessoa?: Pessoas | null;
	updatedBy?: Users | null;
}

export type ConsultasPfRelationKey = keyof ConsultasPfRelations;

export interface ContratoIxcItens {
	id: number;
	f_fk_itens_contrato_ixc: number;
	f_id_produto_contrato_ixc: string;
	f_mensalidade: string;
	f_produto: string;
	f_quantidade: string;
	updatedAt: string;
	createdAt: string;
}

export interface ContratoIxcItensRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type ContratoIxcItensRelationKey = keyof ContratoIxcItensRelations;

export interface Contratos {
	id: number;
	f_fk_negociacao_contrato: number;
	f_fk_suspensao: number;
	extname: string;
	filename: string;
	meta: Record<string, unknown>;
	mimetype: string;
	path: string;
	preview: string;
	size: number;
	storageId: number;
	title: string;
	url: string;
	updatedAt: string;
	createdAt: string;
}

export interface ContratosRelations {
	createdBy?: Users | null;
	storage?: unknown | null;
	updatedBy?: Users | null;
}

export type ContratosRelationKey = keyof ContratosRelations;

export interface ContratosIxc {
	id: number;
	f_descricao: string;
	f_expiracao: string;
	f_vencimento: string;
	updatedAt: string;
	createdAt: string;
}

export interface ContratosIxcRelations {
	createdBy?: Users | null;
	f_itens_contrato?: ContratoIxcItens[];
	updatedBy?: Users | null;
}

export type ContratosIxcRelationKey = keyof ContratosIxcRelations;

export interface CuponsDesconto {
	id: number;
	f_fk_pacotes_desconto: number;
	f_fk_vendedor_desconto: number;
	f_cep: string;
	f_codigo: string;
	f_data_fim: string;
	f_data_inicio: string;
	f_endereco: string;
	f_endereco_numero: string;
	f_nome: string;
	f_status: string;
	f_tipo: string;
	f_tipo_negociacao: string;
	f_utilizacoes: number;
	f_valor: number;
	f_valor_renovacao: number;
	updatedAt: string;
	createdAt: string;
}

export interface CuponsDescontoRelations {
	createdBy?: Users | null;
	f_pacotes?: Pacotes[];
	f_vendedor?: Users[];
	updatedBy?: Users | null;
}

export type CuponsDescontoRelationKey = keyof CuponsDescontoRelations;

export interface DadosAdicionaisClienteContrato {
	id: number;
	f_forma_de_pagamento: string;
	f_id_cliente_contrato: number;
	f_origem_cliente: string;
	f_perfil_de_uso: string[];
	f_pessoas_na_residencia: number;
	updatedAt: string;
	createdAt: string;
}

export interface DadosAdicionaisClienteContratoRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type DadosAdicionaisClienteContratoRelationKey =
	keyof DadosAdicionaisClienteContratoRelations;

export interface DatacenterMemorias {
	id: number;
	f_fk_memorias: number;
	f_capacidade: string;
	f_fabricante: string;
	f_sn: string;
	f_status: string;
	f_tipo: string;
	f_valor_locacao: number;
	updatedAt: string;
	createdAt: string;
}

export interface DatacenterMemoriasRelations {
	createdBy?: Users | null;
	f_fk_servidor?: DcServidores | null;
	updatedBy?: Users | null;
}

export type DatacenterMemoriasRelationKey = keyof DatacenterMemoriasRelations;

export interface DcServidores {
	id: number;
	f_fk_discos: number;
	f_fabricante: string;
	f_memoria: string;
	f_modelo: string;
	f_obs: string;
	f_processador: string;
	f_sn: string;
	f_status: string;
	updatedAt: string;
	createdAt: string;
}

export interface DcServidoresRelations {
	createdBy?: Users | null;
	f_discos?: Discos[];
	f_memorias?: DatacenterMemorias[];
	updatedBy?: Users | null;
}

export type DcServidoresRelationKey = keyof DcServidoresRelations;

export interface DemandasViabilidades {
	id: number;
	f_fk_viabilidades: number;
	f_custo_recorrente: number;
	f_endereco: string;
	f_forma_atendimento: string;
	f_localizacao: string;
	f_servico_pretendido: string;
	f_status: string;
	f_valor_investimento: number;
	f_velocidade_pretendida: string;
	updatedAt: string;
	createdAt: string;
}

export interface DemandasViabilidadesRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type DemandasViabilidadesRelationKey =
	keyof DemandasViabilidadesRelations;

export interface Departamentos {
	id: number;
	f_fk_funcionarios: number;
	f_nome: string;
	updatedAt: string;
	createdAt: string;
}

export interface DepartamentosRelations {
	createdBy?: Users | null;
	f_responsavel?: Users | null;
	updatedBy?: Users | null;
}

export type DepartamentosRelationKey = keyof DepartamentosRelations;

export interface Discos {
	id: number;
	f_fk_discos: number;
	f_capacidade: string;
	f_data_aquisicao: string;
	f_fornecedor: string;
	f_modelo: string;
	f_preco_compra: number;
	f_preco_venda_locacao: number;
	f_SN: string;
	f_tipo: string;
	updatedAt: string;
	createdAt: string;
}

export interface DiscosRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type DiscosRelationKey = keyof DiscosRelations;

export interface Equipamentos {
	id: number;
	f_fk_ativo_rack: number;
	f_fk_equipamentos_anexos: number;
	f_fk_equipamentos_interfaces: number;
	f_34u76klwxoj: number;
	f_modelo: string;
	f_nome: string;
	f_observacoes: string;
	f_sigla: string;
	f_sn: string;
	updatedAt: string;
	createdAt: string;
}

export interface EquipamentosRelations {
	createdBy?: Users | null;
	f_fwvce6bqigw?: TelecomAnexos[];
	f_hcqrd9qhcid?: Acessos[];
	f_interfaces?: TelecomInterfaces[];
	f_rack?: TelecomRacks | null;
	f_recurso_equipamento_a?: TelecomRecursos[];
	f_site?: Sites | null;
	updatedBy?: Users | null;
}

export type EquipamentosRelationKey = keyof EquipamentosRelations;

export interface EquipamentosEmPredios {
	id: number;
	f_contato_sindico: string;
	f_endereco: string;
	f_modelo_equipamento: string;
	f_nome_predio: string;
	f_observacao: string;
	f_sn: string;
	f_tipo_equipamento: string;
	updatedAt: string;
	createdAt: string;
}

export interface EquipamentosEmPrediosRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type EquipamentosEmPrediosRelationKey =
	keyof EquipamentosEmPrediosRelations;

export interface Facilidade {
	id: number;
	f_descricao: string;
	f_nome: string;
	updatedAt: string;
	createdAt: string;
}

export interface FacilidadeRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type FacilidadeRelationKey = keyof FacilidadeRelations;

export interface FornecedoresTelecom {
	id: number;
	f_fk_cliente_circuiro: number;
	f_fk_fornecedor_circuito: number;
	f_instrucoes: string;
	f_nome_fantasia: string;
	f_razao_social: string;
	updatedAt: string;
	createdAt: string;
}

export interface FornecedoresTelecomRelations {
	createdBy?: Users | null;
	f_fk_cliente_contrato?: TelecomContratos[];
	f_fk_contrato_fornecedor?: TelecomContratos[];
	f_fk_recurso_cliente?: TelecomRecursos[];
	f_fk_recurso_fornecedor?: TelecomRecursos[];
	updatedBy?: Users | null;
}

export type FornecedoresTelecomRelationKey = keyof FornecedoresTelecomRelations;

export interface FotoAniversario {
	id: number;
	f_fk_aniversarios: number;
	extname: string;
	filename: string;
	meta: Record<string, unknown>;
	mimetype: string;
	path: string;
	preview: string;
	size: number;
	title: string;
	url: string;
	updatedAt: string;
	createdAt: string;
}

export interface FotoAniversarioRelations {
	createdBy?: Users | null;
	f_aniversarios?: Aniversarios | null;
	storage?: unknown | null;
	updatedBy?: Users | null;
}

export type FotoAniversarioRelationKey = keyof FotoAniversarioRelations;

export interface FotoFuncionarios {
	id: number;
	f_fk_funcionarios: number;
	extname: string;
	filename: string;
	meta: Record<string, unknown>;
	mimetype: string;
	path: string;
	preview: string;
	size: number;
	title: string;
	url: string;
	updatedAt: string;
	createdAt: string;
}

export interface FotoFuncionariosRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios | null;
	storage?: unknown | null;
	updatedBy?: Users | null;
}

export type FotoFuncionariosRelationKey = keyof FotoFuncionariosRelations;

export interface Ij93gv1hx9m {
	f_fk_equipamentos_interfaces: number;
	f_fk_interfaces_equipamentos: number;
}

export type Ij93gv1hx9mRelations = Record<string, never>;

export type Ij93gv1hx9mRelationKey = keyof Ij93gv1hx9mRelations;

export interface InfoArquivos {
	id: number;
	f_fk_funcionarios: number;
	f_arquivo_externo: string;
	f_titulo: string;
	updatedAt: string;
	createdAt: string;
}

export interface InfoArquivosRelations {
	createdBy?: Users | null;
	f_arquivos?: ArquivosFuncionarios | null;
	f_funcionarios?: FFuncionarios | null;
	updatedBy?: Users | null;
}

export type InfoArquivosRelationKey = keyof InfoArquivosRelations;

export interface InfoAso {
	id: number;
	f_fk_funcionarios: number;
	f_apto: boolean;
	f_data_exame: string;
	f_data_prox_exame: string;
	f_dias_afastamento: string;
	f_informado: string;
	f_obs: string;
	f_tipo_exame: string;
	updatedAt: string;
	createdAt: string;
}

export interface InfoAsoRelations {
	createdBy?: Users | null;
	f_aso?: Asos | null;
	f_funcionarios_2?: FFuncionarios | null;
	updatedBy?: Users | null;
}

export type InfoAsoRelationKey = keyof InfoAsoRelations;

export interface ItensPacotes {
	id: number;
	f_ch3bjzt4zr7: number;
	f_fk1: number;
	f_fk2: number;
	f_id_ixc: number;
	f_mensalidade_com_desconto: number;
	f_mensalidade_sem_desconto: number;
	f_nome_do_produto: string;
	f_tipo_ixc: string;
	f_tipo_produto: string;
	f_vna9rme0f5j: number;
	updatedAt: string;
	createdAt: string;
}

export interface ItensPacotesRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type ItensPacotesRelationKey = keyof ItensPacotesRelations;

export interface LancamentosFerias {
	id: number;
	f_fk_periodos_ferias: number;
	f_data_retorno: string;
	f_data_saida: string;
	f_dias_gozados: number;
	f_dias_vendidos: number;
	f_observacoes: string;
	f_status: string;
	updatedAt: string;
	createdAt: string;
}

export interface LancamentosFeriasRelations {
	createdBy?: Users | null;
	f_periodos_ferias?: PeriodosFerias | null;
	updatedBy?: Users | null;
}

export type LancamentosFeriasRelationKey = keyof LancamentosFeriasRelations;

export interface LinhaCorporativa {
	id: number;
	f_fk_funcionarios: number;
	f_iccid_corporativo: string;
	f_numero_movel_corporativo: string;
	f_tipo: string;
	updatedAt: string;
	createdAt: string;
}

export interface LinhaCorporativaRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios | null;
	updatedBy?: Users | null;
}

export type LinhaCorporativaRelationKey = keyof LinhaCorporativaRelations;

export interface Logs {
	id: number;
	f_log_data: Record<string, unknown>;
	f_log_level: string;
	f_log_message: string;
	updatedAt: string;
	createdAt: string;
}

export interface LogsRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type LogsRelationKey = keyof LogsRelations;

export interface LogsCargos {
	id: number;
	f_fk_funcionarios: number;
	CBO: string;
	f_atividades: string;
	f_cargo_anterior: string;
	f_data_inicio_cargo: string;
	f_descricao: string;
	f_nome_cargo: string;
	updatedAt: string;
	createdAt: string;
}

export interface LogsCargosRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios | null;
	updatedBy?: Users | null;
}

export type LogsCargosRelationKey = keyof LogsCargosRelations;

export interface Muu3vsavv3h {
	f_fk_1_setor_x_colaborador: number;
	f_fk_2_setor_x_colaborador: number;
}

export type Muu3vsavv3hRelations = Record<string, never>;

export type Muu3vsavv3hRelationKey = keyof Muu3vsavv3hRelations;

export interface Na4eifobesz {
	f_fk_pacote_adicional_negociacao: number;
	f_fk_pacote_adicional_pacote: number;
}

export type Na4eifobeszRelations = Record<string, never>;

export type Na4eifobeszRelationKey = keyof Na4eifobeszRelations;

export interface NegociacoesComentarios {
	id: number;
	f_fk_comentarios_negociacoes: number;
	f_comentario: string;
	f_insere_atendimento_ixc: string;
	f_setor_para_obs: string;
	updatedAt: string;
	createdAt: string;
}

export interface NegociacoesComentariosRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type NegociacoesComentariosRelationKey =
	keyof NegociacoesComentariosRelations;

export interface NegociacoesItens {
	id: number;
	f_fk_id_negociacao: number;
	f_id_ixc: number;
	f_mensalidade_com_desconto: number;
	f_mensalidade_sem_desconto: number;
	f_nome_produto: string;
	f_observacoes: string;
	f_observacoes_atendimento: string;
	f_relacao: string;
	f_tipo_ixc: string;
	f_tipo_produto: string;
	updatedAt: string;
	createdAt: string;
}

export interface NegociacoesItensRelations {
	createdBy?: Users | null;
	f_opcoes_smp?: OpcoesSmp | null;
	f_opcoes_stfc?: OpcoesStfc | null;
	updatedBy?: Users | null;
}

export type NegociacoesItensRelationKey = keyof NegociacoesItensRelations;

export interface Nukww9tmq83 {
	f_fk1_setor_tipos: number;
	f_fk2_setor_tipos: number;
}

export type Nukww9tmq83Relations = Record<string, never>;

export type Nukww9tmq83RelationKey = keyof Nukww9tmq83Relations;

export interface OeQualirun {
	id: number;
	f_fk_negociacoes: number;
	f_id_externo: string;
	f_link_externo: string;
	f_procedimento: string;
	f_status: string;
	updatedAt: string;
	createdAt: string;
}

export interface OeQualirunRelations {
	createdBy?: Users | null;
	f_negociacoes?: Negociacoes | null;
	updatedBy?: Users | null;
}

export type OeQualirunRelationKey = keyof OeQualirunRelations;

export interface OpcoesSmp {
	id: number;
	f_fk_prod_negociacao_opcoes_smp: number;
	f_bonus: string;
	f_franquia_dados: string;
	f_minutos: string;
	f_nome_do_plano: string;
	f_portabilidade: string;
	f_sms: string;
	f_sva_incluso: string;
	f_terminal: string;
	f_valor_smp: number;
	f_valor_sva: number;
	updatedAt: string;
	createdAt: string;
}

export interface OpcoesSmpRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type OpcoesSmpRelationKey = keyof OpcoesSmpRelations;

export interface OpcoesSmpTemplate {
	id: number;
	f_fk_smp_produtos: number;
	f_bonus: string;
	f_franquia_dados: string;
	f_minutos: string;
	f_nome_plano: string;
	f_sms: string;
	f_sva_incluso: string;
	f_valor_smp: number;
	f_valor_sva: number;
	updatedAt: string;
	createdAt: string;
}

export interface OpcoesSmpTemplateRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type OpcoesSmpTemplateRelationKey = keyof OpcoesSmpTemplateRelations;

export interface OpcoesStfc {
	id: number;
	f_fk_opcoes_stfc: number;
	f_canais: string;
	f_franquia: string;
	f_nome_do_plano: string;
	f_portabilidade: string;
	f_terminais: string;
	updatedAt: string;
	createdAt: string;
}

export interface OpcoesStfcRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type OpcoesStfcRelationKey = keyof OpcoesStfcRelations;

export interface OpcoesStfcTemplate {
	id: number;
	f_fk_opcoes_stfc_template: number;
	f_canais: number;
	f_franquia: string;
	f_nome_do_plano: string;
	f_portabilidade: string;
	f_terminais: string;
	updatedAt: string;
	createdAt: string;
}

export interface OpcoesStfcTemplateRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type OpcoesStfcTemplateRelationKey = keyof OpcoesStfcTemplateRelations;

export interface P10scfhrhkw {
	id: number;
	f_m7vet8zixc9: number;
	updatedAt: string;
	createdAt: string;
}

export interface P10scfhrhkwRelations {
	createdBy?: Users | null;
	f_ytw8yxxeul0?: _902ctke5dhq | null;
	updatedBy?: Users | null;
}

export type P10scfhrhkwRelationKey = keyof P10scfhrhkwRelations;

export interface Pacotes {
	id: number;
	f_fk_desconto_pacotes: number;
	f_fk_id_pacote: number;
	f_abre_atendimento: string;
	f_mensalidade_com_desconto: number;
	f_mensalidade_sem_desconto: number;
	f_nome_pacote: string;
	f_pacote_adicional: string;
	f_pacote_principal: string;
	f_status: string;
	f_vender_para: string[];
	updatedAt: string;
	createdAt: string;
}

export interface PacotesRelations {
	createdBy?: Users | null;
	f_itens_do_pacote?: Produtos[];
	updatedBy?: Users | null;
}

export type PacotesRelationKey = keyof PacotesRelations;

export interface Parentesco {
	id: number;
	f_fk_funcionarios: number;
	f_cpf: string;
	f_nome: string;
	f_vinculo_colaborador: string;
	updatedAt: string;
	createdAt: string;
}

export interface ParentescoRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios | null;
	updatedBy?: Users | null;
}

export type ParentescoRelationKey = keyof ParentescoRelations;

export interface Patrimonio {
	id: number;
	f_fk_funcionarios: number;
	f_id_tecnico_ixc: number;
	f_armazenamento: string;
	f_estado_uso: string;
	f_modelo: string;
	f_nome_patrimonio: string;
	f_numero_serie: string;
	f_processador: string;
	f_quantidade: number;
	f_ram: string;
	f_so: string;
	f_tipo_patrimonio: string;
	f_valor_patrimonio: number;
	updatedAt: string;
	createdAt: string;
}

export interface PatrimonioRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios | null;
	updatedBy?: Users | null;
}

export type PatrimonioRelationKey = keyof PatrimonioRelations;

export interface PeriodosFerias {
	id: number;
	f_fk_funcionarios: number;
	f_dias_direito: number;
	f_periodo_aquisitivo_fim: string;
	f_periodo_aquisitivo_inicio: string;
	f_periodo_concessivo_fim: string;
	f_periodo_concessivo_inicio: string;
	f_status_periodo: string;
	updatedAt: string;
	createdAt: string;
}

export interface PeriodosFeriasRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios | null;
	f_lancamentos_ferias?: LancamentosFerias[];
	updatedBy?: Users | null;
}

export type PeriodosFeriasRelationKey = keyof PeriodosFeriasRelations;

export interface Produtos {
	id: number;
	f_descricao_produto: string;
	f_id_ixc: number;
	f_mensalidade_com_desconto: number;
	f_mensalidade_sem_desconto: number;
	f_nome_produto: string;
	f_tipo_ixc: string;
	f_tipo_produto: string;
	updatedAt: string;
	createdAt: string;
}

export interface ProdutosRelations {
	createdBy?: Users | null;
	f_opcoes_smp_template?: OpcoesSmpTemplate | null;
	f_opcoes_STFC?: OpcoesStfcTemplate | null;
	updatedBy?: Users | null;
}

export type ProdutosRelationKey = keyof ProdutosRelations;

export interface QualirunAssinaturaGov {
	id: number;
	f_fk_negociacoes: number;
	extname: string;
	filename: string;
	meta: Record<string, unknown>;
	mimetype: string;
	path: string;
	preview: string;
	size: number;
	title: string;
	url: string;
	updatedAt: string;
	createdAt: string;
}

export interface QualirunAssinaturaGovRelations {
	createdBy?: Users | null;
	storage?: unknown | null;
	updatedBy?: Users | null;
}

export type QualirunAssinaturaGovRelationKey =
	keyof QualirunAssinaturaGovRelations;

export interface QualirunInfoAdicionais {
	id: number;
	f_fk_funcionarios: number;
	f_2fxykekjpk2: string;
	f_contato_emergencia: string;
	f_curso: string;
	f_grau_escolaridade: string;
	f_id_externo: string;
	f_parentesco_cpf: string;
	f_parentesco_nome: string;
	f_parentesco_vinculo: string;
	f_situacao_curso: string;
	f_sqt1x7ndy5j: string;
	f_status: string;
	f_telefone_contato_emergencia: string;
	f_tkxxh3xi2zw: string;
	f_vinculo_contato_emergencia: string;
	updatedAt: string;
	createdAt: string;
}

export interface QualirunInfoAdicionaisRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios | null;
	updatedBy?: Users | null;
}

export type QualirunInfoAdicionaisRelationKey =
	keyof QualirunInfoAdicionaisRelations;

export interface QualirunProcessos {
	id: number;
	f_fk_funcionarios: number;
	f_detalhes_procedimento: string;
	f_id_externo: string;
	f_id_procedimento_qualirun: string;
	f_link_externo: string;
	f_procedimento: string;
	f_status: string;
	updatedAt: string;
	createdAt: string;
}

export interface QualirunProcessosRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios | null;
	updatedBy?: Users | null;
}

export type QualirunProcessosRelationKey = keyof QualirunProcessosRelations;

export interface RecursosViagem {
	id: number;
	f_fk_recursos_viagem: number;
	f_destino_viagem: string;
	f_km_percorrido: number;
	f_meio_transporte: string;
	f_observacoes: string;
	updatedAt: string;
	createdAt: string;
}

export interface RecursosViagemRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type RecursosViagemRelationKey = keyof RecursosViagemRelations;

export interface Rguxtr9p91d {
	f_fk_ponta_a_interface: number;
	f_fk_ponta_a_interface2: number;
}

export type Rguxtr9p91dRelations = Record<string, never>;

export type Rguxtr9p91dRelationKey = keyof Rguxtr9p91dRelations;

export interface Servicos {
	id: number;
	f_fk_servico_x_contrato: number;
	f_id_contrato_ixc: string;
	f_id_servico_ixc: string;
	f_caracteristicas: string;
	f_descricao: string;
	f_designacao_atplus: string;
	f_designacao_externa: string;
	f_propriedades: string;
	f_status: string;
	f_tipo: string;
	f_velocidade: string;
	updatedAt: string;
	createdAt: string;
}

export interface ServicosRelations {
	createdBy?: Users | null;
	f_acessos?: Acessos[];
	f_arquivos?: TelecomAnexos[];
	f_kyyzn4kut6e?: TelecomContratos | null;
	f_rj1pckkkeqi?: Servicos[];
	f_servicos_relacionados?: Servicos[];
	updatedBy?: Users | null;
}

export type ServicosRelationKey = keyof ServicosRelations;

export interface ServicosXServicos {
	f_8n72gqelvp5: number;
	f_d40asyeldtp: number;
}

export type ServicosXServicosRelations = Record<string, never>;

export type ServicosXServicosRelationKey = keyof ServicosXServicosRelations;

export interface Setor {
	id: number;
	f_fk_funcionarios: unknown[];
	f_fk_sistemas_acessos: unknown[];
	f_nome_setor: string;
	updatedAt: string;
	createdAt: string;
}

export interface SetorRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios[];
	f_funcionarios_1?: FFuncionarios[];
	f_sistemas_acessos?: SistemasAcessos[];
	updatedBy?: Users | null;
}

export type SetorRelationKey = keyof SetorRelations;

export interface SistemasAcessos {
	id: number;
	f_fk_funcionarios: unknown[];
	f_sistemas_acessos: string;
	f_url: string;
	updatedAt: string;
	createdAt: string;
}

export interface SistemasAcessosRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios[];
	updatedBy?: Users | null;
}

export type SistemasAcessosRelationKey = keyof SistemasAcessosRelations;

export interface Sites {
	id: number;
	f_fk_telecom_contatos: number;
	f_bairro: string;
	f_cep: string;
	f_cidade: string;
	f_complemento: string;
	f_dados_acesso: string;
	f_endereco: string;
	f_nome: string;
	f_numero: string;
	f_sigla: string;
	f_status: string;
	f_tipo: string;
	f_uf: string;
	updatedAt: string;
	createdAt: string;
}

export interface SitesRelations {
	createdBy?: Users | null;
	f_anexos?: TelecomAnexos[];
	f_contatos?: FContatos | null;
	f_fk_sites_equipamentos?: Equipamentos[];
	f_racks?: TelecomRacks[];
	updatedBy?: Users | null;
}

export type SitesRelationKey = keyof SitesRelations;

export interface Siurxeb1juy {
	f_stgjevi19lg: number;
	f_vazo5n0bhe5: number;
}

export type Siurxeb1juyRelations = Record<string, never>;

export type Siurxeb1juyRelationKey = keyof Siurxeb1juyRelations;

export interface SolicitacaoCompras {
	id: number;
	f_0i82r8a2t99: number;
	f_categoria: string;
	f_departamento: string;
	f_justificativa: string;
	f_link: string;
	f_metodo_de_pagamento: string;
	f_motivo_arquivamento: string;
	f_observacoes_finais: string;
	f_prazo: string;
	f_prazo_de_entrega: string;
	f_servico: string;
	f_status: string;
	f_tipo: string;
	f_titulo: string;
	f_valor_total: number;
	f_xm95ss7u5xw: number;
	fk_demandas_solicitacao_compras: number;
	fk_solicitacao_compras: number;
	updatedAt: string;
	createdAt: string;
}

export interface SolicitacaoComprasRelations {
	createdBy?: Users | null;
	f_anexos?: unknown[];
	f_fornecedor?: ComprasFornecedores | null;
	f_produtos?: ComprasProdutos[];
	updatedBy?: Users | null;
}

export type SolicitacaoComprasRelationKey = keyof SolicitacaoComprasRelations;

export interface SuspensaoContrato {
	id: number;
	f_fk_pessoas: number;
	f_fk_pessoas_pj: number;
	f_fk_responsavel: number;
	f_cpf: string;
	f_dias_suspensao: string;
	f_email: string;
	f_final_suspensao: string;
	f_id_contrato: string;
	f_inicio_suspensao: string;
	f_link_assinatura: string;
	f_status: string;
	f_telefone: string;
	f_teste: number;
	f_titulo: string;
	updatedAt: string;
	createdAt: string;
}

export interface SuspensaoContratoRelations {
	createdBy?: Users | null;
	f_comentarios?: ComentariosSuspensaoDeContrato[];
	f_contratos?: Contratos[];
	f_pessoas?: Pessoas | null;
	f_pessoas_pj?: Empresas | null;
	f_responsavel?: Users | null;
	updatedBy?: Users | null;
}

export type SuspensaoContratoRelationKey = keyof SuspensaoContratoRelations;

export interface TabelaGeral {
	id: number;
	updatedAt: string;
	createdAt: string;
}

export interface TabelaGeralRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type TabelaGeralRelationKey = keyof TabelaGeralRelations;

export interface TelecomAnexos {
	id: number;
	extname: string;
	f_6j2u7ptvn88: number;
	f_88kxg6s8bb8: number;
	f_wo3wzgdoyoa: number;
	f_ycsq6mkkvk7: number;
	filename: string;
	meta: Record<string, unknown>;
	mimetype: string;
	path: string;
	preview: string;
	size: number;
	storageId: number;
	title: string;
	url: string;
	updatedAt: string;
	createdAt: string;
}

export interface TelecomAnexosRelations {
	createdBy?: Users | null;
	storage?: unknown | null;
	updatedBy?: Users | null;
}

export type TelecomAnexosRelationKey = keyof TelecomAnexosRelations;

export interface TelecomColocationOpcoes {
	id: number;
	f_6c1tv6gt1ey: number;
	f_designacao_rack: string;
	f_energia: string[];
	f_espaco_rack: string;
	fk_opcoes_colocation: number;
	updatedAt: string;
	createdAt: string;
}

export interface TelecomColocationOpcoesRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type TelecomColocationOpcoesRelationKey =
	keyof TelecomColocationOpcoesRelations;

export interface TelecomContratos {
	id: number;
	f_fk_cliente: number;
	f_fk_fornecedor: number;
	f_descricao: string;
	f_o6r7bgwk9bb: number;
	updatedAt: string;
	createdAt: string;
}

export interface TelecomContratosRelations {
	createdBy?: Users | null;
	f_cliente?: FornecedoresTelecom | null;
	f_fornecedor?: FornecedoresTelecom | null;
	f_servicos?: Servicos[];
	updatedBy?: Users | null;
}

export type TelecomContratosRelationKey = keyof TelecomContratosRelations;

export interface TelecomFila {
	id: number;
	f_fk_fila: number;
	f_nome: string;
	updatedAt: string;
	createdAt: string;
}

export interface TelecomFilaRelations {
	createdBy?: Users | null;
	f_fk_fila_rack?: TelecomRacks[];
	updatedBy?: Users | null;
}

export type TelecomFilaRelationKey = keyof TelecomFilaRelations;

export interface TelecomInterfaces {
	id: number;
	f_configuracao: string;
	f_descricao: string;
	f_interface: string;
	f_p9gxrkh5utl: number;
	f_tipo: string;
	parentId: number;
	updatedAt: string;
	createdAt: string;
}

export interface TelecomInterfacesRelations {
	children?: TelecomInterfaces[];
	createdBy?: Users | null;
	f_fk_equipamento?: Equipamentos[];
	f_fk_interfaces_equipamentos?: Equipamentos[];
	f_fk_recurso_interface_ponta_a?: TelecomRecursos[];
	f_fk_recurso_interface_ponta_b?: TelecomRecursos[];
	f_s3gs1jjkqzm?: Acessos | null;
	parent?: TelecomInterfaces | null;
	updatedBy?: Users | null;
}

export type TelecomInterfacesRelationKey = keyof TelecomInterfacesRelations;

export interface TelecomIpsFixos {
	id: number;
	f_contrato_ixc: string;
	f_controle: string;
	f_ip: string;
	f_login: string;
	f_possui_ip_fixo: string;
	updatedAt: string;
	createdAt: string;
}

export interface TelecomIpsFixosRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type TelecomIpsFixosRelationKey = keyof TelecomIpsFixosRelations;

export interface TelecomOpcoesL2l {
	id: number;
	f_rmfqnk0k53u: number;
	f_velocidade: string;
	updatedAt: string;
	createdAt: string;
}

export interface TelecomOpcoesL2lRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type TelecomOpcoesL2lRelationKey = keyof TelecomOpcoesL2lRelations;

export interface TelecomRacks {
	id: number;
	f_fk_rack_fila: number;
	f_fk_rack_sala: number;
	f_fk_site_racks: number;
	f_rack: string;
	f_sigla: string;
	parentId: number;
	updatedAt: string;
	createdAt: string;
}

export interface TelecomRacksRelations {
	children?: TelecomRacks[];
	createdBy?: Users | null;
	f_fila?: TelecomFila | null;
	f_fk_rack_a_recursos?: TelecomRecursos[];
	f_fk_rack_ativos?: Equipamentos[];
	f_fk_rack_sites?: Sites | null;
	f_fk_recursos_rack_b?: TelecomRecursos[];
	f_sala?: TelecomSalas | null;
	parent?: TelecomRacks | null;
	updatedBy?: Users | null;
}

export type TelecomRacksRelationKey = keyof TelecomRacksRelations;

export interface TelecomRecursos {
	id: number;
	f_fk_anexos_recursos: number;
	f_fk_cliente_recurso: number;
	f_fk_fornecedor_recurso: number;
	f_fk_rack_a: number;
	f_fk_rack_b: number;
	f_fk_site_a: number;
	f_fk_site_b: number;
	f_2ew016ynyo6: number;
	f_contrato_ixc: number;
	f_designacao_atplus: string;
	f_designacao_externa: string;
	f_detalhes: string;
	f_finalidade: string;
	f_id_produto: string;
	f_nome: string;
	f_status: string;
	f_tipo: string;
	parentId: number;
	updatedAt: string;
	createdAt: string;
}

export interface TelecomRecursosRelations {
	children?: TelecomRecursos[];
	createdBy?: Users | null;
	f_anexos?: TelecomAnexos[];
	f_cliente?: FornecedoresTelecom | null;
	f_equipamento_a?: Equipamentos | null;
	f_fornecedor?: FornecedoresTelecom | null;
	f_interface_ponta_a?: TelecomInterfaces[];
	f_interface_ponta_b?: TelecomInterfaces[];
	f_opcoes_colocation?: TelecomColocationOpcoes | null;
	f_opcoes_l2l?: TelecomOpcoesL2l | null;
	f_opcoes_link_ip?: TelecomTransitoOpcoes | null;
	f_rack_a?: TelecomRacks | null;
	f_rack_b?: TelecomRacks | null;
	f_site_a?: Sites | null;
	f_site_b?: Sites | null;
	parent?: TelecomRecursos | null;
	updatedBy?: Users | null;
}

export type TelecomRecursosRelationKey = keyof TelecomRecursosRelations;

export interface TelecomSalas {
	id: number;
	f_fk_salas: number;
	f_nome: string;
	updatedAt: string;
	createdAt: string;
}

export interface TelecomSalasRelations {
	createdBy?: Users | null;
	f_fk_sala_racks?: TelecomRacks[];
	updatedBy?: Users | null;
}

export type TelecomSalasRelationKey = keyof TelecomSalasRelations;

export interface TelecomTransitoOpcoes {
	id: number;
	f_1eu8gjcf9js: number;
	f_ips: string;
	f_velocidade: string;
	updatedAt: string;
	createdAt: string;
}

export interface TelecomTransitoOpcoesRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type TelecomTransitoOpcoesRelationKey =
	keyof TelecomTransitoOpcoesRelations;

export interface TemplatesAtendimentoN1 {
	id: number;
	f_fk_templates_atendimentos: number;
	f_acessa_pela_rede_da_atplus: string;
	f_alteracoes: string;
	f_aplicativo: string[];
	f_aplicativo_especifico: string;
	f_apn_preenchida: string;
	f_descricao_do_cliente: string;
	"f_e-mail": string;
	f_endereco_do_site: string;
	f_fabricante: string;
	f_ip_fixo: string;
	f_ip_interno_para_liberacao: string;
	f_login_pppoe: string;
	f_los: string;
	f_melhor_horario_retorno: string;
	f_nome: string;
	f_nome_do_solicitante: string;
	f_nome_rede_wifi: string;
	f_numero_de_A: string;
	f_numero_de_B: string;
	f_numero_para_contato: string;
	f_portas_a_serem_liberadas: string;
	f_protocolo_do_atendimento: string;
	f_qual_aplicativo: string;
	f_qual_apn_configurada: string;
	f_qual_fabricante: string;
	f_quantidade_de_dispositivos: string;
	f_senha_da_rede_wifi: string;
	f_status_do_circuito: string;
	f_telefonia_tipo_de_problema: string;
	f_tipo_de_atendimento: string;
	f_tipo_de_conexao_do_dispositivo: string;
	f_tipo_de_problema_mvno: string;
	f_torre_rede: string;
	updatedAt: string;
	createdAt: string;
}

export interface TemplatesAtendimentoN1Relations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type TemplatesAtendimentoN1RelationKey =
	keyof TemplatesAtendimentoN1Relations;

export interface TrocaEndereco {
	id: number;
	f_bairro: string;
	f_cep: string;
	f_cliente: string;
	f_endereco: string;
	f_endereco_cidade: string;
	f_endereco_complemento: string;
	f_endereco_estado: string;
	f_endereco_numero: string;
	f_endereco_referencia: string;
	f_id_atendimento: string;
	f_id_contrato: string;
	f_obs: string;
	f_status: string;
	f_taxa_instalacao: string;
	f_telefone_contato: string;
	updatedAt: string;
	createdAt: string;
}

export interface TrocaEnderecoRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type TrocaEnderecoRelationKey = keyof TrocaEnderecoRelations;

export interface TrocasdetitularidadeComentarios {
	id: number;
	f_comentario: string;
	f_comentario_troca_de_titularidade: number;
	updatedAt: string;
	createdAt: string;
}

export interface TrocasdetitularidadeComentariosRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type TrocasdetitularidadeComentariosRelationKey =
	keyof TrocasdetitularidadeComentariosRelations;

export interface Turnos {
	id: number;
	f_turno: string;
	updatedAt: string;
	createdAt: string;
}

export interface TurnosRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios[];
	updatedBy?: Users | null;
}

export type TurnosRelationKey = keyof TurnosRelations;

export interface ViagemSolicitacao {
	id: number;
	f_fk_solicitacao_viagem: number;
	f_colaborador_beneficiado: string;
	f_data_retorno: string;
	f_data_viagem: string;
	f_destino_viagem: string;
	f_diaria: string;
	f_fase: string;
	f_kaban_viagem: number;
	f_meio_transporte: string;
	f_observacoes: string;
	f_percorrido: number;
	f_quantidade_dias: string;
	f_sub_total: string;
	f_total_pagar: number;
	f_valor_cobrado: number;
	f_valor_diaria: number;
	f_valor_pedagio: number;
	updatedAt: string;
	createdAt: string;
}

export interface ViagemSolicitacaoRelations {
	createdBy?: Users | null;
	f_anexos?: unknown[];
	updatedBy?: Users | null;
}

export type ViagemSolicitacaoRelationKey = keyof ViagemSolicitacaoRelations;

export interface VlanTags {
	id: number;
	f_tag: string;
	updatedAt: string;
	createdAt: string;
}

export interface VlanTagsRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type VlanTagsRelationKey = keyof VlanTagsRelations;

export interface Ynltolqbwj1 {
	fk_interface_ponta_b: number;
	fk_interface_ponta_b2: number;
}

export type Ynltolqbwj1Relations = Record<string, never>;

export type Ynltolqbwj1RelationKey = keyof Ynltolqbwj1Relations;

export interface Zapsign {
	id: number;
	f_data_de_encerramento: string;
	f_nome_do_plano: string;
	f_numero_de_creditos: string;
	f_periodo: string;
	f_status: string;
	updatedAt: string;
	createdAt: string;
}

export interface ZapsignRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type ZapsignRelationKey = keyof ZapsignRelations;

export interface TemplatesXOrdensDeServico {
	f_fk_template_os_1: number;
	f_fk_template_os_2: number;
}

export type TemplatesXOrdensDeServicoRelations = Record<string, never>;

export type TemplatesXOrdensDeServicoRelationKey =
	keyof TemplatesXOrdensDeServicoRelations;

export interface TipoXTemplates {
	f_fk_tipo_template_1: number;
	f_fk_tipo_template_2: number;
}

export type TipoXTemplatesRelations = Record<string, never>;

export type TipoXTemplatesRelationKey = keyof TipoXTemplatesRelations;

export interface VendedorCupons {
	f_fk_vendedor_cupom_1: number;
	f_fk_vendedor_cupom_2: number;
}

export type VendedorCuponsRelations = Record<string, never>;

export type VendedorCuponsRelationKey = keyof VendedorCuponsRelations;

export interface VwMermaidPorServico {
	mermaid_text: string;
	servico_id: number;
}

export type VwMermaidPorServicoRelations = Record<string, never>;

export type VwMermaidPorServicoRelationKey = keyof VwMermaidPorServicoRelations;
