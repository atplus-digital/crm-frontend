import { requireAuth } from "#/features/auth";
import { VendasDetailPage } from "#/pages/cs/vendas/vendas-detail";

export async function loader({ request }: { request: Request }) {
	requireAuth(new URL(request.url).pathname);
}

export function Component() {
	return <VendasDetailPage />;
}
