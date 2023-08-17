const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    const readStatus = this.read ? "Read" : "Not read yet";
    return `<div class="book">
                    <div class="rdchk"></div>
                    <img src="./images/notfound.png" alt="">
                    <div class="title">${this.title}</div>
                    <div class="author"><b>Author: </b>${this.author}</div>
                    <div class="pages"><b>Pages: </b>${this.pages} pages</div>
                    <div class="lower-card">
                        <div class="read btns">${readStatus}</div>
                        <div class="delete btns">Delete</div>
                    </div>
            </div>`;
  };
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function displayBooks() {
  const booksContainer = document.querySelector("#books-container");
  // booksContainer.innerHTML = "";

  myLibrary.forEach((book) => {
    booksContainer.innerHTML += book.info();
    // booksContainer.appendChild(bookCard);
  });
}

// Example usage:
addBookToLibrary(
  "Harry Potter and the Sorcerer's Stone",
  "J.K. Rowling Potter and the Sorcerer's Stone",
  "J.K. Rowling",
  320,
  true
);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("Think and Grow Rich", "Napoleon Hill", 320, false);

displayBooks();
