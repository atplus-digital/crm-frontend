import { useStore } from "@tanstack/react-store";
import {
	FileText,
	Handshake,
	Home,
	LogOut,
	Moon,
	Sun,
	User,
	Users,
} from "lucide-react";
import { Link, useLocation } from "react-router";
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
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
} from "#/components/ui/sidebar";
import { authStore, signOut } from "#/modules/auth";

const navigation = [
	{ name: "Dashboard", href: "/", icon: Home },
	{ name: "Pessoas", href: "/cs/pessoas", icon: Users },
	{ name: "Negociações", href: "/cs/negociacoes", icon: Handshake },
	{ name: "Contratos", href: "/cs/contratos", icon: FileText },
];

export function AppSidebar() {
	const user = useStore(authStore, (state) => state.user);
	const location = useLocation();

	const userInitials = user?.nickname
		? user.nickname
				.split(" ")
				.map((n) => n[0])
				.join("")
				.toUpperCase()
				.slice(0, 2)
		: (user?.email?.slice(0, 2).toUpperCase() ?? "U");

	const userDisplayName = user?.nickname ?? user?.email ?? "Usuário";

	async function handleLogout() {
		await signOut();
		window.location.href = "/login";
	}

	return (
		<Sidebar collapsible="icon">
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild>
							<Link to="/">
								<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">
									AT
								</div>
								<div className="flex flex-col gap-0.5 leading-none">
									<span className="font-semibold">CRM AtPlus</span>
								</div>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>

			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{navigation.map((item) => {
								const isActive = location.pathname === item.href;
								return (
									<SidebarMenuItem key={item.name}>
										<SidebarMenuButton
											asChild
											isActive={isActive}
											tooltip={item.name}
										>
											<Link to={item.href}>
												<item.icon />
												<span>{item.name}</span>
											</Link>
										</SidebarMenuButton>
									</SidebarMenuItem>
								);
							})}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>

			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<UserMenu
							userInitials={userInitials}
							userDisplayName={userDisplayName}
							userEmail={user?.email}
							onLogout={handleLogout}
						/>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>

			<SidebarRail />
		</Sidebar>
	);
}

function UserMenu({
	userInitials,
	userDisplayName,
	userEmail,
	onLogout,
}: {
	userInitials: string;
	userDisplayName: string;
	userEmail?: string;
	onLogout: () => void;
}) {
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
