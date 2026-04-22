import { requireAuth } from "#/features/auth";
import { TrocaTitularidadeDetailPage } from "#/features/cs/troca-titularidade/components/troca-titularidade-details";

export async function loader() {
	requireAuth("/");
}

export function Component() {
	return <TrocaTitularidadeDetailPage />;
}
