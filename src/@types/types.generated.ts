
/**
 * Arquivo gerado automaticamente em 2026-04-06T20:30:52.547Z
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 */

export interface NegociacoesComentariosBase {
	id: number;
	f_fk_comentarios_negociacoes: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_comentario: string;
	f_insere_atendimento_ixc: string;
	f_setor_para_obs: string;
}

export type NegociacoesComentariosRelations = object;

export type NegociacoesComentariosRelationKey = keyof NegociacoesComentariosRelations;

export interface FContatosBase {
	id: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_nome: string;
	f_contato: string;
}

export type FContatosRelations = object;

export type FContatosRelationKey = keyof FContatosRelations;

export interface SuspensaoContratoBase {
	id: number;
	f_fk_pessoas_pj: number;
	f_fk_pessoas: number;
	f_fk_responsavel: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_pessoas: unknown;
	f_pessoas_pj: unknown;
	f_status: string;
	f_titulo: string;
	f_dias_suspensao: string;
	f_responsavel: unknown;
	f_id_contrato: string;
	f_teste: unknown;
	f_email: string;
	f_cpf: string;
	f_telefone: string;
	f_link_assinatura: string;
	f_contratos: unknown;
	f_comentarios: unknown;
	f_inicio_suspensao: string;
	f_final_suspensao: string;
}

export type SuspensaoContratoRelations = object;

export type SuspensaoContratoRelationKey = keyof SuspensaoContratoRelations;

export interface EmpresasBase {
	id: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_razao_social: string;
	f_nome_fantasia: string;
	f_ie: string;
	f_fundacao: unknown;
	f_responsavel: string;
	f_cpf_responsavel: string;
	f_email_responsavel: string;
	f_cnpj: string;
}

export type EmpresasRelations = object;

export type EmpresasRelationKey = keyof EmpresasRelations;

export interface ComprasProdutosBase {
	id: number;
	f_834gi7nhict: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_produto: string;
	f_quantidade: unknown;
	f_valor_uni: unknown;
	f_sub_total: unknown;
	f_fk_produtos_solicitacao_compra: unknown;
	f_link_produto: string;
}

export type ComprasProdutosRelations = object;

export type ComprasProdutosRelationKey = keyof ComprasProdutosRelations;

export interface TelecomRecursosBase {
	id: number;
	f_fk_rack_a: number;
	f_fk_site_b: number;
	f_fk_site_a: number;
	parentId: number;
	f_fk_anexos_recursos: number;
	f_fk_cliente_recurso: number;
	f_fk_rack_b: number;
	f_2ew016ynyo6: number;
	f_fk_fornecedor_recurso: number;
	parent: unknown;
	children: unknown;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_nome: string;
	f_status: string;
	f_site_a: unknown;
	f_site_b: unknown;
	f_fornecedor: unknown;
	f_cliente: unknown;
	f_opcoes_link_ip: unknown;
	f_opcoes_colocation: unknown;
	f_opcoes_l2l: unknown;
	f_tipo: string;
	f_designacao_atplus: unknown;
	f_designacao_externa: string;
	f_interface_ponta_a: unknown;
	f_interface_ponta_b: unknown;
	f_rack_a: unknown;
	f_rack_b: unknown;
	f_contrato_ixc: number;
	f_anexos: unknown;
	f_detalhes: string;
	f_finalidade: string;
	f_id_produto: string;
	f_equipamento_a: unknown;
}

export type TelecomRecursosRelations = object;

export type TelecomRecursosRelationKey = keyof TelecomRecursosRelations;

export interface _3advfk0gv0zBase {
	f_fk_insumos_servicos: number;
	f_fk_servicos_insumos: number;
}

export type _3advfk0gv0zRelations = object;

export type _3advfk0gv0zRelationKey = keyof _3advfk0gv0zRelations;

export interface EquipamentosBase {
	id: number;
	f_34u76klwxoj: number;
	f_fk_ativo_rack: number;
	f_fk_equipamentos_anexos: number;
	f_fk_equipamentos_interfaces: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_modelo: string;
	f_nome: string;
	f_observacoes: string;
	f_site: unknown;
	f_sigla: unknown;
	f_sn: string;
	f_interfaces: unknown;
	f_fwvce6bqigw: unknown;
	f_rack: unknown;
	f_recurso_equipamento_a: unknown;
	f_hcqrd9qhcid: unknown;
}

export type EquipamentosRelations = object;

export type EquipamentosRelationKey = keyof EquipamentosRelations;

export interface Ij93gv1hx9mBase {
	f_fk_equipamentos_interfaces: number;
	f_fk_interfaces_equipamentos: number;
}

export type Ij93gv1hx9mRelations = object;

export type Ij93gv1hx9mRelationKey = keyof Ij93gv1hx9mRelations;

export interface VwMermaidPorServicoBase {
	servico_id: number;
	mermaid_text: string;
}

export type VwMermaidPorServicoRelations = object;

export type VwMermaidPorServicoRelationKey = keyof VwMermaidPorServicoRelations;

export interface PessoasBase {
	id: number;
	f_vky78cvjtdw: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_nome: string;
	f_cpf: string;
	f_sexo: string;
	f_data_nascimento: string;
	f_credito: string;
	f_analise_ixc: string;
}

export type PessoasRelations = object;

export type PessoasRelationKey = keyof PessoasRelations;

export interface VendedorCuponsBase {
	f_fk_vendedor_cupom_1: number;
	f_fk_vendedor_cupom_2: number;
}

export type VendedorCuponsRelations = object;

export type VendedorCuponsRelationKey = keyof VendedorCuponsRelations;

export interface DcServidoresBase {
	id: number;
	f_fk_discos: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_modelo: string;
	f_fabricante: string;
	f_processador: string;
	f_memoria: string;
	f_sn: string;
	f_obs: string;
	f_status: string;
	f_discos: unknown;
	f_memorias: unknown;
}

export type DcServidoresRelations = object;

export type DcServidoresRelationKey = keyof DcServidoresRelations;

export interface InterfacesEquipamentosBase {
	f_fk_equipamentos_interfaces_1: number;
	f_fk_equipamentos_interfaces_2: number;
}

export type InterfacesEquipamentosRelations = object;

export type InterfacesEquipamentosRelationKey = keyof InterfacesEquipamentosRelations;

export interface OeQualirunBase {
	id: unknown;
	f_fk_negociacoes: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_link_externo: string;
	f_status: string;
	f_negociacoes: unknown;
	f_procedimento: string;
	f_id_externo: string;
}

