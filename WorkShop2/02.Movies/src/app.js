$(() => {
    const app = Sammy('#container', function () {
        //home
        this.get('#/index.html', homeController.scrollToHome);

        //movies
        this.get('#/movies', movieController.scrollToMovies);

        //register
        this.get('#/register', userController.getRegister);
        this.post('#/register', userController.postRegister)

        //login
        this.get('#/login', userController.getLogin)
    });

    app.run('#/index.html');
});

