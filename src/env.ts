import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
	server: {
		SERVER_URL: z.url().optional(),
		CRM_NOCOBASE_URL: z.url(),
		AUTH_SESSION_SECRET: z.string().min(32),
	},
	clientPrefix: "VITE_",
	client: {
		VITE_LOCAL_STORAGE_BASE_KEY: z.string().optional().default("crm-atplus"),
		VITE_CRM_NOCOBASE_URL: z.url(),
	},
	runtimeEnv: process.env,
	emptyStringAsUndefined: true,
});