export type OeQualirunRelations = object;

export type OeQualirunRelationKey = keyof OeQualirunRelations;

export interface DadosAdicionaisClienteContratoBase {
	id: unknown;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_id_cliente_contrato: number;
	f_origem_cliente: string;
	f_perfil_de_uso: unknown[];
	f_forma_de_pagamento: string;
	f_pessoas_na_residencia: number;
}

export type DadosAdicionaisClienteContratoRelations = object;

export type DadosAdicionaisClienteContratoRelationKey = keyof DadosAdicionaisClienteContratoRelations;

export interface TelecomTransitoOpcoesBase {
	id: number;
	f_1eu8gjcf9js: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_velocidade: string;
	f_ips: string;
}

export type TelecomTransitoOpcoesRelations = object;

export type TelecomTransitoOpcoesRelationKey = keyof TelecomTransitoOpcoesRelations;

export interface TelecomContratosBase {
	id: number;
	f_fk_cliente: number;
	f_fk_fornecedor: number;
	f_o6r7bgwk9bb: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_cliente: unknown;
	f_fornecedor: unknown;
	f_servicos: unknown;
	f_descricao: string;
}

export type TelecomContratosRelations = object;

export type TelecomContratosRelationKey = keyof TelecomContratosRelations;

export interface NegociacoesBase {
	id: number;
	f_fk_pessoa_pj_negociacao: number;
	f_fk_negociacao_vendedor: number;
	f_fk_pacote: number;
	f_fk_pessoa_negociacao: number;
	f_fk_cupom_desconto: number;
	f_fk_contrato_ixc: number;
	f_fk_negociacao_indicador: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_titulo: string;
	f_valor_mensal: unknown;
	f_valor_instalacao: unknown;
	f_status: string;
	f_ordenacao: unknown;
	f_anexos: unknown;
	f_pacote: unknown;
	f_pessoa: unknown;
	f_itens_negociacao: unknown;
	f_valor_mensal_sem_desconto: unknown;
	f_fidelidade: string;
	f_valor_beneficios: unknown;
	f_valor_multa_mes_faltante: unknown;
	f_cep: string;
	f_endereco: string;
	f_endereco_numero: string;
	f_endereco_complemento: string;
	f_endereco_cidade: string;
	f_endereco_referencia: string;
	f_tipo_pessoa: string;
	f_negociacao_pessoa_juridica: unknown;
	f_bairro: string;
	f_email_cobranca: string;
	f_comentarios: unknown;
	f_telefone: string;
	f_telefone_2: string;
	f_responsavel_assinatura: string;
	f_cpf_responsavel_assinatura: string;
	f_substatus: string;
	f_link_assinatura: string;
	f_stfc: number;
	f_smp: number;
	f_scm: number;
	f_sva: number;
	f_data_vencimento: string;
	f_ixc_tipo_cobranca: string;
	f_vendedor: unknown;
	f_motivo: string;
	f_negociacao_contrato: unknown;
	f_pacotes_adicionais: unknown;
	f_endereco_estado: string;
	f_contrato_ixc: string;
	f_cpf_cnpj: string;
	f_nome_razao: string;
	f_rg_ie: string;
	f_nome_fantasia: string;
	f_valor_mensal_antigo: unknown;
	f_cupom_desconto: unknown;
	f_Incremento: unknown;
	f_endereco_cobranca: string;
	f_cep_cobranca: string;
	f_endereco_de_cobranca: string;
	f_numero_cobranca: string;
	f_cidade_cobranca: string;
	f_bairro_cobranca: string;
	f_complemento_cobranca: string;
	f_estado_cobranca: string;
	f_valor_devedor: unknown;
	f_parcelas_mensais: number;
	f_valor_da_parcela: unknown;
	f_multa_juros: unknown;
	f_confissao_divida: string;
	f_valor_devedor_total: unknown;
	f_entrada_saldo_devedor: unknown;
	f_periodo_final: string;
	f_pontos_atencao: string;
	f_motivo_pontos: unknown[];
	f_zapsign: boolean;
	f_assinatura_gov: boolean;
	f_fk_oe_qualirun: unknown;
	f_qualirun_assinatura_gov: unknown;
	f_nome_edificio: string;
	f_apartamento: string;
	f_bloco_quadra: string;
}

export type NegociacoesRelations = object;

export type NegociacoesRelationKey = keyof NegociacoesRelations;

export interface Ynltolqbwj1Base {
	fk_interface_ponta_b: number;
	fk_interface_ponta_b2: number;
}

export type Ynltolqbwj1Relations = object;

export type Ynltolqbwj1RelationKey = keyof Ynltolqbwj1Relations;

export interface OpcoesSmpTemplateBase {
	id: number;
	f_fk_smp_produtos: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_sva_incluso: string;
	f_valor_smp: unknown;
	f_valor_sva: unknown;
	f_nome_plano: string;
	f_franquia_dados: string;
	f_bonus: string;
	f_minutos: string;
	f_sms: string;
}

export type OpcoesSmpTemplateRelations = object;

export type OpcoesSmpTemplateRelationKey = keyof OpcoesSmpTemplateRelations;

export interface DiscosBase {
	id: number;
	f_fk_discos: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_SN: string;
	f_capacidade: string;
	f_tipo: string;
	f_modelo: string;
	f_preco_compra: unknown;
	f_preco_venda_locacao: unknown;
	f_data_aquisicao: string;
	f_fornecedor: string;
}

export type DiscosRelations = object;

export type DiscosRelationKey = keyof DiscosRelations;

export interface TemplatesXOrdensDeServicoBase {
	f_fk_template_os_1: number;
	f_fk_template_os_2: number;
}

export type TemplatesXOrdensDeServicoRelations = object;

export type TemplatesXOrdensDeServicoRelationKey = keyof TemplatesXOrdensDeServicoRelations;

export interface P10scfhrhkwBase {
	id: unknown;
	f_m7vet8zixc9: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_ytw8yxxeul0: unknown;
}

export type P10scfhrhkwRelations = object;

export type P10scfhrhkwRelationKey = keyof P10scfhrhkwRelations;

export interface InfoArquivosBase {
	id: unknown;
	f_fk_funcionarios: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_arquivo_externo: string;
	f_arquivos: unknown;
	f_funcionarios: unknown;
	f_titulo: string;
}

export type InfoArquivosRelations = object;

