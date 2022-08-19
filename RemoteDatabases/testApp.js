const selectors = {
    bookNumber: '#bookNumber',
    bookShield: '#books',
}

const errorHandling = {
    noNumberForBook: 'Please specify the number of the book you search',
    noHTMLElement: 'Invalid HTML element',
    noSuchBook: 'No such book in library',
}

let bookShield = '';

const searchBook = async () => {
    const number = getHTMLElement(selectors.bookNumber).value;
    if (number === '') {
        alert(errorHandling.noNumberForBook);
    }

    const url = `https://testapp-6b674-default-rtdb.firebaseio.com/Books/${number}.json`;

    const response = await fetch(url);
    const book = await response.json();

    if (book === null) {
        alert(errorHandling.noSuchBook);
    }
    else {
        bookShield = getHTMLElement(selectors.bookShield);
        printBook(book);
    }
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
