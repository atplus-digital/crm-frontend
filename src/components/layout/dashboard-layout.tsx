import { SidebarInset, SidebarProvider } from "#/components/ui/sidebar";
import { AppHeader } from "./app-header";
import { AppSidebar } from "./app-sidebar";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<SidebarProvider className="h-svh overflow-hidden">
			<AppSidebar />
			<SidebarInset>
				<AppHeader />
				<main className="flex-1 overflow-auto p-2">{children}</main>
			</SidebarInset>
		</SidebarProvider>
	);
}
