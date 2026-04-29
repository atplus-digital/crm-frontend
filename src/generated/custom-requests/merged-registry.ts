import { payloadSchema as criarContratoIxcSchema } from "#/features/custom-requests/split/criar-contrato-ixc";
import { payloadSchema as n8nComprasSchema } from "#/features/custom-requests/split/n8n-compras";
import { payloadSchema as qualirunInfoSchema } from "#/features/custom-requests/split/qualirun-info";
import type { CustomRequestEntry } from "#/features/custom-requests/utils/types";
import { generatedCustomRequestsRegistry as generatedRegistry } from "./generated-registry";

const manualRegistry: Record<string, CustomRequestEntry> = {
	criarContratoIxc: {
		key: "criarContratoIxc",
		name: "Criar Contrato IXC",
		collection: "contratos",
		options: { method: "POST", url: "customRequests:send/criarContratoIxc" },
		payloadSchema: criarContratoIxcSchema,
	},
	qualirunInfo: {
		key: "qualirunInfo",
		name: "Qualirun Info",
		collection: "qualirun",
		options: { method: "GET", url: "customRequests:send/qualirunInfo" },
		payloadSchema: qualirunInfoSchema,
	},
	n8nCompras: {
		key: "n8nCompras",
		name: "N8N Compras",
		collection: "compras",
		options: { method: "POST", url: "customRequests:send/n8nCompras" },
		payloadSchema: n8nComprasSchema,
	},
};

export const customRequestsRegistry: Record<string, CustomRequestEntry> = {
	...generatedRegistry,
	...manualRegistry,
};

export type CustomRequestRegistryKey =
	| keyof typeof manualRegistry
	| keyof typeof generatedRegistry;