export type InfoArquivosRelationKey = keyof InfoArquivosRelations;

export interface Na4eifobeszBase {
	f_fk_pacote_adicional_negociacao: number;
	f_fk_pacote_adicional_pacote: number;
}

export type Na4eifobeszRelations = object;

export type Na4eifobeszRelationKey = keyof Na4eifobeszRelations;

export interface ArquivosFuncionariosBase {
	id: number;
	f_fk_funcionarios: number;
	title: string;
	f_fk_info_arquivos: number;
	filename: string;
	extname: string;
	size: number;
	mimetype: string;
	path: string;
	url: string;
	preview: string;
	storage: unknown;
	meta: unknown;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_funcionarios: unknown;
	f_info_arquivos: unknown;
}

export type ArquivosFuncionariosRelations = object;

export type ArquivosFuncionariosRelationKey = keyof ArquivosFuncionariosRelations;

export interface ContratosBase {
	id: number;
	title: string;
	f_fk_negociacao_contrato: number;
	f_fk_suspensao: number;
	filename: string;
	extname: string;
	size: number;
	mimetype: string;
	path: string;
	url: string;
	preview: string;
	storage: unknown;
	meta: unknown;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	storageId: number;
}

export type ContratosRelations = object;

export type ContratosRelationKey = keyof ContratosRelations;

export interface ComentariosComprasBase {
	id: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_comentarios: string;
	f_comentarios_compras: number;
}

export type ComentariosComprasRelations = object;

export type ComentariosComprasRelationKey = keyof ComentariosComprasRelations;

export interface LinhaCorporativaBase {
	id: number;
	f_fk_funcionarios: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_numero_movel_corporativo: string;
	f_iccid_corporativo: string;
	f_funcionarios: unknown;
	f_tipo: string;
}

export type LinhaCorporativaRelations = object;

export type LinhaCorporativaRelationKey = keyof LinhaCorporativaRelations;

export interface ProdutosBase {
	id: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_nome_produto: string;
	f_descricao_produto: string;
	f_mensalidade_sem_desconto: unknown;
	f_mensalidade_com_desconto: unknown;
	f_id_ixc: number;
	f_tipo_produto: string;
	f_opcoes_smp_template: unknown;
	f_opcoes_STFC: unknown;
	f_tipo_ixc: string;
}

export type ProdutosRelations = object;

export type ProdutosRelationKey = keyof ProdutosRelations;

export interface AtendimentosIxcBase {
	id: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_assunto: string;
	f_processo: string;
	f_descricao: string;
	f_cliente: string;
	f_contrato: string;
	f_idcliente: string;
	f_departamento: string;
	f_tarefas: string;
	f_finalizaatendimento: boolean;
	f_idos: string;
	f_responsavel: string;
	f_datainicio: string;
	f_datafim: string;
	f_diagnosticos: string;
	f_templates_atendimentos: unknown;
	f_idatendimento: string;
	f_usuario: string;
	f_prioridade: string;
	f_id_login: string;
}

export type AtendimentosIxcRelations = object;

export type AtendimentosIxcRelationKey = keyof AtendimentosIxcRelations;

export interface FRecursosFilhoBase {
	f_7q4zyk2d0kz: number;
	f_cn2m4i1kpqo: number;
}

export type FRecursosFilhoRelations = object;

export type FRecursosFilhoRelationKey = keyof FRecursosFilhoRelations;

export interface TelecomInterfacesBase {
	id: number;
	f_p9gxrkh5utl: number;
	parentId: number;
	parent: unknown;
	children: unknown;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_descricao: string;
	f_interface: string;
	f_tipo: string;
	f_configuracao: string;
	f_fk_interfaces_equipamentos: unknown;
	f_fk_equipamento: unknown;
	f_fk_recurso_interface_ponta_a: unknown;
	f_fk_recurso_interface_ponta_b: unknown;
	f_s3gs1jjkqzm: unknown;
}

export type TelecomInterfacesRelations = object;

export type TelecomInterfacesRelationKey = keyof TelecomInterfacesRelations;

export interface ComentarioViagemBase {
	id: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_comentario: string;
	f_comentario_viagem: number;
}

export type ComentarioViagemRelations = object;

export type ComentarioViagemRelationKey = keyof ComentarioViagemRelations;

export interface FFkOrigemTiposBase {
	f_fk1_origem_tipo: number;
	f_fk2_origem_tipo: number;
}

export type FFkOrigemTiposRelations = object;

export type FFkOrigemTiposRelationKey = keyof FFkOrigemTiposRelations;

export interface OpcoesStfcBase {
	id: number;
	f_fk_opcoes_stfc: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_terminais: string;
	f_portabilidade: string;
	f_canais: string;
	f_franquia: string;
	f_nome_do_plano: string;
}

export type OpcoesStfcRelations = object;

export type OpcoesStfcRelationKey = keyof OpcoesStfcRelations;

export interface SistemasAcessosBase {
	id: unknown;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_sistemas_acessos: string;
	f_funcionarios: unknown;
	f_fk_funcionarios: unknown;
	f_url: string;
}

export type SistemasAcessosRelations = object;

export type SistemasAcessosRelationKey = keyof SistemasAcessosRelations;

export interface PacotesBase {
	id: number;
	f_fk_desconto_pacotes: number;
	f_fk_id_pacote: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_nome_pacote: string;
	f_mensalidade_com_desconto: unknown;
	f_itens_do_pacote: unknown;
	f_mensalidade_sem_desconto: unknown;
	f_status: string;
	f_pacote_principal: string;
	f_pacote_adicional: string;
	f_vender_para: unknown[];
	f_abre_atendimento: string;
}

export type PacotesRelations = object;

export type PacotesRelationKey = keyof PacotesRelations;

export interface TrocasdetitularidadeComentariosBase {
	id: number;
	f_comentario_troca_de_titularidade: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_comentario: string;
}

export type TrocasdetitularidadeComentariosRelations = object;

export type TrocasdetitularidadeComentariosRelationKey = keyof TrocasdetitularidadeComentariosRelations;

export interface TelecomAnexosBase {
	id: number;
	f_6j2u7ptvn88: number;
	f_88kxg6s8bb8: number;
	f_wo3wzgdoyoa: number;
	title: string;
	f_ycsq6mkkvk7: number;
	filename: string;
	extname: string;
	size: number;
	mimetype: string;
	path: string;
	url: string;
	preview: string;
	storage: unknown;
	meta: unknown;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	storageId: number;
}

