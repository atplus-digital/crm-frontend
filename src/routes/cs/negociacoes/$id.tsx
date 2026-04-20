import { requireAuth } from "#/features/auth";
import { NegociacaoDetailPage } from "#/pages/cs/negociacoes/negociacao-detail";

export async function loader() {
	requireAuth("/");
}

export function Component() {
	return <NegociacaoDetailPage />;
}
