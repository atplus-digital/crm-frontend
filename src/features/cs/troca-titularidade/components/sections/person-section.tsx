import { User } from "lucide-react";
import { DetailField } from "#/features/cs/components/detail-field";
import { DetailSection } from "#/features/cs/components/detail-section";
import { formatPhone } from "#/lib/utils";
import type { CrmTrocaTitularidadeWithRelations } from "../../troca-titularidade-hooks";

interface PersonSectionProps {
	trocaTitularidade: CrmTrocaTitularidadeWithRelations;
	variant: "cedente" | "cessionario";
}

export function PersonSection({
	trocaTitularidade: data,
	variant = "cedente",
}: PersonSectionProps) {
	const isCedente = variant === "cedente";
	const title = isCedente ? "Cedente" : "Cessionário";
	const description = isCedente
		? "Dados da pessoa que cede a titularidade"
		: "Dados da pessoa que recebe a titularidade";

	const name = isCedente ? data.f_cedente : data.f_cessionario;
	const documento = isCedente
		? data.f_cedente_documento
		: data.f_cessionario_documento;
	const email = isCedente ? data.f_cedente_email : data.f_cessionario_email;
	const telefone = isCedente
		? data.f_cedente_telefone
		: data.f_cessionario_telefone;
	const responsavel = isCedente
		? data.f_cedente_responsavel_legal
		: data.f_cessionario_responsavel;
	const responsavelLabel = isCedente ? "Responsável Legal" : "Responsável";

	return (
		<DetailSection
			title={title}
			description={description}
			icon={<User className="size-4" />}
		>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				<DetailField label="Nome">{name}</DetailField>
				<DetailField label="Documento">{documento}</DetailField>
				<DetailField label="Email">{email}</DetailField>
				<DetailField label="Telefone">
					{telefone ? formatPhone(telefone) : "—"}
				</DetailField>
				<DetailField label={responsavelLabel}>{responsavel}</DetailField>
			</div>
		</DetailSection>
	);
}
