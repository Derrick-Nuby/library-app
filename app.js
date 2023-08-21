const myLibrary = [];
const addbookbtn = document.getElementById("addbook");
const popform = document.getElementById("popform");
const closeWindow = document.getElementById("closeWindow");
const deleteBtns = document.querySelectorAll(".delete");
const books = document.querySelectorAll(".book");

addbookbtn.addEventListener("click", function () {
  popform.classList.remove("remove");
});

closeWindow.addEventListener("click", closePopUp);

function closePopUp(event) {
  event.preventDefault();
  popform.classList.add("remove");
}

deleteBtns.forEach(function (deleteBtn) {
  deleteBtn.addEventListener("click", function () {
    // myLibrary.pop(deleteBtn);
    // deleteBtn.remove(deleteBtn);
    // alert(deleteBtn);
    for (let i = 0; i < books.length; i++) {
      const book = books[i];
      book.addEventListener("click", function () {
        // alert("deleted");
        // myLibrary.pop(books[i]);
        // book.remove();
      });
    }
  });
});
function Book(title, url, author, pages, read) {
  this.title = title;
  this.url = url;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    const readStatus = this.read ? "Read" : "Not read yet";
    let theUrl;

    if (this.url === "") {
      theUrl = "./images/notfound.png";
    } else {
      theUrl = this.url;
    }
    return `<div class="book">
                    <div class="rdchk"></div>
                    <img src="${theUrl}" alt="">
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

function addBookToLibrary(title, url, author, pages, read) {
  const newBook = new Book(title, url, author, pages, read);
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
  const url = document.getElementById("url").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const haveRead = document.getElementById("read").checked;

  addBookToLibrary(title, url, author, pages, haveRead);
  displayBooks();
  form.reset();
  popform.classList.add("remove");
}

const form = document.getElementById("bookForm");
form.addEventListener("submit", handleSubmit);

// Add event listener to the submit button (optional)
const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", handleSubmit);
