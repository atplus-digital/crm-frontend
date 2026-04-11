import type { UsersBase } from "#/@types/generated/crm/users";
import { z } from "zod";

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

export class AuthValidationError extends Error {
	constructor(
		message: string,
		public readonly zodError?: z.ZodError,
	) {
		super(message);
		this.name = "AuthValidationError";
	}
}

export const authUserSchema = z
	.object({
		id: z.number(),
	})
	.passthrough();

export const authResponseSchema = z.object({
	data: z.object({
		token: z.string().min(1),
		user: authUserSchema,
	}),
});

export const checkAuthResponseSchema = authUserSchema;

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
