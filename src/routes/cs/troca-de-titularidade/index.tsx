import { requireAuth } from "#/features/auth";
import { TrocaTitularidadePage } from "#/pages/cs/troca-de-titularidade/troca-de-titularidade";

export async function loader() {
	requireAuth("/");
}

export function Component() {
	return <TrocaTitularidadePage />;
}
