# Implement Nocobase Authentication

## Description

Implement authentication and session handling for CRM ATPlus using NocoBase as the single source of authentication and authorization, with an HttpOnly app session cookie and server-only sensitive access.

## Decided Requirements

- [ ] Use NocoBase as the single source of authentication and authorization.
- [ ] Do not store the NocoBase JWT in `localStorage` or `sessionStorage`.
- [ ] Store the app session in an encrypted and signed `crm_session` HttpOnly cookie.
- [ ] Route all sensitive session reads and authenticated NocoBase calls through the server.
- [ ] Use NocoBase roles and permissions in the UI only for navigation and UX, not as the real enforcement layer.
- [ ] Authenticate with `POST /auth:signIn` using `X-Authenticator: basic`.
- [ ] Validate sessions with server-side `GET /auth:check`.
- [ ] Log out with `POST /auth:signOut` and immediately clear the session cookie.
- [ ] Protect authenticated routes with a pathless `/_authenticated` layout and `beforeLoad`.
- [ ] Implement login through app server functions and return a normalized user payload to the UI.
- [ ] Remove the local cookie and redirect to `/login` when `auth:check` returns `401`.
- [ ] Create the auth module structure under `src/modules/auth` and the server-only NocoBase wrapper under `src/modules/repository/nocobase`.
- [ ] Add a public `/login` route, an authenticated layout route, and the authenticated home route structure.
- [ ] Keep the authenticated app user payload minimal: `id`, `email`, `username`, `nickname`, and `roles`.
- [ ] Normalize `roles` exposed to the UI as `string[]`.
- [ ] Use `email` as the login identifier and `basic` as the default authenticator.
- [ ] Use `axios` as the server-only HTTP client for authentication and authenticated NocoBase wrappers.
- [ ] Never use `CRM_NOCOBASE_TOKEN` in the end-user login flow.
- [ ] Require a strong and exclusive `AUTH_SESSION_SECRET` for the app.
- [ ] Configure the session cookie with `HttpOnly`, `SameSite=Lax`, and `Path=/`, using `Secure` in production and HTTP-compatible behavior in local development.
- [ ] Align cookie expiration with the NocoBase token lifetime, with an explicit 8-hour fallback when the backend does not expose TTL.
- [ ] Validate `redirect` values to prevent open redirect.
- [ ] Redirect authenticated users away from `/login` to the authenticated home or a valid `redirect`.
- [ ] Validate `Origin` and `Host` on state-changing `POST` server function requests.
- [ ] Return generic login error messages.
- [ ] Apply `Cache-Control: no-store` to authentication and session responses.
- [ ] Invalidate relevant local auth/session state after `signIn` and `signOut`.
- [ ] Do not trust UI-exposed roles alone for authorization.
- [ ] Update env examples and mocks to reflect the new auth configuration.
- [ ] Cover the flow with unit and integration tests.
- [ ] Consider the task done when login works with NocoBase credentials, private routes redirect before render, invalid sessions clear the cookie, roles are available to the UI, and backend authorization remains enforced by NocoBase.
