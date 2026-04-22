import { requireAuth } from "#/features/auth";
import { TrocaTitularidadePage } from "#/pages/cs/troca-de-titularidade/troca-de-titularidade";

export async function loader({ request }: { request: Request }) {
	requireAuth(new URL(request.url).pathname);
}

export function Component() {
	return <TrocaTitularidadePage />;
}
