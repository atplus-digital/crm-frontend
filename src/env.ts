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
		VITE_NOCOBASE_URL: z.url(),
	},
	isServer: typeof window === "undefined",
	runtimeEnvStrict: {
		SERVER_URL: process.env.SERVER_URL,
		CRM_NOCOBASE_URL: process.env.CRM_NOCOBASE_URL,
		AUTH_SESSION_SECRET: process.env.AUTH_SESSION_SECRET,
		VITE_LOCAL_STORAGE_BASE_KEY: import.meta.env.VITE_LOCAL_STORAGE_BASE_KEY,
		VITE_NOCOBASE_URL: import.meta.env.VITE_NOCOBASE_URL,
	},
	emptyStringAsUndefined: true,
});
