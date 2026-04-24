// Auth inherited from parent cs_negociacoes/$id route — do not add requireAuth
// without extracting this tab to a top-level route.
import { NegociacaoDetalhesTabPage } from "#/pages/cs/negociacoes/negociacao-detail-tabs/detalhes";

export function Component() {
	return <NegociacaoDetalhesTabPage />;
}
