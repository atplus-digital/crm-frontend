import { useStore } from "@tanstack/react-store";
import { hasGrantedAction } from "./matchers";
import { permissionsStore } from "./store";

/**
 * Returns true if the given action (or its :own variant) is in effectiveActions.
 * If effectiveActions contains "update:own", useCan("update") returns true.
 * If effectiveActions contains "update", useCan("update:own") returns true.
 */
export function useCan(action: string): boolean {
	const effectiveActions = useStore(
		permissionsStore,
		(state) => state.effectiveActions,
	);

	return hasGrantedAction(effectiveActions, action);
}
