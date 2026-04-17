import { requireAuth } from "#/features/auth";
import { TrocaTitularidadePage } from "#/pages/troca-titularidade/troca-titularidade-page";

export async function loader() {
	requireAuth("/");
}

export function Component() {
	return <TrocaTitularidadePage />;
}
