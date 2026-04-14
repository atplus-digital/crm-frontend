import { LogOut, Moon, Sun, User } from "lucide-react";
import { Link } from "react-router";
import { useTheme } from "#/components/theme-provider";
import { Avatar, AvatarFallback } from "#/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "#/components/ui/dropdown-menu";
import { SidebarMenuButton } from "#/components/ui/sidebar";

interface SidebarUserMenuProps {
	userInitials: string;
	userDisplayName: string;
	userEmail?: string;
	onLogout: () => void;
}

export function SidebarUserMenu({
	userInitials,
	userDisplayName,
	userEmail,
	onLogout,
}: SidebarUserMenuProps) {
	const { theme, toggleTheme } = useTheme();

	const isDark = theme === "dark";

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<SidebarMenuButton
					size="lg"
					className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
				>
					<Avatar className="size-8">
						<AvatarFallback className="bg-primary text-primary-foreground text-xs">
							{userInitials}
						</AvatarFallback>
					</Avatar>
					<div className="grid flex-1 text-left text-sm leading-tight">
						<span className="truncate font-semibold">{userDisplayName}</span>
						{userEmail && (
							<span className="truncate text-xs text-muted-foreground">
								{userEmail}
							</span>
						)}
					</div>
				</SidebarMenuButton>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className="w-[--radix-dropdown-menu-trigger-width] min-w-56"
				align="end"
				sideOffset={4}
			>
				<DropdownMenuLabel className="font-normal">
					<div className="flex flex-col gap-1">
						<p className="text-sm font-medium leading-none">
							{userDisplayName}
						</p>
						{userEmail && (
							<p className="text-xs leading-none text-muted-foreground">
								{userEmail}
							</p>
						)}
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem asChild>
					<Link to="/profile" className="cursor-pointer">
						<User />
						Perfil
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem onClick={toggleTheme} className="cursor-pointer">
					{isDark ? <Sun /> : <Moon />}
					{isDark ? "Tema claro" : "Tema escuro"}
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem
					onClick={onLogout}
					className="cursor-pointer text-red-600 focus:text-red-600"
				>
					<LogOut />
					Sair
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
