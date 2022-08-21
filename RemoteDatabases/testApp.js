const selectors = {
    bookNumber: '#bookNumber',
    bookAuthor: '#bookAuthor',
    bookTitle: '#bookTitle',
    bookShield: '#books',
}

const errorHandling = {
    noNumberForBook: 'Please specify the number of the book you search',
    noHTMLElement: 'Invalid HTML element',
    noSuchBook: 'No such book in library',
    emptyDataForNewBook: 'Please specify valid author and title',
}

let bookShield;

const searchBook = async () => {
    const number = getHTMLElement(selectors.bookNumber).value;
    if (number === '') {
        alert(errorHandling.noNumberForBook);
        throw Error(errorHandling.noNumberForBook);
    }

    const url = `https://testapp-6b674-default-rtdb.firebaseio.com/Books/${number}.json`;
    const response = await fetch(url);
    const book = await response.json();

    if (book === null) {
        alert(errorHandling.noSuchBook);
        throw Error(errorHandling.noSuchBook);
    }

    bookShield = getHTMLElement(selectors.bookShield);
    printBook(book);
}

const addBook = async () => {
    const author = getHTMLElement(selectors.bookAuthor).value;
    const title = getHTMLElement(selectors.bookTitle).value;
    if (author === '', title === '') {
        alert(errorHandling.emptyDataForNewBook)
        throw Error(errorHandling.emptyDataForNewBook);
    }

    const book = {
        title: title,
        author: author,
    };
    
}

const printBook = (book) => {
    const li = createHTMLElement('li');
    li.textContent = `author: ${book.author}, title: ${book.title}`;
    bookShield.appendChild(li);
}

const getHTMLElement = (selector) => {
    const element = document.querySelector(selector);
    if (element === null) {
        throw new Error(errorHandling.noHTMLElement)
    }

    return element;
}

const createHTMLElement = (tagName) => {
    const element = document.createElement(tagName);

    return element;
}
