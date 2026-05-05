import { vi } from "vitest";

vi.stubEnv("VITE_NOCOBASE_URL", "http://localhost:13000");
vi.stubEnv("VITE_LOCAL_STORAGE_BASE_KEY", "crm-atplus-test");
vi.stubEnv("VITE_LOG_LEVEL", "debug");
vi.stubEnv("VITE_DISABLE_FORGOT_PASSWORD", "true");
vi.stubEnv("VITE_APP_URL", "http://localhost:5173");
