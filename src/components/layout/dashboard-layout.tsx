import { SidebarInset, SidebarProvider } from "#/components/ui/sidebar";
import { AppHeader } from "./app-header";
import { AppSidebar } from "./app-sidebar";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<SidebarProvider className="h-svh w-svw overflow-hidden">
			<AppSidebar />
			<SidebarInset>
				<AppHeader />
				<main className="flex-1 overflow-auto">{children}</main>
			</SidebarInset>
		</SidebarProvider>
	);
}
