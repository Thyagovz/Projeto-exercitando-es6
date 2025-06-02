import { userTypeDiscount, bookStoreBooks } from "./database.js";

export const findBooksByCategory = (bookList, category) => {
  return bookList.filter((book) =>
    book.categories.some((cat) => cat.toLowerCase() === category.toLowerCase())
  );
};

export const findBookById = (bookList, bookId) => {
  return bookList.find((book) => book.id === bookId);
};

export const sellBook = (bookList, bookId, userType = "normal") => {
  const book = bookList.find((book) => book.id === bookId);

  if (!book || book.quantity <= 0) {
    return "Livro indisponível para compra.";
  }

  const discount = userTypeDiscount[userType] || 0;
  const finalPrice = (book.price * (1 - discount)).toFixed(2);
  const discountPercentage = discount * 100;

  book.quantity -= 1;

  return `Livro ${book.title} vendido com sucesso por R$ ${finalPrice} (${discountPercentage}% de desconto).`;
};

export const calculateAverageRating = (bookList, bookId) => {
  const book = bookList.find((book) => book.id === bookId);

  if (!book) {
    return "Livro não encontrado.";
  }

  if (!book.ratings || book.ratings.length === 0) {
    return `O livro ${book.title} não possui nenhuma avaliação.`;
  }

  const sum = book.ratings.reduce((acc, curr) => acc + curr, 0);
  const average = (sum / book.ratings.length).toFixed(2);

  return `O livro ${book.title} possui uma média de avaliação igual a ${average}.`;
};
