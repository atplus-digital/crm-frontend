import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

// See @ts3-oss documentation for more details.
export const env = createEnv({
	server: {
		SERVER_URL: z.url().optional(),
		// NocoBase API credentials for types generation script
		CRM_NOCOBASE_URL: z.url(),
		CRM_NOCOBASE_TOKEN: z.string(),
	},
	clientPrefix: "VITE_",
	client: {
		VITE_LOCAL_STORAGE_BASE_KEY: z.string().optional().default("crm-atplus"),
	},
	runtimeEnv: import.meta.env,
	emptyStringAsUndefined: true,
});
