// Auth inherited from parent cs_negociacoes/$id route — do not add requireAuth
// without extracting this tab to a top-level route.
import { NegociacaoAnexosTabPage } from "#/pages/cs/negociacoes/negociacao-detail-tabs/anexos";

export function Component() {
	return <NegociacaoAnexosTabPage />;
}
