$(() => {
    const app = Sammy('#container', function () {
        //home
        window.onload = homeController.scrollToHome;
        this.get('#/index.html', homeController.scrollToHome);

        //movies
        this.get('#/movies', movieController.scrollToMovies);

        //register
        this.get('#/register', userController.getRegister)
    });

    app.run('#/index.html');
});