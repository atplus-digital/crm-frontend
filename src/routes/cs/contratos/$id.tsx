import { requireAuth } from "#/features/auth";
import { ContratoDetailPage } from "#/pages/cs/contratos/contrato-detail";

export async function loader({ request }: { request: Request }) {
	requireAuth(new URL(request.url).pathname);
}

export function Component() {
	return <ContratoDetailPage />;
}
