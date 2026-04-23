// Barrel re-export file for content generation modules
// @see content-sorting.ts - field sorting/categorization
// @see content-enums.ts - enum generation (definition + label maps)
// @see content-interfaces.ts - interface/relation generation
// @see content-assembly.ts - collection assembly + file content generation

// Assembly functions
export {
	generateCollectionTypes,
	generateContent,
	generateContentForCollections,
	generateFileHeader,
	generateSplitFiles,
} from "./content-assembly";

// Enum functions
export {
	generateCollectionEnumMaps,
	generateCollectionEnums,
	generateEnumDefinition,
	generateEnumLabelMap,
	getScalarFieldType,
} from "./content-enums";

// Interface functions
export {
	generateCollectionBaseInterface,
	generateCollectionRelationKeyType,
	generateCollectionRelationsInterface,
} from "./content-interfaces";
// Types
export type { FieldCategory } from "./content-sorting";
// Sorting utilities
export {
	_categorizeField,
	_sortMapEntries,
	_sortScalarEntries,
	CATEGORY_ORDER,
	SORT_PATTERNS,
} from "./content-sorting";
