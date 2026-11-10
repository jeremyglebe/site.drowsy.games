import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const cname = readFileSync(new URL('../CNAME', import.meta.url), 'utf8').trim();
const expectedHosts = [
  'sqrz.drowsy.games',
  'necromancer.drowsy.games',
  'whfb.drowsy.games',
  'mallobaude.drowsy.games',
  'lustria.drowsy.games',
];
const links = [...html.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map((match) => new URL(match[1]));
assert.equal(cname, 'drowsy.games', 'Keep the existing custom domain.');
assert.equal(links.length, expectedHosts.length, 'Each public project has one link.');
assert.deepEqual(links.map((url) => url.hostname).sort(), expectedHosts.sort());
for (const url of links) {
  assert.equal(url.protocol, 'https:');
  assert.equal(url.pathname, '/');
  assert.equal(url.search, '');
  assert.equal(url.hash, '');
}
assert.equal((html.match(/<h1\b/g) || []).length, 1, 'Use one page title.');
assert.match(html, /<html lang="en">/);
assert.match(html, /name="viewport"/);
assert.match(html, /aria-labelledby="games-heading"/);
assert.match(html, /id="games-heading"/);
assert.match(html, /aria-labelledby="tabletop-heading"/);
assert.match(html, /id="tabletop-heading"/);
assert.match(html, /:focus-visible/);
assert.match(html, /@media \(max-width: 580px\)/);
assert.doesNotMatch(html, /<script\b|<iframe\b|@import|url\(\s*["']?https?:/i, 'Keep the index self-contained and script-free.');
for (const svg of html.matchAll(/<svg\b[^>]*>/g)) {
  assert.match(svg[0], /aria-hidden="true"/);
  assert.match(svg[0], /focusable="false"/);
}
console.log('PASS: five unique HTTPS project links, domain unchanged, landmarks, responsive/focus styles, decorative icons, no external dependencies.');
