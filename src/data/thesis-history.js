import records from './thesis-history.json';
const seen = new Set();
for (const record of records) {
  if (!record || !/^(?:(?:ST|LT)\d+|TH\d+)$/.test(record.id) || seen.has(record.id)) throw new Error('Invalid or duplicate thesis tracking ID');
  seen.add(record.id);
  if (!['In progress', 'Completed', 'Withdrawn'].includes(record.status)) throw new Error(`Invalid tracking status for ${record.id}`);
  if (record.status !== 'Withdrawn' && (!record.title || !record.area)) throw new Error(`Missing public title or area for ${record.id}`);
  if (record.level && !['Bachelor', 'Master'].includes(record.level)) throw new Error(`Invalid level for ${record.id}`);
  if (record.year && (!Number.isInteger(record.year) || record.year < 1900 || record.year > 2100)) throw new Error(`Invalid year for ${record.id}`);
  if (Object.keys(record).some(key => !['id', 'status', 'title', 'area', 'level', 'year'].includes(key))) throw new Error(`Unexpected tracking field for ${record.id}`);
}
export const thesisHistory = records;
export const unavailableIds = new Set(records.map(record => record.id));