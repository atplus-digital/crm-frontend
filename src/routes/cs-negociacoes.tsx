import { NegociacoesPage } from "#/components/cs/negociacoes-page";
import { requireAuth } from "#/modules/auth";

export async function loader() {
	requireAuth("/");
}

export function Component() {
	return <NegociacoesPage />;
}
