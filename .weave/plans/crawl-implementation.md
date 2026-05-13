# Crawl Gaps Implementation Plan

> **For agentic workers:** Use `/start-work` to execute this plan via Tapestry.
> **Goal:** Implement gaps identified by NocoBase crawl audits across 4 modules (Contratos, Negociações, Suspensão de Contrato, Troca de Titularidade)

**Architecture:** Service-layer fixes (filter logic), UI refactors (read-only → editable forms with react-hook-form + zod), new route/tab additions, and mutation hooks following existing patterns (Convention B for CS subdomains).

**Tech Stack:** React 19, TypeScript, Tailwind v4, shadcn/ui, React Router v7, TanStack Query, react-hook-form + zod, NocoBase SDK

**Source of truth:** `.crawl/merged-report.md` (user-reviewed), `.crawl/reports/*/replication-report.md`

---

## Task 1: Contratos — filter fixes (produtos $or, faturas A/R/P, sort -id)

**Files:**

- Modify: `src/features/cs/contratos/contratos-service.ts:120-156`
- Read: `src/lib/filter-builder.ts` (for `or()` and `inFilter()`)

- [x] **Step 1: Add $or to `fetchContratoProdutos`**

Open `src/features/cs/contratos/contratos-service.ts`. Change the `fetchContratoProdutos` function (lines 120-137). The current filter `eq("id_contrato", idContrato)` must become an `$or` matching both `id_contrato` AND `id_vd_contrato`.

Replace the import line 9 to add `or`:

```
import { buildFilter, eq, inFilter, or } from "#/lib/filter-builder";
```

Replace the `fetchContratoProdutos` filter from:

```typescript
filter: eq("id_contrato", idContrato),
```

To:

```typescript
filter: or(
  eq("id_contrato", idContrato),
  eq("id_vd_contrato", idContrato),
),
```

Note: This requires the `id_vd_contrato` field to exist on the record. If the contrato was fetched with `id_vd_contrato` in the response, pass it as a second parameter. Check the calling code in `contratos-hooks.ts` — currently `useContratoProdutos(id)` only passes `id`. The `ContratoWithCliente` type should have `id_vd_contrato`. If not, read the generated `ClienteContrato` type to confirm.

- [x] **Step 2: Check that `id_vd_contrato` is available**

Read `src/generated/types/d_db_ixcsoft/cliente-contrato.ts` to confirm `id_vd_contrato` exists in the type. If it doesn't exist, the crawl report's claim about `$or` with `id_vd_contrato` needs verification — fall back to only `id_contrato`.

- [x] **Step 3: Add status filter `A,R,P` to `fetchContratoFaturas`**

In `src/features/cs/contratos/contratos-service.ts`, change `fetchContratoFaturas` (lines 139-156). Add `inFilter` to the imports (line 9):

```
import { buildFilter, eq, inFilter, or } from "#/lib/filter-builder";
```

Replace the filter from:

```typescript
filter: eq("id_contrato", idContrato),
```

To:

```typescript
filter: {
  $and: [
    eq("id_contrato", idContrato),
    inFilter("status", ["A", "R", "P"]),
  ],
},
```

Add a comment above the function:

```typescript
/** Documentação: Faturas filtradas por status A (aberto), R (recebido), P (parcial) */
export async function fetchContratoFaturas(
```

- [x] **Step 4: Change default sort to `-id`**

In `src/features/cs/contratos/contratos-service.ts`, change `fetchContratos` (lines 55-74). Replace:

```typescript
const { page = 1, pageSize = 15, sort, filters } = params;
```

To:

```typescript
const { page = 1, pageSize = 15, sort = ["-id"], filters } = params;
```

Also update the `ContratoListParams` type in `contratos-types.ts` if `sort` is required rather than optional — check the type and adjust default.

- [x] **Step 5: Verify**

Run `pnpm typecheck`. Fix any type errors.

- [x] **Step 6: Commit**

```bash
git add src/features/cs/contratos/contratos-service.ts src/features/cs/contratos/contratos-types.ts
git commit -m "fix(contratos): add $or for produtos, filter faturas by A/R/P, default sort -id"
```

---

## Task 2: Contratos — Sub-aba "Contratos" na aba Negociações

**Files:**

- Modify: `src/features/cs/contratos/contrato-detalhes/tabs/negociacoes/contrato-negociacoes-tab.tsx`
- Create: `src/features/cs/contratos/contrato-detalhes/tabs/negociacoes/contrato-negociacoes-contratos-card.tsx`

Context: The current `ContratoNegociacoesTab` shows 2 cards: "Troca de Titularidade" and "Renovações". The crawl shows a 3rd sub-aba "Contratos" (detail view of `t_negociacoes`). Since this is inside the Contracts detail page (not the Negociações page), we add it as a 3rd card section.

- [x] **Step 1: Create the contratos sub-card**

Create `src/features/cs/contratos/contrato-detalhes/tabs/negociacoes/contrato-negociacoes-contratos-card.tsx`:

```typescript
import { TabContentCard } from "#/components/layouts/tab-content-card";
import { DataTable, useDataTable } from "#/components/table/data-table";
import { useNegociacoes } from "#/features/cs/negociacoes/negociacoes-hooks";
import { NEGOCIACAO_STATUS_LABELS } from "#/features/cs/negociacoes/negociacoes-types";
import { formatCurrency, formatDatePtBR } from "#/lib/utils";
import type { ColumnDef } from "@tanstack/react-table";
import type { NegociacaoWithRelations } from "#/features/cs/negociacoes/negociacoes-types";
...
```

- [x] **Step 2: Import and render the card**

In `src/features/cs/contratos/contrato-detalhes/tabs/negociacoes/contrato-negociacoes-tab.tsx`, add the import:

```typescript
import { ContratoNegociacoesContratosCard } from "./contrato-negociacoes-contratos-card";
```

Add it after the Renovações card (line 76 `</TabContentCard>`):

```typescript
<ContratoNegociacoesContratosCard contratoId={contratoId} />
```

- [x] **Step 3: Verify**

Run `pnpm typecheck`. Fix any type errors from the ColumnDef or formatCurrency imports.

- [x] **Step 4: Commit**

```bash
git add src/features/cs/contratos/contrato-detalhes/tabs/negociacoes/
git commit -m "feat(contratos): add third sub-card 'Contratos' in Negociações tab"
```

- [ ] **Step 2: Import and render the card**

In `src/features/cs/contratos/contrato-detalhes/tabs/negociacoes/contrato-negociacoes-tab.tsx`, add the import:

```typescript
import { ContratoNegociacoesContratosCard } from "./contrato-negociacoes-contratos-card";
```

Add it after the Renovações card (line 76 `</TabContentCard>`):

```typescript
<ContratoNegociacoesContratosCard contratoId={contratoId} />
```

- [ ] **Step 3: Verify**

Run `pnpm typecheck`. Fix any type errors from the ColumnDef or formatCurrency imports.

- [ ] **Step 4: Commit**

```bash
git add src/features/cs/contratos/contrato-detalhes/tabs/negociacoes/
git commit -m "feat(contratos): add third sub-card 'Contratos' in Negociações tab"
```

---

## Task 3: Contratos — Informações Adicionais GridCard add/edit

**Files:**

- Read: `src/features/cs/contratos/contrato-detalhes/tabs/detalhes/` (find current implemention)
- Create: `src/features/cs/contratos/contrato-detalhes/tabs/detalhes/informacoes-adicionais-form.tsx`

The current "Informações Adicionais" card is read-only. The NocoBase original uses GridCard with add/edit actions. We need to add create/update capabilities.

- [ ] **Step 1: Find the current implementation**

Read all files in `src/features/cs/contratos/contrato-detalhes/tabs/detalhes/` to find where Informações Adicionais is rendered. Also check the generated `DadosAdicionaisClienteContrato` type.

- [ ] **Step 2: Create edit/add form component**

Create `src/features/cs/contratos/contrato-detalhes/tabs/detalhes/informacoes-adicionais-form.tsx`:

