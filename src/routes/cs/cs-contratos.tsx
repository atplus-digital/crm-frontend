import { requireAuth } from "#/features/auth";
import { ContratosPage } from "#/pages/cs/contratos/contratos-page";

export async function loader() {
	requireAuth("/");
}

export function Component() {
	return <ContratosPage />;
}
