/**
 * Format a date to a human-readable string
 * @param date The date to format
 * @returns Formatted date string (e.g., "28/01/2026")
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(date);
}