export type TelecomAnexosRelations = object;

export type TelecomAnexosRelationKey = keyof TelecomAnexosRelations;

export interface ContratosIxcBase {
	id: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_descricao: string;
	f_vencimento: string;
	f_expiracao: string;
	f_itens_contrato: unknown;
}

export type ContratosIxcRelations = object;

export type ContratosIxcRelationKey = keyof ContratosIxcRelations;

export interface Siurxeb1juyBase {
	f_stgjevi19lg: number;
	f_vazo5n0bhe5: number;
}

export type Siurxeb1juyRelations = object;

export type Siurxeb1juyRelationKey = keyof Siurxeb1juyRelations;

export interface AcessosBase {
	id: number;
	f_fk_servicos_x_acessos: number;
	f_fk_site: number;
	f_x7w60fv71f9: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_tipo: string;
	f_site: unknown;
	f_insumos: unknown;
	f_xzuv9d6zkhr: unknown;
	f_equipamento: unknown;
	f_interface: unknown;
}

export type AcessosRelations = object;

export type AcessosRelationKey = keyof AcessosRelations;

export interface AegisBase {
	id: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_statusmac: string;
	f_statuslogin: string;
	f_idlogin: string;
	f_statusdesbloqueioconfiaca: string;
	f_notas_cliente: string;
	f_notas: string;
}

export type AegisRelations = object;

export type AegisRelationKey = keyof AegisRelations;

export interface EventosDemandaBase {
	f_fk1_eventos_demanda: number;
	f_fk2_eventos_demanda: number;
}

export type EventosDemandaRelations = object;

export type EventosDemandaRelationKey = keyof EventosDemandaRelations;

export interface OpcoesSmpBase {
	id: number;
	f_fk_prod_negociacao_opcoes_smp: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_sva_incluso: string;
	f_portabilidade: string;
	f_terminal: string;
	f_valor_smp: unknown;
	f_valor_sva: unknown;
	f_nome_do_plano: string;
	f_franquia_dados: string;
	f_bonus: string;
	f_minutos: string;
	f_sms: string;
}

export type OpcoesSmpRelations = object;

export type OpcoesSmpRelationKey = keyof OpcoesSmpRelations;

export interface LogsCargosBase {
	id: unknown;
	f_fk_funcionarios: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_nome_cargo: string;
	f_descricao: string;
	f_atividades: string;
	CBO: string;
	f_funcionarios: unknown;
	f_data_inicio_cargo: string;
	f_cargo_anterior: string;
}

export type LogsCargosRelations = object;

export type LogsCargosRelationKey = keyof LogsCargosRelations;

export interface AnexosNegociacoesBase {
	id: number;
	f_anexos_fk: number;
	title: string;
	filename: string;
	extname: string;
	size: number;
	mimetype: string;
	path: string;
	url: string;
	preview: string;
	storage: unknown;
	meta: unknown;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	storageId: number;
}

export type AnexosNegociacoesRelations = object;

export type AnexosNegociacoesRelationKey = keyof AnexosNegociacoesRelations;

export interface FacilidadeBase {
	id: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_nome: string;
	f_descricao: string;
}

export type FacilidadeRelations = object;

export type FacilidadeRelationKey = keyof FacilidadeRelations;

export interface ColaboradoresXSetorBase {
	f_fk_colaboradores_setor_1: number;
	f_fk_colaboradores_setor_2: number;
}

export type ColaboradoresXSetorRelations = object;

export type ColaboradoresXSetorRelationKey = keyof ColaboradoresXSetorRelations;

export interface ParentescoBase {
	id: unknown;
	f_fk_funcionarios: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_nome: string;
	f_cpf: string;
	f_vinculo_colaborador: string;
	f_funcionarios: unknown;
}

export type ParentescoRelations = object;

export type ParentescoRelationKey = keyof ParentescoRelations;

export interface EquipamentosEmPrediosBase {
	id: unknown;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_nome_predio: string;
	f_contato_sindico: string;
	f_tipo_equipamento: string;
	f_modelo_equipamento: string;
	f_sn: string;
	f_observacao: string;
	f_endereco: string;
}

export type EquipamentosEmPrediosRelations = object;

export type EquipamentosEmPrediosRelationKey = keyof EquipamentosEmPrediosRelations;

export interface OrigemXTiposBase {
	f_fk_origem_tipo_1: number;
	f_fk_origem_tipo_2: number;
}

export type OrigemXTiposRelations = object;

export type OrigemXTiposRelationKey = keyof OrigemXTiposRelations;

export interface ConsultasPfBase {
	id: number;
	f_id_pessoa_fk: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_retorno_spc: string;
	f_id_pessoa: unknown;
	f_status_consulta: string;
	f_justificativa: string;
}

export type ConsultasPfRelations = object;

export type ConsultasPfRelationKey = keyof ConsultasPfRelations;

export interface TelecomColocationOpcoesBase {
	id: number;
	f_6c1tv6gt1ey: number;
	fk_opcoes_colocation: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_espaco_rack: string;
	f_designacao_rack: string;
	f_energia: unknown[];
}

export type TelecomColocationOpcoesRelations = object;

export type TelecomColocationOpcoesRelationKey = keyof TelecomColocationOpcoesRelations;

export interface CuponsDescontoBase {
	id: number;
	f_fk_pacotes_desconto: number;
	f_fk_vendedor_desconto: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_data_inicio: unknown;
	f_data_fim: unknown;
	f_valor: unknown;
	f_tipo: string;
	f_utilizacoes: unknown;
	f_codigo: unknown;
	f_cep: string;
	f_endereco: string;
	f_endereco_numero: string;
	f_vendedor: unknown;
	f_pacotes: unknown;
	f_status: string;
	f_valor_renovacao: number;
	f_tipo_negociacao: string;
	f_nome: string;
}

export type CuponsDescontoRelations = object;

export type CuponsDescontoRelationKey = keyof CuponsDescontoRelations;

export interface ContratoIxcItensBase {
	id: number;
	f_fk_itens_contrato_ixc: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_produto: string;
	f_mensalidade: string;
	f_quantidade: string;
	f_id_produto_contrato_ixc: string;
}

export type ContratoIxcItensRelations = object;

export type ContratoIxcItensRelationKey = keyof ContratoIxcItensRelations;

export interface ZapsignBase {
	id: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_nome_do_plano: string;
	f_numero_de_creditos: string;
	f_status: string;
	f_periodo: string;
	f_data_de_encerramento: unknown;
}

