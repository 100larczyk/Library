//global variables
const container = document.querySelector(".container"); //place for books to be display
const newBookbtn = document.querySelector(".newBookbtn");
const numberOfBooks = document.querySelector(".numberOfBooks");
const numberOfReadBooks = document.querySelector(".numberOfReadBooks");

//form's variables
const form = document.querySelector(".form");
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

const hobbit = new Book(
  "Hobbit dasdasdasdas asdasuihdasdhas asiudhaiu",
  "J.R.R. Tolkien sdfsdfsdf",
  "700",
  "No"
);
const starWars = new Book("Star Wars", "Someone", "600", "Yes");
const harryPotter = new Book("Harry Potter", "J.K. Rowling", "1000", "Yes");

addBookToLibrary(hobbit);
addBookToLibrary(starWars);
addBookToLibrary(harryPotter);
console.log(myLibrary);

function addBookToLibrary(Book) {
  myLibrary.push(Book);
}

function createDiv(Book) {
  const bookDiv = document.createElement("div");
  bookDiv.className = "newBook";
  bookDiv.textContent = `Title: ${Book.title} \r\nAuthor: ${Book.author} \r\nPages: ${Book.pages} \r\nRead: ${Book.read}`;
  const removeBtn = document.createElement("button");
  removeBtn.id = "removeBtn";
  removeBtn.textContent = "X";
  bookDiv.appendChild(removeBtn);
  removeBtn.addEventListener("click", () => {
    bookDiv.remove();
    const index = myLibrary.indexOf(Book);
    myLibrary.splice(index, 1);
  });

  return bookDiv;
}

function appendBookToContainer() {
  container.textContent = "";
  myLibrary.forEach((Book) => {
    container.appendChild(createDiv(Book));
  });
}
appendBookToContainer();

newBookbtn.addEventListener("click", function () {
  if (form.style.display === "none") {
    form.style.display = "block";
  }
});

function updateBooksQuantity() {
  let total = myLibrary.length;
  console.log(total);
  numberOfBooks.textContent = `Your books: ${total}`;
}

function updateNumberOfReadBooks() {
  let readCount = myLibrary.filter((book) => book.read === "Yes").length;
  numberOfReadBooks.textContent = `Books you have\r read:${readCount}`;
}

submit.addEventListener("click", function (event) {
  event.preventDefault();
  const title = document.querySelector("[name='title']").value;
  const author = document.querySelector("[name='author']").value;
  const pages = document.querySelector("[name='pages']").value;
  const checkbox = document.querySelector("[name='checkbox-2']");
  const readValue = checkbox.checked ? "No" : "Yes";

  addedBook = new Book(title, author, pages, readValue);
  addBookToLibrary(addedBook);
  appendBookToContainer();
  form.style.display = "none";
  form.reset();
  console.log(myLibrary);

  updateNumberOfReadBooks();
  updateBooksQuantity();
});

close.addEventListener("click", (event) => {
  event.preventDefault();
  form.reset();
  form.style.display = "none";
});

updateBooksQuantity();
updateNumberOfReadBooks();
