/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

export interface _3advfk0gv0zBase {
	f_fk_insumos_servicos: number;
	f_fk_servicos_insumos: number;
}

export type _3advfk0gv0zRelations = Record<string, never>;

export type _3advfk0gv0zRelationKey = keyof _3advfk0gv0zRelations;

export interface _902ctke5dhqBase {
	createdAt: string;
	createdBy: unknown;
	id: string;
	updatedAt: string;
	updatedBy: unknown;
	f_bmu9tsi11d4: P10scfhrhkwBase | null;
}

export interface _902ctke5dhqRelations {
	f_bmu9tsi11d4?: P10scfhrhkwBase | null;
}

export type _902ctke5dhqRelationKey = keyof _902ctke5dhqRelations;

export interface AcessosBase {
	createdAt: string;
	createdBy: unknown;
	f_fk_servicos_x_acessos: number;
	f_fk_site: number;
	f_tipo: string;
	f_x7w60fv71f9: number;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
	f_equipamento: EquipamentosBase | null;
	f_interface: TelecomInterfacesBase | null;
	f_site: SitesBase | null;
	f_xzuv9d6zkhr: ServicosBase | null;
}

export interface AcessosRelations {
	f_equipamento?: EquipamentosBase | null;
	f_insumos?: ServicosBase[];
	f_interface?: TelecomInterfacesBase | null;
	f_site?: SitesBase | null;
	f_xzuv9d6zkhr?: ServicosBase | null;
}

export type AcessosRelationKey = keyof AcessosRelations;