```typescript
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "#/components/ui/button";
import { Input } from "#/components/ui/input";
import { Label } from "#/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "#/components/ui/sheet";
import { nocobaseRepository } from "#/repositories";

const schema = z.object({
  f_origem_cliente: z.string().optional(),
  f_perfil_de_uso: z.string().optional(),
  f_forma_de_pagamento: z.string().optional(),
  f_pessoas_na_residencia: z.coerce.number().optional(),
  f_id_cliente_contrato: z.number(),
});

type FormValues = z.infer<typeof schema>;

interface InformacoesAdicionaisFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultValues?: Partial<FormValues>;
  contratoId: number;
  recordId?: number; // if editing existing
  onSuccess: () => void;
}

export function InformacoesAdicionaisForm({
  open,
  onOpenChange,
  defaultValues,
  contratoId,
  recordId,
  onSuccess,
}: InformacoesAdicionaisFormProps) {
  const isEdit = !!recordId;
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      f_id_cliente_contrato: contratoId,
      ...defaultValues,
    },
  });

  const onSubmit = async (values: FormValues) => {
    if (isEdit) {
      await nocobaseRepository.update("t_dados_adicionais_cliente_contrato", recordId, values);
    } else {
      await nocobaseRepository.create("t_dados_adicionais_cliente_contrato", values);
    }
    onSuccess();
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{isEdit ? "Editar" : "Adicionar"} Informações Adicionais</SheetTitle>
          <SheetDescription>
            {isEdit ? "Atualize as informações" : "Preencha as informações adicionais deste contrato"}
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="f_origem_cliente">Origem Cliente</Label>
            <Input id="f_origem_cliente" {...form.register("f_origem_cliente")} />
          </div>
          <div>
            <Label htmlFor="f_perfil_de_uso">Perfil de Uso</Label>
            <Input id="f_perfil_de_uso" {...form.register("f_perfil_de_uso")} />
          </div>
          <div>
            <Label htmlFor="f_forma_de_pagamento">Forma de Pagamento</Label>
            <Input id="f_forma_de_pagamento" {...form.register("f_forma_de_pagamento")} />
          </div>
          <div>
            <Label htmlFor="f_pessoas_na_residencia">Pessoas na Residência</Label>
            <Input id="f_pessoas_na_residencia" type="number" {...form.register("f_pessoas_na_residencia")} />
          </div>
          <SheetFooter>
            <Button type="submit">Salvar</Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
```

- [ ] **Step 3: Verify**

Run `pnpm typecheck`. Fix any imports.

- [ ] **Step 4: Integrate into detail page**

Find the current Informações Adicionais component (likely `informacoes-adicionais-card.tsx`). Add a `useState` for the sheet open state, "Adicionar" / "Editar" buttons, and render the `<InformacoesAdicionaisForm>` at the component level.

- [ ] **Step 5: Commit**

```bash
git add src/features/cs/contratos/contrato-detalhes/tabs/detalhes/
git commit -m "feat(contratos): add Informações Adicionais GridCard with add/edit sheet"
```

---

## Task 4: Contratos — Atendimentos IXC filter form

**Files:**

- Modify: `src/features/cs/contratos/contrato-detalhes/tabs/atendimentos/contrato-atendimentos-tab.tsx`

Read the current implementation first.

- [ ] **Step 1: Add filter form to atendimentos tab**

Read `src/features/cs/contratos/contrato-detalhes/tabs/atendimentos/contrato-atendimentos-tab.tsx`. Currently it shows a table without filters. Add a simple filter form with text input for "Assunto" and a select for "Status".

The filter needs to be sent as query params to the `fetchContratoAtendimentos` call. Since the service currently doesn't support additional filters, we'll add filter support to `fetchContratoAtendimentos` in `contratos-service.ts`:

```typescript
export async function fetchContratoAtendimentos(
  idContrato: number,
  filters?: { assunto?: string; status?: string },
): Promise<PaginatedResponse<SuTicket>> {
  try {
    const conditions: Record<string, unknown>[] = [eq("id_contrato", idContrato)];
    if (filters?.assunto) conditions.push(includes("assunto", filters.assunto));
    if (filters?.status) conditions.push(eq("status", filters.status));

    return ixcRepository.list<SuTicket>("su_ticket", {
      page: 1,
      pageSize: 50,
      filter: conditions.length === 1 ? conditions[0] : { $and: conditions },
    });
  } catch (error) { ... }
}
```

Then update the hook in `contratos-hooks.ts` to accept optional filters, and add the filter bar UI in the tab component.

- [ ] **Step 2: Verify**

Run `pnpm typecheck`.

- [ ] **Step 3: Commit**

```bash
git add src/features/cs/contratos/contrato-detalhes/tabs/atendimentos/ src/features/cs/contratos/contratos-service.ts src/features/cs/contratos/contratos-hooks.ts
git commit -m "feat(contratos): add filter form to Atendimentos IXC tab"
```

---

## Task 5: Negociações — Formulário editável + Sidebar + Editabilidade

**Files:**

- Modify: `src/features/cs/negociacoes/negociacao-detalhes-tab/negociacao-detalhes-tab.tsx`
- Modify: `src/pages/cs/negociacoes/negociacao-detail.tsx`
- Create: `src/features/cs/negociacoes/negociacao-detalhes-tab/negociacao-edit-form.tsx`
- Create: `src/features/cs/negociacoes/negociacao-detalhes-tab/negociacao-situacao-sidebar.tsx`

Context: Currently the Detalhes tab is all read-only cards. The crawl shows a 2-column layout: left column (edit form) + right column (Situação/Ações sidebar). The form has 4 sections triggered by status.

- [ ] **Step 1: Create the edit form component**

Create `src/features/cs/negociacoes/negociacao-detalhes-tab/negociacao-edit-form.tsx`:

