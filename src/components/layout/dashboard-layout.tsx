import { SidebarInset, SidebarProvider } from "#/components/ui/sidebar";
import { AppHeader } from "./app-header";
import { AppSidebar } from "./app-sidebar";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<SidebarProvider className="h-svh w-svw">
			<AppSidebar />
			<SidebarInset className="min-w-0">
				<AppHeader />
				<main className="flex-1 overflow-auto min-w-0">{children}</main>
			</SidebarInset>
		</SidebarProvider>
	);
}
