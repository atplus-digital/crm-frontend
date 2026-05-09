/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const IMIMOVEL_AQUECIMENTOAGUA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const IMIMOVEL_ARCONDICIONADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const IMIMOVEL_AREACOBERTURADESCANSO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const IMIMOVEL_AREALAZER_LABELS = {
	S: "S",
	N: "N",
} as const;

export const IMIMOVEL_CERCADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const IMIMOVEL_CERCADOMURO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const IMIMOVEL_CHURRASQUEIRA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const IMIMOVEL_DESTAQUE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const IMIMOVEL_ELEVADOR_LABELS = {
	S: "S",
	N: "N",
} as const;

export const IMIMOVEL_FINANCEIROAUTOMATICO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const IMIMOVEL_GARAGEMSEGURA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const IMIMOVEL_HIDROMASSAGEM_LABELS = {
	S: "S",
	N: "N",
} as const;

export const IMIMOVEL_LAREIRA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const IMIMOVEL_PISCINA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const IMIMOVEL_PORTAOELETRONICO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const IMIMOVEL_PUBLICADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const IMIMOVEL_SALAOFESTAS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const IMIMOVEL_SISTEMAALARME_LABELS = {
	S: "S",
	N: "N",
} as const;

export const IMIMOVEL_SITUACAO_LABELS = {
	N: "N",
	U: "U",
} as const;

export const IMIMOVEL_VENDAALUGA_LABELS = {
	V: "V",
	A: "A",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const im_imovelAquecimentoAguaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "aquecimento_agua: valores válidos são [S, N]" }),
});

export const im_imovelArCondicionadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ar_condicionado: valores válidos são [S, N]" }),
});

export const im_imovelAreaCoberturaDescansoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "area_cobertura_descanso: valores válidos são [S, N]",
	}),
});

export const im_imovelAreaLazerSchema = z.enum(["S", "N"], {
	error: () => ({ message: "area_lazer: valores válidos são [S, N]" }),
});

export const im_imovelCercadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "cercado: valores válidos são [S, N]" }),
});

export const im_imovelCercadoMuroSchema = z.enum(["S", "N"], {
	error: () => ({ message: "cercado_muro: valores válidos são [S, N]" }),
});

export const im_imovelChurrasqueiraSchema = z.enum(["S", "N"], {
	error: () => ({ message: "churrasqueira: valores válidos são [S, N]" }),
});

export const im_imovelDestaqueSchema = z.enum(["S", "N"], {
	error: () => ({ message: "destaque: valores válidos são [S, N]" }),
});

export const im_imovelElevadorSchema = z.enum(["S", "N"], {
	error: () => ({ message: "elevador: valores válidos são [S, N]" }),
});

export const im_imovelFinanceiroAutomaticoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "financeiro_automatico: valores válidos são [S, N]",
	}),
});

export const im_imovelGaragemSeguraSchema = z.enum(["S", "N"], {
	error: () => ({ message: "garagem_segura: valores válidos são [S, N]" }),
});

export const im_imovelHidromassagemSchema = z.enum(["S", "N"], {
	error: () => ({ message: "hidromassagem: valores válidos são [S, N]" }),
});

export const im_imovelLareiraSchema = z.enum(["S", "N"], {
	error: () => ({ message: "lareira: valores válidos são [S, N]" }),
});

export const im_imovelPiscinaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "piscina: valores válidos são [S, N]" }),
});

export const im_imovelPortaoEletronicoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "portao_eletronico: valores válidos são [S, N]" }),
});

export const im_imovelPublicadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "publicado: valores válidos são [S, N]" }),
});

export const im_imovelSalaoFestasSchema = z.enum(["S", "N"], {
	error: () => ({ message: "salao_festas: valores válidos são [S, N]" }),
});

export const im_imovelSistemaAlarmeSchema = z.enum(["S", "N"], {
	error: () => ({ message: "sistema_alarme: valores válidos são [S, N]" }),
});

export const im_imovelSituacaoSchema = z.enum(["N", "U"], {
	error: () => ({ message: "situacao: valores válidos são [N, U]" }),
});

export const im_imovelVendaAlugaSchema = z.enum(["V", "A"], {
	error: () => ({ message: "venda_aluga: valores válidos são [V, A]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ImImovelAquecimentoAgua = z.infer<
	typeof im_imovelAquecimentoAguaSchema
>;

export type ImImovelArCondicionado = z.infer<
	typeof im_imovelArCondicionadoSchema
>;

export type ImImovelAreaCoberturaDescanso = z.infer<
	typeof im_imovelAreaCoberturaDescansoSchema
>;

export type ImImovelAreaLazer = z.infer<typeof im_imovelAreaLazerSchema>;

export type ImImovelCercado = z.infer<typeof im_imovelCercadoSchema>;

export type ImImovelCercadoMuro = z.infer<typeof im_imovelCercadoMuroSchema>;

export type ImImovelChurrasqueira = z.infer<
	typeof im_imovelChurrasqueiraSchema
>;

export type ImImovelDestaque = z.infer<typeof im_imovelDestaqueSchema>;

export type ImImovelElevador = z.infer<typeof im_imovelElevadorSchema>;

export type ImImovelFinanceiroAutomatico = z.infer<
	typeof im_imovelFinanceiroAutomaticoSchema
>;

export type ImImovelGaragemSegura = z.infer<
	typeof im_imovelGaragemSeguraSchema
>;

export type ImImovelHidromassagem = z.infer<
	typeof im_imovelHidromassagemSchema
>;

export type ImImovelLareira = z.infer<typeof im_imovelLareiraSchema>;

export type ImImovelPiscina = z.infer<typeof im_imovelPiscinaSchema>;

export type ImImovelPortaoEletronico = z.infer<
	typeof im_imovelPortaoEletronicoSchema
>;

export type ImImovelPublicado = z.infer<typeof im_imovelPublicadoSchema>;

export type ImImovelSalaoFestas = z.infer<typeof im_imovelSalaoFestasSchema>;

export type ImImovelSistemaAlarme = z.infer<
	typeof im_imovelSistemaAlarmeSchema
>;

export type ImImovelSituacao = z.infer<typeof im_imovelSituacaoSchema>;

export type ImImovelVendaAluga = z.infer<typeof im_imovelVendaAlugaSchema>;