```typescript
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "#/components/ui/button";
import { Input } from "#/components/ui/input";
import { Label } from "#/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "#/components/ui/select";
import { updateNegociacao } from "#/features/cs/negociacoes/negociacoes-service";
import type { NegociacaoWithRelations } from "#/features/cs/negociacoes/negociacoes-types";
import {
  DATA_VENCIMENTO_LABELS,
  ENDERECO_COMPLEMENTO_LABELS,
  FIDELIDADE_LABELS,
} from "#/features/cs/negociacoes/negociacoes-types";
import { cn } from "#/lib/utils";

const EDITABLE_STATUSES = [1, 2, 3, 4]; // Novo, Negociando, Assinatura, Auditoria

const schema = z.object({
  // Endereço
  f_cep: z.string().optional(),
  f_bairro: z.string().min(1, "Obrigatório"),
  f_endereco_cidade: z.string().min(1, "Obrigatório"),
  f_endereco_estado: z.string().min(1, "Obrigatório"),
  f_endereco: z.string().min(1, "Obrigatório"),
  f_endereco_numero: z.string().min(1, "Obrigatório"),
  f_endereco_complemento: z.string().min(1, "Obrigatório"),
  f_endereco_referencia: z.string().min(1, "Obrigatório"),
  f_assinatura_gov: z.string().optional(),
  // Pagamento e Contrato
  f_fidelidade: z.string().optional(),
  f_email_cobranca: z.string().min(1, "Obrigatório"),
  f_data_vencimento: z.string().min(1, "Obrigatório"),
  f_telefone: z.string().min(1, "Obrigatório"),
  f_telefone_2: z.string().min(1, "Obrigatório"),
  // Assinatura
  f_responsavel_assinatura: z.string().min(1, "Obrigatório"),
  f_cpf_responsavel_assinatura: z.string().min(1, "Obrigatório"),
  // Confissão de Dívida
  f_confissao_divida: z.enum(["Sim", "Nao"]),
  f_valor_devedor: z.coerce.number().optional(),
  f_multa_juros: z.coerce.number().optional(),
  f_entrada_saldo_devedor: z.coerce.number().optional(),
  f_parcelas_mensais: z.coerce.number().optional(),
  f_valor_devedor_total: z.coerce.number().optional(),
  f_valor_da_parcela: z.coerce.number().optional(),
  f_periodo_final: z.string().optional(),
  f_permuta: z.boolean().optional(),
});

type FormValues = z.infer<typeof schema>;

/** Documentação: Campos desabilitados para Concluído(5)/Arquivado(6), editáveis para Novo(1)/Negociando(2)/Assinatura(3)/Auditoria(4) */

interface NegociacaoEditFormProps {
  negociacao: NegociacaoWithRelations;
  isReadonly: boolean;
}

function isFieldDisabled(negociacao: NegociacaoWithRelations): boolean {
  return !EDITABLE_STATUSES.includes(Number(negociacao.f_status));
}

export function NegociacaoEditForm({ negociacao, isReadonly }: NegociacaoEditFormProps) {
  const queryClient = useQueryClient();
  const disabled = isFieldDisabled(negociacao);
  const showConfissao = negociacao.f_confissao_divida === "Sim";

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      f_cep: negociacao.f_cep ?? "",
      f_bairro: negociacao.f_bairro ?? "",
      f_endereco_cidade: negociacao.f_endereco_cidade ?? "",
      f_endereco_estado: negociacao.f_endereco_estado ?? "",
      f_endereco: negociacao.f_endereco ?? "",
      f_endereco_numero: negociacao.f_endereco_numero ?? "",
      f_endereco_complemento: negociacao.f_endereco_complemento ?? "",
      f_endereco_referencia: negociacao.f_endereco_referencia ?? "",
      f_assinatura_gov: negociacao.f_assinatura_gov ?? "",
      f_fidelidade: negociacao.f_fidelidade ?? "",
      f_email_cobranca: negociacao.f_email_cobranca ?? "",
      f_data_vencimento: negociacao.f_data_vencimento ?? "",
      f_telefone: negociacao.f_telefone ?? "",
      f_telefone_2: negociacao.f_telefone_2 ?? "",
      f_responsavel_assinatura: negociacao.f_responsavel_assinatura ?? "",
      f_cpf_responsavel_assinatura: negociacao.f_cpf_responsavel_assinatura ?? "",
      f_confissao_divida: (negociacao.f_confissao_divida as "Sim" | "Nao") ?? "Nao",
      f_valor_devedor: negociacao.f_valor_devedor ?? undefined,
      f_multa_juros: negociacao.f_multa_juros ?? undefined,
      f_entrada_saldo_devedor: negociacao.f_entrada_saldo_devedor ?? undefined,
      f_parcelas_mensais: negociacao.f_parcelas_mensais ?? undefined,
      f_valor_devedor_total: negociacao.f_valor_devedor_total ?? undefined,
      f_valor_da_parcela: negociacao.f_valor_da_parcela ?? undefined,
      f_periodo_final: negociacao.f_periodo_final ?? "",
      f_permuta: negociacao.f_permuta ?? false,
    },
  });

  const mutation = useMutation({
    mutationFn: (values: FormValues) => updateNegociacao(negociacao.id, values as any),
    onSuccess: () => {
      toast.success("Negociação atualizada");
      queryClient.invalidateQueries({ queryKey: ["cs", "negociacoes", negociacao.id] });
    },
    onError: (error) => {
      toast.error(`Erro ao salvar: ${error instanceof Error ? error.message : "desconhecido"}`);
    },
  });

  const onSubmit = (values: FormValues) => mutation.mutate(values);

  const field = (name: keyof FormValues, label: string, opts?: { type?: string; required?: boolean }) => (
    <div key={name}>
      <Label htmlFor={name}>{label}{opts?.required !== false ? " *" : ""}</Label>
      <Input
        id={name}
        type={opts?.type ?? "text"}
        disabled={disabled || isReadonly}
        {...form.register(name)}
      />
    </div>
  );

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      {/* Seção Endereço */}
      <div className="space-y-4">
        <h3 className="font-semibold text-sm text-muted-foreground">Endereço</h3>
        <div className="grid grid-cols-2 gap-4">
          {field("f_cep", "CEP", { required: false })}
          {field("f_bairro", "Bairro")}
          {field("f_endereco_cidade", "Cidade")}
          {field("f_endereco_estado", "UF")}
        </div>
        <div className="grid grid-cols-[4fr_1fr] gap-4">
          {field("f_endereco", "Endereço")}
          {field("f_endereco_numero", "Número")}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {field("f_endereco_complemento", "Complemento")}
          {field("f_endereco_referencia", "Ponto de Referência")}
        </div>
        {field("f_assinatura_gov", "Assinatura Gov", { required: false })}
      </div>

      {/* Seção Pagamento e Contrato */}
      <div className="space-y-4">
        <h3 className="font-semibold text-sm text-muted-foreground">Pagamento e Contrato</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Fidelidade</Label>
            <Select
              disabled={disabled || isReadonly}
              value={form.watch("f_fidelidade")}
              onValueChange={(v) => form.setValue("f_fidelidade", v)}
            >
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {Object.entries(FIDELIDADE_LABELS).map(([v, l]) => (
                  <SelectItem key={v} value={v}>{l}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {field("f_email_cobranca", "E-mail de cobrança")}
        </div>
        {field("f_data_vencimento", "Data de Vencimento")}
        {field("f_telefone", "Telefone (Whatsapp)")}
        {field("f_telefone_2", "Telefone 2 (Outro)")}
      </div>

      {/* Seção Assinatura */}
      <div className="space-y-4">
        <h3 className="font-semibold text-sm text-muted-foreground">Assinatura</h3>
        {field("f_responsavel_assinatura", "Responsável pela assinatura")}
        {field("f_cpf_responsavel_assinatura", "CPF Responsável pela assinatura")}
      </div>

      {/* Seção Confissão de Dívida (condicional) */}
      <div className="space-y-4">
        <h3 className="font-semibold text-sm text-muted-foreground">Confissão de Dívida?</h3>
        <div>
          <Label>Confissão de Dívida</Label>
          <Select
            disabled={disabled || isReadonly}
            value={form.watch("f_confissao_divida")}
            onValueChange={(v) => {
              form.setValue("f_confissao_divida", v as "Sim" | "Nao");
              // Reset conditional fields when switching to "Nao"
              if (v === "Nao") {
                form.setValue("f_valor_devedor", undefined);
                form.setValue("f_multa_juros", undefined);
                form.setValue("f_entrada_saldo_devedor", undefined);
                form.setValue("f_parcelas_mensais", undefined);
                form.setValue("f_valor_devedor_total", undefined);
                form.setValue("f_valor_da_parcela", undefined);
                form.setValue("f_periodo_final", "");
                form.setValue("f_permuta", false);
              }
            }}
          >
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="Nao">Não</SelectItem>
              <SelectItem value="Sim">Sim</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {showConfissao && (
          <>
            {field("f_valor_devedor", "Valor Devedor", { type: "number" })}
            {field("f_multa_juros", "Multa e Juros", { type: "number" })}
            {field("f_entrada_saldo_devedor", "Entrada / Saldo Devedor", { type: "number" })}
            {field("f_parcelas_mensais", "Parcelas Mensais", { type: "number" })}
            {field("f_valor_devedor_total", "Valor Devedor Total", { type: "number" })}
            {field("f_valor_da_parcela", "Valor da Parcela", { type: "number" })}
            {field("f_periodo_final", "Período Final", { required: false })}
            <div className="flex items-center gap-2">
              <input type="checkbox" id="f_permuta" disabled={disabled} {...form.register("f_permuta")} />
              <Label htmlFor="f_permuta">Permuta?</Label>
            </div>
          </>
        )}
      </div>

      <Button type="submit" disabled={disabled || isReadonly || mutation.isPending}>
        {mutation.isPending ? "Salvando..." : "Salvar"}
      </Button>
    </form>
  );
}
```

- [ ] **Step 2: Create the Situação/Ações sidebar**

Create `src/features/cs/negociacoes/negociacao-detalhes-tab/negociacao-situacao-sidebar.tsx`:

```typescript
import { Button } from "#/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card";
import type { NegociacaoWithRelations } from "#/features/cs/negociacoes/negociacoes-types";
import { NEGOCIACAO_STATUS_LABELS, MOTIVO_LABELS } from "#/features/cs/negociacoes/negociacoes-types";
import { formatDatePtBR } from "#/lib/utils";
import { StatusBadge as SharedStatusBadge } from "#/components/badges/status-badge";

interface NegociacaoSituacaoSidebarProps {
  negociacao: NegociacaoWithRelations;
}

export function NegociacaoSituacaoSidebar({ negociacao }: NegociacaoSituacaoSidebarProps) {
  const status = Number(negociacao.f_status);

  return (
    <div className="space-y-4">
      {/* Situação */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Situação</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <span className="text-xs text-muted-foreground">Motivo</span>
            <p className="text-sm font-medium">
              {MOTIVO_LABELS[negociacao.f_motivo as keyof typeof MOTIVO_LABELS] ?? negociacao.f_motivo}
            </p>
          </div>
          <div>
            <span className="text-xs text-muted-foreground">Criado em</span>
            <p className="text-sm">{formatDatePtBR(negociacao.createdAt)}</p>
          </div>
          <div>
            <span className="text-xs text-muted-foreground">Status</span>
            <SharedStatusBadge
              value={negociacao.f_status}
              labels={NEGOCIACAO_STATUS_LABELS}
              variant="inline"
            />
          </div>
          <div>
            <span className="text-xs text-muted-foreground">Substatus</span>
            <p className="text-sm">{negociacao.f_substatus ?? "—"}</p>
          </div>
        </CardContent>
      </Card>

      {/* Ações */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Ações</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button
            variant="outline"
            size="sm"
            className="w-full justify-start"
            disabled={status === 6} // Arquivar disabled when already Arquivado
          >
            Arquivar Negociação
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-full justify-start"
            disabled={status === 4} // Auditoria disabled when already in Auditoria
          >
            Enviar para Auditoria
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
```

- [ ] **Step 3: Refactor the Detalhes tab to 2-column layout**

Modify `src/features/cs/negociacoes/negociacao-detalhes-tab/negociacao-detalhes-tab.tsx`:

Change the return JSX from single column to 2-column layout:

```typescript
return (
  <div className="flex flex-col gap-6">
    <NegociacaoSummaryCard negociacao={negociacao} />

    <div className="flex flex-col lg:grid lg:grid-cols-[64%_36%] gap-6">
      {/* Left: Read-only Dados Cadastrais + Edit Form */}
      <div className="space-y-6">
        <DadosClienteCard negociacao={negociacao} />

        <Card>
          <CardHeader>
            <CardTitle>Atualize os dados abaixo</CardTitle>
          </CardHeader>
          <CardContent>
            <NegociacaoEditForm
              negociacao={negociacao}
              isReadonly={false}
            />
          </CardContent>
        </Card>
      </div>

      {/* Right: Situação + Ações + Comentários */}
      <NegociacaoSituacaoSidebar negociacao={negociacao} />
    </div>
  </div>
);
```

