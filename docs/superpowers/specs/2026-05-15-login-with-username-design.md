# Login com E-mail ou Usuário

**Data:** 2026-05-15
**Status:** Aprovado

## Contexto

O login atual aceita apenas e-mail + senha. Usuários com username cadastrado no NocoBase não conseguem logar sem saber o e-mail associado. Testado e confirmado: o NocoBase aceita o parâmetro genérico `account` nativamente em `auth:signIn` e `auth:lostPassword`, dispensando qualquer lógica de dispatch no frontend.

## Decisão de Design

Campo único "E-mail ou usuário" que usa o parâmetro `account` do NocoBase diretamente — sem dispatch, sem lookup, sem heurística de `@`. O backend resolve se o valor é e-mail ou username.

## Mudanças

### 1. Types (`src/features/auth/utils/types.ts`)

- `LoginCredentials`: campo `email` vira `account`
  ```typescript
  // Antes
  {
    email: string;
    password: string;
  }
  // Depois
  {
    account: string;
    password: string;
  }
  ```
- `ResetPasswordRequest`: campo `email` vira `account`

### 2. Login Form (`src/features/auth/components/login-form.tsx`)

- Campo: `account` (não `email`)
- Label: "E-mail ou usuário"
- Placeholder: "seu@email.com ou nome de usuário"
- Input: `type="text"` (não `type="email"`)
- `autoComplete="username"` (padrão HTML para campos de login genéricos)
- Zod schema: `z.string().min(1, "Obrigatório")` — sem validação de formato
- Log de signIn: loga `account` em vez de `email`

### 3. Auth Service (`src/features/auth/utils/service.ts`)

- `signIn`: passa `{ account, password }` direto ao repository — sem conversão
- `requestPasswordReset`: passa `{ account }` direto ao repository — sem conversão

### 4. NocoBase Repository (`src/repositories/nocobase-repository.ts`)

- `signIn`: aceita `{ account: string; password: string }` em vez de `{ email: string; password: string }`
- Envia `data: { account, password }` e header `X-Authenticator: basic`

### 5. Reset Password Page (`src/pages/auth/reset-password.tsx`)

- Campo: `account` (não `email`)
- Label: "E-mail ou usuário"
- Placeholder: "seu@email.com ou nome de usuário"
- Input: `type="text"`
- Zod schema: `z.string().min(1, "Obrigatório")`
- Mensagem de sucesso: "Se a conta estiver cadastrada, você receberá as instruções para redefinir sua senha." (era "Se o e-mail...")

### 6. Reset Password Route (`src/routes/auth/reset-password/index.tsx`)

- Descrição do `GuestLayout`: "Informe seu e-mail ou usuário para receber as instruções"

## O que NÃO muda

- Guards (`requireAuth`, `requireGuest`)
- Auth store
- `checkAuth`, `signOut`
- Fluxo de reset-confirm (usa token, não e-mail)
- Perfil de usuário
- Tipos `AuthUser`, `authResponseSchema`

## Arquivos Modificados

| Arquivo                                       | Mudança                                                    |
| --------------------------------------------- | ---------------------------------------------------------- |
| `src/features/auth/utils/types.ts`            | `LoginCredentials.account`, `ResetPasswordRequest.account` |
| `src/features/auth/components/login-form.tsx` | Campo genérico                                             |
| `src/features/auth/utils/service.ts`          | Passa `account` direto                                     |
| `src/repositories/nocobase-repository.ts`     | `signIn` aceita `account`                                  |
| `src/pages/auth/reset-password.tsx`           | Campo genérico                                             |
| `src/routes/auth/reset-password/index.tsx`    | Descrição atualizada                                       |

## Segurança

- Mensagem genérica de sucesso no reset (não vaza se username/e-mail existe)
- Nenhum lookup de username no cliente — o NocoBase resolve server-side
- Sem mudança em guards ou token handling
