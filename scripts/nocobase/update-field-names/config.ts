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
		cliente_contrato: {},
		fn_areceber: {},
		radusuarios: {},
		su_ticket: {},
		vd_contratos_produtos: {},
	},
} satisfies FieldNameConfig<DatasourceCollectionsMap>;
