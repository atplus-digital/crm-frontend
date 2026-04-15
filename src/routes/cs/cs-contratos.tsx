import { requireAuth } from "#/modules/auth";
import { ContratosPage } from "#/pages/cs/contratos-page";

export async function loader() {
	requireAuth("/");
}

export function Component() {
	return <ContratosPage />;
}
