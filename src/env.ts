import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
	clientPrefix: "VITE_",
	client: {
		VITE_DISABLE_FORGOT_PASSWORD: z.boolean().optional().default(true),
		VITE_LOCAL_STORAGE_BASE_KEY: z.string().optional().default("crm-atplus"),
		VITE_LOG_LEVEL: z
			.enum(["debug", "info", "warn", "error"])
			.optional()
			.default("debug"),
		VITE_NOCOBASE_URL: z.url(),
	},
	emptyStringAsUndefined: true,
	runtimeEnv: import.meta.env,
});

export const isDev = import.meta.env.DEV;
