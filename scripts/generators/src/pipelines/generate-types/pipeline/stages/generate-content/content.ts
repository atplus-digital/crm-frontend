// Barrel re-export file for content generation modules
// @see content-sorting.ts - field sorting/categorization
// @see content-enums.ts - enum generation (labels, schemas, types)
// @see content-interfaces.ts - interface/relation/schema generation
// @see content-assembly.ts - collection assembly + file content generation

// Assembly functions
export {
	generateCollectionTypes,
	generateContent,
	generateContentForCollections,
	generateFileHeader,
	generateIndexContent,
	generateLabelsContent,
	generateSchemasContent,
	generateSplitFiles,
} from "./content-assembly";
export type { EnumFieldInfo } from "./content-enums";
// Enum functions
export {
	generateCollectionEnumMaps,
	generateCollectionEnumSchemas,
	generateCollectionEnumTypes,
	generateEnumLabelMap,
	generateEnumSchema,
	generateEnumType,
	getScalarFieldType,
	getScalarFieldZodType,
	isValidObjectKey,
	toEnumMemberName,
} from "./content-enums";
// Types
export type { CollectionInterfacesOutput } from "./content-interfaces";
// Interface functions
export {
	generateCollectionBaseInterface,
	generateCollectionInterfaces,
	generateCollectionRelationKeyType,
	generateCollectionRelationsInterface,
	generateMainSchema,
} from "./content-interfaces";
// Sorting utilities
export {
	_categorizeField,
	_sortMapEntries,
	_sortScalarEntries,
	CATEGORY_ORDER,
	SORT_PATTERNS,
} from "./content-sorting";
