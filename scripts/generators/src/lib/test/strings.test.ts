import {
	escapeString,
	serializePayloadData,
} from "@scripts/generators/src/utils/strings";
import { describe, expect, it } from "vitest";

describe("escapeString", () => {
	describe("escaping de caracteres especiais", () => {
		it("deve escapar barra invertida", () => {
			const input = "caminho\\para\\arquivo";
			const result = escapeString(input);
			expect(result).toBe("caminho\\\\para\\\\arquivo");
		});

		it("deve escapar aspas duplas", () => {
			const input = 'ele disse "olá"';
			const result = escapeString(input);
			expect(result).toBe('ele disse \\"olá\\"');
		});

		it("deve escapar nova linha", () => {
			const input = "linha1\nlinha2";
			const result = escapeString(input);
			expect(result).toBe("linha1\\nlinha2");
		});

		it("deve escapar carriage return", () => {
			const input = "texto1\rtexto2";
			const result = escapeString(input);
			expect(result).toBe("texto1\\rtexto2");
		});

		it("deve escapar tabulação", () => {
			const input = "coluna1\tcoluna2";
			const result = escapeString(input);
			expect(result).toBe("coluna1\\tcoluna2");
		});

		it("deve escapar múltiplos caracteres especiais em sequência", () => {
			const input = 'caminho\\temp\\"relatório\ncompleto\r';
			const result = escapeString(input);
			expect(result).toBe('caminho\\\\temp\\\\\\"relatório\\ncompleto\\r');
		});
	});

	describe("casos especiais", () => {
		it("deve retornar string vazia inalterada", () => {
			const result = escapeString("");
			expect(result).toBe("");
		});

		it("deve lidar com string sem caracteres especiais", () => {
			const input = "texto simples sem escapes";
			const result = escapeString(input);
			expect(result).toBe(input);
		});

		it("deve lidar com unicode", () => {
			const input = "caféração José 日本語";
			const result = escapeString(input);
			expect(result).toBe(input);
		});

		it("deve lidar com emoji", () => {
			const input = "Olá 👋🎉";
			const result = escapeString(input);
			expect(result).toBe(input);
		});
	});
});

describe("serializePayloadData", () => {
	describe("tratamento de null e vazio", () => {
		it("deve retornar 'null' para null", () => {
			const result = serializePayloadData(null);
			expect(result).toBe("null");
		});

		it("deve retornar 'null' para undefined (implementação trata como falsy)", () => {
			// @ts-expect-error - Testing runtime behavior
			const result = serializePayloadData(undefined);
			expect(result).toBe("null");
		});

		it("deve retornar 'null' para objeto vazio", () => {
			const result = serializePayloadData({});
			expect(result).toBe("null");
		});
	});

	describe("serialização de dados", () => {
		it("deve serializar objeto com dados como JSON com indentação", () => {
			const data = { name: "João", age: 30 };
			const result = serializePayloadData(data);
			expect(result).toBe(`{
  "name": "João",
  "age": 30
}`);
		});

		it("deve serializar objeto aninhado", () => {
			const data = {
				user: { nome: "Maria", endereco: { rua: "Av. Brasil" } },
				ativo: true,
			};
			const result = serializePayloadData(data);
			expect(result).toBe(`{
  "user": {
    "nome": "Maria",
    "endereco": {
      "rua": "Av. Brasil"
    }
  },
  "ativo": true
}`);
		});

		it("deve serializar array no payload", () => {
			const data = { tags: ["vip", "pendente"] };
			const result = serializePayloadData(data);
			expect(result).toBe(`{
  "tags": [
    "vip",
    "pendente"
  ]
}`);
		});

		it("deve serializar número e booleano", () => {
			const data = { valor: 99.9, ativo: true, desconto: null };
			const result = serializePayloadData(data);
			expect(result).toBe(`{
  "valor": 99.9,
  "ativo": true,
  "desconto": null
}`);
		});

		it("deve lidar com string vazia como valor válido", () => {
			const data = { nome: "", sobrenome: "Silva" };
			const result = serializePayloadData(data);
			expect(result).toBe(`{
  "nome": "",
  "sobrenome": "Silva"
}`);
		});
	});
});
