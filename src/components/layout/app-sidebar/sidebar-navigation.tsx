import { useStore } from "@tanstack/react-store";
import { FileText, Handshake, Home, UserRound, Users } from "lucide-react";
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
	filterNavSectionsByPermissions,
	getActiveNavSection,
	isNavPathActive,
	permissionsStore,
} from "#/features/permissions";

const iconByName = {
	fileText: FileText,
	handshake: Handshake,
	home: Home,
	user: UserRound,
	users: Users,
} as const;

export function SidebarNavigation() {
	const location = useLocation();
	const effectiveActions = useStore(
		permissionsStore,
		(state) => state.effectiveActions,
	);
	const effectiveSnippets = useStore(
		permissionsStore,
		(state) => state.effectiveSnippets,
	);

	const sections = filterNavSectionsByPermissions(
		APP_NAV_SECTIONS,
		effectiveActions,
		effectiveSnippets,
	);
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
						const Icon = item.icon ? iconByName[item.icon] : undefined;
						const isActive = isNavPathActive(location.pathname, item.to);

						return (
							<SidebarMenuItem key={item.to}>
								<SidebarMenuButton
									asChild
									isActive={isActive}
									tooltip={item.label}
								>
									<Link to={item.to}>
										{Icon ? <Icon /> : null}
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
