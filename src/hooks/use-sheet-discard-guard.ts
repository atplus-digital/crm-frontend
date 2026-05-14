import { useCallback, useRef, useState } from "react";

// ============================================================================
// Hook
// ============================================================================

export function useSheetDiscardGuard(
	onOpenChange: (open: boolean) => void,
	isDirty: boolean,
) {
	const [showDiscardDialog, setShowDiscardDialog] = useState(false);
	const pendingOpenChangeRef = useRef<boolean | null>(null);

	const handleOpenChange = useCallback(
		(nextOpen: boolean) => {
			if (!nextOpen && isDirty) {
				pendingOpenChangeRef.current = nextOpen;
				setShowDiscardDialog(true);
				return;
			}
			onOpenChange(nextOpen);
		},
		[isDirty, onOpenChange],
	);

	const handleDiscardConfirm = useCallback(() => {
		setShowDiscardDialog(false);
		if (pendingOpenChangeRef.current !== null) {
			onOpenChange(pendingOpenChangeRef.current);
			pendingOpenChangeRef.current = null;
		}
	}, [onOpenChange]);

	const handleDiscardCancel = useCallback(() => {
		setShowDiscardDialog(false);
		pendingOpenChangeRef.current = null;
	}, []);

	return {
		showDiscardDialog,
		setShowDiscardDialog,
		handleOpenChange,
		handleDiscardConfirm,
		handleDiscardCancel,
	} as const;
}
