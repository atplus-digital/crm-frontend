import { SidebarSeparator, SidebarTrigger } from "#/components/ui/sidebar";

export function AppHeader() {
	return (
		<header className="flex flex-row h-12 shrink-0 items-center border-b px-2">
			<SidebarTrigger size="icon-lg" />
			<SidebarSeparator orientation="vertical" className="h-full" />
		</header>
	);
}
