import { requireAuth } from "#/features/auth";
import { TestesPage } from "#/pages/testes/testes";

export async function testesLoader({ request }: { request: Request }) {
	requireAuth(new URL(request.url).pathname);
}

export function TestesRoute() {
	return <TestesPage />;
}
