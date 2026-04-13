import { ContratosPage } from "#/components/cs/contratos-page";
import { requireAuth } from "#/modules/auth";

export async function loader() {
	requireAuth("/");
}

export function Component() {
	return <ContratosPage />;
}
