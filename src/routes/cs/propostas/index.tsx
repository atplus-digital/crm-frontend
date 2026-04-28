import { requireAuth } from "#/features/auth";
import { PropostasPage } from "#/pages/cs/propostas/propostas";

export async function loader() {
	requireAuth("/");
	return null;
}

export function Component() {
	return <PropostasPage />;
}
