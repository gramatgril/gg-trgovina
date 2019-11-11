// Adds 2 decimals and replaces dot with a comma
export const stylePrice = value =>
  value && `${value.toFixed(2)}`.replace(/\./g, ",");

// Calculates discount if there is one
export const calculateDiscount = (price, oldPrice) => {
  const discount = Math.floor((1 - price / oldPrice) * 100);
  const saved = oldPrice - price;

  return { discount, saved };
};
