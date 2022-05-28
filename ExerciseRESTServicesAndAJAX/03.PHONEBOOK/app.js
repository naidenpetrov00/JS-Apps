const selectors = {
    loadButton: '#btnLoad',
    phoneBook: '#phonebook',
    li: 'li',
    button: 'button',
}
const clickEventType = 'click';
const url = 'https://phonebook-nakov.firebaseio.com/phonebook.json';

const phoneBookElement = document.querySelector(selectors.phoneBook)

const attachEvents = () => {
    const loadButton = document.querySelector(selectors.loadButton);

    loadButton.addEventListener(clickEventType, loader);
}

const loader = () => {
    const dataLoader = (data) => {
        for (const phoneEntry in data) {
            const liCreater = () => {
                const liElement = document.createElement(selectors.li);
                liElement.textContent = `${data[phoneEntry].person}:${data[phoneEntry].phone} `;
                const deleteButton = document.createElement(selectors.button);
                deleteButton.id = phoneEntry;
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener(clickEventType, deleteNumber)
                liElement.appendChild(deleteButton);

                return liElement;
            }

            phoneBookElement.appendChild(liCreater());
        }
    }

    fetch(url)
        .then(response => response.json())
        .then(data => dataLoader(data))
}

const deleteNumber = function () {
    const deleteUrl = `https://phonebook-nakov.firebaseio.com/phonebook/${this.id}.json`;
    console.log(this.parentElement);

    fetch(deleteUrl, { method: "DELETE" })
}

attachEvents();