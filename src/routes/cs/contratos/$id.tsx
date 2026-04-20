import { requireAuth } from "#/features/auth";
import { ContratoDetailPage } from "#/pages/cs/contratos/contrato-detail";

export async function loader() {
	requireAuth("/");
}

export function Component() {
	return <ContratoDetailPage />;
}
