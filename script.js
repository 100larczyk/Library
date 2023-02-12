//global variables
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

//form's variables
const form = document.querySelector(".form");
// const title = document.querySelector("title").value;
// const author = document.querySelector("author").value;
// const pages = document.querySelector("pages").value;
// const read = document.querySelector("read").value;
const submit = document.querySelector(".submit");

let myLibrary = [];
let containerForBookDiv = [];
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

function createDiv(element) {
  const bookDiv = document.createElement("div");
  bookDiv.className = "newBook";
  bookDiv.textContent = `Title: ${element.title} \r\n Author: ${element.author} \r\n Pages: ${element.pages} \r\n Read: ${element.read}`;
  return bookDiv;
}

function appendBookToContainer() {
  containerForBookDiv = [];
  container.textContent = "";
  myLibrary.forEach((element) => {
    containerForBookDiv.push(createDiv(element));
    containerForBookDiv.forEach((div) => container.appendChild(div));
  });
}
appendBookToContainer();

btn.addEventListener("click", function () {
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
});

submit.addEventListener("click", function (event) {
  event.preventDefault();
  const title = document.querySelector("[name='title']").value;
  const author = document.querySelector("[name='author']").value;
  const pages = document.querySelector("[name='pages']").value;
  const read = document.querySelector("[name='read']").value;

  addedBook = new Book(title, author, pages, read);
  addBookToLibrary(addedBook);
  appendBookToContainer();
  form.style.display = "none";
  console.log(myLibrary);
});
