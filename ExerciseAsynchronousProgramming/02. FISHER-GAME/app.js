const catchesUrl = 'https://fisher-game.firebaseio.com/catches.json';

const load = async () => {
    const response = await fetch(loadUrl);
    const catchers = await response.json();

    for (const item in catchers) {
        if (Object.hasOwnProperty.call(catchers, item)) {
            const catcher = catchers[item];
            console.log(catcher);
        }
    }
};

const update = () => {

};

const deleteCatcher = () => {

};

const add = async () => {
    const angler = getHTMLElement('#addForm > input.angler');
    const weight = getHTMLElement('#addForm > input.weight');
    const species = getHTMLElement('#addForm > input.species');
    const location = getHTMLElement('#addForm > input.location');
    const bait = getHTMLElement('#addForm > input.bait');
    const captureTime = getHTMLElement('#addForm > input.captureTime');
    const catcher = new Catch(angler, weight, species, location, bait, captureTime);
    const response = await fetch(catchesUrl, {
        method: 'POST',
        body: JSON.stringify(catcher),
    });
};

const getHTMLElement = (selector) => {
    return document.querySelector(selector);
}