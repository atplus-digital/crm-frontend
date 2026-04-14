import { z } from "zod";
import {
	criarContratoIxcSchema,
	n8nComprasSchema,
	qualirunInfoSchema,
} from "./schemas";

export const customRequestOptionsSchema = z.object({
	method: z.enum(["GET", "POST", "PUT", "DELETE", "PATCH"]),
	url: z.string().url(),
	timeout: z.number().positive().optional().default(30000),
});

export type CustomRequestOptions = z.infer<typeof customRequestOptionsSchema>;

export interface CustomRequestEntry {
	key: string;
	name: string;
	collection: string;
	options: CustomRequestOptions;
	payloadSchema: z.ZodSchema;
}

export const customRequestsRegistry = {
	"37yaihkravc": {
		key: "37yaihkravc",
		name: "Criar Contrato IXC",
		collection: "cliente_contrato",
		options: {
			method: "POST",
			url: "https://ixc.atplus.com.br/ixc_db/v1/contratos",
			timeout: 30000,
		},
		payloadSchema: criarContratoIxcSchema,
	} as CustomRequestEntry,
	"0j7f9fuzuo7": {
		key: "0j7f9fuzuo7",
		name: "Qualirun Informações Adicionais",
		collection: "t_qualirun_info_adicionais",
		options: {
			method: "POST",
			url: "https://qualirun.atplus.com.br/api/info-adicionais",
			timeout: 30000,
		},
		payloadSchema: qualirunInfoSchema,
	} as CustomRequestEntry,
	h32vk2yid08: {
		key: "h32vk2yid08",
		name: "n8n Fluxo de Compras",
		collection: "t_negociacoes",
		options: {
			method: "POST",
			url: "https://n8n.atplus.com.br/webhook/compras",
			timeout: 30000,
		},
		payloadSchema: n8nComprasSchema,
	} as CustomRequestEntry,
} as const;

export type CustomRequestKey = keyof typeof customRequestsRegistry;
