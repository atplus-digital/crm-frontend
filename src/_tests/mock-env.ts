import { vi } from "vitest";

vi.mock("#/env", () => ({
	env: {
		SERVER_URL: "https://server.example.com",
		CRM_NOCOBASE_URL: "https://example.com/api",
		VITE_LOCAL_STORAGE_BASE_KEY: "custom-app",
		CRM_NOCOBASE_TOKEN: "mock-token",
	},
}));
