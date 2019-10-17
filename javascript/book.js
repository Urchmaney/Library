const myLibrary = [
  { title: 'Welcome', author: 'Luke Vim', pages: 378, read: true },
  { title: 'Good bye', author: 'James Hens', pages: 600, read: false },
  { title: 'Lonely walk', author: 'Peter Spill', pages: 300, read: true }
];

function Book(title, author, pages, read) { // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = () => `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;

function render() {
  const theader = '<tr><td>Name</td><td>Author</td><td>Page Number</td><td>Read</td><td></td></tr>';
  document.getElementById('libraryTable').innerHTML = theader;
  myLibrary.forEach((book, index) => {
    document.getElementById('libraryTable').innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.pages}</td><td><input type="checkbox" ${book.read ? 'checked' : ''}></td><td><button class="removeBook" onclick="removeBook(${index})">Remove Book</button></td></tr>`;
  });
}

function removeBook(index){
  myLibrary.splice(index, 1);
  render();
}
function displayForm() {
  document.getElementById('form-container').style.display = 'block';
}
function hideForm() {
  document.getElementById('form-container').style.display = 'none';
  document.getElementById('name').value = '';
  document.getElementById('author').value = '';
  document.getElementById('pageNumber').value = '';
}

function addBookToLibrary() {
  console.log(myLibrary);
  const title = document.getElementById('name').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pageNumber').value;
  const read = document.getElementById('read').checked;
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  render();
  hideForm();
  console.log(myLibrary);
}


document.addEventListener('load', render());
