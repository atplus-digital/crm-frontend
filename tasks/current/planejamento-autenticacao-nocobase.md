---
title: Planejamento de autenticação com NocoBase
description: Definições para implementar autenticação e sessão do CRM ATPlus usando o NocoBase.
---

## Decisão

- O NocoBase será a fonte única de autenticação e autorização.
- O app não armazenará JWT do NocoBase em `localStorage` nem em `sessionStorage`.
- A sessão do app será um cookie `HttpOnly` com o token do NocoBase cifrado e assinado.
- Toda leitura sensível de sessão e toda chamada autenticada ao NocoBase passarão pelo servidor.
- A UI usará roles e permissões do NocoBase apenas para navegação e experiência; a proteção real continua no backend do NocoBase.
- O client HTTP server-only de autenticação e wrappers autenticados será implementado com `axios`.

## Opção escolhida

- Fluxo: login no NocoBase via `POST /auth:signIn` com `X-Authenticator: basic`.
- Sessão: cookie `crm_session`.
- Validação de sessão: `GET /auth:check` a partir do servidor.
- Logout: `POST /auth:signOut` e limpeza imediata do cookie.
- Rotas protegidas: layout pathless `/_authenticated` com `beforeLoad`.
- Login via servidor do app, cookie `HttpOnly`, chamadas sensíveis pelo servidor.
- Client HTTP: `axios` em contexto server-only.
- Vantagem: melhor equilíbrio entre segurança, simplicidade e compatibilidade com TanStack Start.
- Desvantagem: exige camada própria de sessão.
- Status: adotar.

## Fluxo funcional

1. Usuário envia e-mail e senha na rota `/login`.
2. `signIn` é executado em `createServerFn`.
3. O servidor chama `POST /auth:signIn` no NocoBase via `axios`.
4. O servidor cifra o token retornado e grava o cookie `crm_session`.
5. O servidor retorna o usuário normalizado para a UI.
6. Rotas em `/_authenticated` executam `beforeLoad` e chamam `getCurrentUser`.
7. `getCurrentUser` lê o cookie, decifra o token e chama `GET /auth:check`.
8. Se `auth:check` responder `401`, o cookie é removido e a navegação redireciona para `/login`.
9. No logout, o servidor tenta `POST /auth:signOut`, remove o cookie e invalida o estado local.
10. Ao acessar `/login` com sessão válida, o usuário é redirecionado para a área autenticada inicial ou `redirect` válido.

## Estrutura de arquivos

```text
src/
├── modules/
│   ├── auth/
│   │   ├── auth.schemas.ts
│   │   │   Zod de login, sessão e payload do usuário
│   │   ├── auth.types.ts
│   │   │   Tipos normalizados de usuário, sessão e roles
│   │   ├── auth-session.server.ts
│   │   │   Leitura, escrita, cifra e remoção do cookie `crm_session`
│   │   ├── auth-api.server.ts
│   │   │   Client server-only com axios para `auth:signIn`, `auth:check` e `auth:signOut`
│   │   └── auth.functions.ts
│   │       Server functions `signIn`, `signOut` e `getCurrentUser`
│   └── repository/
│       └── nocobase/
│           └── server-client.ts
│               Wrapper autenticado para chamadas server-only ao NocoBase
└── routes/
    ├── login.tsx
    │   Tela pública de login
    ├── _authenticated.tsx
    │   Guarda global com `beforeLoad`
    └── _authenticated/
        └── index.tsx
            Página inicial autenticada
```

### Leitura rápida

- `modules/auth`: regra de negócio da autenticação.
- `auth-session.server.ts`: fronteira da sessão do app.
- `auth-api.server.ts`: fronteira HTTP com o NocoBase.
- `auth.functions.ts`: ponto de entrada seguro para a UI.
- `modules/repository/nocobase`: acesso server-only ao NocoBase.
- `routes/_authenticated*`: proteção de navegação e bootstrap da área logada.

## Regras de segurança

- Nunca usar `CRM_NOCOBASE_TOKEN` da automação dentro do fluxo de login do usuário.
- Criar `AUTH_SESSION_SECRET` forte e exclusiva para o app.
- Cookie com `HttpOnly`, `SameSite=Lax`, `Path=/`, `Secure` obrigatório em produção e compatível com HTTP em desenvolvimento local.
- Expiração do cookie alinhada ao tempo de vida do token do NocoBase, com fallback explícito de 8 horas quando o backend não expuser TTL.
- Validar `redirect` para impedir open redirect.
- Validar `Origin` e `Host` em `POST` state-changing feitos via server function.
- Responder erros de login com mensagem genérica.
- Aplicar `Cache-Control: no-store` em respostas de autenticação e sessão.
- Limpar cookie local ao detectar `401` ou token inválido.
- Não confiar apenas na role exposta na UI para autorizar ações.

## Decisões de modelagem

- Identificador de login: usar `email`.
- Authenticator padrão: `basic`.
- Usuário autenticado mínimo no app:
  - `id`
  - `email`
  - `username`
  - `nickname`
  - `roles`
- Estrutura de role no app:
  - normalizar `roles` como `string[]` para a UI
  - derivar helpers como `hasRole` e `hasSnippet`

## Implementação por etapas

1. Adicionar dependências de sessão, cookie e `axios`.
2. Criar módulo server-only de autenticação.
3. Implementar rota `/login` e logout.
4. Implementar `/_authenticated` com `beforeLoad`.
5. Injetar o usuário autenticado no contexto do router.
6. Migrar chamadas protegidas ao NocoBase para wrappers server-only.
7. Cobrir fluxo com testes unitários e testes de integração.

## Critérios de aceite

- Usuário consegue autenticar com credenciais do NocoBase.
- Token do NocoBase não fica acessível no browser.
- Rotas privadas redirecionam antes do render.
- Sessão inválida remove cookie e força novo login.
- UI consegue ler roles do usuário autenticado.
- `/login` redireciona usuários já autenticados para a área logada.
- Ações bloqueadas no NocoBase continuam bloqueadas mesmo se a UI tentar forçar a chamada.
