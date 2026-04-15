import { requireAuth } from "#/modules/auth";
import { NegociacoesPage } from "#/pages/cs/negociacoes-page";

export async function loader() {
	requireAuth("/");
}

export function Component() {
	return <NegociacoesPage />;
}
