const homeController = function () {
    //const homelocation = 'http://127.0.0.1:5500/02.Movies/#/index.html';
    const homeElementId = 'container';

    const scrollToHome = function () {
        scroller(homeElementId);
    }

    return {
        scrollToHome,
    }
}();