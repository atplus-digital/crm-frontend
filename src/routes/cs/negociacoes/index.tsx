import { requireAuth } from "#/features/auth";
import { NegociacoesPage } from "#/pages/cs/negociacoes/negociacoes";

export async function loader() {
	requireAuth("/");
}

export function Component() {
	return <NegociacoesPage />;
}
