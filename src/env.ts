import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
	server: {
		SERVER_URL: z.url().optional(),
		CRM_NOCOBASE_URL: z.url(),
	},
	clientPrefix: "VITE_",
	client: {
		VITE_LOCAL_STORAGE_BASE_KEY: z.string().optional().default("crm-atplus"),
	},
	runtimeEnv: process.env,
	emptyStringAsUndefined: true,
});
