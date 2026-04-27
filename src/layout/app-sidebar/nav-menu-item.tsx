import type { NavItem } from "#/layout/nav-config";
import { NavMenuItemWithSubmenu } from "./nav-menu-item-with-submenu";
import { NavMenuItemWithoutSubmenu } from "./nav-menu-item-without-submenu";

interface NavItemWithChildren extends NavItem {
	children?: NavItemWithChildren[];
}

export function hasChildren(item: NavItem): item is NavItemWithChildren {
	return Array.isArray(item.children) && item.children.length > 0;
}

export type { NavItemWithChildren };

export function NavMenuItem({ item }: { item: NavItem }) {
	const hasSubItems = hasChildren(item);

	if (hasSubItems) {
		return <NavMenuItemWithSubmenu item={item as NavItemWithChildren} />;
	}

	return <NavMenuItemWithoutSubmenu item={item} />;
}
