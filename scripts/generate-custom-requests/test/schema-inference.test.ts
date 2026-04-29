import { inferPayloadSchema } from "@scripts/generate-custom-requests/src/utils/schema-inference";
import { describe, expect, it } from "vitest";

function normalizeMultiline(input: string): string {
	return input
		.split("\n")
		.map((line) => line.trim())
		.join("\n")
		.trim();
}

describe("inferPayloadSchema", () => {
	it("deve inferir literais para primitivos fixos", () => {
		const result = inferPayloadSchema({
			a: 1,
			b: "ASD",
			c: true,
			d: null,
		});

		expect(normalizeMultiline(result)).toBe(
			normalizeMultiline(`z.object({
    a: z.literal(1),
    b: z.literal("ASD"),
    c: z.literal(true),
    d: z.literal(null),
  })`),
		);
	});

	it("deve inferir objeto aninhado preservando literais", () => {
		const result = inferPayloadSchema({
			nested: {
				status: "ok",
				code: 200,
			},
		});

		expect(normalizeMultiline(result)).toBe(
			normalizeMultiline(`z.object({
    nested: z.object({
    status: z.literal("ok"),
    code: z.literal(200),
  }),
  })`),
		);
	});

	it("deve agrupar placeholders de $nForm em objeto sem literais", () => {
		const result = inferPayloadSchema({
			assunto: "{{$nForm.f_assunto}}",
			processo: "{{$nForm.f_processo}}",
			id: "{{currentRecord.id}}",
		});

		expect(normalizeMultiline(result)).toBe(
			normalizeMultiline(`z.object({
    $nForm: z.object({
      f_assunto: z.string(),
      f_processo: z.string(),
    }),
    currentRecord: z.object({
      id: z.unknown(),
    }),
  })`),
		);
	});

	it("deve suportar caminhos aninhados de $nForm", () => {
		const result = inferPayloadSchema({
			tipo: "{{$nForm.f_templates_atendimentos.f_tipo_de_atendimento}}",
		});

		expect(normalizeMultiline(result)).toBe(
			normalizeMultiline(`z.object({
    $nForm: z.object({
      f_templates_atendimentos: z.object({
        f_tipo_de_atendimento: z.string(),
      }),
    }),
  })`),
		);
	});

	it("deve agrupar placeholders de currentRecord em objeto sem literais", () => {
		const result = inferPayloadSchema({
			id_contrato: "{{currentRecord.id}}",
			cliente_nome: "{{currentRecord.cliente.nome}}",
			status: "fixo",
		});

		expect(normalizeMultiline(result)).toBe(
			normalizeMultiline(`z.object({
    status: z.literal("fixo"),
    currentRecord: z.object({
      cliente: z.object({
        nome: z.unknown(),
      }),
      id: z.unknown(),
    }),
	  })`),
		);
	});

	it("deve agrupar placeholders de currentUser em objeto sem literais", () => {
		const result = inferPayloadSchema({
			id_vendedor: "{{currentUser.f_id_vendedor_ixc}}",
			nome: "{{currentUser.profile.nome}}",
		});

		expect(normalizeMultiline(result)).toBe(
			normalizeMultiline(`z.object({
    currentUser: z.object({
      f_id_vendedor_ixc: z.unknown(),
      profile: z.object({
        nome: z.unknown(),
      }),
    }),
  })`),
		);
	});

	it("deve agrupar placeholders de $nSelectedRecord em objeto sem literais", () => {
		const result = inferPayloadSchema({
			fk_funcionarios: "{{$nSelectedRecord.f_fk_funcionarios}}",
			nome_patrimonio: "{{$nSelectedRecord.f_nome_patrimonio}}",
		});

		expect(normalizeMultiline(result)).toBe(
			normalizeMultiline(`z.object({
    $nSelectedRecord: z.object({
      f_fk_funcionarios: z.unknown(),
      f_nome_patrimonio: z.unknown(),
    }),
  })`),
		);
	});

	it("deve inferir placeholder raiz de $nSelectedRecord como unknown", () => {
		const result = inferPayloadSchema({
			info_adicionais: "{{$nSelectedRecord}}",
		});

		expect(normalizeMultiline(result)).toBe(
			normalizeMultiline(`z.object({
    $nSelectedRecord: z.unknown(),
  })`),
		);
	});

	it("deve retornar z.any quando payload é null ou vazio", () => {
		expect(inferPayloadSchema(null)).toBe("z.any()");
		expect(inferPayloadSchema({})).toBe("z.any()");
	});
});
