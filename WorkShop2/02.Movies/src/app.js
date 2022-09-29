const app = Sammy('#container', function () {
    this.get('#/movies', movieController.scrollToMovies)
});

$(() => {
    app.run();
})