const movieController = function () {
    const movielocation = 'http://127.0.0.1:5500/02.Movies/#/movies'
    const moviesElement = document.getElementsByClassName('text-center')[0];

    const scrollToMovies = function(){
        scroller(moviesElement, movielocation);
    }

    return {
        scrollToMovies,
    }
}();