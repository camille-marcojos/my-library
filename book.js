
// Exercise
// Write a constructor for making “Book” objects. 
// Your book objects should have the book’s title, author, the number of pages, 
// and whether or not you have read the book.

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {
        return title + " by " + author + ", " +  pages + " pages, " + read;
    }

}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function printLibrary() {

    for(let i = 0; i < myLibrary.length ; i++){
        console.log(myLibrary[i].info());
    }
}


const book1 = new Book('Hobbit', 'J.R.R. Tolkein', '295', 'Not Read');
const book2 = new Book('Hobbit1', 'J.R.R. Tolkein', '296', 'Not Read');
const book3 = new Book('Hobbit2', 'J.R.R. Tolkein', '297', 'Not Read');

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

printLibrary();

function addBooksToTable() {

    let table = document.getElementById('book-info');

    for(let i = 0; i < myLibrary.length; i++){
        let row = table.insertRow();
        row.dataset.id = i;
        let title = row.insertCell();
        let author = row.insertCell();
        let pages = row.insertCell();
        let read = row.insertCell();
        let remove = row.insertCell();
        title.innerHTML = myLibrary[i].title;
        author.innerHTML = myLibrary[i].author;
        pages.innerHTML = myLibrary[i].pages;

        let updateBtn = document.createElement('input');
        updateBtn.dataset.id = i;
        updateBtn.type = "button";
        updateBtn.className = "updateBtn";
        updateBtn.value = myLibrary[i].read;
        read.appendChild(updateBtn);

        let removeBtn = document.createElement('input');
        removeBtn.dataset.id = i;
        removeBtn.type = "button";
        removeBtn.className = "removeBtn";
        removeBtn.value = "Delete";
        remove.appendChild(removeBtn);

    }
}

addBooksToTable();

let removeBook = document.querySelectorAll('.removeBtn');

for(let i = 0; i < removeBook.length; i++){
    removeBook[i].addEventListener('click', function(event){
        // console.log(this.dataset.id);
        document.getElementById('book-info').deleteRow(this.dataset.id);
        myLibrary.splice(this.dataset.id, 1);
        // printLibrary();
    })
}



