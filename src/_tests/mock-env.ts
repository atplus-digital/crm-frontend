import { vi } from "vitest";

vi.mock("#/env", () => ({
	env: {
		SERVER_URL: "https://server.example.com",
		CRM_NOCOBASE_URL: "https://example.com/api",
		VITE_LOCAL_STORAGE_BASE_KEY: "custom-app",
		AUTH_SESSION_SECRET: "mock-auth-session-secret-at-least-32-chars",
	},
}));
