const Selectors = {
    username: "#username",
    repo: "#repo",
}

let url = "https://api.github.com/repos/<username>/<repository>/commits";

function loadCommits() {
    let username = document.querySelector(Selectors.username).value;
    let repository = document.querySelector(Selectors.repo).value;


}