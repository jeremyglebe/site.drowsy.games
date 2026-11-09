# Pending drowsy.games cutover

No DNS changes have been made. The root was serving Squarespace's Coming Soon page on 2026-11-09. Squarespace opened at its login screen in the background in-app browser. Chrome rejected the hidden-tab capability, so its login state was not inspected. DNS administration remains a manual step requiring an authenticated Squarespace session.

## Observed public records

- Nameservers: `nse1.squarespacedns.com` through `nse4.squarespacedns.com`.
- Apex A records (TTL 14400): `198.185.159.144`, `198.185.159.145`, `198.49.23.144`, `198.49.23.145`.
- Apex TXT: `v=spf1 -all`.
- No apex AAAA, MX, or CAA answers were returned by the public queries.
- `mallobaude`, `lustria`, and `whfb` CNAMEs point to `jeremyglebe.github.io`.

Public queries are not a complete DNS-zone inventory. Inspect and preserve all other records in the Squarespace dashboard, including mail, TXT, verification records, and every subdomain.

## Apply when signed into Squarespace

1. In **only** `jeremyglebe/site.drowsy.games` → Settings → Pages, set Custom domain to `drowsy.games`. For branch publishing this adds a root `CNAME` file. Do this immediately before the DNS change: it redirects the project preview to the custom domain.
2. In Squarespace → Domains → `drowsy.games` → DNS settings, replace only the four apex (`@`) parking A records listed above with these four A records. Keep the existing TTL (14400) or the provider default:

   | Host | Type | Value |
   | --- | --- | --- |
   | `@` | A | `185.199.108.153` |
   | `@` | A | `185.199.109.153` |
   | `@` | A | `185.199.110.153` |
   | `@` | A | `185.199.111.153` |

3. Do not delete an entire Squarespace preset if that would remove unrelated records. Do not change nameservers, mail/TXT records, `www`, or the three existing site CNAMEs. If any unexpected apex A/AAAA/ALIAS records are present, inspect their purpose before proceeding.
4. Wait for DNS and GitHub's HTTPS certificate. Confirm Pages' DNS check succeeds, then enable **Enforce HTTPS** in this repository. GitHub documents propagation/certificate availability as potentially taking up to 24 hours.
5. Confirm `https://drowsy.games/` serves the index over valid HTTPS, all three cards work, and the other sites plus `https://jeremyglebe.com/` remain unchanged.

Optional IPv6 is unnecessary for this cutover; no AAAA record currently exists. GitHub's supported IPv6 values are `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, and `2606:50c0:8003::153` if IPv6 is deliberately added later.

Source: [GitHub custom-domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
