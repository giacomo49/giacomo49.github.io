const formatter = new Intl.DateTimeFormat('it-IT', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

/** 12 marzo 2026 */
export function formatDate(date: Date): string {
  return formatter.format(date);
}

/** 2026-03-12 (per l'attributo datetime di <time>) */
export function isoDate(date: Date): string {
  return date.toISOString().split('T')[0];
}
