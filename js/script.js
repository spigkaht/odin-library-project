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
    console.log(el);

    const container = document.querySelector("#library");
    console.log(container);
    const tableRow = document.createElement("tr");
    container.appendChild(tableRow);

    for(i = 0; i < library.length; i++) {
      const tableCellTitle = document.createElement("td");
      tableCellTitle.textContent = el.title;
      tableRow.appendChild(tableCellTitle);
      const tableCellAuthor = document.createElement("td");
      tableCellAuthor.textContent = el.author;
      tableRow.appendChild(tableCellAuthor);
      const tableCellPages = document.createElement("td");
      tableCellPages.textContent = el.pages;
      tableRow.appendChild(tableCellPages);
      const tableCellRead = document.createElement("td");
      tableCellRead.textContent = el.read;
      tableRow.appendChild(tableCellRead);
    }
  
    console.log(container, tableRow);
    container.appendChild(tableRow);
  });
}

displayBook(myLibrary);
