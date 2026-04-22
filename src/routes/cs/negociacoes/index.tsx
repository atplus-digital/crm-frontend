import { requireAuth } from "#/features/auth";
import { NegociacoesPage } from "#/pages/cs/negociacoes/negociacoes";

export async function loader({ request }: { request: Request }) {
	requireAuth(new URL(request.url).pathname);
}

export function Component() {
	return <NegociacoesPage />;
}
