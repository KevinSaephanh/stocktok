export const getTextColorByPriceDelta = (priceDelta: string) => {
  if (priceDelta.includes('+')) return 'text-green-500';
  if (priceDelta.includes('-')) return 'text-red-500';
  return 'themed-text';
};
