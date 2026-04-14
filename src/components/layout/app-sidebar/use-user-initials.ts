import type { User } from "#/modules/auth/types";

export function useUserInitials(user: User | null): string {
	if (!user) return "U";

	if (user.nickname) {
		const initials = user.nickname
			.split(" ")
			.map((n) => n[0])
			.join("")
			.toUpperCase()
			.slice(0, 2);
		return initials;
	}

	if (user.email) {
		return user.email.slice(0, 2).toUpperCase();
	}

	return "U";
}
