const myLibrary = [
  {
    title: "Lord of the Rings",
    author: "J.R.R. Tolkien",
    pages: 1178,
    read: true,
  },
  {
    title: "Wheel of Time",
    author: "Robert Jordan",
    pages: 11898,
    read: false,
  },
  {
    title: "Pawn of Prophecy",
    author: "David Eddings",
    pages: 278,
    read: true,
  },
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return this;
  };
}

function addBookToLibrary() {}

function displayBook(library) {
  library.forEach((el) => {
    const tableEl = document.querySelector("tbody");

    el.read ? el.read = "Yes" : el.read = "No";

    tableEl.innerHTML += `
      <tr>
        <td>${el.title}</td>
        <td>${el.author}</td>
        <td>${el.pages}</td>
        <td>${el.read}</td>
      </tr>
    `;
  });
}

displayBook(myLibrary);
