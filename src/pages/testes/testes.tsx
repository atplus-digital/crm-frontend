import { PageLayout } from "#/components/page-layout/page-layout";
import { PopupRequest } from "#/features/custom-requests";

export function TestesPage() {
	return (
		<PageLayout title="Testes">
			<div className="flex gap-4">
				<PopupRequest identifier="log-test" payload={{ $nSelectedRecord: [] }}>
					Log Test
				</PopupRequest>
			</div>
		</PageLayout>
	);
}
