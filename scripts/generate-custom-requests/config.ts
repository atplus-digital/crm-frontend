import { logger } from "@scripts/shared/logger";
import {
	defineManualRequests,
	defineSplitRequests,
	type ScriptConfig,
} from "./src/@types/script-config";
import { parseConfig } from "./src/utils/config";

const splitRequests = defineSplitRequests({
	"23btjo9ohrr": "negociacao-atualizada",
	qbk10nf76um: "cadastro-comercial",
	"0j7f9fuzuo7": "quali-run",
});

const manualRequests = defineManualRequests([
	{
		key: "n8nCompras",
		name: "N8N Compras",
		collection: "compras",
		method: "POST",
		url: "customRequests:send/n8nCompras",
		payloadSchema: `z.object({
			id_pedido: z.number(),
			id_fornecedor: z.number(),
			valor: z.number(),
		})`,
	},
]);

const scriptConfig: Partial<ScriptConfig> = {
	logLevel: "debug",
	outputDir: "src/generated/custom-requests",
	splitRequests,
	manualRequests,
	generateAnalysisReport: true,
	lockWorkspaceFolder: true,
};

export const config = parseConfig(scriptConfig);

logger.setLevel(config.logLevel);