export interface AegisBase {
	createdAt: string;
	createdBy: unknown;
	f_idlogin: string;
	f_notas: string;
	f_notas_cliente: string;
	f_statusdesbloqueioconfiaca: string;
	f_statuslogin: string;
	f_statusmac: string;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export type AegisRelations = Record<string, never>;

export type AegisRelationKey = keyof AegisRelations;

export interface AnexosNegociacoesBase {
	createdAt: string;
	createdBy: unknown;
	extname: string;
	f_anexos_fk: number;
	filename: string;
	id: number;
	meta: Record<string, unknown>;
	mimetype: string;
	path: string;
	preview: string;
	size: number;
	storage: Record<string, unknown>;
	storageId: number;
	title: string;
	updatedAt: string;
	updatedBy: unknown;
	url: string;
}

export type AnexosNegociacoesRelations = Record<string, never>;

export type AnexosNegociacoesRelationKey = keyof AnexosNegociacoesRelations;

export interface AnexosTrocaTitularidadeBase {
	createdAt: string;
	createdBy: unknown;
	extname: string;
	f_anexos_fk: number;
	filename: string;
	id: number;
	meta: Record<string, unknown>;
	mimetype: string;
	path: string;
	preview: string;
	size: number;
	storage: Record<string, unknown>;
	storageId: number;
	title: string;
	updatedAt: string;
	updatedBy: unknown;
	url: string;
}

export type AnexosTrocaTitularidadeRelations = Record<string, never>;

export type AnexosTrocaTitularidadeRelationKey =
	keyof AnexosTrocaTitularidadeRelations;

export interface ArquivosFuncionariosBase {
	createdAt: string;
	createdBy: unknown;
	extname: string;
	f_fk_funcionarios: number;
	f_fk_info_arquivos: number;
	filename: string;
	id: number;
	meta: Record<string, unknown>;
	mimetype: string;
	path: string;
	preview: string;
	size: number;
	storage: Record<string, unknown>;
	title: string;
	updatedAt: string;
	updatedBy: unknown;
	url: string;
	f_funcionarios: FFuncionariosBase | null;
	f_info_arquivos: InfoArquivosBase | null;
}

export interface ArquivosFuncionariosRelations {
	f_funcionarios?: FFuncionariosBase | null;
	f_info_arquivos?: InfoArquivosBase | null;
}

export type ArquivosFuncionariosRelationKey =
	keyof ArquivosFuncionariosRelations;

export interface AsosBase {
	createdAt: string;
	createdBy: unknown;
	extname: string;
	f_fk_funcionarios: number;
	f_fk_infos_aso: number;
	filename: string;
	id: string;
	meta: Record<string, unknown>;
	mimetype: string;
	path: string;
	preview: string;
	size: number;
	storage: Record<string, unknown>;
	title: string;
	updatedAt: string;
	updatedBy: unknown;
	url: string;
	f_funcionarios: FFuncionariosBase | null;
	f_info_aso: InfoAsoBase | null;
}

export interface AsosRelations {
	f_funcionarios?: FFuncionariosBase | null;
	f_info_aso?: InfoAsoBase | null;
}

export type AsosRelationKey = keyof AsosRelations;

export interface AtendimentosIxcBase {
	createdAt: string;
	createdBy: unknown;
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
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export interface AtendimentosIxcRelations {
	f_templates_atendimentos?: TemplatesAtendimentoN1Base[];
}

export type AtendimentosIxcRelationKey = keyof AtendimentosIxcRelations;

export interface AuditoriaAutomaticaBase {
	createdAt: string;
	createdBy: unknown;
	f_conferencia: boolean;
	f_id_negociacao: string;
	f_titulo_negociacao: string;
	f_valor_mensal: number;
	id: string;
	updatedAt: string;
	updatedBy: unknown;
}

export type AuditoriaAutomaticaRelations = Record<string, never>;

export type AuditoriaAutomaticaRelationKey = keyof AuditoriaAutomaticaRelations;

export interface CargosBase {
	createdAt: string;
	createdBy: unknown;
	f_atividades: string;
	f_cbo: string;
	f_descricao: string;
	f_fk_funcionarios: number;
	f_nome: string;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
	f_responsavel: UsersBase | null;
}

export interface CargosRelations {
	f_responsavel?: UsersBase | null;
}

export type CargosRelationKey = keyof CargosRelations;

export interface ColaboradoresDoSetorBase {
	f_fk_colaboradores_setor_1: number;
	f_fk_colaboradores_setor_2: number;
}

export type ColaboradoresDoSetorRelations = Record<string, never>;

export type ColaboradoresDoSetorRelationKey =
	keyof ColaboradoresDoSetorRelations;

export interface ColaboradoresXSetorBase {
	f_fk_colaboradores_setor_1: number;
	f_fk_colaboradores_setor_2: number;
}

export type ColaboradoresXSetorRelations = Record<string, never>;

export type ColaboradoresXSetorRelationKey = keyof ColaboradoresXSetorRelations;

export interface ComentariosComprasBase {
	createdAt: string;
	createdBy: unknown;
	f_comentarios: string;
	f_comentarios_compras: number;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export type ComentariosComprasRelations = Record<string, never>;

export type ComentariosComprasRelationKey = keyof ComentariosComprasRelations;

export interface ComentariosSuspensaoDeContratoBase {
	createdAt: string;
	createdBy: unknown;
	f_comentario: string;
	f_fk_suspensao: number;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export type ComentariosSuspensaoDeContratoRelations = Record<string, never>;

export type ComentariosSuspensaoDeContratoRelationKey =
	keyof ComentariosSuspensaoDeContratoRelations;

export interface ComentarioViagemBase {
	createdAt: string;
	createdBy: unknown;
	f_comentario: string;
	f_comentario_viagem: number;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export type ComentarioViagemRelations = Record<string, never>;

export type ComentarioViagemRelationKey = keyof ComentarioViagemRelations;

export interface ComprasFornecedoresBase {
	createdAt: string;
	createdBy: unknown;
	f_contato: string;
	f_nome: string;
	f_site: string;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export type ComprasFornecedoresRelations = Record<string, never>;

export type ComprasFornecedoresRelationKey = keyof ComprasFornecedoresRelations;

export interface ComprasProdutosBase {
	createdAt: string;
	createdBy: unknown;
	f_834gi7nhict: number;
	f_link_produto: string;
	f_produto: string;
	f_quantidade: number;
	f_sub_total: string;
	f_valor_uni: number;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
	f_fk_produtos_solicitacao_compra: SolicitacaoComprasBase | null;
}

export interface ComprasProdutosRelations {
	f_fk_produtos_solicitacao_compra?: SolicitacaoComprasBase | null;
}

export type ComprasProdutosRelationKey = keyof ComprasProdutosRelations;

export interface ConfiguracoesBase {
	createdAt: string;
	createdBy: unknown;
	f_chave: string;
	f_descricao: string;
	f_escopo: unknown[];
	f_nome: string;
	f_valor: string;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export type ConfiguracoesRelations = Record<string, never>;

export type ConfiguracoesRelationKey = keyof ConfiguracoesRelations;

export interface ConsultasPfBase {
	createdAt: string;
	createdBy: unknown;
	f_id_pessoa_fk: number;
	f_justificativa: string;
	f_retorno_spc: string;
	f_status_consulta: string;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
	f_id_pessoa: PessoasBase | null;
}

export interface ConsultasPfRelations {
	f_id_pessoa?: PessoasBase | null;
}

export type ConsultasPfRelationKey = keyof ConsultasPfRelations;

export interface ContratoIxcItensBase {
	createdAt: string;
	createdBy: unknown;
	f_fk_itens_contrato_ixc: number;
	f_id_produto_contrato_ixc: string;
	f_mensalidade: string;
	f_produto: string;
	f_quantidade: string;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export type ContratoIxcItensRelations = Record<string, never>;

export type ContratoIxcItensRelationKey = keyof ContratoIxcItensRelations;

export interface ContratosBase {
	createdAt: string;
	createdBy: unknown;
	extname: string;
	f_fk_negociacao_contrato: number;
	f_fk_suspensao: number;
	filename: string;
	id: number;
	meta: Record<string, unknown>;
	mimetype: string;
	path: string;
	preview: string;
	size: number;
	storage: Record<string, unknown>;
	storageId: number;
	title: string;
	updatedAt: string;
	updatedBy: unknown;
	url: string;
}

export type ContratosRelations = Record<string, never>;

export type ContratosRelationKey = keyof ContratosRelations;

export interface ContratosIxcBase {
	createdAt: string;
	createdBy: unknown;
	f_descricao: string;
	f_expiracao: string;
	f_vencimento: string;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export interface ContratosIxcRelations {
	f_itens_contrato?: ContratoIxcItensBase[];
}

export type ContratosIxcRelationKey = keyof ContratosIxcRelations;

export interface CrmTrocaTitularidadeBase {
	createdAt: string;
	createdBy: unknown;
	f_bairro: string;
	f_cedente: string;
	f_cedente_documento: string;
	f_cedente_email: string;
	f_cedente_responsavel_legal: string;
	f_cedente_telefone: string;
	f_cep: string;
	f_cessionario: string;
	f_cessionario_documento: string;
	f_cessionario_email: string;
	f_cessionario_responsavel: string;
	f_cessionario_telefone: string;
	f_cidade: string;
	f_complemento: string;
	f_endereco: string;
	f_estado: string;
	f_fk_negociacao_vendedor: number;
	f_fk_pessoa_negociacao: number;
	f_fk_pessoa_pj_negociacao: number;
	f_id_contrato: string;
	f_link_assinatura_cedente: string;
	f_link_assinatura_cessionario: string;
	f_numero: string;
	f_ordenacao: number;
	f_rw7rp8431ty: number;
	f_status: string;
	f_substatus: string;
	f_tipo_pessoa: string;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
	f_pessoa_pf: PessoasBase | null;
	f_pessoa_pj: EmpresasBase | null;
	f_vendedor: UsersBase | null;
}

export interface CrmTrocaTitularidadeRelations {
	f_anexos?: AnexosTrocaTitularidadeBase[];
	f_comentarios?: TrocasdetitularidadeComentariosBase[];
	f_pessoa_pf?: PessoasBase | null;
	f_pessoa_pj?: EmpresasBase | null;
	f_trocadetitularidade_contrato?: ContratosBase[];
	f_vendedor?: UsersBase | null;
}

export type CrmTrocaTitularidadeRelationKey =
	keyof CrmTrocaTitularidadeRelations;

export interface CuponsDescontoBase {
	createdAt: string;
	createdBy: unknown;
	f_cep: string;
	f_codigo: unknown;
	f_data_fim: string;
	f_data_inicio: string;
	f_endereco: string;
	f_endereco_numero: string;
	f_fk_pacotes_desconto: number;
	f_fk_vendedor_desconto: number;
	f_nome: string;
	f_status: string;
	f_tipo: string;
	f_tipo_negociacao: string;
	f_utilizacoes: number;
	f_valor: number;
	f_valor_renovacao: number;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export interface CuponsDescontoRelations {
	f_pacotes?: PacotesBase[];
	f_vendedor?: UsersBase[];
}

export type CuponsDescontoRelationKey = keyof CuponsDescontoRelations;

export interface DadosAdicionaisClienteContratoBase {
	createdAt: string;
	createdBy: unknown;
	f_forma_de_pagamento: string;
	f_id_cliente_contrato: number;
	f_origem_cliente: string;
	f_perfil_de_uso: unknown[];
	f_pessoas_na_residencia: number;
	id: string;
	updatedAt: string;
	updatedBy: unknown;
}

export type DadosAdicionaisClienteContratoRelations = Record<string, never>;

export type DadosAdicionaisClienteContratoRelationKey =
	keyof DadosAdicionaisClienteContratoRelations;

export interface DatacenterMemoriasBase {
	createdAt: string;
	createdBy: unknown;
	f_capacidade: string;
	f_fabricante: string;
	f_fk_memorias: number;
	f_sn: string;
	f_status: string;
	f_tipo: string;
	f_valor_locacao: number;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
	f_fk_servidor: DcServidoresBase | null;
}

export interface DatacenterMemoriasRelations {
	f_fk_servidor?: DcServidoresBase | null;
}

export type DatacenterMemoriasRelationKey = keyof DatacenterMemoriasRelations;

export interface DcServidoresBase {
	createdAt: string;
	createdBy: unknown;
	f_fabricante: string;
	f_fk_discos: number;
	f_memoria: string;
	f_modelo: string;
	f_obs: string;
	f_processador: string;
	f_sn: string;
	f_status: string;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export interface DcServidoresRelations {
	f_discos?: DiscosBase[];
	f_memorias?: DatacenterMemoriasBase[];
}

export type DcServidoresRelationKey = keyof DcServidoresRelations;

export interface DemandasViabilidadesBase {
	createdAt: string;
	createdBy: unknown;
	f_custo_recorrente: number;
	f_endereco: string;
	f_fk_viabilidades: number;
	f_forma_atendimento: string;
	f_localizacao: unknown;
	f_servico_pretendido: string;
	f_status: string;
	f_valor_investimento: number;
	f_velocidade_pretendida: string;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export type DemandasViabilidadesRelations = Record<string, never>;

export type DemandasViabilidadesRelationKey =
	keyof DemandasViabilidadesRelations;

export interface DepartamentosBase {
	createdAt: string;
	createdBy: unknown;
	f_fk_funcionarios: number;
	f_nome: string;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
	f_responsavel: UsersBase | null;
}

export interface DepartamentosRelations {
	f_responsavel?: UsersBase | null;
}

export type DepartamentosRelationKey = keyof DepartamentosRelations;

export interface DepartmentsBase {
	children: DepartmentsBase[];
	createdBy: unknown;
	createdById: unknown;
	id: string;
	isLeaf: boolean;
	members: unknown;
	parent: DepartmentsBase | null;
	sort: number;
	title: string;
	updatedBy: unknown;
	updatedById: unknown;
}

export interface DepartmentsRelations {
	owners?: UsersBase[];
	roles?: RolesBase[];
}

export type DepartmentsRelationKey = keyof DepartmentsRelations;

export interface DiscosBase {
	createdAt: string;
	createdBy: unknown;
	f_capacidade: string;
	f_data_aquisicao: string;
	f_fk_discos: number;
	f_fornecedor: string;
	f_modelo: string;
	f_preco_compra: number;
	f_preco_venda_locacao: number;
	f_SN: string;
	f_tipo: string;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export type DiscosRelations = Record<string, never>;

export type DiscosRelationKey = keyof DiscosRelations;

export interface EmpresasBase {
	createdAt: string;
	createdBy: unknown;
	f_cnpj: string;
	f_cpf_responsavel: string;
	f_email_responsavel: string;
	f_fundacao: string;
	f_ie: string;
	f_nome_fantasia: string;
	f_razao_social: string;
	f_responsavel: string;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export type EmpresasRelations = Record<string, never>;

export type EmpresasRelationKey = keyof EmpresasRelations;

export interface EquipamentosBase {
	createdAt: string;
	createdBy: unknown;
	f_34u76klwxoj: number;
	f_fk_ativo_rack: number;
	f_fk_equipamentos_anexos: number;
	f_fk_equipamentos_interfaces: number;
	f_modelo: string;
	f_nome: string;
	f_observacoes: string;
	f_sigla: string;
	f_sn: string;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
	f_rack: TelecomRacksBase | null;
	f_site: SitesBase | null;
}

export interface EquipamentosRelations {
	f_fwvce6bqigw?: TelecomAnexosBase[];
	f_hcqrd9qhcid?: AcessosBase[];
	f_interfaces?: TelecomInterfacesBase[];
	f_rack?: TelecomRacksBase | null;
	f_recurso_equipamento_a?: TelecomRecursosBase[];
	f_site?: SitesBase | null;
}

export type EquipamentosRelationKey = keyof EquipamentosRelations;

export interface EquipamentosEmPrediosBase {
	createdAt: string;
	createdBy: unknown;
	f_contato_sindico: string;
	f_endereco: string;
	f_modelo_equipamento: string;
	f_nome_predio: string;
	f_observacao: string;
	f_sn: string;
	f_tipo_equipamento: string;
	id: string;
	updatedAt: string;
	updatedBy: unknown;
}

export type EquipamentosEmPrediosRelations = Record<string, never>;

export type EquipamentosEmPrediosRelationKey =
	keyof EquipamentosEmPrediosRelations;

export interface EventosDemandaBase {
	f_fk1_eventos_demanda: number;
	f_fk2_eventos_demanda: number;
}

export type EventosDemandaRelations = Record<string, never>;

export type EventosDemandaRelationKey = keyof EventosDemandaRelations;

export interface FacilidadeBase {
	createdAt: string;
	createdBy: unknown;
	f_descricao: string;
	f_nome: string;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export type FacilidadeRelations = Record<string, never>;

export type FacilidadeRelationKey = keyof FacilidadeRelations;

export interface FContatosBase {
	createdAt: string;
	createdBy: unknown;
	f_contato: string;
	f_nome: string;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export type FContatosRelations = Record<string, never>;

export type FContatosRelationKey = keyof FContatosRelations;

export interface FFkOrigemTiposBase {
	f_fk1_origem_tipo: number;
	f_fk2_origem_tipo: number;
}

export type FFkOrigemTiposRelations = Record<string, never>;

export type FFkOrigemTiposRelationKey = keyof FFkOrigemTiposRelations;

export interface FFuncionariosBase {
	createdAt: string;
	createdBy: unknown;
	f_ativo: string;
	f_bairro: string;
	f_celular: string;
	f_cep: string;
	f_checklist_admissional: unknown[];
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
	f_fk_funcionarios: number;
	f_fk_funcionarios2: number;
	f_fk_setor: number;
	f_fk_turnos: number;
	f_genero: string;
	f_id_tecnico_ixc: number;
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
	id: number;
	updatedAt: string;
	updatedBy: unknown;
	f_cargo: CargosBase | null;
	f_departamento: DepartamentosBase | null;
	f_turnos: TurnosBase | null;
}

export interface FFuncionariosRelations {
	f_arquivos_funcionarios?: ArquivosFuncionariosBase[];
	f_asos?: AsosBase[];
	f_cargo?: CargosBase | null;
	f_chip_corporativo?: LinhaCorporativaBase[];
	f_departamento?: DepartamentosBase | null;
	f_foto_funcionarios?: FotoFuncionariosBase[];
	f_info_arquivos?: InfoArquivosBase[];
	f_info_aso?: InfoAsoBase[];
	f_logs_cargos?: LogsCargosBase[];
	f_parentesco?: ParentescoBase[];
	f_patrimonio_funcionarios?: PatrimonioBase[];
	f_qualirun_processos?: QualirunProcessosBase[];
	f_turnos?: TurnosBase | null;
	t_qualirun_info_adicionais?: QualirunInfoAdicionaisBase[];
}

export type FFuncionariosRelationKey = keyof FFuncionariosRelations;

export interface FornecedoresTelecomBase {
	createdAt: string;
	createdBy: unknown;
	f_fk_cliente_circuiro: number;
	f_fk_fornecedor_circuito: number;
	f_instrucoes: string;
	f_nome_fantasia: string;
	f_razao_social: string;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export interface FornecedoresTelecomRelations {
	f_fk_cliente_contrato?: TelecomContratosBase[];
	f_fk_contrato_fornecedor?: TelecomContratosBase[];
	f_fk_recurso_cliente?: TelecomRecursosBase[];
	f_fk_recurso_fornecedor?: TelecomRecursosBase[];
}

export type FornecedoresTelecomRelationKey = keyof FornecedoresTelecomRelations;

export interface FotoFuncionariosBase {
	createdAt: string;
	createdBy: unknown;
	extname: string;
	f_fk_funcionarios: number;
	filename: string;
	id: number;
	meta: Record<string, unknown>;
	mimetype: string;
	path: string;
	preview: string;
	size: number;
	storage: Record<string, unknown>;
	title: string;
	updatedAt: string;
	updatedBy: unknown;
	url: string;
	f_funcionarios: FFuncionariosBase | null;
}

export interface FotoFuncionariosRelations {
	f_funcionarios?: FFuncionariosBase | null;
}

export type FotoFuncionariosRelationKey = keyof FotoFuncionariosRelations;

export interface FRecursosFilhoBase {
	f_7q4zyk2d0kz: number;
	f_cn2m4i1kpqo: number;
}

export type FRecursosFilhoRelations = Record<string, never>;

export type FRecursosFilhoRelationKey = keyof FRecursosFilhoRelations;

export interface Ij93gv1hx9mBase {
	f_fk_equipamentos_interfaces: number;
	f_fk_interfaces_equipamentos: number;
}

export type Ij93gv1hx9mRelations = Record<string, never>;

export type Ij93gv1hx9mRelationKey = keyof Ij93gv1hx9mRelations;

export interface InfoArquivosBase {
	createdAt: string;
	createdBy: unknown;
	f_arquivo_externo: string;
	f_fk_funcionarios: number;
	f_titulo: string;
	id: string;
	updatedAt: string;
	updatedBy: unknown;
	f_arquivos: ArquivosFuncionariosBase | null;
	f_funcionarios: FFuncionariosBase | null;
}

export interface InfoArquivosRelations {
	f_arquivos?: ArquivosFuncionariosBase | null;
	f_funcionarios?: FFuncionariosBase | null;
}

export type InfoArquivosRelationKey = keyof InfoArquivosRelations;

export interface InfoAsoBase {
	createdAt: string;
	createdBy: unknown;
	f_apto: boolean;
	f_data_exame: string;
	f_data_prox_exame: string;
	f_dias_afastamento: string;
	f_fk_funcionarios: number;
	f_obs: string;
	f_tipo_exame: string;
	id: string;
	updatedAt: string;
	updatedBy: unknown;
	f_aso: AsosBase | null;
	f_funcionarios_2: FFuncionariosBase | null;
}

export interface InfoAsoRelations {
	f_aso?: AsosBase | null;
	f_funcionarios_2?: FFuncionariosBase | null;
}

export type InfoAsoRelationKey = keyof InfoAsoRelations;

export interface InterfacesEquipamentosBase {
	f_fk_equipamentos_interfaces_1: number;
	f_fk_equipamentos_interfaces_2: number;
}

export type InterfacesEquipamentosRelations = Record<string, never>;

export type InterfacesEquipamentosRelationKey =
	keyof InterfacesEquipamentosRelations;

export interface ItensPacotesBase {
	createdAt: string;
	createdBy: unknown;
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
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export type ItensPacotesRelations = Record<string, never>;

export type ItensPacotesRelationKey = keyof ItensPacotesRelations;

export interface LinhaCorporativaBase {
	createdAt: string;
	createdBy: unknown;
	f_fk_funcionarios: number;
	f_iccid_corporativo: string;
	f_numero_movel_corporativo: string;
	f_tipo: string;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
	f_funcionarios: FFuncionariosBase | null;
}

export interface LinhaCorporativaRelations {
	f_funcionarios?: FFuncionariosBase | null;
}

export type LinhaCorporativaRelationKey = keyof LinhaCorporativaRelations;

export interface LinksIndicadoresUsuariosBase {
	f_fk_links_usuarios_1: number;
	f_fk_links_usuarios_2: number;
}

export type LinksIndicadoresUsuariosRelations = Record<string, never>;

export type LinksIndicadoresUsuariosRelationKey =
	keyof LinksIndicadoresUsuariosRelations;

export interface LogsBase {
	createdAt: string;
	createdBy: unknown;
	f_log_data: Record<string, unknown>;
	f_log_level: string;
	f_log_message: string;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export type LogsRelations = Record<string, never>;

export type LogsRelationKey = keyof LogsRelations;

export interface LogsCargosBase {
	CBO: string;
	createdAt: string;
	createdBy: unknown;
	f_atividades: string;
	f_cargo_anterior: string;
	f_data_inicio_cargo: string;
	f_descricao: string;
	f_fk_funcionarios: number;
	f_nome_cargo: string;
	id: string;
	updatedAt: string;
	updatedBy: unknown;
	f_funcionarios: FFuncionariosBase | null;
}

export interface LogsCargosRelations {
	f_funcionarios?: FFuncionariosBase | null;
}

export type LogsCargosRelationKey = keyof LogsCargosRelations;

export interface Muu3vsavv3hBase {
	f_fk_1_setor_x_colaborador: number;
	f_fk_2_setor_x_colaborador: number;
}

export type Muu3vsavv3hRelations = Record<string, never>;

export type Muu3vsavv3hRelationKey = keyof Muu3vsavv3hRelations;

export interface Na4eifobeszBase {
	f_fk_pacote_adicional_negociacao: number;
	f_fk_pacote_adicional_pacote: number;
}

export type Na4eifobeszRelations = Record<string, never>;

export type Na4eifobeszRelationKey = keyof Na4eifobeszRelations;

export interface NegociacoesBase {
	createdAt: string;
	createdBy: unknown;
	f_apartamento: string;
	f_assinatura_gov: boolean;
	f_bairro: string;
	f_bairro_cobranca: string;
	f_bloco_quadra: string;
	f_cep: string;
	f_cep_cobranca: string;
	f_cidade_cobranca: string;
	f_complemento_cobranca: string;
	f_confissao_divida: string;
	f_contrato_ixc: string;
	f_cpf_cnpj: string;
	f_cpf_responsavel_assinatura: string;
	f_data_vencimento: string;
	f_email_cobranca: string;
	f_endereco: string;
	f_endereco_cidade: string;
	f_endereco_cobranca: string;
	f_endereco_complemento: string;
	f_endereco_de_cobranca: string;
	f_endereco_estado: string;
	f_endereco_numero: string;
	f_endereco_referencia: string;
	f_entrada_saldo_devedor: number;
	f_estado_cobranca: string;
	f_fidelidade: string;
	f_fk_contrato_ixc: number;
	f_fk_cupom_desconto: number;
	f_fk_negociacao_indicador: number;
	f_fk_negociacao_vendedor: number;
	f_fk_pacote: number;
	f_fk_pessoa_negociacao: number;
	f_fk_pessoa_pj_negociacao: number;
	f_Incremento: string;
	f_ixc_tipo_cobranca: string;
	f_link_assinatura: string;
	f_motivo: string;
	f_motivo_pontos: unknown[];
	f_multa_juros: number;
	f_nome_edificio: string;
	f_nome_fantasia: string;
	f_nome_razao: string;
	f_numero_cobranca: string;
	f_ordenacao: number;
	f_parcelas_mensais: number;
	f_periodo_final: string;
	f_pontos_atencao: string;
	f_responsavel_assinatura: string;
	f_rg_ie: string;
	f_scm: number;
	f_smp: number;
	f_status: string;
	f_stfc: number;
	f_substatus: string;
	f_sva: number;
	f_telefone: string;
	f_telefone_2: string;
	f_tipo_pessoa: string;
	f_titulo: string;
	f_valor_beneficios: number;
	f_valor_da_parcela: string;
	f_valor_devedor: number;
	f_valor_devedor_total: string;
	f_valor_instalacao: number;
	f_valor_mensal: number;
	f_valor_mensal_antigo: number;
	f_valor_mensal_sem_desconto: number;
	f_valor_multa_mes_faltante: number;
	f_zapsign: boolean;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
	f_cupom_desconto: CuponsDescontoBase | null;
	f_negociacao_pessoa_juridica: EmpresasBase | null;
	f_pacote: PacotesBase | null;
	f_pessoa: PessoasBase | null;
	f_vendedor: UsersBase | null;
}

export interface NegociacoesRelations {
	f_anexos?: AnexosNegociacoesBase[];
	f_comentarios?: NegociacoesComentariosBase[];
	f_cupom_desconto?: CuponsDescontoBase | null;
	f_fk_oe_qualirun?: OeQualirunBase[];
	f_itens_negociacao?: NegociacoesItensBase[];
	f_negociacao_contrato?: ContratosBase[];
	f_negociacao_pessoa_juridica?: EmpresasBase | null;
	f_pacote?: PacotesBase | null;
	f_pacotes_adicionais?: PacotesBase[];
	f_pessoa?: PessoasBase | null;
	f_qualirun_assinatura_gov?: QualirunAssinaturaGovBase[];
	f_vendedor?: UsersBase | null;
}

export type NegociacoesRelationKey = keyof NegociacoesRelations;

export interface NegociacoesComentariosBase {
	createdAt: string;
	createdBy: unknown;
	f_comentario: string;
	f_fk_comentarios_negociacoes: number;
	f_insere_atendimento_ixc: string;
	f_setor_para_obs: string;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export type NegociacoesComentariosRelations = Record<string, never>;

export type NegociacoesComentariosRelationKey =
	keyof NegociacoesComentariosRelations;

export interface NegociacoesItensBase {
	createdAt: string;
	createdBy: unknown;
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
	id: number;
	updatedAt: string;
	updatedBy: unknown;
	f_opcoes_smp: OpcoesSmpBase | null;
	f_opcoes_stfc: OpcoesStfcBase | null;
}

export interface NegociacoesItensRelations {
	f_opcoes_smp?: OpcoesSmpBase | null;
	f_opcoes_stfc?: OpcoesStfcBase | null;
}

export type NegociacoesItensRelationKey = keyof NegociacoesItensRelations;

export interface Nukww9tmq83Base {
	f_fk1_setor_tipos: number;
	f_fk2_setor_tipos: number;
}

export type Nukww9tmq83Relations = Record<string, never>;

export type Nukww9tmq83RelationKey = keyof Nukww9tmq83Relations;

export interface OeQualirunBase {
	createdAt: string;
	createdBy: unknown;
	f_fk_negociacoes: number;
	f_id_externo: string;
	f_link_externo: string;
	f_procedimento: string;
	f_status: string;
	id: string;
	updatedAt: string;
	updatedBy: unknown;
	f_negociacoes: NegociacoesBase | null;
}

export interface OeQualirunRelations {
	f_negociacoes?: NegociacoesBase | null;
}

export type OeQualirunRelationKey = keyof OeQualirunRelations;

export interface OpcoesSmpBase {
	createdAt: string;
	createdBy: unknown;
	f_bonus: string;
	f_fk_prod_negociacao_opcoes_smp: number;
	f_franquia_dados: string;
	f_minutos: string;
	f_nome_do_plano: string;
	f_portabilidade: string;
	f_sms: string;
	f_sva_incluso: string;
	f_terminal: string;
	f_valor_smp: number;
	f_valor_sva: number;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export type OpcoesSmpRelations = Record<string, never>;

export type OpcoesSmpRelationKey = keyof OpcoesSmpRelations;

export interface OpcoesSmpTemplateBase {
	createdAt: string;
	createdBy: unknown;
	f_bonus: string;
	f_fk_smp_produtos: number;
	f_franquia_dados: string;
	f_minutos: string;
	f_nome_plano: string;
	f_sms: string;
	f_sva_incluso: string;
	f_valor_smp: number;
	f_valor_sva: number;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export type OpcoesSmpTemplateRelations = Record<string, never>;

export type OpcoesSmpTemplateRelationKey = keyof OpcoesSmpTemplateRelations;

export interface OpcoesStfcBase {
	createdAt: string;
	createdBy: unknown;
	f_canais: string;
	f_fk_opcoes_stfc: number;
	f_franquia: string;
	f_nome_do_plano: string;
	f_portabilidade: string;
	f_terminais: string;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export type OpcoesStfcRelations = Record<string, never>;

export type OpcoesStfcRelationKey = keyof OpcoesStfcRelations;

export interface OpcoesStfcTemplateBase {
	createdAt: string;
	createdBy: unknown;
	f_canais: number;
	f_fk_opcoes_stfc_template: number;
	f_franquia: string;
	f_nome_do_plano: string;
	f_portabilidade: string;
	f_terminais: string;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export type OpcoesStfcTemplateRelations = Record<string, never>;

export type OpcoesStfcTemplateRelationKey = keyof OpcoesStfcTemplateRelations;

export interface OrigemXTiposBase {
	f_fk_origem_tipo_1: number;
	f_fk_origem_tipo_2: number;
}

export type OrigemXTiposRelations = Record<string, never>;

export type OrigemXTiposRelationKey = keyof OrigemXTiposRelations;

export interface P10scfhrhkwBase {
	createdAt: string;
	createdBy: unknown;
	f_m7vet8zixc9: number;
	id: string;
	updatedAt: string;
	updatedBy: unknown;
	f_ytw8yxxeul0: _902ctke5dhqBase | null;
}

export interface P10scfhrhkwRelations {
	f_ytw8yxxeul0?: _902ctke5dhqBase | null;
}

export type P10scfhrhkwRelationKey = keyof P10scfhrhkwRelations;

export interface PacotesBase {
	createdAt: string;
	createdBy: unknown;
	f_abre_atendimento: string;
	f_fk_desconto_pacotes: number;
	f_fk_id_pacote: number;
	f_mensalidade_com_desconto: number;
	f_mensalidade_sem_desconto: number;
	f_nome_pacote: string;
	f_pacote_adicional: string;
	f_pacote_principal: string;
	f_status: string;
	f_vender_para: unknown[];
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export interface PacotesRelations {
	f_itens_do_pacote?: ProdutosBase[];
}

export type PacotesRelationKey = keyof PacotesRelations;

export interface ParentescoBase {
	createdAt: string;
	createdBy: unknown;
	f_cpf: string;
	f_fk_funcionarios: number;
	f_nome: string;
	f_vinculo_colaborador: string;
	id: string;
	updatedAt: string;
	updatedBy: unknown;
	f_funcionarios: FFuncionariosBase | null;
}

export interface ParentescoRelations {
	f_funcionarios?: FFuncionariosBase | null;
}

export type ParentescoRelationKey = keyof ParentescoRelations;

export interface PatrimonioBase {
	createdAt: string;
	createdBy: unknown;
	f_armazenamento: string;
	f_estado_uso: string;
	f_fk_funcionarios: number;
	f_id_tecnico_ixc: number;
	f_modelo: string;
	f_nome_patrimonio: string;
	f_numero_serie: string;
	f_processador: string;
	f_quantidade: number;
	f_ram: string;
	f_so: string;
	f_tipo_patrimonio: string;
	f_valor_patrimonio: number;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
	f_funcionarios: FFuncionariosBase | null;
}

export interface PatrimonioRelations {
	f_funcionarios?: FFuncionariosBase | null;
}

export type PatrimonioRelationKey = keyof PatrimonioRelations;

export interface PessoasBase {
	createdAt: string;
	createdBy: unknown;
	f_analise_ixc: string;
	f_cpf: string;
	f_credito: string;
	f_data_nascimento: string;
	f_nome: string;
	f_sexo: string;
	f_vky78cvjtdw: number;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export type PessoasRelations = Record<string, never>;

export type PessoasRelationKey = keyof PessoasRelations;

export interface ProdutosBase {
	createdAt: string;
	createdBy: unknown;
	f_descricao_produto: string;
	f_id_ixc: number;
	f_mensalidade_com_desconto: number;
	f_mensalidade_sem_desconto: number;
	f_nome_produto: string;
	f_tipo_ixc: string;
	f_tipo_produto: string;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
	f_opcoes_smp_template: OpcoesSmpTemplateBase | null;
	f_opcoes_STFC: OpcoesStfcTemplateBase | null;
}

export interface ProdutosRelations {
	f_opcoes_smp_template?: OpcoesSmpTemplateBase | null;
	f_opcoes_STFC?: OpcoesStfcTemplateBase | null;
}

export type ProdutosRelationKey = keyof ProdutosRelations;

export interface QualirunAssinaturaGovBase {
	createdAt: string;
	createdBy: unknown;
	extname: string;
	f_fk_negociacoes: number;
	filename: string;
	id: string;
	meta: Record<string, unknown>;
	mimetype: string;
	path: string;
	preview: string;
	size: number;
	storage: Record<string, unknown>;
	title: string;
	updatedAt: string;
	updatedBy: unknown;
	url: string;
}

export type QualirunAssinaturaGovRelations = Record<string, never>;

export type QualirunAssinaturaGovRelationKey =
	keyof QualirunAssinaturaGovRelations;

export interface QualirunInfoAdicionaisBase {
	createdAt: string;
	createdBy: unknown;
	f_2fxykekjpk2: string;
	f_contato_emergencia: string;
	f_curso: string;
	f_fk_funcionarios: number;
	f_grau_escolaridade: string;
	f_id_externo: string;
	f_parentesco_cpf: string;
	f_parentesco_nome: string;
	f_parentesco_vinculo: string;
	f_situacao_curso: string;
	f_sqt1x7ndy5j: string;
	f_status: string;
	f_telefone_contato_emergencia: string;
	f_tkxxh3xi2zw: unknown;
	f_vinculo_contato_emergencia: string;
	id: string;
	updatedAt: string;
	updatedBy: unknown;
	f_funcionarios: FFuncionariosBase | null;
}

export interface QualirunInfoAdicionaisRelations {
	f_funcionarios?: FFuncionariosBase | null;
}

export type QualirunInfoAdicionaisRelationKey =
	keyof QualirunInfoAdicionaisRelations;

export interface QualirunProcessosBase {
	createdAt: string;
	createdBy: unknown;
	f_detalhes_procedimento: string;
	f_fk_funcionarios: number;
	f_id_externo: string;
	f_link_externo: string;
	f_procedimento: string;
	f_status: string;
	id: string;
	updatedAt: string;
	updatedBy: unknown;
	f_funcionarios: FFuncionariosBase | null;
}

export interface QualirunProcessosRelations {
	f_funcionarios?: FFuncionariosBase | null;
}

export type QualirunProcessosRelationKey = keyof QualirunProcessosRelations;

export interface RecursosViagemBase {
	createdAt: string;
	createdBy: unknown;
	f_destino_viagem: string;
	f_fk_recursos_viagem: number;
	f_km_percorrido: number;
	f_meio_transporte: string;
	f_observacoes: string;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export type RecursosViagemRelations = Record<string, never>;

export type RecursosViagemRelationKey = keyof RecursosViagemRelations;

export interface RegistrosDeContatoBase {
	createdAt: string;
	createdBy: unknown;
	f_categoria: string;
	f_encaminhamento_pendencia: string;
	f_feedback_observacao: string;
	f_fk_id_contrato: number;
	f_ha_pendencia: boolean;
	f_nota_tecnico: string;
	f_nota_vendas: string;
	f_resumo_contato: string;
	f_titulo: string;
	id: string;
	updatedAt: string;
	updatedBy: unknown;
}

export type RegistrosDeContatoRelations = Record<string, never>;

export type RegistrosDeContatoRelationKey = keyof RegistrosDeContatoRelations;

export interface Rguxtr9p91dBase {
	f_fk_ponta_a_interface: number;
	f_fk_ponta_a_interface2: number;
}

export type Rguxtr9p91dRelations = Record<string, never>;

export type Rguxtr9p91dRelationKey = keyof Rguxtr9p91dRelations;

export interface RolesBase {
	allowConfigure: boolean;
	allowNewMenu: boolean;
	allowNewMobileMenu: boolean;
	default: boolean;
	description: string;
	hidden: boolean;
	menuUiSchemas: unknown;
	mobileRoutes: unknown;
	name: string;
	resources: unknown;
	snippets: unknown;
	sort: number;
	strategy: Record<string, unknown>;
	title: string;
	users: unknown;
}

export type RolesRelations = Record<string, never>;

export type RolesRelationKey = keyof RolesRelations;

export interface ServicosBase {
	createdAt: string;
	createdBy: unknown;
	f_caracteristicas: string;
	f_descricao: string;
	f_designacao_atplus: string;
	f_designacao_externa: string;
	f_fk_servico_x_contrato: number;
	f_id_contrato_ixc: string;
	f_id_servico_ixc: string;
	f_propriedades: string;
	f_status: string;
	f_tipo: string;
	f_velocidade: string;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
	f_kyyzn4kut6e: TelecomContratosBase | null;
}

export interface ServicosRelations {
	f_acessos?: AcessosBase[];
	f_arquivos?: TelecomAnexosBase[];
	f_kyyzn4kut6e?: TelecomContratosBase | null;
	f_rj1pckkkeqi?: ServicosBase[];
	f_servicos_relacionados?: ServicosBase[];
}

export type ServicosRelationKey = keyof ServicosRelations;

export interface ServicosXServicosBase {
	f_8n72gqelvp5: number;
	f_d40asyeldtp: number;
}

export type ServicosXServicosRelations = Record<string, never>;

export type ServicosXServicosRelationKey = keyof ServicosXServicosRelations;

export interface SetorBase {
	createdAt: string;
	createdBy: unknown;
	f_fk_funcionarios: unknown;
	f_fk_sistemas_acessos: unknown;
	f_nome_setor: string;
	id: string;
	updatedAt: string;
	updatedBy: unknown;
}

export interface SetorRelations {
	f_funcionarios?: FFuncionariosBase[];
	f_funcionarios_1?: FFuncionariosBase[];
	f_sistemas_acessos?: SistemasAcessosBase[];
}

export type SetorRelationKey = keyof SetorRelations;

export interface SistemasAcessosBase {
	createdAt: string;
	createdBy: unknown;
	f_fk_funcionarios: unknown;
	f_sistemas_acessos: string;
	f_url: string;
	id: string;
	updatedAt: string;
	updatedBy: unknown;
}

export interface SistemasAcessosRelations {
	f_funcionarios?: FFuncionariosBase[];
}

export type SistemasAcessosRelationKey = keyof SistemasAcessosRelations;

export interface SitesBase {
	createdAt: string;
	createdBy: unknown;
	f_bairro: string;
	f_cep: string;
	f_cidade: string;
	f_complemento: string;
	f_dados_acesso: string;
	f_endereco: string;
	f_fk_telecom_contatos: number;
	f_nome: string;
	f_numero: string;
	f_sigla: string;
	f_status: string;
	f_tipo: string;
	f_uf: string;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
	f_contatos: FContatosBase | null;
}

export interface SitesRelations {
	f_anexos?: TelecomAnexosBase[];
	f_contatos?: FContatosBase | null;
	f_fk_sites_equipamentos?: EquipamentosBase[];
	f_racks?: TelecomRacksBase[];
}

export type SitesRelationKey = keyof SitesRelations;

export interface Siurxeb1juyBase {
	f_stgjevi19lg: number;
	f_vazo5n0bhe5: number;
}

export type Siurxeb1juyRelations = Record<string, never>;

export type Siurxeb1juyRelationKey = keyof Siurxeb1juyRelations;

export interface SolicitacaoComprasBase {
	createdAt: string;
	createdBy: unknown;
	f_0i82r8a2t99: number;
	f_anexos: unknown;
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
	id: number;
	updatedAt: string;
	updatedBy: unknown;
	f_fornecedor: ComprasFornecedoresBase | null;
}

export interface SolicitacaoComprasRelations {
	f_fornecedor?: ComprasFornecedoresBase | null;
	f_produtos?: ComprasProdutosBase[];
}

export type SolicitacaoComprasRelationKey = keyof SolicitacaoComprasRelations;

export interface SuspensaoContratoBase {
	createdAt: string;
	createdBy: unknown;
	f_cpf: string;
	f_dias_suspensao: string;
	f_email: string;
	f_final_suspensao: string;
	f_fk_pessoas: number;
	f_fk_pessoas_pj: number;
	f_fk_responsavel: number;
	f_id_contrato: string;
	f_inicio_suspensao: string;
	f_link_assinatura: string;
	f_status: string;
	f_telefone: string;
	f_teste: number;
	f_titulo: string;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
	f_pessoas: PessoasBase | null;
	f_pessoas_pj: EmpresasBase | null;
	f_responsavel: UsersBase | null;
}

export interface SuspensaoContratoRelations {
	f_comentarios?: ComentariosSuspensaoDeContratoBase[];
	f_contratos?: ContratosBase[];
	f_pessoas?: PessoasBase | null;
	f_pessoas_pj?: EmpresasBase | null;
	f_responsavel?: UsersBase | null;
}

export type SuspensaoContratoRelationKey = keyof SuspensaoContratoRelations;

export interface TabelaGeralBase {
	createdAt: string;
	createdBy: unknown;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export type TabelaGeralRelations = Record<string, never>;

export type TabelaGeralRelationKey = keyof TabelaGeralRelations;

export interface TelecomAnexosBase {
	createdAt: string;
	createdBy: unknown;
	extname: string;
	f_6j2u7ptvn88: number;
	f_88kxg6s8bb8: number;
	f_wo3wzgdoyoa: number;
	f_ycsq6mkkvk7: number;
	filename: string;
	id: number;
	meta: Record<string, unknown>;
	mimetype: string;
	path: string;
	preview: string;
	size: number;
	storage: Record<string, unknown>;
	storageId: number;
	title: string;
	updatedAt: string;
	updatedBy: unknown;
	url: string;
}

export type TelecomAnexosRelations = Record<string, never>;

export type TelecomAnexosRelationKey = keyof TelecomAnexosRelations;

export interface TelecomColocationOpcoesBase {
	createdAt: string;
	createdBy: unknown;
	f_6c1tv6gt1ey: number;
	f_designacao_rack: string;
	f_energia: unknown[];
	f_espaco_rack: string;
	fk_opcoes_colocation: number;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export type TelecomColocationOpcoesRelations = Record<string, never>;

export type TelecomColocationOpcoesRelationKey =
	keyof TelecomColocationOpcoesRelations;

export interface TelecomContratosBase {
	createdAt: string;
	createdBy: unknown;
	f_descricao: string;
	f_fk_cliente: number;
	f_fk_fornecedor: number;
	f_o6r7bgwk9bb: number;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
	f_cliente: FornecedoresTelecomBase | null;
	f_fornecedor: FornecedoresTelecomBase | null;
}

export interface TelecomContratosRelations {
	f_cliente?: FornecedoresTelecomBase | null;
	f_fornecedor?: FornecedoresTelecomBase | null;
	f_servicos?: ServicosBase[];
}

export type TelecomContratosRelationKey = keyof TelecomContratosRelations;

export interface TelecomFilaBase {
	createdAt: string;
	createdBy: unknown;
	f_fk_fila: number;
	f_nome: string;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export interface TelecomFilaRelations {
	f_fk_fila_rack?: TelecomRacksBase[];
}

export type TelecomFilaRelationKey = keyof TelecomFilaRelations;

export interface TelecomInterfacesBase {
	children: TelecomInterfacesBase[];
	createdAt: string;
	createdBy: unknown;
	f_configuracao: string;
	f_descricao: string;
	f_interface: string;
	f_p9gxrkh5utl: number;
	f_tipo: string;
	id: number;
	parent: TelecomInterfacesBase | null;
	parentId: number;
	updatedAt: string;
	updatedBy: unknown;
	f_s3gs1jjkqzm: AcessosBase | null;
}

export interface TelecomInterfacesRelations {
	f_fk_equipamento?: EquipamentosBase[];
	f_fk_interfaces_equipamentos?: EquipamentosBase[];
	f_fk_recurso_interface_ponta_a?: TelecomRecursosBase[];
	f_fk_recurso_interface_ponta_b?: TelecomRecursosBase[];
	f_s3gs1jjkqzm?: AcessosBase | null;
}

export type TelecomInterfacesRelationKey = keyof TelecomInterfacesRelations;

export interface TelecomIpsFixosBase {
	createdAt: string;
	createdBy: unknown;
	f_contrato_ixc: string;
	f_controle: string;
	f_ip: string;
	f_login: string;
	f_possui_ip_fixo: string;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export type TelecomIpsFixosRelations = Record<string, never>;

export type TelecomIpsFixosRelationKey = keyof TelecomIpsFixosRelations;

export interface TelecomOpcoesL2lBase {
	createdAt: string;
	createdBy: unknown;
	f_rmfqnk0k53u: number;
	f_velocidade: string;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export type TelecomOpcoesL2lRelations = Record<string, never>;

export type TelecomOpcoesL2lRelationKey = keyof TelecomOpcoesL2lRelations;

export interface TelecomRacksBase {
	children: TelecomRacksBase[];
	createdAt: string;
	createdBy: unknown;
	f_fk_rack_fila: number;
	f_fk_rack_sala: number;
	f_fk_site_racks: number;
	f_rack: string;
	f_sigla: string;
	id: number;
	parent: TelecomRacksBase | null;
	parentId: number;
	updatedAt: string;
	updatedBy: unknown;
	f_fila: TelecomFilaBase | null;
	f_fk_rack_sites: SitesBase | null;
	f_sala: TelecomSalasBase | null;
}

export interface TelecomRacksRelations {
	f_fila?: TelecomFilaBase | null;
	f_fk_rack_a_recursos?: TelecomRecursosBase[];
	f_fk_rack_ativos?: EquipamentosBase[];
	f_fk_rack_sites?: SitesBase | null;
	f_fk_recursos_rack_b?: TelecomRecursosBase[];
	f_sala?: TelecomSalasBase | null;
}

export type TelecomRacksRelationKey = keyof TelecomRacksRelations;

export interface TelecomRecursosBase {
	children: TelecomRecursosBase[];
	createdAt: string;
	createdBy: unknown;
	f_2ew016ynyo6: number;
	f_contrato_ixc: number;
	f_designacao_atplus: string;
	f_designacao_externa: string;
	f_detalhes: string;
	f_finalidade: string;
	f_fk_anexos_recursos: number;
	f_fk_cliente_recurso: number;
	f_fk_fornecedor_recurso: number;
	f_fk_rack_a: number;
	f_fk_rack_b: number;
	f_fk_site_a: number;
	f_fk_site_b: number;
	f_id_produto: string;
	f_nome: string;
	f_status: string;
	f_tipo: string;
	id: number;
	parent: TelecomRecursosBase | null;
	parentId: number;
	updatedAt: string;
	updatedBy: unknown;
	f_cliente: FornecedoresTelecomBase | null;
	f_equipamento_a: EquipamentosBase | null;
	f_fornecedor: FornecedoresTelecomBase | null;
	f_opcoes_colocation: TelecomColocationOpcoesBase | null;
	f_opcoes_l2l: TelecomOpcoesL2lBase | null;
	f_opcoes_link_ip: TelecomTransitoOpcoesBase | null;
	f_rack_a: TelecomRacksBase | null;
	f_rack_b: TelecomRacksBase | null;
	f_site_a: SitesBase | null;
	f_site_b: SitesBase | null;
}

export interface TelecomRecursosRelations {
	f_anexos?: TelecomAnexosBase[];
	f_cliente?: FornecedoresTelecomBase | null;
	f_equipamento_a?: EquipamentosBase | null;
	f_fornecedor?: FornecedoresTelecomBase | null;
	f_interface_ponta_a?: TelecomInterfacesBase[];
	f_interface_ponta_b?: TelecomInterfacesBase[];
	f_opcoes_colocation?: TelecomColocationOpcoesBase | null;
	f_opcoes_l2l?: TelecomOpcoesL2lBase | null;
	f_opcoes_link_ip?: TelecomTransitoOpcoesBase | null;
	f_rack_a?: TelecomRacksBase | null;
	f_rack_b?: TelecomRacksBase | null;
	f_site_a?: SitesBase | null;
	f_site_b?: SitesBase | null;
}

export type TelecomRecursosRelationKey = keyof TelecomRecursosRelations;

export interface TelecomSalasBase {
	createdAt: string;
	createdBy: unknown;
	f_fk_salas: number;
	f_nome: string;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export interface TelecomSalasRelations {
	f_fk_sala_racks?: TelecomRacksBase[];
}

export type TelecomSalasRelationKey = keyof TelecomSalasRelations;

export interface TelecomTransitoOpcoesBase {
	createdAt: string;
	createdBy: unknown;
	f_1eu8gjcf9js: number;
	f_ips: string;
	f_velocidade: string;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export type TelecomTransitoOpcoesRelations = Record<string, never>;

export type TelecomTransitoOpcoesRelationKey =
	keyof TelecomTransitoOpcoesRelations;

export interface TemplatesAtendimentoN1Base {
	createdAt: string;
	createdBy: unknown;
	f_acessa_pela_rede_da_atplus: string;
	f_alteracoes: string;
	f_aplicativo: unknown[];
	f_aplicativo_especifico: string;
	f_apn_preenchida: string;
	f_descricao_do_cliente: string;
	"f_e-mail": string;
	f_endereco_do_site: string;
	f_fabricante: string;
	f_fk_templates_atendimentos: number;
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
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export type TemplatesAtendimentoN1Relations = Record<string, never>;

export type TemplatesAtendimentoN1RelationKey =
	keyof TemplatesAtendimentoN1Relations;

export interface TemplatesXOrdensDeServicoBase {
	f_fk_template_os_1: number;
	f_fk_template_os_2: number;
}

export type TemplatesXOrdensDeServicoRelations = Record<string, never>;

export type TemplatesXOrdensDeServicoRelationKey =
	keyof TemplatesXOrdensDeServicoRelations;

export interface TipoXTemplatesBase {
	f_fk_tipo_template_1: number;
	f_fk_tipo_template_2: number;
}

export type TipoXTemplatesRelations = Record<string, never>;

export type TipoXTemplatesRelationKey = keyof TipoXTemplatesRelations;

export interface TrocaEnderecoBase {
	createdAt: string;
	createdBy: unknown;
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
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export type TrocaEnderecoRelations = Record<string, never>;

export type TrocaEnderecoRelationKey = keyof TrocaEnderecoRelations;

export interface TrocasdetitularidadeComentariosBase {
	createdAt: string;
	createdBy: unknown;
	f_comentario: string;
	f_comentario_troca_de_titularidade: number;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export type TrocasdetitularidadeComentariosRelations = Record<string, never>;

export type TrocasdetitularidadeComentariosRelationKey =
	keyof TrocasdetitularidadeComentariosRelations;

export interface TurnosBase {
	createdAt: string;
	createdBy: unknown;
	f_turno: string;
	id: string;
	updatedAt: string;
	updatedBy: unknown;
}

export interface TurnosRelations {
	f_funcionarios?: FFuncionariosBase[];
}

export type TurnosRelationKey = keyof TurnosRelations;

export interface UsersBase {
	appLang: string;
	createdAt: string;
	createdBy: unknown;
	createdById: unknown;
	email: string;
	f_fk_cargos: number;
	f_fk_departamentos: number;
	f_fk_desconto_vendedor: number;
	f_id_tecnico_ixc: number;
	f_id_vendedor_ixc: number;
	id: number;
	nickname: string;
	password: string;
	passwordChangeTz: number;
	phone: string;
	resetToken: string;
	sort: number;
	systemSettings: Record<string, unknown>;
	updatedAt: string;
	updatedBy: unknown;
	updatedById: unknown;
	username: string;
	mainDepartment: DepartmentsBase | null;
}

export interface UsersRelations {
	departments?: DepartmentsBase[];
	mainDepartment?: DepartmentsBase | null;
	roles?: RolesBase[];
}

export type UsersRelationKey = keyof UsersRelations;

export interface VendedorCuponsBase {
	f_fk_vendedor_cupom_1: number;
	f_fk_vendedor_cupom_2: number;
}

export type VendedorCuponsRelations = Record<string, never>;

export type VendedorCuponsRelationKey = keyof VendedorCuponsRelations;

export interface ViagemSolicitacaoBase {
	createdAt: string;
	createdBy: unknown;
	f_anexos: unknown;
	f_colaborador_beneficiado: string;
	f_data_retorno: string;
	f_data_viagem: string;
	f_destino_viagem: string;
	f_diaria: string;
	f_fase: string;
	f_fk_solicitacao_viagem: number;
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
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export type ViagemSolicitacaoRelations = Record<string, never>;

export type ViagemSolicitacaoRelationKey = keyof ViagemSolicitacaoRelations;

export interface VlanTagsBase {
	createdAt: string;
	createdBy: unknown;
	f_tag: string;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export type VlanTagsRelations = Record<string, never>;

export type VlanTagsRelationKey = keyof VlanTagsRelations;

export interface VwMermaidPorServicoBase {
	mermaid_text: string;
	servico_id: number;
}

export type VwMermaidPorServicoRelations = Record<string, never>;

export type VwMermaidPorServicoRelationKey = keyof VwMermaidPorServicoRelations;

export interface Ynltolqbwj1Base {
	fk_interface_ponta_b: number;
	fk_interface_ponta_b2: number;
}

export type Ynltolqbwj1Relations = Record<string, never>;

export type Ynltolqbwj1RelationKey = keyof Ynltolqbwj1Relations;

export interface ZapsignBase {
	createdAt: string;
	createdBy: unknown;
	f_data_de_encerramento: string;
	f_nome_do_plano: string;
	f_numero_de_creditos: string;
	f_periodo: string;
	f_status: string;
	id: number;
	updatedAt: string;
	updatedBy: unknown;
}

export type ZapsignRelations = Record<string, never>;

export type ZapsignRelationKey = keyof ZapsignRelations;
