const Selectors = {
    input: '#stopId',
}

function getInfo() {
    const stopId = document.querySelector(Selectors.input).value;
    const url = `https://judgetests.firebaseio.com/businfo/${stopId}.json`;

    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data));
}