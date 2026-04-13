import { useStore } from "@tanstack/react-store";
import { Home, LogOut, Menu, User, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import { ThemeToggle } from "#/components/theme-toggle";
import { Avatar, AvatarFallback } from "#/components/ui/avatar";
import { Button } from "#/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "#/components/ui/dropdown-menu";
import { authStore, signOut } from "#/modules/auth";

const navigation = [{ name: "Dashboard", href: "/", icon: Home }];

export function MainHeader() {
	const user = useStore(authStore, (state) => state.user);
	const location = useLocation();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
			<div className="container flex h-14 items-center px-4 md:px-8">
				{/* Logo / Brand */}
				<div className="mr-4 flex">
					<Link to="/" className="flex items-center gap-2 font-semibold">
						<span className="text-lg">CRM AtPlus</span>
					</Link>
				</div>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex md:flex-1 md:items-center md:gap-6">
					{navigation.map((item) => {
						const isActive = location.pathname === item.href;
						const Icon = item.icon;
						return (
							<Link
								key={item.name}
								to={item.href}
								className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
									isActive ? "text-foreground" : "text-muted-foreground"
								}`}
							>
								<Icon className="h-4 w-4" />
								{item.name}
							</Link>
						);
					})}
				</nav>

				{/* Right side actions */}
				<div className="flex flex-1 items-center justify-end gap-4">
					<ThemeToggle />

					{/* Mobile menu button */}
					<Button
						variant="ghost"
						size="icon"
						className="md:hidden"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					>
						{mobileMenuOpen ? (
							<X className="h-5 w-5" />
						) : (
							<Menu className="h-5 w-5" />
						)}
					</Button>

					{/* User dropdown */}
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="ghost" className="relative h-8 w-8 rounded-full">
								<Avatar className="h-8 w-8">
									<AvatarFallback className="bg-primary text-primary-foreground text-xs">
										{userInitials}
									</AvatarFallback>
								</Avatar>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="w-56" align="end" forceMount>
							<DropdownMenuLabel className="font-normal">
								<div className="flex flex-col space-y-1">
									<p className="text-sm font-medium leading-none">
										{userDisplayName}
									</p>
									{user?.email && (
										<p className="text-xs leading-none text-muted-foreground">
											{user.email}
										</p>
									)}
								</div>
							</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem asChild>
								<Link to="/" className="cursor-pointer">
									<User className="mr-2 h-4 w-4" />
									Perfil
								</Link>
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem
								onClick={handleLogout}
								className="cursor-pointer text-red-600 focus:text-red-600"
							>
								<LogOut className="mr-2 h-4 w-4" />
								Sair
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>

			{/* Mobile Navigation */}
			{mobileMenuOpen && (
				<div className="border-t bg-background md:hidden">
					<div className="container space-y-1 p-4">
						{navigation.map((item) => {
							const isActive = location.pathname === item.href;
							const Icon = item.icon;
							return (
								<Link
									key={item.name}
									to={item.href}
									onClick={() => setMobileMenuOpen(false)}
									className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
										isActive
											? "bg-accent text-accent-foreground"
											: "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
									}`}
								>
									<Icon className="h-4 w-4" />
									{item.name}
								</Link>
							);
						})}
					</div>
				</div>
			)}
		</header>
	);
}
