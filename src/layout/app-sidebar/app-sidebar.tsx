import { useStore } from "@tanstack/react-store";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarMenu,
	SidebarMenuItem,
	SidebarRail,
} from "#/components/ui/sidebar";
import { authStore, signOut } from "#/features/auth";
import { routePaths } from "#/routes/route-paths";
import { SidebarHeaderComponent } from "./sidebar-header";
import { SidebarNavigation } from "./sidebar-navigation";
import { SidebarUserMenu } from "./sidebar-user-menu";
import { useUserInitials } from "./use-user-initials";

export function AppSidebar() {
	const user = useStore(authStore, (state) => state.user);

	const userInitials = useUserInitials(user);
	const userDisplayName = user?.nickname ?? user?.email ?? "Usuário";

	async function handleLogout() {
		await signOut();
		window.location.href = routePaths.login;
	}

	return (
		<Sidebar collapsible="icon">
			<SidebarHeaderComponent />

			<SidebarContent>
				<SidebarNavigation />
			</SidebarContent>

			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarUserMenu
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