Remove the old grid layout with ContatoCard, PacoteServicosCard, EnderecoInstalacaoCard, EnderecoCobrancaCard, ValoresFinanceirosCard, CupomVendedorCard, PontosAtencaoCard, AssinaturaDigitalCard, SistemaCard (those are covered by the edit form now).

- [ ] **Step 4: Verify**

Run `pnpm typecheck`. Fix any type errors from the generated labels imports, Select components, etc.

- [ ] **Step 5: Commit**

```bash
git add src/features/cs/negociacoes/negociacao-detalhes-tab/
git commit -m "feat(negociacoes): add editable form + situacao sidebar + status-based editability"
```

---

## Task 6: Negociações — Aba "Contrato" (4ª tab)

**Files:**

- Modify: `src/pages/cs/negociacoes/negociacao-detail.tsx`
- Modify: `src/routes/cs/negociacoes/routes.ts`
- Create: `src/routes/cs/negociacoes/$id/contrato.tsx`
- Create: `src/features/cs/negociacoes/negociacao-contrato-tab.tsx`

Context: Currently the 4th tab is "Comentários". The crawl shows "Contrato" with signature actions, read-only data, and QualiRun OE table.

- [ ] **Step 1: Create the Contrato tab component**

Create `src/features/cs/negociacoes/negociacao-contrato-tab.tsx`:

```typescript
import { Database, FileText, Printer } from "lucide-react";
import { Button } from "#/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card";
import { DetailField } from "#/components/detail-field";
import type { NegociacaoWithRelations } from "#/features/cs/negociacoes/negociacoes-types";

interface NegociacaoContratoTabProps {
  negociacao: NegociacaoWithRelations;
}

export function NegociacaoContratoTab({ negociacao }: NegociacaoContratoTabProps) {
  const linkAssinatura = negociacao.f_link_assinatura as string | undefined;

  return (
    <div className="space-y-6">
      {/* Ações do Contrato */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="size-4" />
            Ações do Contrato
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm">
            <Printer className="size-4 mr-2" />
            Imprimir
          </Button>
          <Button variant="outline" size="sm">
            <Database className="size-4 mr-2" />
            Enviar para Assinatura
          </Button>
        </CardContent>
      </Card>

      {/* Dados do Contrato */}
      <Card>
        <CardHeader>
          <CardTitle>Dados do Contrato</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <DetailField label="Responsável pela assinatura">
            {negociacao.f_responsavel_assinatura || "—"}
          </DetailField>
          <DetailField label="CPF Responsável">
            {negociacao.f_cpf_responsavel_assinatura || "—"}
          </DetailField>
          {linkAssinatura && (
            <DetailField label="Link Assinatura" className="col-span-2">
              <a href={linkAssinatura} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                {linkAssinatura}
              </a>
            </DetailField>
          )}
        </CardContent>
      </Card>

      {/* OE QualiRun — placeholder table (data from t_oe_qualirun association) */}
      <Card>
        <CardHeader>
          <CardTitle>OE — QualiRun</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Dados de QualiRun disponíveis via associação t_oe_qualirun.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
```

- [ ] **Step 2: Create the route file**

Create `src/routes/cs/negociacoes/$id/contrato.tsx`:

```typescript
import { useOutletContext } from "react-router";
import type { NegociacaoDetailOutletContext } from "#/pages/cs/negociacoes/negociacao-detail.tsx";
import { NegociacaoContratoTab } from "#/features/cs/negociacoes/negociacao-contrato-tab";
import { CardSectionSkeleton } from "#/components/detail-skeleton";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";

export function Component() {
  const { negociacao, isLoading } = useOutletContext<NegociacaoDetailOutletContext>();

  if (isLoading) return <CardSectionSkeleton />;
  if (!negociacao) return <InlineErrorAlert>Negociação não encontrada</InlineErrorAlert>;

  return <NegociacaoContratoTab negociacao={negociacao} />;
}
```

- [ ] **Step 3: Update routes**

Modify `src/routes/cs/negociacoes/routes.ts`. Add a `contrato` route before the catch-all:

```typescript
{
  path: "contrato/*",
  lazy: () => import("./$id/contrato"),
},
```

- [ ] **Step 4: Update detail page tabs**

Modify `src/pages/cs/negociacoes/negociacao-detail.tsx`. Change the 4th tab from "Comentários" to "Contrato" (or add both if preferred — keeping Comentários as part of the Detalhes tab sidebar):

Replace the "comentarios" tab:

```typescript
{
  value: "contrato",
  label: "Contrato",
  icon: <FileText className="size-4" />,
},
```

Update imports: add `FileText` from lucide-react, keep `Smartphone` for outros if needed.

- [ ] **Step 5: Verify**

Run `pnpm typecheck`.

- [ ] **Step 6: Commit**

```bash
git add src/features/cs/negociacoes/negociacao-contrato-tab.tsx src/routes/cs/negociacoes/ src/pages/cs/negociacoes/negociacao-detail.tsx
git commit -m "feat(negociacoes): add Contrato tab (4th tab) with actions and QualiRun placeholder"
```

---

## Task 7: Negociações — CEP auto-fill (ViaCep)

**Files:**

- Create: `src/features/cs/negociacoes/negociacao-detalhes-tab/cep-lookup-button.tsx`
- Modify: `src/features/cs/negociacoes/negociacao-detalhes-tab/negociacao-edit-form.tsx`

Context: The user noted "Já existe uma implementação do ViaCep no CRM, verificar se pode ser reaproveitada". Search shows no existing ViaCep in the codebase — we'll create a simple one.

- [ ] **Step 1: Search for existing ViaCep**

Run `grep -r "viacep\|ViaCep\|fetchCep\|buscarCep" src/ --include="*.ts" --include="*.tsx"`. If not found, proceed with new implementation.

- [ ] **Step 2: Create CEP lookup button**

Create `src/features/cs/negociacoes/negociacao-detalhes-tab/cep-lookup-button.tsx`:

```typescript
import { Search } from "lucide-react";
import { useState } from "react";
import { Button } from "#/components/ui/button";
import { toast } from "sonner";

interface CepLookupButtonProps {
  cep: string;
  onAddressFound: (data: { bairro: string; cidade: string; estado: string; endereco: string }) => void;
}

export function CepLookupButton({ cep, onAddressFound }: CepLookupButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleLookup = async () => {
    const cleanCep = cep.replace(/\D/g, "");
    if (cleanCep.length !== 8) {
      toast.error("CEP deve ter 8 dígitos");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
      const data = await res.json();
      if (data.erro) {
        toast.error("CEP não encontrado");
        return;
      }
      onAddressFound({
        bairro: data.bairro ?? "",
        cidade: data.localidade ?? "",
        estado: data.uf ?? "",
        endereco: data.logradouro ?? "",
      });
      toast.success("Endereço encontrado");
    } catch {
      toast.error("Erro ao consultar CEP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className="shrink-0"
      disabled={loading}
      onClick={handleLookup}
      aria-label="Buscar CEP"
    >
      <Search className="size-4" />
    </Button>
  );
}
```

- [ ] **Step 3: Integrate into the edit form**

In `negociacao-edit-form.tsx`, add the CEP lookup button next to the CEP field. Change the CEP field rendering from:

```typescript
{
  field("f_cep", "CEP", { required: false });
}
```

To a custom row with the button:

```typescript
<div>
  <Label htmlFor="f_cep">CEP</Label>
  <div className="flex gap-2">
    <Input
      id="f_cep"
      disabled={disabled || isReadonly}
      className="flex-1"
      {...form.register("f_cep")}
    />
    <CepLookupButton
      cep={form.watch("f_cep") ?? ""}
      onAddressFound={({ bairro, cidade, estado, endereco }) => {
        form.setValue("f_bairro", bairro);
        form.setValue("f_endereco_cidade", cidade);
        form.setValue("f_endereco_estado", estado);
        form.setValue("f_endereco", endereco);
      }}
    />
  </div>
</div>
```

- [ ] **Step 4: Verify**

Run `pnpm typecheck`.

- [ ] **Step 5: Commit**

```bash
git add src/features/cs/negociacoes/negociacao-detalhes-tab/
git commit -m "feat(negociacoes): add CEP auto-fill via ViaCep lookup button"
```

---

## Task 8: Suspensão de Contrato — Botões ação individuais + Linkage rules

**Files:**

- Modify: `src/features/cs/suspensao-de-contrato/components/sections/suspensao-contrato-actions.tsx`
- Modify: `src/features/cs/suspensao-de-contrato/components/suspensao-contrato-detalhes-tab/suspensao-contrato-detalhes-tab.tsx`
- Modify existing cards to accept disabled state: `suspensao-contrato-envio-card.tsx`, `suspensao-contrato-suspensao-card.tsx`

Context: Currently `SuspensaoContratoActions` uses `ActionsMenu` dropdown with all items disabled. Need to replace with individual buttons with state-based enable/disable logic.

**Business rules:**

- "Enviar para Assinatura": enabled only when `f_status = 0`
- "Concluir": enabled only when `f_status = 2`
- "Arquivar": enabled when `f_status != 4`, requires confirm dialog
- Fields `f_email`, `f_telefone`, `f_dias_suspensao` and "Salvar" button: disabled when `f_status IN [1,2,3,4]`

