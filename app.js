const myLibrary = [];
const addbookbtn = document.getElementById("addbook");
const popform = document.getElementById("popform");
const closeWindow = document.getElementById("closeWindow");

addbookbtn.addEventListener("click", function () {
  popform.classList.remove("remove");
});

closeWindow.addEventListener("click", closePopUp);

function closePopUp(event) {
  event.preventDefault();
  popform.classList.add("remove");
}

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
// addBookToLibrary(
//   "Harry Potter and the Sorcerer's Stone",
//   "J.K. Rowling Potter and the Sorcerer's Stone",
//   "J.K. Rowling",
//   320,
//   true
// );
// addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
// addBookToLibrary("Think and Grow Rich", "Napoleon Hill", 320, false);

function handleSubmit(event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const haveRead = document.getElementById("read").checked;

  addBookToLibrary(title, author, pages, haveRead);
  displayBooks();
  form.reset();
  popform.classList.add("remove");
}

const form = document.getElementById("bookForm");
form.addEventListener("submit", handleSubmit);

// Add event listener to the submit button (optional)
const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", handleSubmit);
