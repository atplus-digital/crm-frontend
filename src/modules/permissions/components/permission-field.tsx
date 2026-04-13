// import type { ReactNode } from "react";
// import { useCan } from "../hooks";

// interface PermissionFieldProps {
// 	label: string;
// 	action?: string;
// 	children: (editable: boolean) => ReactNode;
// }

/**
 * Permission-aware field component that controls editability based on permissions.
 *
 * - If user lacks "view" permission → renders nothing (null)
 * - If user has the action permission (default: "update") → renders children(true) (editable)
 * - If user lacks action permission but has "view" → renders children(false) (readOnly)
 */
// export function PermissionField({
// 	label: _label,
// 	action = "update",
// 	children,
// }: PermissionFieldProps): ReactNode {
// 	const canView = useCan("view");
// 	const canEdit = useCan(action);

// 	// No view permission - render nothing
// 	if (!canView) return null;

// 	// Render children with editability flag
// 	return children(canEdit);
// }
