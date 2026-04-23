import { requireAuth } from "#/features/auth";
import { VendasPage } from "#/pages/cs/vendas/vendas";

export async function loader({ request }: { request: Request }) {
	requireAuth(new URL(request.url).pathname);
}

export function Component() {
	return <VendasPage />;
}
