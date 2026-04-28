import { requireAuth } from "#/features/auth";
import { PropostasListaTabPage } from "#/pages/cs/propostas/propostas-tabs/lista";

export async function loader() {
	requireAuth("/");
	return null;
}

export function Component() {
	return <PropostasListaTabPage />;
}
