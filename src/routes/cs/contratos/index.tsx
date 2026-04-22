import { requireAuth } from "#/features/auth";
import { ContratosPage } from "#/pages/cs/contratos/contratos";

export async function loader({ request }: { request: Request }) {
	requireAuth(new URL(request.url).pathname);
}

export function Component() {
	return <ContratosPage />;
}
