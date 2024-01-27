// Function to get the total count of books
function getTotalBooksCount(books) {
  return books.length; 
}

// Function to get the total count of accounts
function getTotalAccountsCount(accounts) {
  return accounts.length;
}

// Function to get the count of books currently borrowed
function getBooksBorrowedCount(books) {
  // Filtering out books with at least one unreturned borrow record
  let booksCheckedOut = books.filter(
    (book) =>
     book.borrows.filter((record) => record.returned === false).length > 0
   );
   return booksCheckedOut.length;
}

// This is a helper function that's called by other functions
function _sortObjectByValues(obj) {
  // Sorting an object by its values in descending order
  const keys = Object.keys(obj);
  return keys.sort((keyA, keyB) => {
    if (obj[keyA] > obj[keyB]) {
      return -1;
    } else if (obj[keyB] > obj[keyA]) {
      return 1;
    } else {
      return 0;
    }
  });
}

// Function to get the most common genres among books
function getMostCommonGenres(books) {
  // Counting the occurrences of each genre
  const count = books.reduce((acc, { genre }) => {
    if (acc[genre]) {
      acc[genre] += 1;
    } else {
      acc[genre] = 1;
    }

    return acc;
  }, {});

  // Sorting the genres by count in descending order and returning the top 5
  const sorted = _sortObjectByValues(count);
  return sorted.map((name) => ({ name, count: count[name] })).slice(0, 5);
}

// Function to get the most popular books based on borrow count
function getMostPopularBooks(books) {
  // Grouping books by ID and counting borrow occurrences
  const groupById = books.reduce((acc, { id, borrows }) => {
    acc[id] = borrows.length;
    return acc;
  }, {});

  // Sorting books by borrow count in descending order and returning the top 5
  const sorted = _sortObjectByValues(groupById);
  return sorted
    .map((id) => {
      const { title: name } = books.find(({ id: bookId }) => bookId === id);
      return { name, count: groupById[id] };
    })
    .slice(0, 5);
}

// Function to get the most popular authors based on total borrow count of their books
function getMostPopularAuthors(books, authors) {
  // Counting total borrow occurrences for each author's books
  const count = books.reduce((acc, { authorId, borrows }) => {
    if (acc[authorId]) {
      acc[authorId].push(borrows.length);
    } else {
      acc[authorId] = [borrows.length];
    }

    return acc;
  }, {});

  // Calculating the total borrow count for each author and sorting in descending order
  for (let id in count) {
    const sum = count[id].reduce((a, b) => a + b);
    count[id] = sum;
  }

  // Sorting authors by borrow count in descending order and returning the top 5
  const sorted = _sortObjectByValues(count);
  return sorted
    .map((authorId) => {
      const {
        name: { first, last },
      } = authors.find(({ id }) => id === Number(authorId));
      const name = `${first} ${last}`;
      return { name, count: count[authorId] };
    })
    .slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
