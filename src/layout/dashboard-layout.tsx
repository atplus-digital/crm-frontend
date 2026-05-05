import { Outlet } from "react-router";
import { SidebarInset, SidebarProvider } from "#/components/ui/sidebar";
import { AppHeader } from "./app-header";
import { AppSidebar } from "./app-sidebar/app-sidebar";

export function DashboardLayout() {
	return (
		<SidebarProvider className="h-svh w-svw">
			<AppSidebar />
			<SidebarInset className="flex flex-col min-w-0 overflow-hidden">
				<AppHeader />
				<main className="flex-1 overflow-auto min-w-0">
					<Outlet />
				</main>
			</SidebarInset>
		</SidebarProvider>
	);
}
