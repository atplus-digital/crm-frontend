import * as path from "node:path";
import { config } from "dotenv";

function validateEnv(envPath: string = ".env.local") {
	config({ path: path.resolve(process.cwd(), envPath), quiet: true });

	const baseUrl = process.env.CRM_NOCOBASE_URL;
	const token = process.env.CRM_NOCOBASE_TOKEN;

	if (!baseUrl || !token) {
		console.error(
			"Erro: CRM_NOCOBASE_URL e CRM_NOCOBASE_TOKEN devem estar definidos no .env.local",
		);
		process.exit(1);
	}
}

export { validateEnv };
