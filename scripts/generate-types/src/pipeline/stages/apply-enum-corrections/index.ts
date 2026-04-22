import type {
	ApplyEnumCorrectionsContext,
	PipelineStage,
} from "../../core/types";
import { applyEnumCorrections as applyCorrections } from "../../stages/infer-enums/enum-inference";

export const applyEnumCorrections: PipelineStage<
	ApplyEnumCorrectionsContext
> = async (ctx) => {
	const { collectionTypes, dataSource } = ctx;

	applyCorrections(collectionTypes, dataSource.enumCorrection ?? []);

	return { ...ctx, collectionTypes };
};
