import type { ScriptConfig } from "./@types/script-config";

export const requestsConfig: Partial<ScriptConfig> = {
	requests: {
		"23btjo9ohrr": "negociacao-atualizada",
		qbk10nf76um: "cadastro-comercial",
		"0j7f9fuzuo7": "quali-run",
		tjt1ajr1tkl: "segunda-contratacao",
		xk5u4vwbdap: "log-test",
	},
	// manualRequests: [
	// 	{
	// 		key: "n8nCompras",
	// 		name: "N8N Compras",
	// 		collection: "compras",
	// 		method: "POST",
	// 		url: "customRequests:send/n8nCompras",
	// 		payloadSchema: `z.object({
	// 			id_pedido: z.number(),
	// 			id_fornecedor: z.number(),
	// 			valor: z.number(),
	// 		})`,
	// 	},
	// ],
};