export type ZapsignRelations = object;

export type ZapsignRelationKey = keyof ZapsignRelations;

export interface TabelaGeralBase {
	id: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
}

export type TabelaGeralRelations = object;

export type TabelaGeralRelationKey = keyof TabelaGeralRelations;

export interface Muu3vsavv3hBase {
	f_fk_1_setor_x_colaborador: number;
	f_fk_2_setor_x_colaborador: number;
}

export type Muu3vsavv3hRelations = object;

export type Muu3vsavv3hRelationKey = keyof Muu3vsavv3hRelations;

export interface TrocaEnderecoBase {
	id: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_taxa_instalacao: string;
	f_cep: string;
	f_endereco: string;
	f_endereco_numero: string;
	f_endereco_complemento: string;
	f_endereco_cidade: string;
	f_endereco_referencia: string;
	f_bairro: string;
	f_endereco_estado: string;
	f_telefone_contato: string;
	f_id_contrato: string;
	f_id_atendimento: string;
	f_status: string;
	f_cliente: string;
	f_obs: string;
}

export type TrocaEnderecoRelations = object;

export type TrocaEnderecoRelationKey = keyof TrocaEnderecoRelations;

export interface TipoXTemplatesBase {
	f_fk_tipo_template_1: number;
	f_fk_tipo_template_2: number;
}

export type TipoXTemplatesRelations = object;

export type TipoXTemplatesRelationKey = keyof TipoXTemplatesRelations;

export interface TelecomOpcoesL2lBase {
	id: number;
	f_rmfqnk0k53u: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_velocidade: string;
}

export type TelecomOpcoesL2lRelations = object;

export type TelecomOpcoesL2lRelationKey = keyof TelecomOpcoesL2lRelations;

export interface InfoAsoBase {
	id: unknown;
	f_fk_funcionarios: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_tipo_exame: string;
	f_apto: boolean;
	f_data_exame: unknown;
	f_data_prox_exame: unknown;
	f_dias_afastamento: string;
	f_aso: unknown;
	f_funcionarios_2: unknown;
	f_obs: string;
}

export type InfoAsoRelations = object;

export type InfoAsoRelationKey = keyof InfoAsoRelations;

export interface FFuncionariosBase {
	id: number;
	f_fk_setor: number;
	f_fk_funcionarios: number;
	f_fk_funcionarios2: number;
	f_fk_turnos: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_id_tecnico_ixc: unknown;
	f_arquivos_funcionarios: unknown;
	f_patrimonio_funcionarios: unknown;
	f_empresa: string;
	f_nome: string;
	f_cpf: string;
	f_data_nascimento: string;
	f_celular: string;
	f_email_pessoal: string;
	f_terceiro: string;
	f_cnpj: string;
	f_razao_social: string;
	f_genero: string;
	f_estado_civil: string;
	f_data_admissao: string;
	f_vencimento_contrato: string;
	f_data_demissao: string;
	f_motivo_demissao: string;
	f_valor_rescisao: unknown;
	f_cep: string;
	f_endereco: string;
	f_endereco_cnpj: string;
	f_endereco_numero: string;
	f_endereco_complemento: string;
	f_endereco_cidade: string;
	f_endereco_referencia: string;
	f_bairro: string;
	f_endereco_estado: string;
	f_email_corporativo: string;
	f_telefone_emergencia: string;
	f_nome_contato_emergencia: string;
	f_vinculo_com_colaborador: string;
	f_unidade: string;
	f_tipo_contrato: string;
	f_escolaridade: string;
	f_situacao_escolaridade: string;
	f_curso: string;
	f_universidade: string;
	f_conta_salario_pix: string;
	f_epi_calca: string;
	f_epi_jaleco: string;
	f_epi_calcado: string;
	f_mobilidade: string;
	f_ativo: string;
	f_foto_funcionarios: unknown;
	f_rg: string;
	f_orgao_expedidor: string;
	f_cnh: string;
	f_titulo_eleitor: string;
	f_zona_eleitoral: string;
	f_secao_eleitoral: string;
	f_reservista: string;
	f_pcd: string;
	f_tipo_deficiencia: string;
	f_nacionalidade: string;
	f_naturalidade: string;
	f_chip_corporativo: unknown;
	f_cargo: unknown;
	f_departamento: unknown;
	f_checklist_admissional: unknown[];
	f_parentesco: unknown;
	f_logs_cargos: unknown;
	f_turnos: unknown;
	f_asos: unknown;
	f_info_aso: unknown;
	f_info_arquivos: unknown;
	f_qualirun_processos: unknown;
	t_qualirun_info_adicionais: unknown;
	f_mes_nascimento: unknown;
}

export type FFuncionariosRelations = object;

export type FFuncionariosRelationKey = keyof FFuncionariosRelations;

export interface TemplatesAtendimentoN1Base {
	id: number;
	f_fk_templates_atendimentos: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_numero_para_contato: string;
	f_tipo_de_atendimento: string;
	f_nome_do_solicitante: string;
	f_descricao_do_cliente: string;
	f_tipo_de_conexao_do_dispositivo: string;
	f_quantidade_de_dispositivos: string;
	f_aplicativo_especifico: string;
	f_qual_aplicativo: string;
	f_los: string;
	f_login_pppoe: string;
	f_portas_a_serem_liberadas: string;
	f_endereco_do_site: string;
	f_acessa_pela_rede_da_atplus: string;
	f_nome_rede_wifi: string;
	f_senha_da_rede_wifi: string;
	f_nome: string;
	f_protocolo_do_atendimento: string;
	f_alteracoes: string;
	f_telefonia_tipo_de_problema: string;
	f_numero_de_A: string;
	f_numero_de_B: string;
	f_status_do_circuito: string;
	f_ip_fixo: string;
	f_ip_interno_para_liberacao: string;
	f_aplicativo: unknown[];
	"f_e-mail": string;
	f_melhor_horario_retorno: string;
	f_tipo_de_problema_mvno: string;
	f_fabricante: string;
	f_qual_fabricante: string;
	f_apn_preenchida: string;
	f_qual_apn_configurada: string;
	f_torre_rede: string;
}

export type TemplatesAtendimentoN1Relations = object;

export type TemplatesAtendimentoN1RelationKey = keyof TemplatesAtendimentoN1Relations;

