import { z } from "zod";
import type {
	CriarContratoIxcPayload,
	N8nComprasPayload,
	QualirunInfoPayload,
} from "./types";

export const criarContratoIxcSchema = z.object({
	id_contrato: z.number(),
	id_cliente: z.number(),
	produto: z.string(),
	quantidade: z.number().optional(),
}) satisfies z.ZodType<CriarContratoIxcPayload>;

export const qualirunInfoSchema = z.object({
	cnpj: z.string(),
	razao_social: z.string().optional(),
}) satisfies z.ZodType<QualirunInfoPayload>;

export const n8nComprasSchema = z.object({
	id_pedido: z.number(),
	id_fornecedor: z.number(),
	valor: z.number(),
}) satisfies z.ZodType<N8nComprasPayload>;

export const templateVariablesSchema = z.object({
	currentRecord: z.record(z.string(), z.unknown()),
	currentUser: z.object({
		id: z.number(),
		email: z.string(),
		username: z.string(),
	}),
	currentTime: z.string(),
});

export type TemplateVariables = z.infer<typeof templateVariablesSchema>;
