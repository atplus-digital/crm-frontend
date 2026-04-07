/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type {
	ArquivosFuncionariosBase,
	AsosBase,
	CargosBase,
	DepartamentosBase,
	FotoFuncionariosBase,
	InfoArquivosBase,
	InfoAsoBase,
	LinhaCorporativaBase,
	LogsCargosBase,
	ParentescoBase,
	PatrimonioBase,
	QualirunInfoAdicionaisBase,
	QualirunProcessosBase,
	TurnosBase,
} from "./index";
import type { UsersBase } from "./users";

export interface FFuncionariosBase {
	createdAt: string;
	createdBy: UsersBase | null;
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
	updatedBy: UsersBase | null;
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
