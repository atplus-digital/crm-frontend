import { requireAuth } from "#/features/auth";
import { CSPessoasPage } from "#/pages/cs/pessoas/pessoas";

export async function loader({ request }: { request: Request }) {
	requireAuth(new URL(request.url).pathname);
}

export function Component() {
	return <CSPessoasPage />;
}
