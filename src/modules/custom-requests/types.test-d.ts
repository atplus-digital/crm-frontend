/**
 * Type-level tests for custom-requests module.
 * Uses expect-type for compile-time type assertions.
 *
 * These tests verify that the type system correctly infers and validates
 * custom request types at compile time, not runtime.
 */

import { expectTypeOf } from "expect-type";
import type {
	COLLECTION_TO_REQUESTS,
	CollectionFor,
	CollectionMap,
	CollectionToRequestsMap,
	CustomRequestKey,
	PayloadFor,
	RequestsForCollection,
} from "./types";

// ============================================================================
// Test 1: CustomRequestKey is a union of string literals
// ============================================================================
expectTypeOf<CustomRequestKey>().toEqualTypeOf<
	"37yaihkravc" | "0j7f9fuzuo7" | "h32vk2yid08"
>();

// ============================================================================
// Test 2: PayloadFor<"37yaihkravc"> infers correct schema type
// Should have id_contrato: number (from criarContratoIxcSchema)
// ============================================================================
expectTypeOf<PayloadFor<"37yaihkravc">>().toEqualTypeOf<{
	id_contrato: number;
	id_vendedor?: string | undefined;
	observacoes?: string | undefined;
}>();

// ============================================================================
// Test 3: PayloadFor<"0j7f9fuzuo7"> infers correct schema type
// Should have id_negociacao: number and info_adicional: string
// ============================================================================
expectTypeOf<PayloadFor<"0j7f9fuzuo7">>().toEqualTypeOf<{
	id_negociacao: number;
	info_adicional: string;
}>();

// ============================================================================
// Test 4: PayloadFor<"h32vk2yid08"> infers correct schema type
// Should have id_negociacao: number and fluxo_compras: boolean
// ============================================================================
expectTypeOf<PayloadFor<"h32vk2yid08">>().toEqualTypeOf<{
	id_negociacao: number;
	fluxo_compras: boolean;
}>();

// ============================================================================
// Test 5: CollectionFor<"37yaihkravc"> resolves to "cliente_contrato"
// ============================================================================
expectTypeOf<
	CollectionFor<"37yaihkravc">
>().toEqualTypeOf<"cliente_contrato">();

// ============================================================================
// Test 6: CollectionFor for all request keys
// Each request targets its respective collection
// ============================================================================
expectTypeOf<
	CollectionFor<"0j7f9fuzuo7">
>().toEqualTypeOf<"t_qualirun_info_adicionais">();
expectTypeOf<CollectionFor<"h32vk2yid08">>().toEqualTypeOf<"t_negociacoes">();

// ============================================================================
// Test 7: RequestsForCollection for each collection
// ============================================================================
expectTypeOf<
	RequestsForCollection<"cliente_contrato">
>().toEqualTypeOf<"37yaihkravc">();
expectTypeOf<
	RequestsForCollection<"t_qualirun_info_adicionais">
>().toEqualTypeOf<"0j7f9fuzuo7">();
expectTypeOf<
	RequestsForCollection<"t_negociacoes">
>().toEqualTypeOf<"h32vk2yid08">();

// ============================================================================
// Test 8: COLLECTION_TO_REQUESTS has correct runtime structure
// ============================================================================
expectTypeOf<
	typeof COLLECTION_TO_REQUESTS
>().toEqualTypeOf<CollectionToRequestsMap>();

// ============================================================================
// Test 9: COLLECTION_TO_REQUESTS entries contain correct keys
// ============================================================================
expectTypeOf<
	(typeof COLLECTION_TO_REQUESTS)["cliente_contrato"]
>().toEqualTypeOf<Array<"37yaihkravc">>();
expectTypeOf<
	(typeof COLLECTION_TO_REQUESTS)["t_qualirun_info_adicionais"]
>().toEqualTypeOf<Array<"0j7f9fuzuo7">>();
expectTypeOf<(typeof COLLECTION_TO_REQUESTS)["t_negociacoes"]>().toEqualTypeOf<
	Array<"h32vk2yid08">
>();

// ============================================================================
// Test 10: CollectionMap interface is correctly structured
// ============================================================================
expectTypeOf<CollectionMap>().toEqualTypeOf<{
	"37yaihkravc": "cliente_contrato";
	"0j7f9fuzuo7": "t_qualirun_info_adicionais";
	h32vk2yid08: "t_negociacoes";
}>();

// ============================================================================
// Test 11: Invalid request key causes compile error
// @ts-expect-error - "invalid_key" is not a valid CustomRequestKey
// ============================================================================
type InvalidKeyTest = PayloadFor<"invalid_key">;

// ============================================================================
// Test 12: Invalid collection causes compile error
// @ts-expect-error - "invalid_collection" is not a valid collection in CollectionToRequestsMap
// ============================================================================
type InvalidCollectionTest = RequestsForCollection<"invalid_collection">;

// ============================================================================
// Test 13: PayloadFor with wrong property causes compile error
// @ts-expect-error - id_cliente doesn't exist on PayloadFor<"37yaihkravc">
// ============================================================================
type WrongPropertyTest = PayloadFor<"37yaihkravc">["id_cliente"];

// ============================================================================
// Test 14: Verify optional properties are correctly inferred
// ============================================================================
expectTypeOf<PayloadFor<"37yaihkravc">["id_vendedor"]>().toEqualTypeOf<
	string | undefined
>();

// ============================================================================
// Test 15: Verify required properties are not optional
// ============================================================================
expectTypeOf<
	PayloadFor<"37yaihkravc">["id_contrato"]
>().toEqualTypeOf<number>();
