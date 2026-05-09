// Barrel re-export file for content generation modules
// @see sorting.ts - field sorting/categorization
// @see enums.ts - enum generation (labels, schemas, types)
// @see interfaces.ts - interface/relation/schema generation
// @see assembly.ts - collection assembly + file content generation

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
} from "./assembly";
export type { EnumFieldInfo } from "./enums";
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
} from "./enums";
// Types
export type { CollectionInterfacesOutput } from "./interfaces";
// Interface functions
export {
	generateCollectionBaseInterface,
	generateCollectionInterfaces,
	generateCollectionRelationKeyType,
	generateCollectionRelationsInterface,
	generateMainSchema,
} from "./interfaces";
// Sorting utilities
export {
	_categorizeField,
	_sortMapEntries,
	_sortScalarEntries,
	CATEGORY_ORDER,
	SORT_PATTERNS,
} from "./sorting";
