import { z } from "zod";
import type { Users } from "#/@types/generated/crm/users";
import type { PermissionRole } from "#/modules/permissions";
import { permissionRoleSchema } from "#/modules/permissions";

export type AuthUser = Pick<
	Users,
	"id" | "email" | "username" | "nickname" | "phone"
> & {
	roles: PermissionRole[];
};

export class AuthValidationError extends Error {
	constructor(
		message: string,
		public readonly zodError?: z.ZodError,
	) {
		super(message);
		this.name = "AuthValidationError";
	}
}

export const authUserSchema = z.object({
	id: z.number(),
	email: z.string(),
	username: z.string(),
	nickname: z.string(),
	phone: z.string(),
	roles: z.array(permissionRoleSchema).optional().default([]),
});

export const authResponseSchema = z.object({
	token: z.string().min(1),
	user: authUserSchema,
});

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
