import { requireAuth } from "#/features/auth";
import { CSPessoasPage } from "#/pages/cs/pessoas-page";

export async function loader() {
	requireAuth("/");
}

export function Component() {
	return <CSPessoasPage />;
}
