const Selectors = {
	empty: '',
	repos: 'repos',
	username: 'username',
	li: 'li',
	a: 'a',
}

function loadRepos() {
	const repos = document.getElementById(Selectors.repos);
	repos.innerHTML = Selectors.empty;
	const username = document.getElementById(Selectors.username).value;
	const url = `https://api.github.com/users/${username}/repos`;

	fetch(url)
		.then((response) => response.json())
		.then((data) => displayRepos(data))
		.catch((err) => displayError(err));

	function createRepo(name, url) {
		let ell = document.createElement(Selectors.li);
		let a = document.createElement(Selectors.a);
		a.href = url;
		a.textContent = name;
		ell.appendChild(a);

		return ell;
	}

	function displayRepos(repoItems) {
		repoItems.forEach(repo => {
			const { full_name, html_url } = repo;
			const repoItem = createRepo(full_name, html_url);
			repos.appendChild(repoItem);
		});
	}

	function displayError(err) {
		const listItem = document.createElement(Selectors.li);
		listItem.textContent = err;
		repos.appendChild(listItem);
	}
}