- [ ] **Step 1: Refactor actions to individual buttons**

Replace `src/features/cs/suspensao-de-contrato/components/sections/suspensao-contrato-actions.tsx`:

```typescript
import { useState } from "react";
import { CheckCircle, FileSignature, Trash2 } from "lucide-react";
import { Button } from "#/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "#/components/ui/alert-dialog";

interface SuspensaoContratoActionsProps {
  status: number;
  onEnviar: () => void;
  onConcluir: () => void;
  onArquivar: () => void;
  isLoading?: boolean;
}

export function SuspensaoContratoActions({
  status,
  onEnviar,
  onConcluir,
  onArquivar,
  isLoading = false,
}: SuspensaoContratoActionsProps) {
  const [arquivarOpen, setArquivarOpen] = useState(false);
  const statusNum = Number(status);

  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="default"
        size="sm"
        disabled={statusNum !== 0 || isLoading}
        onClick={onEnviar}
      >
        <FileSignature className="size-4 mr-2" />
        Enviar para Assinatura
      </Button>

      <Button
        variant="default"
        size="sm"
        disabled={statusNum !== 2 || isLoading}
        onClick={onConcluir}
      >
        <CheckCircle className="size-4 mr-2" />
        Concluir
      </Button>

      <Button
        variant="destructive"
        size="sm"
        disabled={statusNum === 4 || isLoading}
        onClick={() => setArquivarOpen(true)}
      >
        <Trash2 className="size-4 mr-2" />
        Arquivar
      </Button>

      <AlertDialog open={arquivarOpen} onOpenChange={setArquivarOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Arquivar</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja arquivar essa Suspensão de Contrato?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={() => { onArquivar(); setArquivarOpen(false); }}>
              Confirmar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
```

- [ ] **Step 2: Add linkage rules to detail tab**

Modify `src/features/cs/suspensao-de-contrato/components/suspensao-contrato-detalhes-tab/suspensao-contrato-detalhes-tab.tsx`:

- Pass `status` and callbacks to `SuspensaoContratoActions`
- Pass `isDisabled` boolean to `EnvioCard`, `SuspensaoCard` (fields disabled when status IN [1,2,3,4])
- The `isDisabled` logic: `const isDisabled = ![0].includes(Number(suspensaoContrato.f_status));`

Update the `EnvioCard` and `SuspensaoCard` props to accept a `disabled?: boolean` prop. These cards currently use `DetailField` (read-only display), so "disabling" means showing the fields as read-only labels which they already are. The real editability comes from the form in the original NocoBase. For now, add the `disabled` prop as a visual indicator.

Read `suspensao-contrato-envio-card.tsx` and `suspensao-contrato-suspensao-card.tsx` and add `disabled?: boolean` to their props interface.

- [ ] **Step 3: Wire up mutations (prepare for Task 9)**

The actions callbacks (`onEnviar`, `onConcluir`, `onArquivar`) will be connected to mutations in Task 9. For now, they can be optional props that log to console. Update the detail tab:

```typescript
<SuspensaoContratoActions
  status={suspensaoContrato.f_status}
  onEnviar={() => console.log("TODO: mutation Enviar")}
  onConcluir={() => console.log("TODO: mutation Concluir")}
  onArquivar={() => console.log("TODO: mutation Arquivar")}
/>
```

- [ ] **Step 4: Verify**

Run `pnpm typecheck`.

- [ ] **Step 5: Commit**

```bash
git add src/features/cs/suspensao-de-contrato/
git commit -m "feat(suspensao): replace ActionsMenu with individual buttons + linkage rules"
```

---

## Task 9: Suspensão de Contrato — Mutations (update + create comentário)

**Files:**

- Modify: `src/features/cs/suspensao-de-contrato/suspensao-de-contrato-hooks.ts`
- Create: `src/features/cs/suspensao-de-contrato/components/sections/suspensao-contrato-comentario-drawer.tsx`
- Modify: `src/features/cs/suspensao-de-contrato/components/suspensao-contrato-detalhes-tab/suspensao-contrato-detalhes-tab.tsx`

- [ ] **Step 1: Add `useUpdateSuspensaoContrato` mutation**

In `src/features/cs/suspensao-de-contrato/suspensao-de-contrato-hooks.ts`, add after the existing hooks:

```typescript
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useUpdateSuspensaoContrato() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: number;
      data: Record<string, unknown>;
    }) => {
      return nocobaseRepository.update("t_suspensao_contrato", id, data);
    },
    onSuccess: (_data, variables) => {
      toast.success("Atualizado com sucesso");
      queryClient.invalidateQueries({
        queryKey: ["suspensao-contrato", variables.id],
      });
      queryClient.invalidateQueries({ queryKey: ["suspensao-contrato"] });
    },
    onError: (error) => {
      toast.error(
        `Erro ao atualizar: ${error instanceof Error ? error.message : "desconhecido"}`,
      );
    },
  });
}
```

- [ ] **Step 2: Add `useCreateSuspensaoComentario` mutation**

Add in the same file:

```typescript
export function useCreateSuspensaoComentario(suspensaoId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { f_comentario: string }) => {
      return nocobaseRepository.create(
        `t_suspensao_contrato/${suspensaoId}/f_comentarios`,
        data,
      );
    },
    onSuccess: () => {
      toast.success("Comentário adicionado");
      queryClient.invalidateQueries({
        queryKey: ["suspensao-contrato", suspensaoId],
      });
    },
    onError: (error) => {
      toast.error(
        `Erro ao adicionar comentário: ${error instanceof Error ? error.message : "desconhecido"}`,
      );
    },
  });
}
```

- [ ] **Step 3: Create comentário creation drawer**

Create `src/features/cs/suspensao-de-contrato/components/sections/suspensao-contrato-comentario-drawer.tsx`:

```typescript
import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "#/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "#/components/ui/sheet";
import { Textarea } from "#/components/ui/textarea";
import { Label } from "#/components/ui/label";
import { useCreateSuspensaoComentario } from "#/features/cs/suspensao-de-contrato/suspensao-de-contrato-hooks";

interface SuspensaoContratoComentarioDrawerProps {
  suspensaoId: number;
}

export function SuspensaoContratoComentarioDrawer({
  suspensaoId,
}: SuspensaoContratoComentarioDrawerProps) {
  const [open, setOpen] = useState(false);
  const [comentario, setComentario] = useState("");
  const mutation = useCreateSuspensaoComentario(suspensaoId);

  const handleSubmit = () => {
    if (!comentario.trim()) return;
    mutation.mutate(
      { f_comentario: comentario.trim() },
      { onSuccess: () => { setComentario(""); setOpen(false); } }
    );
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm">
          <Plus className="size-4 mr-2" />
          Adicionar Comentário
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Adicionar Comentário</SheetTitle>
          <SheetDescription>
            Registre uma observação para esta suspensão de contrato
          </SheetDescription>
        </SheetHeader>
        <div className="mt-4">
          <Label htmlFor="comentario">Comentário</Label>
          <Textarea
            id="comentario"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            rows={5}
            placeholder="Digite seu comentário..."
          />
        </div>
        <SheetFooter className="mt-4">
          <Button onClick={handleSubmit} disabled={mutation.isPending || !comentario.trim()}>
            {mutation.isPending ? "Salvando..." : "Salvar"}
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
```

- [ ] **Step 4: Wire mutations into detail tab**

Modify `src/features/cs/suspensao-de-contrato/components/suspensao-contrato-detalhes-tab/suspensao-contrato-detalhes-tab.tsx`:

Import and use `useUpdateSuspensaoContrato`:

```typescript
import { useUpdateSuspensaoContrato } from "#/features/cs/suspensao-de-contrato/suspensao-de-contrato-hooks";
import { SuspensaoContratoComentarioDrawer } from "../sections/suspensao-contrato-comentario-drawer";

const updateMutation = useUpdateSuspensaoContrato();
```

Replace the console.log stubs with real mutation calls:

```typescript
<SuspensaoContratoActions
  status={suspensaoContrato.f_status}
  onEnviar={() => updateMutation.mutate({ id: suspensaoContrato.id, data: { f_status: "1" } })}
  onConcluir={() => updateMutation.mutate({ id: suspensaoContrato.id, data: { f_status: "3" } })}
  onArquivar={() => updateMutation.mutate({ id: suspensaoContrato.id, data: { f_status: "4" } })}
  isLoading={updateMutation.isPending}
/>
```

Add the comentário drawer button next to the CommentsList:

```typescript
<div className="flex items-center justify-between">
  <h3 className="text-sm font-medium">Comentários</h3>
  <SuspensaoContratoComentarioDrawer suspensaoId={suspensaoContrato.id} />
</div>
<CommentsList
  comments={suspensaoContrato.f_comentarios}
  title=""
  description="Observações registradas"
/>
```

- [ ] **Step 5: Verify**

Run `pnpm typecheck`.

- [ ] **Step 6: Commit**

