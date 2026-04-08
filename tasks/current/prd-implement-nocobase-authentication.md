# PRD: Implement NocoBase Authentication

## Introduction

Adicionar autenticação e sessão ao CRM ATPlus usando o NocoBase como fonte única de autenticação e autorização. O objetivo é permitir login com credenciais reais do NocoBase sem expor o token no navegador, centralizando leitura de sessão e chamadas autenticadas no servidor do app.

Hoje o projeto ainda está em estágio inicial: existe apenas a rota `/`, `src/modules` ainda não possui domínio de autenticação, não há fluxo de autenticação implementado e `src/env.ts` ainda não expõe o segredo de sessão necessário. O PRD abaixo transforma as decisões já registradas na task em entregas pequenas, executáveis e testáveis.

## Goals

- Permitir login com `email` e `senha` usando `POST /auth:signIn` do NocoBase.
- Persistir a sessão do app em cookie `HttpOnly` seguro, sem usar `localStorage` ou `sessionStorage` para o token.
- Impedir acesso a rotas privadas antes do render usando `beforeLoad`.
- Validar a sessão no servidor com `GET /auth:check` e limpar o cookie quando o token não for mais válido.
- Expor à UI apenas o usuário autenticado normalizado e suas roles, sem mover a autorização real para o frontend.
- Preparar a base para futuras chamadas autenticadas server-only ao NocoBase.

## User Stories

### US-001: Expandir configuração de ambiente para autenticação

**Description:** As a developer, I want validated auth environment variables so that the authentication flow can run with explicit and safe configuration.

**Group:** A

**Acceptance Criteria:**

- [ ] `src/env.ts` passa a validar pelo menos `AUTH_SESSION_SECRET` no servidor.
- [ ] A configuração existente de `CRM_NOCOBASE_URL` continua compatível.
- [ ] O fluxo de autenticação do usuário não depende de `CRM_NOCOBASE_TOKEN`.
- [ ] Arquivos de teste/mocks de ambiente e `.env.example` são ajustados para refletir a nova configuração.
- [ ] `pnpm exec tsc --noEmit` e `pnpm exec biome check .` passam.

### US-002: Definir contratos de autenticação do app

**Description:** As a developer, I want normalized schemas and types for auth so that all layers use the same payload contracts.

**Group:** A

**Acceptance Criteria:**

- [ ] Criar `src/modules/auth/auth.schemas.ts` com schemas Zod para login, sessão e usuário autenticado.
- [ ] Criar `src/modules/auth/auth.types.ts` com tipos normalizados para usuário, sessão e roles.
- [ ] O usuário autenticado mínimo inclui `id`, `email`, `username`, `nickname` e `roles`.
- [ ] `roles` é exposto para a UI como `string[]` normalizado.
- [ ] Existem helpers explícitos para leitura de roles no app, como `hasRole` e/ou `hasSnippet`.
- [ ] `pnpm exec tsc --noEmit` e `pnpm exec biome check .` passam.

### US-003: Implementar client server-only para autenticação NocoBase

**Description:** As a developer, I want a server-only auth client so that sign-in, session validation, and sign-out use a single integration boundary.

**Group:** B

**Acceptance Criteria:**

- [ ] Criar `src/modules/auth/auth-api.server.ts` para encapsular `POST /auth:signIn`, `GET /auth:check` e `POST /auth:signOut`.
- [ ] O client HTTP de autenticação usa `axios` em contexto server-only.
- [ ] O login usa `X-Authenticator: basic`.
- [ ] O identificador de login usado pelo app é `email`.
- [ ] Erros de autenticação são normalizados para consumo seguro pelas server functions.
- [ ] Respostas de autenticação sensíveis são tratadas como `no-store`.
- [ ] A implementação não depende de persistência automática de token no browser.
- [ ] `pnpm exec tsc --noEmit` e `pnpm exec biome check .` passam.

### US-004: Implementar serviço de sessão por cookie HttpOnly

**Description:** As a developer, I want a dedicated session service so that the app can encrypt, sign, read, and clear the `crm_session` cookie consistently.

**Group:** B

**Acceptance Criteria:**

- [ ] Criar `src/modules/auth/auth-session.server.ts`.
- [ ] O cookie de sessão se chama `crm_session`.
- [ ] O token retornado pelo NocoBase é cifrado e assinado antes de ser salvo.
- [ ] O cookie usa `HttpOnly`, `SameSite=Lax` e `Path=/`, com `Secure` obrigatório em produção e compatível com HTTP em desenvolvimento local.
- [ ] A expiração do cookie é alinhada ao tempo de vida do token do NocoBase quando disponível, com fallback explícito de sessão de 8 horas quando esse TTL não vier na resposta.
- [ ] Existe função dedicada para remover imediatamente o cookie.
- [ ] `pnpm exec tsc --noEmit` e `pnpm exec biome check .` passam.

### US-005: Implementar server functions de autenticação

**Description:** As a developer, I want server functions for sign-in, sign-out, and current user so that the UI can authenticate without acessar token sensível.

**Group:** C

**Acceptance Criteria:**

