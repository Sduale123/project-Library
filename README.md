# Library Management System

This is a set of functions designed to manage a library system. These functions allow users to retrieve information about books, authors, accounts, and borrowing activity within the library.

## Functions for Managing Accounts

### `findAccountById(accounts, id)`
- Description: Finds an account by its ID in a list of accounts.
- Parameters:
  - `accounts`: Array - List of account objects.
  - `id`: String - ID of the account to find.
- Returns: Object - The account object found.

### `sortAccountsByLastName(accounts)`
- Description: Sorts accounts alphabetically by last name.
- Parameters:
  - `accounts`: Array - List of account objects.
- Returns: Array - Sorted array of account objects by last name.

### `getAccountFullNames(accounts)`
- Description: Retrieves the full names of accounts.
- Parameters:
  - `accounts`: Array - List of account objects.
- Returns: Array - Array of full names of accounts.

### `getTotalNumberOfBorrows(account, books)`
- Description: Gets the total number of borrows made by an account.
- Parameters:
  - `account`: Object - The account object for which borrows are counted.
  - `books`: Array - List of book objects.
- Returns: Number - Total number of borrows made by the account.

### `getBooksPossessedByAccount(account, books, authors)`
- Description: Gets the list of books currently possessed by an account.
- Parameters:
  - `account`: Object - The account object for which possessed books are retrieved.
  - `books`: Array - List of book objects.
  - `authors`: Array - List of author objects.
- Returns: Array - List of books currently possessed by the account, including author information.

## Functions for Managing Books and Authors

### `findAuthorById(authors, id)`
- Description: Finds an author by their ID in a list of authors.
- Parameters:
  - `authors`: Array - List of author objects.
  - `id`: String - ID of the author to find.
- Returns: Object - The author object found.

### `findBookById(books, id)`
- Description: Finds a book by its ID in a list of books.
- Parameters:
  - `books`: Array - List of book objects.
  - `id`: String - ID of the book to find.
- Returns: Object - The book object found.

### `partitionBooksByBorrowedStatus(books)`
- Description: Partitions books based on their borrowed status (returned or not returned).
- Parameters:
  - `books`: Array - List of book objects.
- Returns: Array - Two arrays containing borrowed and returned books, respectively.

### `getBorrowersForBook(book, accounts)`
- Description: Gets a list of borrowers for a given book.
- Parameters:
  - `book`: Object - The book object for which borrowers are retrieved.
  - `accounts`: Array - List of account objects.
- Returns: Array - List of borrowers for the book, including return status.

## Functions for Statistical Analysis

### `getTotalBooksCount(books)`
- Description: Gets the total count of books.
- Parameters:
  - `books`: Array - List of book objects.
- Returns: Number - Total count of books.

### `getTotalAccountsCount(accounts)`
- Description: Gets the total count of accounts.
- Parameters:
  - `accounts`: Array - List of account objects.
- Returns: Number - Total count of accounts.

### `getBooksBorrowedCount(books)`
- Description: Gets the count of books currently borrowed.
- Parameters:
  - `books`: Array - List of book objects.
- Returns: Number - Count of books currently borrowed.

### `getMostCommonGenres(books)`
- Description: Gets the most common genres among books.
- Parameters:
  - `books`: Array - List of book objects.
- Returns: Array - List of top 5 most common genres with their counts.

### `getMostPopularBooks(books)`
- Description: Gets the most popular books based on borrow count.
- Parameters:
  - `books`: Array - List of book objects.
- Returns: Array - List of top 5 most popular books with their borrow counts.

### `getMostPopularAuthors(books, authors)`
- Description: Gets the most popular authors based on the total borrow count of their books.
- Parameters:
  - `books`: Array - List of book objects.
  - `authors`: Array - List of author objects.
- Returns: Array - List of top 5 most popular authors with their total borrow counts.
