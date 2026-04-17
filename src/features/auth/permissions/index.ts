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
export {
	filterNavByPermissions,
	filterNavSectionsByPermissions,
} from "./nav-permissions";

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
