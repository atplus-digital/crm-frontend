import { createStore } from "@tanstack/store";

import { env } from "#/env";

import type { AuthState, AuthUser } from "./types";

// localStorage key using project convention
const AUTH_TOKEN_KEY = `${env.VITE_LOCAL_STORAGE_BASE_KEY}:auth-token`;

// localStorage helpers (SSR-safe)
function getTokenFromStorage(): string | null {
	if (typeof window === "undefined") return null;
	return localStorage.getItem(AUTH_TOKEN_KEY);
}

function setTokenToStorage(token: string): void {
	if (typeof window === "undefined") return;
	localStorage.setItem(AUTH_TOKEN_KEY, token);
}

function removeTokenFromStorage(): void {
	if (typeof window === "undefined") return;
	localStorage.removeItem(AUTH_TOKEN_KEY);
}

// Auth store with initial state
export const authStore = createStore<AuthState>({
	user: null,
	token: getTokenFromStorage(),
	isAuthenticated: !!getTokenFromStorage(),
	isLoading: false,
	error: null,
});

// Actions
export function setUser(user: AuthUser | null): void {
	authStore.setState((state) => ({ ...state, user }));
}

export function setToken(token: string | null): void {
	if (token) {
		setTokenToStorage(token);
	} else {
		removeTokenFromStorage();
	}
	authStore.setState((state) => ({
		...state,
		token,
		isAuthenticated: !!token,
	}));
}

export function setLoading(isLoading: boolean): void {
	authStore.setState((state) => ({ ...state, isLoading }));
}

export function setError(error: string | null): void {
	authStore.setState((state) => ({ ...state, error }));
}

export function reset(): void {
	removeTokenFromStorage();
	authStore.setState({
		user: null,
		token: null,
		isAuthenticated: false,
		isLoading: false,
		error: null,
	});
}
