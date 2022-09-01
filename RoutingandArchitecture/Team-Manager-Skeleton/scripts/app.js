$(() => {
    const app = Sammy('#main', function () {
        const homePage = () => {
            document.getElementById('home').style.display = "block";
            document.getElementById('catalog').style.display = "none";
            document.getElementById('about').style.display = "none";
            document.getElementById('login').style.display = "none";
            document.getElementById('register').style.display = "none";
        };

        const catalogPage = () => {
            document.getElementById('about').style.display = "none";
            document.getElementById('catalog').style.display = "block";
            document.getElementById('home').style.display = "none";
            document.getElementById('login').style.display = "none";
            document.getElementById('register').style.display = "none";
        }

        const aboutPage = () => {
            document.getElementById('about').style.display = "block";
            document.getElementById('catalog').style.display = "none";
            document.getElementById('home').style.display = "none";
            document.getElementById('login').style.display = "none";
            document.getElementById('register').style.display = "none";
        }

        const loginPage = () => {
            document.getElementById('home').style.display = "none";
            document.getElementById('catalog').style.display = "none";
            document.getElementById('about').style.display = "none";
            document.getElementById('login').style.display = "block";
            document.getElementById('register').style.display = "none";
        }

        const registerPage = () => {
            document.getElementById('home').style.display = "none";
            document.getElementById('catalog').style.display = "none";
            document.getElementById('about').style.display = "none";
            document.getElementById('login').style.display = "none";
            document.getElementById('register').style.display = "block";
        }

        this.get('#/index.html', homePage);
        this.get('#/catalog', catalogPage);
        this.get('#/about', aboutPage);
        this.get('#/login', loginPage);
        this.get('#/register', registerPage);
    });

    app.run();
});

const login = () => {
    const username = document.querySelector('#login #username').value;
    const password = document.querySelector('#login #password').value;
};

const register = async () => {
    let username = document.querySelector('#register #username');
    let password = document.querySelector('#register #password');
    let repeatedPassword = document.querySelector('#register #repeatPassword');
    const registerUrl = 'https://teammanager-3991a-default-rtdb.firebaseio.com/Users.json';

    if (password.value !== repeatedPassword.value) {
        alert('You should repeat the same password');
    }
    else {
        const user = {
            username,
            password
        };

        const response = await fetch(registerUrl, {
            method: "POST",
            body: JSON.stringify(user),
        });
        
        alert('user registered successfully');

        username.value = '';
        password.value = '';
        repeatedPassword.value = '';
    }
};