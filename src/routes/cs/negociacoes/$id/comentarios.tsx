// Auth inherited from parent cs_negociacoes/$id route — do not add requireAuth
// without extracting this tab to a top-level route.
import { NegociacaoComentariosTabPage } from "#/pages/cs/negociacoes/negociacao-detail-tabs/comentarios";

export function Component() {
	return <NegociacaoComentariosTabPage />;
}
