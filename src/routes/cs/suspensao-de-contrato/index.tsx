import { requireAuth } from "#/features/auth";
import { SuspensaoContratoPage } from "#/pages/cs/suspensao-de-contrato/suspensao-de-contrato";

export async function loader({ request }: { request: Request }) {
	requireAuth(new URL(request.url).pathname);
}

export function Component() {
	return <SuspensaoContratoPage />;
}
