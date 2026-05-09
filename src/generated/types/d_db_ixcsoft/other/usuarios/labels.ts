/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const USUARIOS_ACESSOWEBSERVICE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOS_ADMINISTRADORKANBAN_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOS_CRMFILTRAVENDEDOR_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOS_DESCPARCATRASO_LABELS = {
	N: "N",
	S: "S",
	P: "P",
} as const;

export const USUARIOS_ENVIARMONITORAMENTOHOST_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOS_ENVIARNOTIFICACAOBACKUP_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOS_FILTRACOLABORADORQUADROKANBAN_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOS_FILTRADEPARTAMENTOTICKET_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOS_FILTRAFUNCIONARIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOS_FILTRAFUNCIONARIOTICKET_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOS_FILTRASETOR_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOS_FINALIZAROSOUTROSETOR_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOS_HELPMODEENABLED_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOS_INMAPFILTRAVENDEDOR_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOS_LANCAMENTOSDIAATUAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOS_LANGUAGE_LABELS = {
	"Pt-Br": "Pt-Br",
	"En-Us": "En-Us",
	"Es-Es": "Es-Es",
} as const;

export const USUARIOS_MODEDENSITY_LABELS = {
	S: "S",
	C: "C",
	R: "R",
} as const;

export const USUARIOS_MOSTRAROSSEMFUNCIONARIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOS_MOSTRARTICKETSEMFUNCIONARIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOS_PAGAMENTOSDIAATUAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOS_PERMITEACESSOIXCMOBILE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOS_PERMITEALTERARCOMUNICACAOFNAPAGAR_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOS_PERMITEINUTILIZARPATRIMONIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOS_PERMITEVERDIFERENCA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOS_PERMITIRALTERARVERSAOCHAVES_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOS_RECEBIMENTOSDIAATUAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOS_SECRETACTIVE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOS_STATUS_LABELS = {
	A: "A",
	I: "I",
} as const;

export const USUARIOS_TEMPLATE_LABELS = {
	d: "d",
	vg: "vg",
} as const;

export const USUARIOS_TIPOACESSO_LABELS = {
	A: "A",
	M: "M",
	W: "W",
} as const;

export const USUARIOS_TIPOALCADA_LABELS = {
	ADM: "ADM",
	SUP: "SUP",
	OP: "OP",
} as const;

export const USUARIOS_USERCALLCENTER_LABELS = {
	N: "N",
	S: "S",
} as const;

export const USUARIOS_VERSAOFIBERDOCS_LABELS = {
	O: "O",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const usuariosAcessoWebserviceSchema = z.enum(["S", "N"], {
	error: () => ({ message: "acesso_webservice: valores válidos são [S, N]" }),
});

export const usuariosAdministradorKanbanSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "administrador_kanban: valores válidos são [S, N]",
	}),
});

export const usuariosCrmFiltraVendedorSchema = z.enum(["S", "N"], {
	error: () => ({ message: "crm_filtra_vendedor: valores válidos são [S, N]" }),
});

export const usuariosDescParcAtrasoSchema = z.enum(["N", "S", "P"], {
	error: () => ({ message: "desc_parc_atraso: valores válidos são [N, S, P]" }),
});

export const usuariosEnviarMonitoramentoHostSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "enviar_monitoramento_host: valores válidos são [S, N]",
	}),
});

export const usuariosEnviarNotificacaoBackupSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "enviar_notificacao_backup: valores válidos são [S, N]",
	}),
});

export const usuariosFiltraColaboradorQuadroKanbanSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "filtra_colaborador_quadro_kanban: valores válidos são [S, N]",
	}),
});

export const usuariosFiltraDepartamentoTicketSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "filtra_departamento_ticket: valores válidos são [S, N]",
	}),
});

export const usuariosFiltraFuncionarioSchema = z.enum(["S", "N"], {
	error: () => ({ message: "filtra_funcionario: valores válidos são [S, N]" }),
});

export const usuariosFiltraFuncionarioTicketSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "filtra_funcionario_ticket: valores válidos são [S, N]",
	}),
});

export const usuariosFiltraSetorSchema = z.enum(["S", "N"], {
	error: () => ({ message: "filtra_setor: valores válidos são [S, N]" }),
});

export const usuariosFinalizarOsOutroSetorSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "finalizar_os_outro_setor: valores válidos são [S, N]",
	}),
});

export const usuariosHelpmodeEnabledSchema = z.enum(["S", "N"], {
	error: () => ({ message: "helpmode_enabled: valores válidos são [S, N]" }),
});

export const usuariosInmapFiltraVendedorSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "inmap_filtra_vendedor: valores válidos são [S, N]",
	}),
});

export const usuariosLancamentosDiaAtualSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "lancamentos_dia_atual: valores válidos são [S, N]",
	}),
});

export const usuariosLanguageSchema = z.enum(["Pt-Br", "En-Us", "Es-Es"], {
	error: () => ({
		message: "language: valores válidos são [Pt-Br, En-Us, Es-Es]",
	}),
});

export const usuariosModeDensitySchema = z.enum(["S", "C", "R"], {
	error: () => ({ message: "mode_density: valores válidos são [S, C, R]" }),
});

export const usuariosMostrarOsSemFuncionarioSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "mostrar_os_sem_funcionario: valores válidos são [S, N]",
	}),
});

export const usuariosMostrarTicketSemFuncionarioSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "mostrar_ticket_sem_funcionario: valores válidos são [S, N]",
	}),
});

export const usuariosPagamentosDiaAtualSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "pagamentos_dia_atual: valores válidos são [S, N]",
	}),
});

export const usuariosPermiteAcessoIxcMobileSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "permite_acesso_ixc_mobile: valores válidos são [S, N]",
	}),
});

export const usuariosPermiteAlterarComunicacaoFnApagarSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"permite_alterar_comunicacao_fn_apagar: valores válidos são [S, N]",
		}),
	},
);

export const usuariosPermiteInutilizarPatrimonioSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "permite_inutilizar_patrimonio: valores válidos são [S, N]",
	}),
});

export const usuariosPermiteVerDiferencaSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "permite_ver_diferenca: valores válidos são [S, N]",
	}),
});

export const usuariosPermitirAlterarVersaoChavesSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "permitir_alterar_versao_chaves: valores válidos são [S, N]",
	}),
});

export const usuariosRecebimentosDiaAtualSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "recebimentos_dia_atual: valores válidos são [S, N]",
	}),
});

export const usuariosSecretActiveSchema = z.enum(["S", "N"], {
	error: () => ({ message: "secret_active: valores válidos são [S, N]" }),
});

export const usuariosStatusSchema = z.enum(["A", "I"], {
	error: () => ({ message: "status: valores válidos são [A, I]" }),
});

export const usuariosTemplateSchema = z.enum(["d", "vg"], {
	error: () => ({ message: "template: valores válidos são [d, vg]" }),
});

export const usuariosTipoAcessoSchema = z.enum(["A", "M", "W"], {
	error: () => ({ message: "tipo_acesso: valores válidos são [A, M, W]" }),
});

export const usuariosTipoAlcadaSchema = z.enum(["ADM", "SUP", "OP"], {
	error: () => ({ message: "tipo_alcada: valores válidos são [ADM, SUP, OP]" }),
});

export const usuariosUserCallcenterSchema = z.enum(["N", "S"], {
	error: () => ({ message: "user_callcenter: valores válidos são [N, S]" }),
});

