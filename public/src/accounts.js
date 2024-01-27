// Function to find an account by its ID in a list of accounts
function findAccountById(accounts, id) {
  // Using the find() method to locate the account with the specified ID
  let accountById = accounts.find((account) => account.id === id);
  return accountById; // Returning the account object found
}

// Function to sort accounts alphabetically by last name
function sortAccountsByLastName(accounts) {
  // Creating a copy of the accounts array to avoid mutating the original array
  const sorted = [...accounts];
  // Sorting the copied array based on last names in a case-insensitive manner
  sorted.sort((ac1, ac2) =>
    ac1.name.last.toLowerCase() > ac2.name.last.toLowerCase() ? 1 : -1
  );
  return sorted;
}

// Function to get the full names of accounts
function getAccountFullNames(accounts) {
  // Using the map() method to extract and format first and last names
  return accounts.map(({ name: { first, last } }) => first + ' ' + last);
}

// Function to get the total number of borrows made by an account
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);
    return acc + count;
  }, 0);
}

// Function to get the list of books currently possessed by an account
function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