export interface DemandasViabilidadesBase {
	id: number;
	f_fk_viabilidades: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_endereco: string;
	f_localizacao: unknown;
	f_servico_pretendido: string;
	f_velocidade_pretendida: string;
	f_status: string;
	f_valor_investimento: unknown;
	f_custo_recorrente: unknown;
	f_forma_atendimento: string;
}

export type DemandasViabilidadesRelations = object;

export type DemandasViabilidadesRelationKey = keyof DemandasViabilidadesRelations;

export interface UsersBase {
	id: number;
	f_fk_cargos: number;
	f_fk_desconto_vendedor: number;
	f_fk_departamentos: number;
	nickname: string;
	username: string;
	email: string;
	phone: string;
	password: unknown;
	passwordChangeTz: number;
	appLang: string;
	resetToken: string;
	systemSettings: Record<string, unknown>;
	createdAt: string;
	updatedAt: string;
	sort: unknown;
	roles: unknown;
	createdBy: unknown;
	createdById: unknown;
	updatedBy: unknown;
	updatedById: unknown;
	f_id_vendedor_ixc: number;
	f_id_tecnico_ixc: number;
	departments: unknown;
	mainDepartment: unknown;
}

export type UsersRelations = object;

export type UsersRelationKey = keyof UsersRelations;

export interface CargosBase {
	id: number;
	f_fk_funcionarios: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_nome: string;
	f_descricao: string;
	f_atividades: string;
	f_cbo: string;
	f_responsavel: unknown;
}

export type CargosRelations = object;

export type CargosRelationKey = keyof CargosRelations;

export interface TelecomIpsFixosBase {
	id: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_ip: string;
	f_login: string;
	f_contrato_ixc: string;
	f_possui_ip_fixo: string;
	f_controle: string;
}

export type TelecomIpsFixosRelations = object;

export type TelecomIpsFixosRelationKey = keyof TelecomIpsFixosRelations;

export interface LinksIndicadoresUsuariosBase {
	f_fk_links_usuarios_1: number;
	f_fk_links_usuarios_2: number;
}

export type LinksIndicadoresUsuariosRelations = object;

export type LinksIndicadoresUsuariosRelationKey = keyof LinksIndicadoresUsuariosRelations;

export interface AsosBase {
	id: unknown;
	title: string;
	f_fk_funcionarios: number;
	f_fk_infos_aso: number;
	filename: string;
	extname: string;
	size: number;
	mimetype: string;
	path: string;
	url: string;
	preview: string;
	storage: unknown;
	meta: unknown;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_funcionarios: unknown;
	f_info_aso: unknown;
}

export type AsosRelations = object;

export type AsosRelationKey = keyof AsosRelations;

export interface VlanTagsBase {
	id: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_tag: string;
}

export type VlanTagsRelations = object;

export type VlanTagsRelationKey = keyof VlanTagsRelations;

export interface ComentariosSuspensaoDeContratoBase {
	id: number;
	f_fk_suspensao: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_comentario: string;
}

export type ComentariosSuspensaoDeContratoRelations = object;

export type ComentariosSuspensaoDeContratoRelationKey = keyof ComentariosSuspensaoDeContratoRelations;

export interface RecursosViagemBase {
	id: number;
	f_fk_recursos_viagem: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_destino_viagem: string;
	f_meio_transporte: string;
	f_observacoes: string;
	f_km_percorrido: unknown;
}

export type RecursosViagemRelations = object;

export type RecursosViagemRelationKey = keyof RecursosViagemRelations;

export interface NegociacoesItensBase {
	id: number;
	f_fk_id_negociacao: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_nome_produto: string;
	f_mensalidade_sem_desconto: unknown;
	f_mensalidade_com_desconto: unknown;
	f_tipo_produto: string;
	f_id_ixc: number;
	f_relacao: string;
	f_opcoes_smp: unknown;
	f_opcoes_stfc: unknown;
	f_tipo_ixc: string;
	f_observacoes: string;
	f_observacoes_atendimento: string;
}

export type NegociacoesItensRelations = object;

export type NegociacoesItensRelationKey = keyof NegociacoesItensRelations;

export interface DepartmentsBase {
	id: unknown;
	title: string;
	isLeaf: boolean;
	parent: unknown;
	children: unknown;
	members: unknown;
	roles: unknown;
	owners: unknown;
	sort: unknown;
	createdBy: unknown;
	createdById: unknown;
	updatedBy: unknown;
	updatedById: unknown;
}

export type DepartmentsRelations = object;

export type DepartmentsRelationKey = keyof DepartmentsRelations;

export interface ComprasFornecedoresBase {
	id: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_nome: string;
	f_contato: string;
	f_site: string;
}

export type ComprasFornecedoresRelations = object;

export type ComprasFornecedoresRelationKey = keyof ComprasFornecedoresRelations;

export interface PatrimonioBase {
	id: number;
	f_fk_funcionarios: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_nome_patrimonio: string;
	f_quantidade: number;
	f_valor_patrimonio: unknown;
	f_tipo_patrimonio: string;
	f_id_tecnico_ixc: unknown;
	f_funcionarios: unknown;
	f_estado_uso: string;
	f_numero_serie: string;
	f_modelo: string;
	f_processador: string;
	f_ram: string;
	f_armazenamento: string;
	f_so: string;
}

export type PatrimonioRelations = object;

export type PatrimonioRelationKey = keyof PatrimonioRelations;

export interface TelecomRacksBase {
	id: number;
	f_fk_rack_fila: number;
	f_fk_rack_sala: number;
	f_fk_site_racks: number;
	parentId: number;
	parent: unknown;
	children: unknown;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_fk_rack_sites: unknown;
	f_rack: string;
	f_sigla: string;
	f_sala: unknown;
	f_fila: unknown;
	f_fk_rack_ativos: unknown;
	f_fk_rack_a_recursos: unknown;
	f_fk_recursos_rack_b: unknown;
}

export type TelecomRacksRelations = object;

export type TelecomRacksRelationKey = keyof TelecomRacksRelations;

export interface LogsBase {
	id: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_log_level: string;
	f_log_message: string;
	f_log_data: Record<string, unknown>;
}

export type LogsRelations = object;

export type LogsRelationKey = keyof LogsRelations;

export interface TurnosBase {
	id: unknown;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_turno: string;
	f_funcionarios: unknown;
}

export type TurnosRelations = object;

export type TurnosRelationKey = keyof TurnosRelations;

export interface Nukww9tmq83Base {
	f_fk1_setor_tipos: number;
	f_fk2_setor_tipos: number;
}

export type Nukww9tmq83Relations = object;

