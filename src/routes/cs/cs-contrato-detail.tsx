import { ContratoDetailPage } from "#/components/cs/contrato-detail-page";
import { requireAuth } from "#/modules/auth";

export async function loader() {
	requireAuth("/");
}

export function Component() {
	return <ContratoDetailPage />;
}
