export const messageSale = (sale) => {
  let message = "";
  if (sale) {
    message = "This product is available for sale.";
  } else {
    message = "I am looking for this product.";
  }
  return message;
};

export const BUY = "Buy";
export const SELL = "Sell";
