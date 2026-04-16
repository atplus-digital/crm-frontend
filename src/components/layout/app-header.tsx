import { Link, useLocation } from "react-router";
import { SidebarSeparator, SidebarTrigger } from "#/components/ui/sidebar";
import { APP_NAV_SECTIONS, getActiveNavSection } from "#/features/permissions";
import { cn } from "#/lib/utils";

export function AppHeader() {
	const location = useLocation();
	const sections = APP_NAV_SECTIONS;
	const activeSection = getActiveNavSection(sections, location.pathname);

	return (
		<header className="flex h-12 shrink-0 items-center gap-2 border-b px-2">
			<SidebarTrigger size="icon-lg" />
			<SidebarSeparator orientation="vertical" className="h-full" />

			<nav className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto">
				{sections.map((section) => {
					const isActive = activeSection?.to === section.to;

					return (
						<Link
							key={section.to}
							to={section.to}
							className={cn(
								"inline-flex h-9 items-center rounded-md px-3 text-sm font-medium whitespace-nowrap text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
								isActive && "bg-muted text-foreground",
							)}
						>
							{section.label}
						</Link>
					);
				})}
			</nav>
		</header>
	);
}