- [ ] Criar `src/modules/auth/auth.functions.ts` com `signIn`, `signOut` e `getCurrentUser`.
- [ ] `signIn` chama o client NocoBase, cria o cookie e retorna usuário normalizado.
- [ ] `getCurrentUser` lê o cookie, valida com `GET /auth:check` e remove o cookie em caso de `401`.
- [ ] `signOut` tenta `POST /auth:signOut` e sempre limpa o cookie local.
- [ ] Mensagens de erro de login enviadas para a UI são genéricas.
- [ ] O fluxo valida `Origin` e `Host` para `POST` state-changing, quando aplicável ao padrão usado no app.
- [ ] `signIn` e `signOut` invalidam o estado local necessário do app, incluindo contexto do router e dados de sessão em cache quando aplicável.
- [ ] `pnpm exec tsc --noEmit` e `pnpm exec biome check .` passam.

### US-006: Criar wrapper autenticado server-only para chamadas NocoBase

**Description:** As a developer, I want a server-only repository wrapper so that future chamadas autenticadas ao NocoBase reutilizem a sessão do usuário com segurança.

**Group:** C

**Acceptance Criteria:**

- [ ] Criar `src/modules/repository/nocobase/server-client.ts`.
- [ ] O wrapper utiliza o token da sessão do usuário lido no servidor, e não variáveis de automação.
- [ ] O wrapper reutiliza `axios` em contexto server-only para chamadas autenticadas ao NocoBase.
- [ ] O wrapper é utilizável por futuras features protegidas sem depender do browser para montar headers sensíveis.
- [ ] O contrato deixa claro que autorização real continua no backend do NocoBase.
- [ ] `pnpm exec tsc --noEmit` e `pnpm exec biome check .` passam.

### US-007: Proteger navegação com layout autenticado e contexto do router

**Description:** As a user, I want protected routes to redirect before render so that I never see authenticated screens without a valid session.

**Group:** D

**Acceptance Criteria:**

- [ ] Criar `src/routes/_authenticated.tsx` como layout pathless protegido.
- [ ] O layout usa `beforeLoad` para chamar `getCurrentUser`.
- [ ] O router context é expandido para disponibilizar o usuário autenticado quando necessário.
- [ ] Requisições sem sessão válida redirecionam para `/login` antes do render.
- [ ] O parâmetro `redirect` é validado para evitar open redirect.
- [ ] `pnpm exec tsc --noEmit` e `pnpm exec biome check .` passam.
- [ ] Verify in browser using dev-browser skill.

### US-008: Implementar rota pública de login e ação de logout

**Description:** As a user, I want a login screen and logout action so that I can enter and leave the authenticated area safely.

**Group:** D

**Acceptance Criteria:**

- [ ] Criar `src/routes/login.tsx` como rota pública.
- [ ] A tela coleta `email` e `senha` e envia para `signIn`.
- [ ] Em sucesso, o usuário é redirecionado para a rota autenticada inicial ou `redirect` válido.
- [ ] Ao acessar `/login` com sessão já válida, o usuário é redirecionado para a área autenticada inicial ou `redirect` válido.
- [ ] Em falha, a UI mostra apenas mensagem genérica.
- [ ] Existe uma ação de logout que chama `signOut` e invalida o estado local.
- [ ] `pnpm exec tsc --noEmit` e `pnpm exec biome check .` passam.
- [ ] Verify in browser using dev-browser skill.

### US-009: Criar bootstrap da área autenticada

**Description:** As an authenticated user, I want an initial protected page so that the app can confirm the session and expose my user roles to the UI.

**Group:** E

**Acceptance Criteria:**

- [ ] Criar `src/routes/_authenticated/index.tsx`.
- [ ] A página consegue consumir o usuário autenticado já validado pelo layout protegido.
- [ ] A UI pode ler `roles` do usuário autenticado para navegação e experiência.
- [ ] A implementação não usa roles da UI como autorização backend.
- [ ] `pnpm exec tsc --noEmit` e `pnpm exec biome check .` passam.
- [ ] Verify in browser using dev-browser skill.

### US-010: Cobrir autenticação com testes unitários e de integração

**Description:** As a developer, I want automated tests for the auth flow so that regressions in session handling and route protection are caught early.

**Group:** F

**Acceptance Criteria:**

- [ ] Existem testes para schemas/tipos críticos da autenticação.
- [ ] Existem testes para leitura, escrita e remoção do cookie de sessão.
- [ ] Existem testes para `getCurrentUser` limpando a sessão quando `auth:check` retorna `401`.
- [ ] Existem testes cobrindo redirecionamento de rota protegida sem sessão válida.
- [ ] Os mocks de ambiente e HTTP não dependem de token persistido no browser.
- [ ] `pnpm test` passa.

## Functional Requirements

