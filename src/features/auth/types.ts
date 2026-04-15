import { z } from "zod";
import type { PermissionRole } from "#/features/permissions";
import { permissionRoleSchema } from "#/features/permissions";
import type { Users } from "#/generated/nocobase/users";

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
	username: z
		.string()
		.nullable()
		.transform((v) => v ?? ""),
	nickname: z
		.string()
		.nullable()
		.transform((v) => v ?? ""),
	phone: z
		.string()
		.nullable()
		.transform((v) => v ?? ""),
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

export interface UpdateProfilePayload {
	email: string;
	nickname: string;
	phone: string;
}
