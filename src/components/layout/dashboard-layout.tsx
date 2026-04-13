import { MainHeader } from "#/components/layout/main-header";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex min-h-screen flex-col">
			<MainHeader />
			<main className="flex-1 overflow-auto">{children}</main>
		</div>
	);
}
