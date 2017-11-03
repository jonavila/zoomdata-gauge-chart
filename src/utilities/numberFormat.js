import { format } from 'd3-format';

const formatSi = format('.2s');

export function formatAbbreviation(x) {
  const s = formatSi(x);
  switch (s[s.length - 1]) {
    case 'k':
      return s.slice(0, -1) + 'K';
    case 'G':
      return s.slice(0, -1) + 'B';
  }
  return s;
}
