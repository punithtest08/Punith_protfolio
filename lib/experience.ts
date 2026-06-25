// ─────────────────────────────────────────────────────────────
// Single source of truth for total professional experience.
// Update this ONE value — everything across the portfolio updates.
// ─────────────────────────────────────────────────────────────

export const totalExperienceMonths = 17;

export function formatExperience(months: number): { years: number; months: number; label: string } {
  const years     = Math.floor(months / 12);
  const remainder = months % 12;

  const yearLabel  = years === 1 ? 'Year' : 'Years';
  const monthLabel = remainder === 1 ? 'Month' : 'Months';

  let label = '';
  if (years > 0 && remainder > 0) label = `${years} ${yearLabel} ${remainder} ${monthLabel}`;
  else if (years > 0)             label = `${years} ${yearLabel}`;
  else                            label = `${remainder} ${monthLabel}`;

  return { years, months: remainder, label };
}
