const scroller = function (element, location) {
    const coordinates = element.getBoundingClientRect()

    window.scroll({
        top: coordinates.y,
        left: coordinates.x,
        behavior: "smooth",
    });

    window.location.href = location;
};