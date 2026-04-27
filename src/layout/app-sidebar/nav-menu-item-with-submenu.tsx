import { ChevronRight, Link2 } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import {
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "#/components/ui/sidebar";
import { isNavPathActive } from "#/layout/nav-config";
import { cn } from "#/lib/utils";
import type { NavItemWithChildren } from "./nav-menu-item";

export function NavMenuItemWithSubmenu({
	item,
}: {
	item: NavItemWithChildren;
}) {
	const { pathname } = useLocation();
	const [isExpanded, setIsExpanded] = useState(Boolean(item.defaultOpen));

	return (
		<SidebarMenuItem key={item.to}>
			<SidebarMenuButton
				isActive={false}
				tooltip={item.label}
				onClick={() => setIsExpanded(!isExpanded)}
				className="cursor-pointer"
			>
				{item.icon ?? <Link2 className="size-4" />}
				<span>{item.label}</span>
				<ChevronRight
					className={cn(
						"ml-auto size-4 transition-transform duration-200",
						isExpanded && "rotate-90",
					)}
				/>
			</SidebarMenuButton>
			{isExpanded && item.children && (
				<SidebarMenuSub>
					{item.children.map((child: NavItemWithChildren) => (
						<SidebarMenuSubItem key={child.to}>
							<SidebarMenuSubButton
								asChild
								isActive={isNavPathActive(pathname, child.to)}
							>
								<Link to={child.to}>
									{child.icon ?? <Link2 className="size-4" />}
									<span>{child.label}</span>
								</Link>
							</SidebarMenuSubButton>
						</SidebarMenuSubItem>
					))}
				</SidebarMenuSub>
			)}
		</SidebarMenuItem>
	);
}
