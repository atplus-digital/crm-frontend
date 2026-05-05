import { PageLayout } from "#/components/page-layout/page-layout";
import { Button } from "#/components/ui/button";
import { useCustomRequest } from "#/features/custom-requests";

export function TestesPage() {
	const mutation = useCustomRequest("log-test");
	return (
		<PageLayout title="Testes">
			<Button
				onClick={() =>
					mutation.mutate({
						payload: {
							$nSelectedRecord: [],
						},
					})
				}
			>
				Test
			</Button>
			{mutation.isPending && <p>Loading...</p>}
			{mutation.isError && <p>Error: {String(mutation.error)}</p>}
			{mutation.isSuccess && <p>Success: {JSON.stringify(mutation.data)}</p>}
			{mutation.isIdle && <p>Idle</p>}
			{mutation.data && <pre>Data: {JSON.stringify(mutation.data)}</pre>}
		</PageLayout>
	);
}
