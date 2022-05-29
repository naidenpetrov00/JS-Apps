const selectors = {
    sendButtonId: '#submit',
    refreshButtonId: '#refresh',
    textAreaId: '#messages',
    nameInputId: '#author',
    messageInputId: '#content',
};
const clickType = 'click';
const url = 'https://rest-messanger.firebaseio.com/messanger.json';

let messageStructure = {
    author: '',
    content: '',
}

function attachEvents() {
    const sendButton = document.querySelector(selectors.sendButtonId);
    sendButton.addEventListener(clickType, sendFunctionality);
    const refreshButton = document.querySelector(selectors.refreshButtonId)
    refreshButton.addEventListener(clickType, refreshFunctionality)
}

const sendFunctionality = () => {
    const nameInput = document.querySelector(selectors.nameInputId);
    const messageInput = document.querySelector(selectors.messageInputId);

    messageFiller(nameInput.value, messageInput.value);

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(messageStructure),
    })

    nameInput.value = '';
    messageInput.value = '';
}

const refreshFunctionality = () => {
    const textArea = document.querySelector(selectors.textAreaId);
    let name = '';
    let text = '';

    const dataHandler = (data) => {
        for (const currentData in data) {
            name = data[currentData].author;
            text = data[currentData].message;
            textArea.innerHTML += `${name}: ${text}\n`;
        }
    }

    fetch(url)
        .then(response => response.json())
        .then(data => dataHandler(data))
}

const messageFiller = (name, message) => {
    messageStructure.author = name;
    messageStructure.message = message;
}

attachEvents();