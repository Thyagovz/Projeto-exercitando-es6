import { productsList } from "./database.js";

const calculateTotalCost = (customerName, products, discount = 0) => {
  const total = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const totalWithDiscount = total * (1 - discount / 100);

  const formattedTotal = totalWithDiscount.toFixed(2);

  if (discount === 0) {
    return `Olá, ${customerName}! O total da sua compra é R$ ${formattedTotal} (sem desconto).`;
  } else {
    return `Olá, ${customerName}! O total da sua compra é R$ ${formattedTotal} (${discount}% de desconto).`;
  }
};