export type Nukww9tmq83RelationKey = keyof Nukww9tmq83Relations;

export interface OpcoesStfcTemplateBase {
	id: number;
	f_fk_opcoes_stfc_template: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_canais: unknown;
	f_franquia: string;
	f_terminais: string;
	f_portabilidade: string;
	f_nome_do_plano: string;
}

export type OpcoesStfcTemplateRelations = object;

export type OpcoesStfcTemplateRelationKey = keyof OpcoesStfcTemplateRelations;

export interface TelecomFilaBase {
	id: number;
	f_fk_fila: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_nome: string;
	f_fk_fila_rack: unknown;
}

export type TelecomFilaRelations = object;

export type TelecomFilaRelationKey = keyof TelecomFilaRelations;

export interface SolicitacaoComprasBase {
	id: number;
	fk_demandas_solicitacao_compras: number;
	fk_solicitacao_compras: number;
	f_xm95ss7u5xw: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_titulo: string;
	f_justificativa: string;
	f_anexos: unknown;
	f_status: string;
	f_0i82r8a2t99: unknown;
	f_categoria: string;
	f_departamento: string;
	f_observacoes_finais: string;
	f_produtos: unknown;
	f_fornecedor: unknown;
	f_metodo_de_pagamento: string;
	f_prazo: string;
	f_valor_total: unknown;
	f_servico: string;
	f_tipo: string;
	f_prazo_de_entrega: string;
	f_motivo_arquivamento: string;
	f_link: string;
}

export type SolicitacaoComprasRelations = object;

export type SolicitacaoComprasRelationKey = keyof SolicitacaoComprasRelations;

export interface ColaboradoresDoSetorBase {
	f_fk_colaboradores_setor_1: number;
	f_fk_colaboradores_setor_2: number;
}

export type ColaboradoresDoSetorRelations = object;

export type ColaboradoresDoSetorRelationKey = keyof ColaboradoresDoSetorRelations;

export interface DepartamentosBase {
	id: number;
	f_fk_funcionarios: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_nome: string;
	f_responsavel: unknown;
}

export type DepartamentosRelations = object;

export type DepartamentosRelationKey = keyof DepartamentosRelations;

export interface Rguxtr9p91dBase {
	f_fk_ponta_a_interface: number;
	f_fk_ponta_a_interface2: number;
}

export type Rguxtr9p91dRelations = object;

export type Rguxtr9p91dRelationKey = keyof Rguxtr9p91dRelations;

export interface CrmTrocaTitularidadeBase {
	id: number;
	f_fk_negociacao_vendedor: number;
	f_fk_pessoa_pj_negociacao: number;
	f_fk_pessoa_negociacao: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_cedente: string;
	f_cedente_documento: string;
	f_cedente_responsavel_legal: string;
	f_cedente_telefone: string;
	f_cedente_email: string;
	f_cessionario: string;
	f_cessionario_documento: string;
	f_cessionario_responsavel: string;
	f_cessionario_telefone: string;
	f_cessionario_email: string;
	f_id_contrato: string;
	f_status: string;
	f_ordenacao: unknown;
	f_rw7rp8431ty: unknown;
	f_link_assinatura_cedente: string;
	f_link_assinatura_cessionario: string;
	f_trocadetitularidade_contrato: unknown;
	f_vendedor: unknown;
	f_substatus: string;
	f_endereco: string;
	f_bairro: string;
	f_cidade: string;
	f_estado: string;
	f_complemento: string;
	f_cep: string;
	f_comentarios: unknown;
	f_anexos: unknown;
	f_tipo_pessoa: string;
	f_pessoa_pf: unknown;
	f_pessoa_pj: unknown;
	f_numero: string;
}

export type CrmTrocaTitularidadeRelations = object;

export type CrmTrocaTitularidadeRelationKey = keyof CrmTrocaTitularidadeRelations;

export interface FotoFuncionariosBase {
	id: number;
	title: string;
	f_fk_funcionarios: number;
	filename: string;
	extname: string;
	size: number;
	mimetype: string;
	path: string;
	url: string;
	preview: string;
	storage: unknown;
	meta: unknown;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_funcionarios: unknown;
}

export type FotoFuncionariosRelations = object;

export type FotoFuncionariosRelationKey = keyof FotoFuncionariosRelations;

export interface ViagemSolicitacaoBase {
	id: number;
	f_fk_solicitacao_viagem: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_fase: string;
	f_data_viagem: string;
	f_data_retorno: string;
	f_destino_viagem: string;
	f_meio_transporte: string;
	f_observacoes: string;
	f_kaban_viagem: unknown;
	f_valor_diaria: unknown;
	f_valor_pedagio: unknown;
	f_anexos: unknown;
	f_colaborador_beneficiado: string;
	f_percorrido: unknown;
	f_valor_cobrado: unknown;
	f_diaria: string;
	f_sub_total: unknown;
	f_total_pagar: unknown;
	f_quantidade_dias: unknown;
}

export type ViagemSolicitacaoRelations = object;

export type ViagemSolicitacaoRelationKey = keyof ViagemSolicitacaoRelations;

export interface ConfiguracoesBase {
	id: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_nome: string;
	f_valor: string;
	f_descricao: string;
	f_escopo: unknown[];
	f_chave: string;
}

export type ConfiguracoesRelations = object;

export type ConfiguracoesRelationKey = keyof ConfiguracoesRelations;

export interface SitesBase {
	id: number;
	f_fk_telecom_contatos: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_nome: string;
	f_endereco: string;
	f_sigla: string;
	f_cep: string;
	f_numero: string;
	f_bairro: string;
	f_uf: string;
	f_tipo: string;
	f_dados_acesso: string;
	f_cidade: string;
	f_complemento: string;
	f_status: string;
	f_fk_sites_equipamentos: unknown;
	f_racks: unknown;
	f_anexos: unknown;
	f_contatos: unknown;
}

export type SitesRelations = object;

export type SitesRelationKey = keyof SitesRelations;

export interface SetorBase {
	id: unknown;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_nome_setor: string;
	f_sistemas_acessos: unknown;
	f_fk_sistemas_acessos: unknown;
	f_funcionarios: unknown;
	f_fk_funcionarios: unknown;
	f_funcionarios_1: unknown;
}

export type SetorRelations = object;

export type SetorRelationKey = keyof SetorRelations;

