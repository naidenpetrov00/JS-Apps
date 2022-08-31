let logged = true;

$(() => {
    const app = Sammy('#main', function () {
        const homePageForLogedUser = () => {
            this.swap('<h2>Home Page</h2>');
        };

        const homePageForNotRegisteredUser = () => {
            
        };

        this.get('#/index.html', () => {
            if (logged) {
                homePageForLogedUser();
            }
            else {
                homePageForNotRegisteredUser;
            }
        });

        this.get('#/about', () => {
            this.swap('<h2>About Page</h2>');
        });
    });

    app.run();
});