export const usuariosVersaoFiberdocsSchema = z.enum(["O", "N"], {
	error: () => ({ message: "versao_fiberdocs: valores válidos são [O, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type UsuariosAcessoWebservice = z.infer<
	typeof usuariosAcessoWebserviceSchema
>;

export type UsuariosAdministradorKanban = z.infer<
	typeof usuariosAdministradorKanbanSchema
>;

export type UsuariosCrmFiltraVendedor = z.infer<
	typeof usuariosCrmFiltraVendedorSchema
>;

export type UsuariosDescParcAtraso = z.infer<
	typeof usuariosDescParcAtrasoSchema
>;

export type UsuariosEnviarMonitoramentoHost = z.infer<
	typeof usuariosEnviarMonitoramentoHostSchema
>;

export type UsuariosEnviarNotificacaoBackup = z.infer<
	typeof usuariosEnviarNotificacaoBackupSchema
>;

export type UsuariosFiltraColaboradorQuadroKanban = z.infer<
	typeof usuariosFiltraColaboradorQuadroKanbanSchema
>;

export type UsuariosFiltraDepartamentoTicket = z.infer<
	typeof usuariosFiltraDepartamentoTicketSchema
>;

export type UsuariosFiltraFuncionario = z.infer<
	typeof usuariosFiltraFuncionarioSchema
>;

export type UsuariosFiltraFuncionarioTicket = z.infer<
	typeof usuariosFiltraFuncionarioTicketSchema
>;

export type UsuariosFiltraSetor = z.infer<typeof usuariosFiltraSetorSchema>;

export type UsuariosFinalizarOsOutroSetor = z.infer<
	typeof usuariosFinalizarOsOutroSetorSchema
>;

export type UsuariosHelpmodeEnabled = z.infer<
	typeof usuariosHelpmodeEnabledSchema
>;

export type UsuariosInmapFiltraVendedor = z.infer<
	typeof usuariosInmapFiltraVendedorSchema
>;

export type UsuariosLancamentosDiaAtual = z.infer<
	typeof usuariosLancamentosDiaAtualSchema
>;

export type UsuariosLanguage = z.infer<typeof usuariosLanguageSchema>;

export type UsuariosModeDensity = z.infer<typeof usuariosModeDensitySchema>;

export type UsuariosMostrarOsSemFuncionario = z.infer<
	typeof usuariosMostrarOsSemFuncionarioSchema
>;

export type UsuariosMostrarTicketSemFuncionario = z.infer<
	typeof usuariosMostrarTicketSemFuncionarioSchema
>;

export type UsuariosPagamentosDiaAtual = z.infer<
	typeof usuariosPagamentosDiaAtualSchema
>;

export type UsuariosPermiteAcessoIxcMobile = z.infer<
	typeof usuariosPermiteAcessoIxcMobileSchema
>;

export type UsuariosPermiteAlterarComunicacaoFnApagar = z.infer<
	typeof usuariosPermiteAlterarComunicacaoFnApagarSchema
>;

export type UsuariosPermiteInutilizarPatrimonio = z.infer<
	typeof usuariosPermiteInutilizarPatrimonioSchema
>;

export type UsuariosPermiteVerDiferenca = z.infer<
	typeof usuariosPermiteVerDiferencaSchema
>;

export type UsuariosPermitirAlterarVersaoChaves = z.infer<
	typeof usuariosPermitirAlterarVersaoChavesSchema
>;

export type UsuariosRecebimentosDiaAtual = z.infer<
	typeof usuariosRecebimentosDiaAtualSchema
>;

export type UsuariosSecretActive = z.infer<typeof usuariosSecretActiveSchema>;

export type UsuariosStatus = z.infer<typeof usuariosStatusSchema>;

export type UsuariosTemplate = z.infer<typeof usuariosTemplateSchema>;

export type UsuariosTipoAcesso = z.infer<typeof usuariosTipoAcessoSchema>;

export type UsuariosTipoAlcada = z.infer<typeof usuariosTipoAlcadaSchema>;

export type UsuariosUserCallcenter = z.infer<
	typeof usuariosUserCallcenterSchema
>;

export type UsuariosVersaoFiberdocs = z.infer<
	typeof usuariosVersaoFiberdocsSchema
>;
