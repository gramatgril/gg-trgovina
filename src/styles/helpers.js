// Adds 2 decimals and replaces dot with a comma
export const stylePrice = value => `${value.toFixed(2)}`.replace(/\./g, ",");

// Calculates discount if there is one
export const calculateDiscount = (price, oldPrice) =>
  Math.floor((1 - price / oldPrice) * 100);
