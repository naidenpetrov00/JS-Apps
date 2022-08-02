const Selectors = {
    username: '#username',
    repo: '#repo',
    commitsList: '#commits',
}

const commitsList = document.querySelector(Selectors.commitsList);
const fragment = new DocumentFragment();


function loadCommits() {
    let username = document.querySelector(Selectors.username).value;
    let repository = document.querySelector(Selectors.repo).value;

    let url = `https://api.github.com/repos/${username}/${repository}/commits`;

    fetch(url)
        .then((response) => response.json())
        .then(dataHandler)
        .catch(errorHandler)
}

function dataHandler(commits) {

    for (const item in commits) {
        if (Object.hasOwnProperty.call(commits, item)) {
            const commit = commits[item];
            if (commit.author == null) {
                continue;
            }

            const li = document.createElement('li');
            li.textContent = `${commit.author.login}: ${commit.commit.message}`;
            fragment.appendChild(li);
        }
    }

    commitsList.appendChild(fragment);
}

function errorHandler(error) {
    const li = document.createElement('li');
    li.textContent = `Error: ${error.status} (${error.statusText})`;
    commitsList.appendChild(li);
}