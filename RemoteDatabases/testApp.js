const selectors = {
    bookNumber: '#bookNumber',
}

const errorHandling = {
    noNumberForBook: 'Please specify the number of the book you search',
    noHTMLElement: 'Invalid HTML element',
}

const searchBook = async () => {
    const number = getHTMLElement(selectors.bookNumber).value;
    if (number === '') {
        alert(errorHandling.noNumberForBook);
    }

    const url = `https://testapp-6b674-default-rtdb.firebaseio.com/Books/${number}`;


}

const getHTMLElement = (selector) => {
    const element = document.querySelector(selector);
    if (element === null) {
        throw new Error(errorHandling.noHTMLElement)
    }

    return element
}