# odin-library-project

JavaScript learning project for object constructors & prototypes

> on page load
>> x display library

> main content button
>> x clear input fields
>> x show sidebar

> sidebar button
>> x hide sidebar
>> record input fields
>> create new book
>> x add book to library
>> x display library

<!-- PREVIOUS ATTEMPT

// library array with dummy content (array of objects)
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

// constructor for new Book objects. will leave alone for now
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return this;
  };
}

// clear table contents
function clearTable() {
  const tableEl = document.querySelector("tbody");
  tableEl.innerHTML = "";
}

// output myLibrary to screen using HTML table
function displayBook(library) {
  library.forEach((el) => {
    const tableEl = document.querySelector("tbody");

    el.read ? (el.read = "Yes") : (el.read = "No");

    tableEl.innerHTML += `
      <tr data-index="${myLibrary.indexOf(el)}">
        <td>${el.title}</td>
        <td>${el.author}</td>
        <td>${el.pages}</td>
        <td>${el.read}</td>
        <td><button class="delete">Delete</button></td>
        <td><button class="read-toggle">Read</button></td>
      </tr>
    `;
  });
}

// dummy call for displaying dummy books in myLibrary
displayBook(myLibrary);

// add book object to myLibrary array
function addBookToLibrary(book) {
  myLibrary.push(book);
}

// set display for sidebar div to "grid"
function showSidebar() {
  const sidebarEl = document.querySelector(".sidebar");
  sidebarEl.style.display = "grid";
}

// event listener for main content button to add a new book
const addBookBtn = document.querySelector("#addBook");
addBookBtn.addEventListener("click", showSidebar);

// sets display on sidebar to "none", reads inputs on sidebar and calls func
function submitBookDetails() {
  // create object, set keys/values from input fields
  const inputBook = {};
  inputBook.title = document.querySelector("#title").value;
  document.querySelector("#title").value = "";
  inputBook.author = document.querySelector("#author").value;
  document.querySelector("#author").value = "";
  inputBook.pages = document.querySelector("#pages").value;
  document.querySelector("#pages").value = "";
  inputBook.read = document.querySelector("#read").value;
  document.querySelector("#read").value = "";
  console.log(inputBook);

  console.log(inputBook.read);
  inputBook.read == "Yes" ? inputBook.read = true : inputBook.read = false;
  console.log(inputBook.read);
  console.log(inputBook);

  // call function to add above to myLibrary array
  addBookToLibrary(inputBook);

  // clear table contents
  clearTable();

  // run output to table again
  displayBook(myLibrary);

  // set sidebar display to "none"
  const sidebarEl = document.querySelector(".sidebar");
  sidebarEl.style.display = "none";
}

// event listener for sidebar button which adds content to array
const submitBookBtn = document.querySelector("#submitBook");
submitBookBtn.addEventListener("click", submitBookDetails);

// event listener for delete buttons => forEach for each object item
const deleteBtn = document.querySelectorAll(".delete");
deleteBtn.forEach((el) => {
  el.addEventListener("click", (e) => {
    // find index of event triggered delete button
    const tableEl = document.querySelector("tbody");
    const index = e.target.parentElement.parentElement.attributes["data-index"].value;
    myLibrary.splice(index, 1);
    console.log(myLibrary);
    tableEl.innerHTML = "";
    displayBook(myLibrary);
  });
});

// event listener for delete buttons => forEach for each object item
const readBtn = document.querySelectorAll(".read-toggle");
readBtn.forEach((el) => {
  el.addEventListener("click", (e) => {
    const tableEl = document.querySelector("tbody");
    const index = e.target.parentElement.parentElement.attributes["data-index"].value;
    myLibrary[index].read === true ? myLibrary[index].read = false : myLibrary[index].read = true;
    console.log(myLibrary[index]);
    tableEl.innerHTML = "";
    displayBook(myLibrary);
  });
}); -->