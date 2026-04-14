import { FileText, Handshake, Home, Users } from "lucide-react";
import { Link, useLocation } from "react-router";
import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "#/components/ui/sidebar";

const navigation = [
	{ name: "Dashboard", href: "/", icon: Home },
	{ name: "Pessoas", href: "/cs/pessoas", icon: Users },
	{ name: "Negociações", href: "/cs/negociacoes", icon: Handshake },
	{ name: "Contratos", href: "/cs/contratos", icon: FileText },
];

export function SidebarNavigation() {
	const location = useLocation();

	return (
		<SidebarGroup>
			<SidebarGroupContent>
				<SidebarMenu>
					{navigation.map((item) => {
						const isActive = location.pathname === item.href;
						return (
							<SidebarMenuItem key={item.name}>
								<SidebarMenuButton
									asChild
									isActive={isActive}
									tooltip={item.name}
								>
									<Link to={item.href}>
										<item.icon />
										<span>{item.name}</span>
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
