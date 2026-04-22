import { requireAuth } from "#/features/auth";
import { TrocaTitularidadeDetailPage } from "#/features/cs/troca-titularidade/components/troca-titularidade-details";

export async function loader({ request }: { request: Request }) {
	requireAuth(new URL(request.url).pathname);
}

export function Component() {
	return <TrocaTitularidadeDetailPage />;
}
