import { PopupConfirmContent } from "./popup-confirm-content";
import { PopupErrorContent } from "./popup-error-content";
import { PopupLoadingContent } from "./popup-loading-content";
import { PopupPreparingContent } from "./popup-preparing-content";
import type { DialogMode, PopupMutationState } from "./popup-request.types";
import { PopupSuccessContent } from "./popup-success-content";

interface PopupRequestContentProps {
	dialogMode: DialogMode;
	confirmMessage?: string;
	mutation: PopupMutationState;
	identifier: string;
}

export function PopupRequestContent({
	dialogMode,
	confirmMessage,
	mutation,
	identifier,
}: PopupRequestContentProps) {
	if (mutation.isPending) {
		return <PopupLoadingContent />;
	}

	if (mutation.isError && mutation.error) {
		return <PopupErrorContent error={mutation.error} />;
	}

	if (mutation.isSuccess && mutation.data != null) {
		return <PopupSuccessContent data={mutation.data} identifier={identifier} />;
	}

	if (dialogMode === "result") {
		return <PopupPreparingContent />;
	}

	return <PopupConfirmContent confirmMessage={confirmMessage} />;
}
