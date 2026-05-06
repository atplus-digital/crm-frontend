import { PageLayout } from "#/components/layouts/page-layout";
import { isDev } from "#/env";
import { PopupRequest } from "#/features/custom-requests";

export function TestesPage() {
	if (!isDev) {
		return null;
	}

	return (
		<PageLayout title="Testes">
			<div className="flex gap-4">
				<PopupRequest identifier="log-test" payload={{ $nSelectedRecord: [] }}>
					Log Test
				</PopupRequest>
				<PopupRequest
					autoCloseOnSuccess={true}
					identifier="log-test"
					confirm={false}
					payload={{ $nSelectedRecord: [] }}
				>
					Log Test
				</PopupRequest>
			</div>
		</PageLayout>
	);
}
