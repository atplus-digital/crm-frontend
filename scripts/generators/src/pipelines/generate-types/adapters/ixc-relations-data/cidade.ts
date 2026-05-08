export const CIDADE_RELATIONS: Record<
	string,
	Record<
		string,
		{
			target: string;
			type: "belongsTo" | "hasMany";
			relationFieldName?: string;
		}
	>
> = {
	cidade: {
		uf: {
			target: "uf",
			type: "belongsTo",
			relationFieldName: "f_uf",
		},
	},
};
