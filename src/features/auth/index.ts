export { nocobaseClient } from "./client";
export { requireAuth, requireGuest, validateTokenOnInit } from "./guard";
export {
	checkAuth,
	confirmPasswordReset,
	requestPasswordReset,
	signIn,
	signOut,
	updateProfile,
} from "./service";
export {
	authStore,
	reset,
	setToken,
	setUser,
} from "./store";
export type {
	AuthState,
	AuthUser,
	LoginCredentials,
	ResetPasswordConfirm,
	ResetPasswordRequest,
	UpdateProfilePayload,
} from "./types";
export {
	AuthValidationError,
	authResponseSchema,
	authUserSchema,
} from "./types";
