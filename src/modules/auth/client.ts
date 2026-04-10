import { APIClient } from "@nocobase/sdk";

import { env } from "#/env";

export const nocobaseClient = new APIClient({
	baseURL: env.VITE_CRM_NOCOBASE_URL,
	storageType: "localStorage",
	storagePrefix: `${env.VITE_LOCAL_STORAGE_BASE_KEY}:`,
});
