// Function to find an author by their ID in a list of authors
function findAuthorById(authors, id) {
  // Using the find() method to locate the author with the specified ID
  let authorById = authors.find((author) => author.id === id);
  return authorById; // Returning the author object found
}

// Function to find a book by its ID in a list of books
function findBookById(books, id) {
  // Using the find() method to locate the book with the specified ID
  let bookById = books.find((book) => book.id === id);
  return bookById; // Returning the book object found
}

// Function to partition books based on their borrowed status
function partitionBooksByBorrowedStatus(books) {
  return books.reduce(
    (acc, book) => {
      const [borrowed, returned] = acc;
      const recent = book.borrows[0];
      if (recent.returned) {
        returned.push(book);
      } else {
        borrowed.push(book);
      }

      return acc;
    },
    [[], []]
  );
}

// Function to get a list of borrowers for a given book
function getBorrowersForBook(book, accounts) {
  const accountsById = accounts.reduce((acc, account) => {
    acc[account.id] = account;
    return acc;
  }, {});

  return book.borrows
    .map(({ id, returned }) => ({
      ...accountsById[id],
      returned,
    }))
    .slice(0, 10); // Returning only the first 10 borrowers
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