```bash
git add src/features/cs/suspensao-de-contrato/
git commit -m "feat(suspensao): add update + create comentario mutations with drawer"
```

---

## Task 10: Suspensão de Contrato — Header markdown + Seção Contrato/Link

**Files:**

- Modify: `src/features/cs/suspensao-de-contrato/components/suspensao-contrato-detalhes-tab/suspensao-contrato-summary-card.tsx`
- Create: `src/features/cs/suspensao-de-contrato/components/suspensao-contrato-detalhes-tab/suspensao-contrato-contrato-link-card.tsx`
- Modify: `src/features/cs/suspensao-de-contrato/components/suspensao-contrato-detalhes-tab/suspensao-contrato-detalhes-tab.tsx`

- [ ] **Step 1: Update SummaryCard subtitle to match NocoBase format**

The NocoBase header markdown is: `<h2>SUSPENSÃO DE CONTRATO (ID {f_id_contrato}) - {f_titulo}</h2>`

The current SummaryCard already shows title as `f_titulo` and subtitle as `Suspensão de Contrato — ID Contrato {id}`. Update to match the NocoBase format more closely.

In `suspensao-contrato-summary-card.tsx`, change the subtitle:

```typescript
subtitle={`SUSPENSÃO DE CONTRATO (ID ${suspensaoContrato.f_id_contrato}) — ${suspensaoContrato.f_titulo || "—"}`}
```

- [ ] **Step 2: Create Contrato e Link card**

Create `src/features/cs/suspensao-de-contrato/components/suspensao-contrato-detalhes-tab/suspensao-contrato-contrato-link-card.tsx`:

```typescript
import { FileText, Link2 } from "lucide-react";
import { DetailField } from "#/components/detail-field";
import { DetailSection } from "#/components/detail-section";
import type { SuspensaoContratoWithRelations } from "#/features/cs/suspensao-de-contrato/suspensao-de-contrato-types";

interface SuspensaoContratoContratoLinkCardProps {
  suspensaoContrato: SuspensaoContratoWithRelations;
}

export function SuspensaoContratoContratoLinkCard({
  suspensaoContrato,
}: SuspensaoContratoContratoLinkCardProps) {
  const linkAssinatura = suspensaoContrato.f_link_assinatura as string | undefined;
  const contratos = suspensaoContrato.f_contratos as unknown[] | undefined;

  return (
    <DetailSection
      title="Contrato e Link para Assinatura"
      description="Documento do contrato e link de verificação ZapSign"
      icon={<FileText className="size-4" />}
    >
      <div className="grid grid-cols-2 gap-4">
        <DetailField label="Contrato">
          {contratos && contratos.length > 0 ? "Contrato disponível" : "Nenhum contrato"}
        </DetailField>
        <DetailField label="Link">
          {linkAssinatura ? (
            <a
              href={linkAssinatura}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary underline"
            >
              <Link2 className="size-3" />
              Verificar assinatura
            </a>
          ) : (
            "—"
          )}
        </DetailField>
      </div>
    </DetailSection>
  );
}
```

- [ ] **Step 3: Add card + f_id_contrato field to detail tab**

In `suspensao-contrato-detalhes-tab.tsx`, add the new card to the layout:

```typescript
import { SuspensaoContratoContratoLinkCard } from "./suspensao-contrato-contrato-link-card";
```

And add it after the `EnvioCard` in the right column:

```typescript
<EnvioCard suspensaoContrato={suspensaoContrato} />
<SuspensaoContratoContratoLinkCard suspensaoContrato={suspensaoContrato} />
```

For the `f_id_contrato` field in the form: the `SummaryCard` already shows it in metrics. If you want it in the DadosClienteCard too, read `suspensao-contrato-dados-cliente-card.tsx` and add `f_id_contrato` as a `DetailField`.

- [ ] **Step 4: Verify**

Run `pnpm typecheck`.

- [ ] **Step 5: Commit**

```bash
git add src/features/cs/suspensao-de-contrato/
git commit -m "feat(suspensao): add header markdown format + Contrato e Link section"
```

---

## Task 11: Troca de Titularidade — Detail editável + Layout 2 colunas

**Files:**

- Modify: `src/pages/cs/troca-de-titularidade/troca-de-titularidade-detail.tsx`
- Create: `src/features/cs/troca-titularidade/components/sections/titularidade-edit-form.tsx`
- Create: `src/features/cs/troca-titularidade/components/sections/titularidade-acoes-sidebar.tsx`

Context: Currently the detail page is single-column, all read-only sections stacked vertically. The crawl shows: 2-column layout (64% left form + 36% right actions/comments), with tabs (Detalhes + Anexos), and editable fields with Save button.

- [ ] **Step 1: Read existing files for understanding**

Read all files in `src/features/cs/troca-titularidade/components/sections/` and `src/pages/cs/troca-de-titularidade/troca-de-titularidade-detail.tsx`.

- [ ] **Step 2: Create the editable form component**

Create `src/features/cs/troca-titularidade/components/sections/titularidade-edit-form.tsx`:

```typescript
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "#/components/ui/button";
import { Input } from "#/components/ui/input";
import { Label } from "#/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "#/components/ui/select";
import { nocobaseRepository } from "#/repositories";
import type { CrmTrocaTitularidadeWithRelations } from "#/features/cs/troca-titularidade/troca-titularidade-hooks";
import { CRMTROCATITULARIDADE_ESTADO_LABELS, CRMTROCATITULARIDADE_COMPLEMENTO_LABELS } from "#/generated/types/nocobase/crm-troca-titularidade";

// Salvar disabled when any required field is empty
// Salvar hidden when f_substatus IN [3,6,7] AND f_status IN [3,2,20]
function isSaveHidden(troca: CrmTrocaTitularidadeWithRelations): boolean {
  const substatus = String(troca.f_substatus);
  const status = String(troca.f_status);
  return ["3", "6", "7"].includes(substatus) && ["3", "2", "20"].includes(status);
}

const schema = z.object({
  f_cedente: z.string().min(1, "Obrigatório"),
  f_cedente_documento: z.string().min(1, "Obrigatório"),
  f_cedente_responsavel_legal: z.string().min(1, "Obrigatório"),
  f_cedente_doc_resp_legal: z.string().min(1, "Obrigatório"),
  f_cedente_telefone: z.string().min(1, "Obrigatório"),
  f_cedente_email: z.string().min(1, "Obrigatório"),
  f_cessionario: z.string().min(1, "Obrigatório"),
  f_cessionario_documento: z.string().min(1, "Obrigatório"),
  f_cessionario_responsavel: z.string().min(1, "Obrigatório"),
  f_cessionario_doc_resp_legal: z.string().min(1, "Obrigatório"),
  f_cessionario_telefone: z.string().min(1, "Obrigatório"),
  f_cessionario_email: z.string().min(1, "Obrigatório"),
  f_id_contrato: z.string().min(1, "Obrigatório"),
  f_cep: z.string().min(1, "Obrigatório"),
  f_endereco: z.string().min(1, "Obrigatório"),
  f_numero: z.string().min(1, "Obrigatório"),
  f_bairro: z.string().min(1, "Obrigatório"),
  f_cidade: z.string().min(1, "Obrigatório"),
  f_estado: z.string().min(1, "Obrigatório"),
  f_complemento: z.string().min(1, "Obrigatório"),
});

type FormValues = z.infer<typeof schema>;

interface TitularidadeEditFormProps {
  trocaTitularidade: CrmTrocaTitularidadeWithRelations;
}

export function TitularidadeEditForm({ trocaTitularidade }: TitularidadeEditFormProps) {
  const queryClient = useQueryClient();
  const hidden = isSaveHidden(trocaTitularidade);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      f_cedente: trocaTitularidade.f_cedente ?? "",
      f_cedente_documento: trocaTitularidade.f_cedente_documento ?? "",
      f_cedente_responsavel_legal: trocaTitularidade.f_cedente_responsavel_legal ?? "",
      f_cedente_doc_resp_legal: trocaTitularidade.f_cedente_doc_resp_legal ?? "",
      f_cedente_telefone: trocaTitularidade.f_cedente_telefone ?? "",
      f_cedente_email: trocaTitularidade.f_cedente_email ?? "",
      f_cessionario: trocaTitularidade.f_cessionario ?? "",
      f_cessionario_documento: trocaTitularidade.f_cessionario_documento ?? "",
      f_cessionario_responsavel: trocaTitularidade.f_cessionario_responsavel ?? "",
      f_cessionario_doc_resp_legal: trocaTitularidade.f_cessionario_doc_resp_legal ?? "",
      f_cessionario_telefone: trocaTitularidade.f_cessionario_telefone ?? "",
      f_cessionario_email: trocaTitularidade.f_cessionario_email ?? "",
      f_id_contrato: trocaTitularidade.f_id_contrato ?? "",
      f_cep: trocaTitularidade.f_cep ?? "",
      f_endereco: trocaTitularidade.f_endereco ?? "",
      f_numero: trocaTitularidade.f_numero ?? "",
      f_bairro: trocaTitularidade.f_bairro ?? "",
      f_cidade: trocaTitularidade.f_cidade ?? "",
      f_estado: trocaTitularidade.f_estado ?? "",
      f_complemento: trocaTitularidade.f_complemento ?? "",
    },
  });

  const mutation = useMutation({
    mutationFn: (values: FormValues) =>
      nocobaseRepository.update("t_crm_troca_titularidade", trocaTitularidade.id, values),
    onSuccess: () => {
      toast.success("Atualizado com sucesso");
      queryClient.invalidateQueries({ queryKey: ["troca-titularidade", trocaTitularidade.id] });
    },
    onError: (error) => {
      toast.error(`Erro: ${error instanceof Error ? error.message : "desconhecido"}`);
    },
  });

  const onSubmit = (values: FormValues) => mutation.mutate(values);

  const field = (name: keyof FormValues, label: string) => (
    <div key={name}>
      <Label htmlFor={name}>{label} *</Label>
      <Input id={name} {...form.register(name)} />
    </div>
  );

  if (hidden) return null;

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      {/* Dados do Cedente */}
      <div className="space-y-4">
        <h3 className="font-semibold text-sm text-muted-foreground">Dados do Cedente</h3>
        <div className="grid grid-cols-2 gap-4">
          {field("f_cedente", "Nome")}
          {field("f_cedente_documento", "Documento")}
          {field("f_cedente_responsavel_legal", "Responsável Legal")}
          {field("f_cedente_doc_resp_legal", "Doc. Resp. Legal")}
          {field("f_cedente_telefone", "Telefone")}
          {field("f_cedente_email", "Email")}
        </div>
      </div>

      {/* Dados do Cessionário */}
      <div className="space-y-4">
        <h3 className="font-semibold text-sm text-muted-foreground">Dados do Cessionário</h3>
        <div className="grid grid-cols-2 gap-4">
          {field("f_cessionario", "Nome")}
          {field("f_cessionario_documento", "Documento")}
          {field("f_cessionario_responsavel", "Responsável")}
          {field("f_cessionario_doc_resp_legal", "Doc. Resp. Legal")}
          {field("f_cessionario_telefone", "Telefone")}
          {field("f_cessionario_email", "Email")}
        </div>
      </div>

      {/* Dados do Contrato */}
      <div className="space-y-4">
        <h3 className="font-semibold text-sm text-muted-foreground">Dados do Contrato</h3>
        {field("f_id_contrato", "Contrato ID")}
        <div className="grid grid-cols-2 gap-4">
          {field("f_cep", "CEP")}
          {field("f_endereco", "Endereço")}
          {field("f_numero", "Número")}
          {field("f_bairro", "Bairro")}
          {field("f_cidade", "Cidade")}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Estado *</Label>
            <Select
              value={form.watch("f_estado")}
              onValueChange={(v) => form.setValue("f_estado", v)}
            >
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {Object.entries(CRMTROCATITULARIDADE_ESTADO_LABELS).map(([v, l]) => (
                  <SelectItem key={v} value={v}>{l}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Complemento *</Label>
            <Select
              value={form.watch("f_complemento")}
              onValueChange={(v) => form.setValue("f_complemento", v)}
            >
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {Object.entries(CRMTROCATITULARIDADE_COMPLEMENTO_LABELS).map(([v, l]) => (
                  <SelectItem key={v} value={v}>{l}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <Button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? "Salvando..." : "Salvar"}
      </Button>
    </form>
  );
}
```

