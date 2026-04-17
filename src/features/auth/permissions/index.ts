// export { Can } from "./components/can";
// export { PermissionField } from "./components/permission-field";
export { mergeActions, mergeSnippets } from "./compute";
export { requireAction, requireSnippet } from "./guards";
export {
	useCan,
	useCanEdit,
	useHasSnippet,
	useIsAdmin,
	useRoleNames,
} from "./hooks";
export type { NavIconName, NavItem, NavSection } from "./nav-config";
export {
	APP_NAV_SECTIONS,
	filterNavByPermissions,
	filterNavSectionsByPermissions,
	getActiveNavSection,
	isNavPathActive,
} from "./nav-config";

export {
	permissionsStore,
	resetPermissions,
	setPermissionsFromRoles,
} from "./store";
export type {
	PermissionRole,
	PermissionState,
	// PermissionValidationError,
} from "./types";
export { permissionRoleSchema, permissionStateSchema } from "./types";
