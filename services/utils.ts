export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const ucFirst = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const numberToCurrency = (amount: number): string => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return formatter.format(amount);
};
