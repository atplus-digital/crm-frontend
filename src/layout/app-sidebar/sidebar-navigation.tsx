import { ChevronRight, Link2 } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "#/components/ui/sidebar";
import {
	APP_NAV_SECTIONS,
	getActiveNavSection,
	isNavPathActive,
	type NavItem,
} from "#/layout/nav-config";
import { cn } from "#/lib/utils";

interface NavItemWithChildren extends NavItem {
	children?: NavItemWithChildren[];
}

function hasChildren(item: NavItem): item is NavItemWithChildren {
	return Array.isArray(item.children) && item.children.length > 0;
}

function NavMenuItem({ item }: { item: NavItem }) {
	const hasSubItems = hasChildren(item);

	if (hasSubItems) {
		return <NavMenuItemWithSubmenu item={item as NavItemWithChildren} />;
	}

	return <NavMenuItemWithoutSubmenu item={item} />;
}

function NavMenuItemWithoutSubmenu({ item }: { item: NavItem }) {
	const { pathname } = useLocation();
	const isActive = isNavPathActive(pathname, item.to);

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

function NavMenuItemWithSubmenu({ item }: { item: NavItemWithChildren }) {
	const { pathname } = useLocation();
	const [isExpanded, setIsExpanded] = useState(false);
	const isActive = isNavPathActive(pathname, item.to);

	return (
		<SidebarMenuItem key={item.to}>
			<SidebarMenuButton
				isActive={isActive}
				tooltip={item.label}
				onClick={() => setIsExpanded(!isExpanded)}
				className={cn("cursor-pointer", isExpanded && "bg-sidebar-accent")}
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