- [ ] **Step 3: Create the ações sidebar**

Create `src/features/cs/troca-titularidade/components/sections/titularidade-acoes-sidebar.tsx`:

```typescript
import { ArrowDownOutlined, Printer, Signature, Trash2, UserSwitch } from "lucide-react";
import { useState } from "react";
import { Button } from "#/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "#/components/ui/alert-dialog";
import { StatusBadge } from "#/components/badges/status-badge";
import type { CrmTrocaTitularidadeWithRelations } from "#/features/cs/troca-titularidade/troca-titularidade-hooks";
import { CRMTROCATITULARIDADE_STATUS_LABELS, CRMTROCATITULARIDADE_SUBSTATUS_LABELS } from "#/generated/types/nocobase/crm-troca-titularidade";

interface TitularidadeAcoesSidebarProps {
  trocaTitularidade: CrmTrocaTitularidadeWithRelations;
  onArquivar: () => void;
  onExcluir: () => void;
}

export function TitularidadeAcoesSidebar({
  trocaTitularidade,
  onArquivar,
  onExcluir,
}: TitularidadeAcoesSidebarProps) {
  const [dialog, setDialog] = useState<"arquivar" | "excluir" | null>(null);

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Ações</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button variant="outline" size="sm" className="w-full justify-start">
            <Printer className="size-4 mr-2" /> Imprimir Contrato
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start">
            <Signature className="size-4 mr-2" /> Enviar QualiRun
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start">
            <Signature className="size-4 mr-2" /> Enviar ZapSign
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start" disabled>
            <UserSwitch className="size-4 mr-2" /> Assumir
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start" onClick={() => setDialog("arquivar")}>
            <ArrowDownOutlined className="size-4 mr-2" /> Arquivar
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start" disabled>
            <UserSwitch className="size-4 mr-2" /> Envia para Auditoria
          </Button>
          <Button variant="destructive" size="sm" className="w-full justify-start" onClick={() => setDialog("excluir")}>
            <Trash2 className="size-4 mr-2" /> Excluir
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Informações</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <span className="text-xs text-muted-foreground">Status</span>
            <StatusBadge value={trocaTitularidade.f_status} labels={CRMTROCATITULARIDADE_STATUS_LABELS} variant="inline" />
          </div>
          <div>
            <span className="text-xs text-muted-foreground">Substatus</span>
            <StatusBadge value={trocaTitularidade.f_substatus} labels={CRMTROCATITULARIDADE_SUBSTATUS_LABELS} variant="inline" />
          </div>
          <div>
            <span className="text-xs text-muted-foreground">Vendedor</span>
            <p className="text-sm">{(trocaTitularidade.f_vendedor as any)?.nickname ?? "—"}</p>
          </div>
          {trocaTitularidade.f_link_assinatura_cedente && (
            <div>
              <span className="text-xs text-muted-foreground">Link Ass. Cedente</span>
              <a href={trocaTitularidade.f_link_assinatura_cedente} target="_blank" rel="noopener noreferrer" className="block text-sm text-primary underline truncate">
                Abrir
              </a>
            </div>
          )}
          {trocaTitularidade.f_link_assinatura_cessionario && (
            <div>
              <span className="text-xs text-muted-foreground">Link Ass. Cessionário</span>
              <a href={trocaTitularidade.f_link_assinatura_cessionario} target="_blank" rel="noopener noreferrer" className="block text-sm text-primary underline truncate">
                Abrir
              </a>
            </div>
          )}
        </CardContent>
      </Card>

      <AlertDialog open={dialog === "arquivar"} onOpenChange={(o) => !o && setDialog(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Arquivar</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja arquivar a troca de titularidade?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={() => { onArquivar(); setDialog(null); }}>Confirmar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={dialog === "excluir"} onOpenChange={(o) => !o && setDialog(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete record</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete it?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={() => { onExcluir(); setDialog(null); }}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
```

- [ ] **Step 4: Refactor detail page to 2-column layout with tabs**

Modify `src/pages/cs/troca-de-titularidade/troca-de-titularidade-detail.tsx`:

Replace the single-column layout with a PageLayout with tabs:

```typescript
import { Database, FilePlus } from "lucide-react";
import { TitularidadeEditForm } from "#/features/cs/troca-titularidade/components/sections/titularidade-edit-form";
import { TitularidadeAcoesSidebar } from "#/features/cs/troca-titularidade/components/sections/titularidade-acoes-sidebar";

// In the return:
<PageLayout
  title={title ?? "Transferência de Titularidade"}
  prefixElement={<BackButton fallbackTo={routePaths.cs_troca_de_titularidade} />}
  tabs={[
    { value: "detalhes", label: "Detalhes", icon: <Database className="size-4" /> },
    { value: "anexos", label: "Anexos", icon: <FilePlus className="size-4" /> },
  ]}
  defaultTab="detalhes"
>
  <TabsContent value="detalhes">
    {isLoading ? <TransferenciaTitularidadeDetailSkeleton /> : transferencia ? (
      <div className="flex flex-col gap-6">
        <TransferenciaTitularidadeSummaryCard transferencia={transferencia} />
        <div className="flex flex-col lg:grid lg:grid-cols-[64%_36%] gap-6">
          <TitularidadeEditForm trocaTitularidade={transferencia} />
          <TitularidadeAcoesSidebar
            trocaTitularidade={transferencia}
            onArquivar={() => console.log("TODO: arquivar")}
            onExcluir={() => console.log("TODO: excluir")}
          />
        </div>
      </div>
    ) : null}
  </TabsContent>
  <TabsContent value="anexos">
    {/* Task 13 will implement this */}
    <Card><CardContent className="p-6">Aba Anexos — será implementada na Task 13</CardContent></Card>
  </TabsContent>
</PageLayout>
```

