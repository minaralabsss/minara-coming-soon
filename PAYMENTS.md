# Payments

Gateway is Moyasar. There are two checkout paths and one environment
variable decides which one customers get.

## The two paths

**Hosted invoice (current, default).** `/api/checkout` creates a Moyasar
invoice server side, the browser is redirected to `invoice.url`, and the
customer pays on Moyasar's page. Cards and mada only. Apple Pay and Samsung
Pay cannot be offered from there.

**On-site form (off by default).** `/api/checkout` creates the same invoice,
then `WalletCheckout.tsx` renders Moyasar's own form on minaralabs.shop and
pays that invoice via `invoice_id`. This is the only way to offer Apple Pay
and Samsung Pay, because Samsung ties a Service ID to one registered Service
Domain and the wallet sheet has to be opened by a page on that domain.

Both paths produce the same paid invoice. The webhook, the Upstash stock
decrement and both Loops emails are identical either way. If the form fails
to load, the code falls back to the hosted redirect on its own.

## Environment variables

Set in Vercel, Settings, Environment Variables.

| Name | Scope | Notes |
| --- | --- | --- |
| `MOYASAR_SECRET_KEY` | server | `sk_live_...`. This is the one that matters. The test-mode badge on checkout keys off the `sk_test` prefix and disappears by itself. |
| `NEXT_PUBLIC_MOYASAR_PK` | public | `pk_live_...`. Only used by the on-site form. |
| `NEXT_PUBLIC_WALLET_CHECKOUT` | public | `true` renders the on-site form. Anything else keeps the hosted redirect. |
| `NEXT_PUBLIC_SAMSUNG_SERVICE_ID` | public | `44b6f26ed1f4443dbf2d13` |
| `NEXT_PUBLIC_SAMSUNG_PAY` | public | `true` adds Samsung Pay to the form. Leave off until Samsung approves the service. |
| `NEXT_PUBLIC_SITE_URL` | public | Used to build the return URLs. |

The payments handoff note called the secret key `MOYASAR_SK`. The code does
not read that name. Adding it changes nothing and checkout silently keeps
using whatever `MOYASAR_SECRET_KEY` holds.

## Apple Pay

No Apple Developer account is needed. Moyasar's web registration covers it.

The domain association file is served at
`public/.well-known/apple-developer-merchantid-domain-association`, with a
`text/plain` content-type rule in `next.config.ts` and `.well-known`
excluded from the middleware matcher.

After deploying, confirm the file loads in a browser, then in the Moyasar
dashboard go to Settings, Apple Pay Domains, and click Validate and then
Register, in that order.

The file in the repo was generated on 19 August 2026. If the domain entry is
ever deleted and re-added, download a fresh file, because the old one will
not validate against a new entry.

## Samsung Pay

Service is created and awaiting Samsung approval. Status: Debugging
(Requesting). Web Online Payment, Production, gateway MPG, Service Domain
`https://minaralabs.shop`.

Moyasar handles the CSR, the key exchange and the decryption. The merchant
side, which is already done, is the developer account, the service, the CSR
upload and the service domain.

Samsung Pay only renders on Samsung devices with Samsung Wallet. It cannot
be tested on an iPhone, on desktop, or in an emulator.

## Before enabling the on-site form

`MOYASAR_VERSION` in `WalletCheckout.tsx` must match the version Moyasar
currently publish in the "Including Moyasar Form" block of their Apple Pay
basic-integration guide. If it is wrong the form will not load and checkout
quietly falls back to the hosted page, so the symptom is wallets never
appearing rather than an error.

## Order of work

1. `MOYASAR_SECRET_KEY` to the live key. Deploy. Buy one panel with a real
   card, confirm the stock counter decremented and both emails arrived, then
   refund it from the dashboard.
2. Validate and register the Apple Pay domain.
3. Add `NEXT_PUBLIC_MOYASAR_PK`, confirm the form version, set
   `NEXT_PUBLIC_WALLET_CHECKOUT=true`. Test a card payment, then Apple Pay
   on an iPhone in Safari.
4. When Samsung approves, set `NEXT_PUBLIC_SAMSUNG_PAY=true` and test on a
   Samsung phone.

## Open

- Ask Moyasar support whether the hosted invoice page renders Apple Pay and
  Samsung Pay under their own registration. If it does, step 3 is optional.
- Orders exist only as emails. No order database yet.