export interface ItensPacotesBase {
	id: number;
	f_ch3bjzt4zr7: number;
	f_fk1: number;
	f_fk2: number;
	f_vna9rme0f5j: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_id_ixc: number;
	f_nome_do_produto: string;
	f_mensalidade_com_desconto: unknown;
	f_mensalidade_sem_desconto: unknown;
	f_tipo_produto: string;
	f_tipo_ixc: string;
}

export type ItensPacotesRelations = object;

export type ItensPacotesRelationKey = keyof ItensPacotesRelations;

export interface RolesBase {
	name: string;
	title: string;
	description: string;
	strategy: Record<string, unknown>;
	default: boolean;
	hidden: boolean;
	allowConfigure: boolean;
	allowNewMenu: boolean;
	menuUiSchemas: unknown;
	resources: unknown;
	snippets: unknown;
	users: unknown;
	sort: unknown;
	mobileRoutes: unknown;
	allowNewMobileMenu: boolean;
}

export type RolesRelations = object;

export type RolesRelationKey = keyof RolesRelations;

export interface _902ctke5dhqBase {
	id: unknown;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_bmu9tsi11d4: unknown;
}

export type _902ctke5dhqRelations = object;

export type _902ctke5dhqRelationKey = keyof _902ctke5dhqRelations;

export interface QualirunAssinaturaGovBase {
	id: unknown;
	f_fk_negociacoes: number;
	title: string;
	filename: string;
	extname: string;
	size: number;
	mimetype: string;
	path: string;
	url: string;
	preview: string;
	storage: unknown;
	meta: unknown;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
}

export type QualirunAssinaturaGovRelations = object;

export type QualirunAssinaturaGovRelationKey = keyof QualirunAssinaturaGovRelations;

export interface FornecedoresTelecomBase {
	id: number;
	f_fk_cliente_circuiro: number;
	f_fk_fornecedor_circuito: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_nome_fantasia: string;
	f_razao_social: string;
	f_instrucoes: string;
	f_fk_recurso_fornecedor: unknown;
	f_fk_recurso_cliente: unknown;
	f_fk_cliente_contrato: unknown;
	f_fk_contrato_fornecedor: unknown;
}

export type FornecedoresTelecomRelations = object;

export type FornecedoresTelecomRelationKey = keyof FornecedoresTelecomRelations;

export interface QualirunInfoAdicionaisBase {
	id: unknown;
	f_fk_funcionarios: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_id_externo: string;
	f_contato_emergencia: string;
	f_telefone_contato_emergencia: string;
	f_vinculo_contato_emergencia: string;
	f_situacao_curso: string;
	f_grau_escolaridade: string;
	f_curso: string;
	f_parentesco_nome: string;
	f_parentesco_cpf: string;
	f_parentesco_vinculo: string;
	f_funcionarios: unknown;
	f_status: string;
	f_2fxykekjpk2: string;
	f_sqt1x7ndy5j: string;
	f_tkxxh3xi2zw: unknown;
}

export type QualirunInfoAdicionaisRelations = object;

export type QualirunInfoAdicionaisRelationKey = keyof QualirunInfoAdicionaisRelations;

export interface DatacenterMemoriasBase {
	id: number;
	f_fk_memorias: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_fabricante: string;
	f_capacidade: string;
	f_tipo: string;
	f_fk_servidor: unknown;
	f_sn: string;
	f_status: string;
	f_valor_locacao: unknown;
}

export type DatacenterMemoriasRelations = object;

export type DatacenterMemoriasRelationKey = keyof DatacenterMemoriasRelations;

export interface TelecomSalasBase {
	id: number;
	f_fk_salas: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_nome: string;
	f_fk_sala_racks: unknown;
}

export type TelecomSalasRelations = object;

export type TelecomSalasRelationKey = keyof TelecomSalasRelations;

export interface AuditoriaAutomaticaBase {
	id: unknown;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_titulo_negociacao: string;
	f_id_negociacao: string;
	f_valor_mensal: unknown;
	f_conferencia: boolean;
}

export type AuditoriaAutomaticaRelations = object;

export type AuditoriaAutomaticaRelationKey = keyof AuditoriaAutomaticaRelations;

export interface AnexosTrocaTitularidadeBase {
	id: number;
	title: string;
	f_anexos_fk: number;
	filename: string;
	extname: string;
	size: number;
	mimetype: string;
	path: string;
	url: string;
	preview: string;
	storage: unknown;
	meta: unknown;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	storageId: number;
}

export type AnexosTrocaTitularidadeRelations = object;

export type AnexosTrocaTitularidadeRelationKey = keyof AnexosTrocaTitularidadeRelations;

export interface ServicosBase {
	id: number;
	f_fk_servico_x_contrato: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_designacao_externa: string;
	f_tipo: string;
	f_acessos: unknown;
	f_kyyzn4kut6e: unknown;
	f_descricao: string;
	f_velocidade: string;
	f_status: string;
	f_propriedades: string;
	f_id_contrato_ixc: string;
	f_id_servico_ixc: string;
	f_designacao_atplus: unknown;
	f_caracteristicas: string;
	f_arquivos: unknown;
	f_servicos_relacionados: unknown;
	f_rj1pckkkeqi: unknown;
}

export type ServicosRelations = object;

export type ServicosRelationKey = keyof ServicosRelations;

export interface RegistrosDeContatoBase {
	id: unknown;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_fk_id_contrato: number;
	f_categoria: string;
	f_resumo_contato: string;
	f_nota_vendas: string;
	f_nota_tecnico: string;
	f_feedback_observacao: string;
	f_ha_pendencia: boolean;
	f_encaminhamento_pendencia: string;
	f_titulo: string;
}

export type RegistrosDeContatoRelations = object;

export type RegistrosDeContatoRelationKey = keyof RegistrosDeContatoRelations;

export interface QualirunProcessosBase {
	id: unknown;
	f_fk_funcionarios: number;
	createdAt: string;
	createdBy: unknown;
	updatedAt: string;
	updatedBy: unknown;
	f_procedimento: string;
	f_funcionarios: unknown;
	f_status: string;
	f_link_externo: string;
	f_id_externo: string;
	f_detalhes_procedimento: string;
}

export type QualirunProcessosRelations = object;

export type QualirunProcessosRelationKey = keyof QualirunProcessosRelations;

export interface ServicosXServicosBase {
	f_8n72gqelvp5: number;
	f_d40asyeldtp: number;
}

export type ServicosXServicosRelations = object;

export type ServicosXServicosRelationKey = keyof ServicosXServicosRelations;
