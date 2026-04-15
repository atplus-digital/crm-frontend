import { requireAuth } from "#/features/auth";
import { ContratoDetailPage } from "#/pages/cs/contrato-detail-page";

export async function loader() {
	requireAuth("/");
}

export function Component() {
	return <ContratoDetailPage />;
}
