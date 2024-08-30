export const maiorNumero = (data) => {
  if (data.length > 100 || data.length === 0) return null;

  const isAllInteger = data.every((d) => Number.isInteger(d));
  if (!isAllInteger) return null;

  const isLassThanOneOrBiggerThan100 = data.every((d) => d >= 1 && d <= 100);
  if (!isLassThanOneOrBiggerThan100) return null;

  return Math.max(...data);
};
