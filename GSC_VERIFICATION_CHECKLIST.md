# Google Search Console + Real-Device Verification

## 1) Connect Domain in Google Search Console
1. Open `https://search.google.com/search-console`
2. Add property type `Domain`: `ericlmorgan.com`
3. Copy TXT verification record
4. Add TXT record in DNS zone for the domain
5. Wait for DNS propagation and click `Verify`

## 2) Submit Sitemap
1. In GSC open `Sitemaps`
2. Submit: `https://ericlmorgan.com/sitemap.xml`
3. Confirm status `Success`

## 3) Force Indexing for Core URLs
Run `URL Inspection` and `Request indexing` for:
- `https://ericlmorgan.com/`
- `https://ericlmorgan.com/en/`
- `https://ericlmorgan.com/de/`
- `https://ericlmorgan.com/ru/`

## 4) What to Check From Other Devices
Use mobile + desktop + another network.

Checks:
1. Open each URL directly and confirm page loads.
2. In browser source, verify `canonical` and `hreflang` are present.
3. Search in Google:
   - `site:ericlmorgan.com`
   - `site:ericlmorgan.com software engineer germany`
   - `site:ericlmorgan.com bewerbung software engineer`
4. Open Google in incognito/private mode for cleaner results.

## 5) Ranking Reality Check
Top positions are never instant. Track by data:
- GSC -> `Performance` -> `Search results`
- Compare clicks/impressions/avg position every 7 days
- Filter by page (`/en/`, `/de/`, `/ru/`) and by query

## 6) KPI Targets (First 60 Days)
- Day 1-7: all 4 URLs indexed
- Day 8-30: first stable impressions by language pages
- Day 31-60: CTR growth and position improvement on priority queries

## 7) If You Do Not See Growth
1. Expand content depth on the page with most impressions.
2. Add one focused section per high-impression query.
3. Strengthen internal links between language pages.
4. Publish one additional niche page for the best query cluster.
