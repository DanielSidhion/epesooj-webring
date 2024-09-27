import { WebringData, WebringEntry } from './webring';
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

function generateEntryHTML(entry: WebringEntry) {
  return `<div><a href="${entry.url}">${entry.title}</a><span>by ${entry.author}</span></div>`;
}

let index = readFileSync(
  join(import.meta.dirname, '../templates/index.html'),
  'utf8'
);
const renderedEntries = WebringData.map(generateEntryHTML).join('\n');
index = index.replace('{{WEBRING_ENTRIES}}', renderedEntries);
writeFileSync(join(import.meta.dirname, '../public/index.html'), index);
