import { requireAuth } from "#/features/auth";
import { SuspensaoContratoDetailPage } from "#/features/cs/suspensao-de-contrato/components/suspensao-de-contrato-details";

export async function loader({ request }: { request: Request }) {
	requireAuth(new URL(request.url).pathname);
}

export function Component() {
	return <SuspensaoContratoDetailPage />;
}
