import { requireAuth } from "#/features/auth";
import { TrocaDeEnderecoPage } from "#/pages/cs/troca-de-endereco/troca-de-endereco";

export async function loader({ request }: { request: Request }) {
	requireAuth(new URL(request.url).pathname);
}

export function Component() {
	return <TrocaDeEnderecoPage />;
}
