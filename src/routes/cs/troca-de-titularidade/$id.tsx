import { requireAuth } from "#/features/auth";
import { TrocaTitularidadeDetailPage } from "#/pages/cs/troca-de-titularidade/troca-de-titularidade-detail";

export async function loader({ request }: { request: Request }) {
	requireAuth(new URL(request.url).pathname);
}

export function Component() {
	return <TrocaTitularidadeDetailPage />;
}
