import { createStore } from "@tanstack/store";

import { nocobaseClient } from "./client";
import type { AuthState, AuthUser } from "./types";

// Token persistence delegated to NocoBase SDK (CRM-ATPLUS:TOKEN)
const persistedToken = nocobaseClient.auth.token || null;

export const authStore = createStore<AuthState>({
	user: null,
	token: persistedToken,
	isAuthenticated: !!persistedToken,
});

export function setUser(user: AuthUser | null): void {
	authStore.setState((state) => ({ ...state, user }));
}

export function setToken(token: string | null): void {
	authStore.setState((state) => ({
		...state,
		token,
		isAuthenticated: !!token,
	}));
}

export function reset(): void {
	authStore.setState(() => ({
		user: null,
		token: null,
		isAuthenticated: false,
	}));
}
