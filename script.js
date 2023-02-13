//global variables
const container = document.querySelector(".container"); //place for books to be display
const btn = document.querySelector(".btn");

//form's variables
const form = document.querySelector(".form");
// const title = document.querySelector("title")
// const author = document.querySelector("author")
// const pages = document.querySelector("pages")
// const read = document.querySelector("read")
const submit = document.querySelector(".submit");
const close = document.querySelector(".close");

let myLibrary = [];
let addedBook;

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(Book) {
  myLibrary.push(Book);
}

const hobbit = new Book("Hobbit", "J.R.R. Tolkien", "700", "not read yet");
const starWars = new Book("Star Wars", "Someone", "600", "read");
const harryPotter = new Book("Harry Potter", "J.K. Rowling", "1000", "read");

addBookToLibrary(hobbit);
addBookToLibrary(starWars);
addBookToLibrary(harryPotter);
console.log(myLibrary);

function createDiv(Book) {
  const bookDiv = document.createElement("div");
  bookDiv.className = "newBook";
  bookDiv.textContent = `Title: ${Book.title} \r\n Author: ${Book.author} \r\n Pages: ${Book.pages} \r\n Read: ${Book.read}`;
  const removeBtn = document.createElement("button");
  removeBtn.id = "removeBtn";
  removeBtn.textContent = "remove";
  bookDiv.appendChild(removeBtn);
  removeBtn.addEventListener("click", () => {
    bookDiv.remove();
    const index = myLibrary.indexOf(Book);
    myLibrary.splice(index, 1);
    console.log(myLibrary);
  });

  const removeBtnIndex = Book.title;
  return bookDiv;
}

function appendBookToContainer() {
  container.textContent = "";
  myLibrary.forEach((Book) => {
    container.appendChild(createDiv(Book));
  });
}
appendBookToContainer();

btn.addEventListener("click", function () {
  if (form.style.display === "none") {
    form.style.display = "block";
  }
});

submit.addEventListener("click", function (event) {
  event.preventDefault();
  const title = document.querySelector("[name='title']").value;
  const author = document.querySelector("[name='author']").value;
  const pages = document.querySelector("[name='pages']").value;
  const readValue = document.querySelector("[name='read']:checked").value;

  addedBook = new Book(title, author, pages, readValue);
  addBookToLibrary(addedBook);
  appendBookToContainer();
  form.style.display = "none";
  form.reset();
  console.log(myLibrary);
});

close.addEventListener("click", () => {
  form.reset();
  form.style.display = "none";
});
