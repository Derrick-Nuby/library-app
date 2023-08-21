(function () {
  const myLibrary = [];
  const booksContainer = document.querySelector("#books-container");
  const popform = document.getElementById("popform");
  const closeWindow = document.getElementById("closeWindow");
  const form = document.getElementById("bookForm");

  function Book(title, url, author, pages, read) {
    this.title = title;
    this.url = url;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  function addBookToLibrary(title, url, author, pages, read) {
    const newBook = new Book(title, url, author, pages, read);
    myLibrary.push(newBook);
  }

  addbookbtn.addEventListener("click", () =>
    popform.classList.remove("remove")
  );
})();
