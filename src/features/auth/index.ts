export { nocobaseClient } from "./utils/client";
export { requireAuth, requireGuest, validateTokenOnInit } from "./utils/guard";
export {
	checkAuth,
	confirmPasswordReset,
	requestPasswordReset,
	signIn,
	signOut,
	updateProfile,
} from "./utils/service";
export {
	authStore,
	reset,
	setToken,
	setUser,
} from "./utils/store";
export type {
	AuthState,
	AuthUser,
	LoginCredentials,
	ResetPasswordConfirm,
	ResetPasswordRequest,
	UpdateProfilePayload,
} from "./utils/types";
export {
	AuthValidationError,
	authResponseSchema,
	authUserSchema,
} from "./utils/types";
