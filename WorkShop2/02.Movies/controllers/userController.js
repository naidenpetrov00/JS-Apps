const userController = function () {
    const getRegister = function () {
        const template = Handlebars.compile("..\views\register\reigster.hbs")
        const src = document.getElementById("form-sign-up").innerHTML = template();
    }

    return {
        getRegister,
    }
}();    