# CRM ATplus — Ferramentas de Desenvolvimento

Sistema de CRM baseado em **NocoBase** com frontend moderno em React.

## Stack Principal

| Categoria         | Tecnologia           | Versão |
| ----------------- | -------------------- | ------ |
| **Framework**     | React                | 19.x   |
| **Linguagem**     | TypeScript           | 6.x    |
| **Build Tool**    | Vite                 | 8.x    |
| **Roteamento**    | React Router         | 7.x    |
| **Estilização**   | Tailwind CSS         | 4.x    |
| **UI Components** | shadcn/ui + Radix UI | —      |
| **Backend**       | NocoBase SDK         | 2.x    |

## Gerenciamento de Pacotes

- **pnpm** — Gerenciador de dependências (obrigatório)

## Qualidade de Código

| Ferramenta              | Finalidade                       | Comando          |
| ----------------------- | -------------------------------- | ---------------- |
| **TypeScript**          | Type checking                    | `pnpm typecheck` |
| **Biome**               | Linting + Formatação             | `pnpm biome:fix` |
| **knip**                | Detecção de código não utilizado | `pnpm knip`      |
| **Husky + lint-staged** | Git hooks pré-commit             | Automático       |

## Testes

| Ferramenta          | Finalidade                       |
| ------------------- | -------------------------------- |
| **Vitest**          | Testes unitários e de integração |
| **Testing Library** | Testes de componentes React      |

## Comandos Principais

```bash
pnpm dev              # Inicia servidor de desenvolvimento
pnpm build            # Build de produção
pnpm test             # Executa testes
pnpm typecheck        # Verificação de tipos
pnpm biome:fix        # Formata e corrige código
pnpm generate-types   # Gera tipos TypeScript do NocoBase
```

## Extensões Recomendadas (VS Code)

- ESLint / Biome
- TypeScript
- Tailwind CSS IntelliSense
- React Developer Tools
