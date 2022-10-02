const scroller = function (elementId) {
    const element = takeById(elementId)
    const coordinates = element.getBoundingClientRect()

    window.scroll({
        top: coordinates.y,
        left: coordinates.x,
        behavior: "smooth",
    });
};