- [ ] **Step 5: Verify**

Run `pnpm typecheck`.

- [ ] **Step 6: Commit**

```bash
git add src/pages/cs/troca-de-titularidade/ src/features/cs/troca-titularidade/components/sections/
git commit -m "feat(titularidade): add editable form + 2-col layout + ações sidebar with dialogs"
```

---

## Task 12: Troca de Titularidade — Ações mutations + Wire up

**Files:**

- Modify: `src/pages/cs/troca-de-titularidade/troca-de-titularidade-detail.tsx`

Now that the sidebar is created and the mutations exist in the hooks, wire them up.

- [ ] **Step 1: Add arquivar and excluir mutations**

In `src/features/cs/troca-titularidade/troca-titularidade-hooks.ts`, add (if not already present):

```typescript
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useArquivarTrocaTitularidade() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) =>
      nocobaseRepository.update("t_crm_troca_titularidade", id, {
        f_status: "9",
      }),
    onSuccess: (_data, id) => {
      toast.success("Arquivado com sucesso");
      queryClient.invalidateQueries({ queryKey: ["troca-titularidade"] });
      queryClient.invalidateQueries({ queryKey: ["troca-titularidade", id] });
    },
    onError: (error) =>
      toast.error(
        `Erro: ${error instanceof Error ? error.message : "desconhecido"}`,
      ),
  });
}

export function useExcluirTrocaTitularidade() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) =>
      nocobaseRepository.delete("t_crm_troca_titularidade", id),
    onSuccess: () => {
      toast.success("Excluído com sucesso");
      queryClient.invalidateQueries({ queryKey: ["troca-titularidade"] });
    },
    onError: (error) =>
      toast.error(
        `Erro: ${error instanceof Error ? error.message : "desconhecido"}`,
      ),
  });
}
```

- [ ] **Step 2: Wire up in detail page**

In `troca-de-titularidade-detail.tsx`, import and use the mutations:

```typescript
import {
  useArquivarTrocaTitularidade,
  useExcluirTrocaTitularidade,
} from "#/features/cs/troca-titularidade/troca-titularidade-hooks";

const arquivarMutation = useArquivarTrocaTitularidade();
const excluirMutation = useExcluirTrocaTitularidade();
```

Replace the stubs:

```typescript
<TitularidadeAcoesSidebar
  trocaTitularidade={transferencia}
  onArquivar={() => arquivarMutation.mutate(transferencia.id)}
  onExcluir={() => excluirMutation.mutate(transferencia.id)}
/>
```

- [ ] **Step 3: Verify**

Run `pnpm typecheck`.

- [ ] **Step 4: Commit**

```bash
git add src/features/cs/troca-titularidade/troca-titularidade-hooks.ts src/pages/cs/troca-de-titularidade/troca-de-titularidade-detail.tsx
git commit -m "feat(titularidade): wire up archive + delete mutations"
```

---

## Task 13: Troca de Titularidade — Aba Anexos + Comentários com criação

**Files:**

- Create: `src/features/cs/troca-titularidade/components/sections/titularidade-anexos-tab.tsx`
- Create: `src/features/cs/troca-titularidade/components/sections/titularidade-comentario-drawer.tsx`
- Modify: `src/pages/cs/troca-de-titularidade/troca-de-titularidade-detail.tsx`

- [ ] **Step 1: Create Anexos tab component**

Create `src/features/cs/troca-titularidade/components/sections/titularidade-anexos-tab.tsx`:

```typescript
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card";

export function TitularidadeAnexosTab() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Documentos necessários para Troca de Titularidade</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Pessoa Física obrigatório:</h4>
              <ul className="list-disc pl-6 text-sm text-muted-foreground">
                <li>Nenhum documento é necessário.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Pessoa Jurídica obrigatório:</h4>
              <ul className="list-disc pl-6 text-sm text-muted-foreground">
                <li>Contrato Social;</li>
                <li>Procuração (Caso não seja o administrador do contrato a assinar);</li>
                <li>Cartão de IE caso não seja isento.</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Anexos</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Upload de anexos disponível via coleção t_anexos_troca_titularidade.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
```

- [ ] **Step 2: Create comentário creation drawer**

Create `src/features/cs/troca-titularidade/components/sections/titularidade-comentario-drawer.tsx`:

```typescript
import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "#/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "#/components/ui/sheet";
import { Textarea } from "#/components/ui/textarea";
import { Label } from "#/components/ui/label";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { nocobaseRepository } from "#/repositories";
import { toast } from "sonner";

interface TitularidadeComentarioDrawerProps {
  trocaTitularidadeId: number;
}

export function TitularidadeComentarioDrawer({
  trocaTitularidadeId,
}: TitularidadeComentarioDrawerProps) {
  const [open, setOpen] = useState(false);
  const [comentario, setComentario] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: { f_comentario: string; f_comentario_troca_de_titularidade: number }) =>
      nocobaseRepository.create("t_trocasdetitularidade_comentarios", data),
    onSuccess: () => {
      toast.success("Comentário adicionado");
      queryClient.invalidateQueries({ queryKey: ["troca-titularidade", trocaTitularidadeId] });
      setComentario("");
      setOpen(false);
    },
    onError: (error) => toast.error(`Erro: ${error instanceof Error ? error.message : "desconhecido"}`),
  });

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm">
          <Plus className="size-4 mr-2" />
          Adicionar Comentário
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Adicionar Comentário</SheetTitle>
          <SheetDescription>Registre uma observação</SheetDescription>
        </SheetHeader>
        <div className="mt-4">
          <Label htmlFor="comentario">Comentário</Label>
          <Textarea id="comentario" value={comentario} onChange={(e) => setComentario(e.target.value)} rows={5} />
        </div>
        <SheetFooter className="mt-4">
          <Button
            onClick={() => mutation.mutate({ f_comentario: comentario, f_comentario_troca_de_titularidade: trocaTitularidadeId })}
            disabled={mutation.isPending || !comentario.trim()}
          >
            Salvar
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
```

- [ ] **Step 3: Wire into detail page**

In `troca-de-titularidade-detail.tsx`, update the `TabsContent value="anexos"` to use `TitularidadeAnexosTab`. Add the comentário drawer next to the comments section in the sidebar.

- [ ] **Step 4: Verify**

Run `pnpm typecheck`.

- [ ] **Step 5: Commit**

```bash
git add src/features/cs/troca-titularidade/components/sections/ src/pages/cs/troca-de-titularidade/
git commit -m "feat(titularidade): add Anexos tab + comentario creation drawer"
```

---

## Task 14: Troca de Titularidade — Regras restantes e validações

**Files:**

- Modify: `src/features/cs/contratos/contrato-detalhes/actions/contrato-detalhes-actions.tsx`
- Modify: `src/features/cs/contratos/contrato-detalhes/actions/transferencia-titularidade/transferencia-titularidade-sheet.tsx`
- Modify: `src/features/cs/troca-titularidade/components/sections/titularidade-edit-form.tsx`

Context: Remaining items from the checklist:

- Rule: "Transferir" disabled when `contrato.status IN ["I","N","D"]`
- Validation: "números apenas" on `f_*_doc_resp_legal` fields
- Credit check linkage rule on create submit

- [ ] **Step 1: Verify contrato inativo rule**

Read `src/features/cs/contratos/contrato-detalhes/actions/contrato-detalhes-actions.tsx`. Check if `getDisabledContratoActions` already checks for `status IN ["I","N","D"]`. If not, add the check. The crawl report already confirmed that the "Transferir Titularidade" button is disabled via `getDisabledContratoActions`.

- [ ] **Step 2: Add "números apenas" validation to edit form**

In `src/features/cs/troca-titularidade/components/sections/titularidade-edit-form.tsx`, update the `f_cedente_doc_resp_legal` and `f_cessionario_doc_resp_legal` fields in the Zod schema to validate numeric:

```typescript
f_cedente_doc_resp_legal: z.string().regex(/^\d*$/, "Apenas números").min(1, "Obrigatório"),
f_cessionario_doc_resp_legal: z.string().regex(/^\d*$/, "Apenas números").min(1, "Obrigatório"),
```

Add `maxLength` or `pattern` props to the corresponding Input components.

- [ ] **Step 3: Verify credit check on create sheet**

Read `src/features/cs/contratos/contrato-detalhes/actions/transferencia-titularidade/transferencia-titularidade-sheet.tsx`. Verify that the submit button is disabled when `f_pessoa_pf.f_credito == "9"`. The crawl report says this is already implemented — just verify.

- [ ] **Step 4: Verify**

Run `pnpm typecheck`.

- [ ] **Step 5: Commit**

```bash
git add src/features/cs/troca-titularidade/
git commit -m "feat(titularidade): add numeric validation on doc_resp_legal fields + verify credit check"
```

---

## Final Verification

After all tasks are complete, run:

```bash
pnpm typecheck
pnpm biome:fix
```

Expected: `pnpm typecheck` passes with 0 errors. `pnpm biome:fix` applies formatting without warnings.
