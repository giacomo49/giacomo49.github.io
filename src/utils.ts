const formatter = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

/** 12 March 2026 */
export function formatDate(date: Date): string {
  return formatter.format(date);
}

/** 2026-03-12 (for the datetime attribute of <time>) */
export function isoDate(date: Date): string {
  return date.toISOString().split('T')[0];
}
