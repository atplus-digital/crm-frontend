import { requireAuth } from "#/features/auth";
import { CSPessoasPage } from "#/pages/cs/pessoas/pessoas";

export async function loader() {
	requireAuth("/");
}

export function Component() {
	return <CSPessoasPage />;
}
