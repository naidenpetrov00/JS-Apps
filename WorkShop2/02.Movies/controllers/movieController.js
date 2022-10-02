const movieController = function () {
    const moviesElementId = 'movie-section';

    const scrollToMovies = function(){
        scroller(moviesElementId);
    }

    return {
        scrollToMovies,
    }
}();