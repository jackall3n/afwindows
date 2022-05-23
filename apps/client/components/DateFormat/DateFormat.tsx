import { useMemo } from 'react';
import { format as _format, parseISO } from 'date-fns';

interface Props {
  value: string | Date;
  format: string;
}

export function DateFormat({ value, format }: Props) {
  const date = useMemo(() => {
    if (typeof value === 'string') {
      return parseISO(value);
    }

    return value;
  }, [value]);

  const formatted = useMemo(() => {
    return _format(date, format);
  }, [date, format]);

  return <span>{formatted}</span>;
}
