import { Link, useLocation } from "react-router";
import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "#/components/ui/sidebar";
import {
	APP_NAV_SECTIONS,
	getActiveNavSection,
	isNavPathActive,
} from "#/layout/nav-config";

export function SidebarNavigation() {
	const location = useLocation();
	const sections = APP_NAV_SECTIONS;
	const activeSection = getActiveNavSection(sections, location.pathname);

	if (!activeSection) {
		return null;
	}

	return (
		<SidebarGroup>
			<SidebarGroupLabel>{activeSection.label}</SidebarGroupLabel>
			<SidebarGroupContent>
				<SidebarMenu>
					{activeSection.items.map((item) => {
						const isActive = isNavPathActive(location.pathname, item.to);

						return (
							<SidebarMenuItem key={item.to}>
								<SidebarMenuButton
									asChild
									isActive={isActive}
									tooltip={item.label}
								>
									<Link to={item.to}>
										{item.icon ?? null}
										<span>{item.label}</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						);
					})}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
}
