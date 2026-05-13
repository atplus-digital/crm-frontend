import { cn } from "#/lib/utils";

interface EntityAvatarProps {
	name: string;
	className?: string;
}

export function EntityAvatar({ name, className }: EntityAvatarProps) {
	const letter = (name || "?").charAt(0).toUpperCase();

	return (
		<div
			className={cn(
				"flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground",
				className,
			)}
		>
			{letter}
		</div>
	);
}
