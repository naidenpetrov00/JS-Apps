const Selectors = {
    posts: '#posts',
}

const url = 'https://blog-apps-c12bf.firebaseio.com/';

let postId = '';

const lastAddres = {
    posts: 'posts',
    post: 'posts/',
    comments: 'comments',
}
const json = '.json';

let posts;

const postLoader = function () {
    const dataHandler = function (data) {
        posts = document.querySelector(Selectors.posts)
        const fragment = new DocumentFragment();

        for (const item in data) {
            if (Object.hasOwnProperty.call(data, item)) {
                const element = data[item];

                const option = document.createElement('option')
                option.value = item;
                option.textContent = element.title;
                fragment.appendChild(option);
            }
        }

        posts.appendChild(fragment);
    }

    fetch(url + lastAddres.posts + json)
        .then((response) => response.json())
        .then(dataHandler);
}

const postViewer = function () {
    postId = posts.options[posts.selectedIndex].value;

    const dataHandler = function (data) {
        for (const comment of data.comments) {
            console.log(comment);
        }
    }

    fetch(url + lastAddres.post + postId + json)
        .then((response) => response.json())
        .then(dataHandler);
}