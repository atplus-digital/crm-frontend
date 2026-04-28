import { Link2 } from "lucide-react";
import { Link, useLocation } from "react-router";
import { SidebarMenuButton, SidebarMenuItem } from "#/components/ui/sidebar";
import { isNavItemActive, type NavItem } from "#/layout/nav-config";

export function NavMenuItemWithoutSubmenu({ item }: { item: NavItem }) {
	const { pathname } = useLocation();
	const isActive = isNavItemActive(pathname, item);

	return (
		<SidebarMenuItem key={item.to}>
			<SidebarMenuButton asChild isActive={isActive} tooltip={item.label}>
				<Link to={item.to}>
					{item.icon ?? <Link2 className="size-4" />}
					<span>{item.label}</span>
				</Link>
			</SidebarMenuButton>
		</SidebarMenuItem>
	);
}