1. FR-1: O sistema deve autenticar usuários com `POST /auth:signIn` do NocoBase usando `X-Authenticator: basic`.
2. FR-2: O identificador de login do app deve ser `email`.
3. FR-3: O sistema deve salvar a sessão do app em cookie `crm_session` com `HttpOnly`, `SameSite=Lax` e `Path=/`.
4. FR-4: O token retornado pelo NocoBase deve ser cifrado e assinado antes de ser persistido no cookie.
5. FR-5: O sistema não deve armazenar o token do NocoBase em `localStorage` nem em `sessionStorage`.
6. FR-6: O sistema deve validar a sessão atual com `GET /auth:check` executado no servidor.
7. FR-7: Quando `auth:check` retornar `401` ou token inválido, o sistema deve remover o cookie local e tratar a sessão como expirada.
8. FR-8: O logout deve chamar `POST /auth:signOut` no NocoBase e limpar o cookie local independentemente do resultado remoto.
9. FR-9: Todas as leituras sensíveis de sessão e chamadas autenticadas ao NocoBase devem passar pelo servidor do app.
10. FR-10: O sistema deve proteger rotas privadas com layout pathless `/_authenticated` e `beforeLoad`.
11. FR-11: Requisições para rotas privadas sem sessão válida devem redirecionar para `/login` antes do render.
12. FR-12: O sistema deve retornar à UI um usuário autenticado normalizado contendo `id`, `email`, `username`, `nickname` e `roles`.
13. FR-13: O campo `roles` exposto à UI deve ser normalizado como `string[]`.
14. FR-14: A UI pode usar roles e permissões apenas para navegação e experiência, nunca como camada final de autorização.
15. FR-15: O sistema deve validar `redirect` para impedir open redirect após login ou redirecionamentos de sessão.
16. FR-16: O sistema deve validar `Origin` e `Host` em operações `POST` state-changing executadas via server function, conforme o padrão aplicável do framework.
17. FR-17: O sistema deve responder falhas de login com mensagem genérica, sem expor detalhes internos.
18. FR-18: Respostas de autenticação e sessão devem ser marcadas com `Cache-Control: no-store`.
19. FR-19: O sistema não deve usar `CRM_NOCOBASE_TOKEN` da automação dentro do fluxo de autenticação do usuário final.
20. FR-20: O client HTTP server-only de autenticação deve usar `axios`.
21. FR-21: O cookie de sessão deve usar `Secure` obrigatoriamente em produção e ser compatível com HTTP em desenvolvimento local.
22. FR-22: Quando a resposta de autenticação não expuser TTL do token, o sistema deve aplicar fallback explícito de sessão de 8 horas.
23. FR-23: Ao acessar `/login` com sessão válida, o sistema deve redirecionar o usuário para a área autenticada inicial ou `redirect` válido.
24. FR-24: Após `signIn` e `signOut`, o sistema deve invalidar o estado local relevante de autenticação e sessão.

## Non-Goals

- Não implementar autorização própria paralela ao NocoBase.
- Não persistir dados sensíveis da sessão no navegador.
- Não construir recuperação de senha, cadastro de usuários ou MFA nesta entrega.
- Não criar tela avançada de gestão de permissões/roles.
- Não migrar todas as features futuras do CRM; esta entrega prepara o padrão para isso.

## Design Considerations

- A UI do projeto ainda é mínima, então a tela de login pode seguir o padrão visual já existente com Tailwind + shadcn/ui, sem exigir design system novo.
- A rota autenticada inicial deve servir como bootstrap simples da área logada e como ponto de verificação manual do contexto autenticado.
- Qualquer mudança visual em login, logout e rotas protegidas deve ser verificada em navegador.

## Technical Considerations

- O projeto usa TanStack Start com router file-based, SSR query integration e contexto do router criado em `src/router.tsx`.
- `src/routes/__root.tsx` hoje expõe apenas `queryClient` no contexto; o PRD pressupõe extensão controlada desse contexto para dados do usuário autenticado.
- O diretório `src/modules` já existe, mas ainda não possui um domínio de autenticação.
- `src/env.ts` hoje valida `CRM_NOCOBASE_URL`, mas ainda não valida `AUTH_SESSION_SECRET`.
- O arquivo de mock `src/_tests/mock-env.ts` ainda referencia `CRM_NOCOBASE_TOKEN`, o que conflita com a decisão de não usá-lo no login do usuário.
- A task adota `axios` como client HTTP server-only para autenticação e wrappers autenticados ao NocoBase.
- O fluxo precisa permanecer compatível com SSR e evitar leitura de sessão em componentes client-side.
- Como o repositório ainda está no começo, a divisão em histórias pequenas é importante para não introduzir imports quebrados entre camadas.

## Success Metrics

- Usuário consegue fazer login com credenciais válidas do NocoBase.
- Token do NocoBase não fica acessível no browser após autenticação.
- Rotas privadas redirecionam para `/login` antes do render quando a sessão é inválida ou inexistente.
- Logout remove a sessão local imediatamente.
- UI consegue consumir roles do usuário autenticado para navegação.
- Testes automatizados cobrem os principais cenários de sessão válida, sessão inválida e redirecionamento.

## Open Questions

- O backend do app já possui utilitário padrão para cookies/criptografia em TanStack Start ou será necessário introduzir uma nova dependência de sessão?
