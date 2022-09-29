const movieController = function () {
    const moviesElement = document.getElementsByClassName('text-center')[0];
    const coordinates = moviesElement.getBoundingClientRect();
    const scrollToMovies = function () {
        window.scroll({
            left: coordinates.y,
            behavior: "smooth",
        })
    }

    return {
        scrollToMovies,
    }
}();