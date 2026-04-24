// Auth inherited from parent cs_negociacoes/$id route — do not add requireAuth
// without extracting this tab to a top-level route.
import { NegociacaoItensTabPage } from "#/pages/cs/negociacoes/negociacao-detail-tabs/itens";

export function Component() {
	return <NegociacaoItensTabPage />;
}
