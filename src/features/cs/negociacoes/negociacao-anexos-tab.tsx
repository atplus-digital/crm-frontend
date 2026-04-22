import { useNegociacaoAnexos } from "#/features/cs/negociacoes/negociacoes-hooks";
import { AttachmentGrid } from "./negociacao-anexos-grid";

export function NegociacaoAnexosTab({
	negociacaoId,
}: {
	negociacaoId: number;
}) {
	const {
		data: response,
		isLoading,
		error,
	} = useNegociacaoAnexos(negociacaoId);
	const anexos = (response?.data ?? []).map((a) => ({
		id: a.id,
		filename: a.filename,
		title: a.title,
		url: a.url,
		size: a.size,
		createdAt: a.createdAt,
		mimetype: a.mimetype,
		extname: a.extname,
	}));

	return (
		<AttachmentGrid
			attachments={anexos}
			isLoading={isLoading}
			error={error}
			emptyMessage="Nenhum anexo encontrado"
		/>
	);
}
