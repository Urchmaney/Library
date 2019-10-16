const myLibrary = [];

function Book(title, author, pages, read) { // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = () => `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;

function addBookToLibrary() {
  console.log(myLibrary);
  const title = document.getElementById('name').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pageNumber').value;
  const read = document.getElementById('read').checked;
  const book = new Book(title, author, pages, read);
	myLibrary.push(book);
	render();
  console.log(myLibrary);
}

function render() {
  myLibrary.forEach((book) => {
    document.getElementById('libraryTable').innerHTML += `<tr><td>${book.name}</td><td>${book.author}</td><td>${book.pages}</td><td>${book.read}</td></tr>`;
  });
}
// document.addEventListener("load", render());
