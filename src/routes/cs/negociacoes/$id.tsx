import { requireAuth } from "#/features/auth";
import { NegociacaoDetailPage } from "#/pages/cs/negociacoes/negociacao-detail";

export async function loader({ request }: { request: Request }) {
	requireAuth(new URL(request.url).pathname);
}

export function Component() {
	return <NegociacaoDetailPage />;
}
