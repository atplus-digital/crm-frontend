import type { CollectionMap as IxcCollectionMap } from "#/generated/types/d_db_ixcsoft/collections";

type DatasourceFieldNameConfig<TCollections> = {
	[K in Extract<keyof TCollections, string>]?: TCollections[K] extends object
		? Partial<Record<Extract<keyof TCollections[K], string>, string>>
		: never;
};

type FieldNameConfig<TDatasources> = {
	[K in Extract<keyof TDatasources, string>]: DatasourceFieldNameConfig<
		TDatasources[K]
	>;
};

type DatasourceCollectionsMap = {
	d_db_ixcsoft: IxcCollectionMap;
};

export const fieldNameConfig = {
	d_db_ixcsoft: {
		cidade: {},
		cliente_contrato: {
			restricao_auto_libera_susp_parcial:
				"Restrição de liberação automática suspensão parcial",
			situacao_financeira_contrato: "Situação financeira do contrato",
			bairro: "Bairro",
			cidade: "Cidade",
			alerta_contrato: "Alerta do contrato",
			data_ativacao: "Data de ativação",
			data_validade: "Data de validade",
			data_cancelamento: "Data de cancelamento",
			motivo_cancelamento: "Motivo de cancelamento",
		},
		fn_areceber: {},
		radusuarios: {},
		su_ticket: {},
		vd_contratos_produtos: {},
	},
} satisfies FieldNameConfig<DatasourceCollectionsMap>;
