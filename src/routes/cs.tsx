import { CSPessoasPage } from "#/components/cs/pessoas-page";
import { requireAuth } from "#/modules/auth";

export async function loader() {
	requireAuth("/");
}

export function Component() {
	return <CSPessoasPage />;
}
