import { requireAuth } from "#/features/auth";
import { TrocaEnderecoDetailPage } from "#/features/cs/troca-de-endereco/components/troca-endereco-details";

export async function loader({ request }: { request: Request }) {
	requireAuth(new URL(request.url).pathname);
}

export function Component() {
	return <TrocaEnderecoDetailPage />;
}
