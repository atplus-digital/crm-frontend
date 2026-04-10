import type { UsersBase } from "#/@types/generated/crm/users";

export type AuthUser = Pick<
	UsersBase,
	"id" | "email" | "username" | "nickname" | "appLang" | "phone"
>;

export interface AuthResponse {
	data: {
		token: string;
		user: AuthUser;
	};
}

export interface AuthState {
	user: AuthUser | null;
	token: string | null;
	isAuthenticated: boolean;
}

export interface LoginCredentials {
	email: string;
	password: string;
}

export interface ResetPasswordRequest {
	email: string;
}

export interface ResetPasswordConfirm {
	token: string;
	password: string;
	confirmPassword: string;
}
