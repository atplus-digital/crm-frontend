import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
	clientPrefix: "VITE_",
	client: {
		VITE_LOCAL_STORAGE_BASE_KEY: z.string().optional().default("crm-atplus"),
		VITE_NOCOBASE_URL: z.url(),
	},
	runtimeEnv: {
		VITE_LOCAL_STORAGE_BASE_KEY: import.meta.env.VITE_LOCAL_STORAGE_BASE_KEY,
		VITE_NOCOBASE_URL: import.meta.env.VITE_NOCOBASE_URL,
	},
	emptyStringAsUndefined: true,
});

export const isDev = import.meta.env.DEV;
