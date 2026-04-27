import { useLocation } from "react-router";
import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
} from "#/components/ui/sidebar";
import { APP_NAV_SECTIONS, getActiveNavSection } from "#/layout/nav-config";
import { NavMenuItem } from "./nav-menu-item";

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
					{activeSection.items.map((item) => (
						<NavMenuItem key={item.to} item={item} />
					))}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
}
