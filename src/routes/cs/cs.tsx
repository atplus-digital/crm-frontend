import { requireAuth } from "#/modules/auth";
import { CSPessoasPage } from "#/pages/cs/pessoas-page";

export async function loader() {
	requireAuth("/");
}

export function Component() {
	return <CSPessoasPage />;
}
