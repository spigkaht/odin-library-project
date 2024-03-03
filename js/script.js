// element variable assignments
const tableEl = document.querySelector("tbody");
const sidebarEl = document.querySelector(".sidebar");
const inputs = document.querySelectorAll("input");
const sidebarBtn = document.querySelector("#submitBook");
const mainBtn = document.querySelector("#addBook");

// library object with dummy data assigned
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

// Book constructor, to create new book objects
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    let isRead = "";
    this.read ? (isRead = "has been read") : (isRead = "not read yet");
    return (
      this.title +
      " by " +
      this.author +
      ", " +
      this.pages +
      " pages, " +
      isRead
    );
  };
}

// hide sidebar when book is added to library
hideSidebar = () => {
  sidebarEl.style.display = "none";
};

// show sidebar when book is being added to library
showSidebar = () => {
  sidebarEl.style.display = "grid";
};

// clear library table
clearTable = () => {
  tableEl.innerHTML = "";
};

// clear text inputs once book is added to library
clearInputs = () => {
  inputs.forEach((el) => {
    el.value = "";
  });
};

// gather inputs from user as values
gatherInputs = () => {
  const newBook = new Book();

  inputs.forEach((el) => {
    newBook[el.id] = el.value;
  });

  newBook.read = newBook.read == "Yes" ? true : false;

  return newBook;
};

// add current book to library object
addBookToLibrary = (book) => {
  myLibrary.push(book);
};

// delete and change status buttons > event listeners for each object in array
actionButtonLoad = () => {
  const actionBtns = document.querySelectorAll(".action");

  actionBtns.forEach((el) => {
    el.addEventListener("click", (e) => {
      const index =
        e.target.parentElement.parentElement.attributes["data-index"].value;

      // if value of button clicked is.. delete > run delete, read-toggle > run toggle
      if (el.classList.contains("delete")) {
        myLibrary.splice(index, 1);
        tableEl.innerHTML = "";
        displayLibrary(myLibrary);
      } else if (el.classList.contains("read-toggle")) {
        bool = myLibrary[index].read;
        bool === true
          ? (myLibrary[index].read = false)
          : (myLibrary[index] = true);
        tableEl.innerHTML = "";
        displayLibrary(myLibrary);
      } else console.log("error");
      console.log("deleted");
    });
  });
};

// output myLibrary to screen using HTML table
displayLibrary = (library) => {
  clearTable();

  // for each book object, output values to table
  library.forEach((el) => {
    tableEl.innerHTML += `
      <tr data-index="${myLibrary.indexOf(el)}">
        <td>${el.title}</td>
        <td>${el.author}</td>
        <td>${el.pages}</td>
        <td>${el.read ? "Yes" : "No"}</td>
        <td><button class="action delete">Delete</button></td>
        <td><button class="action read-toggle">Read</button></td>
      </tr>
    `;
  });
  const actionBtns = document.querySelectorAll(".action");
};

// functions to run when main button is clicked
mainBtnClicked = () => {
  clearInputs();
  showSidebar();
};

// functions to run when sidebar button is clicked
sidebarBtnClicked = () => {
  hideSidebar();
  const book = gatherInputs();
  myLibrary.push(book);
  displayLibrary(myLibrary);
};

// functions to run when window is loaded
windowLoaded = () => {
  displayLibrary(myLibrary);
};

// event listeners for window load, main content button and sidebar button
window.addEventListener("load", windowLoaded);
mainBtn.addEventListener("click", mainBtnClicked);
sidebarBtn.addEventListener("click", sidebarBtnClicked);
document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("action")) {
    actionButtonLoad();
  }
});
