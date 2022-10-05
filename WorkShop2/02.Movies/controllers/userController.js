const userController = function () {
    const signUpFormId = 'form-sign-up';
    const loginFormId = 'form-login';
    const signUpForm = takeById(signUpFormId);
    const loginForm = takeById(loginFormId);

    const getRegister = async function () {
        const response = await fetch('./views/register/register.hbs');
        const template = await response.text();
        signUpForm.innerHTML = template;

        scroller(signUpFormId,);
    }

    const getLogin = async function () {
        const response = await fetch('./views/login/login.hbs');
        const template = await response.text();
        loginForm.innerHTML = template;

        scroller(loginFormId,);
    }

    const getLogout = function () {
        userModel.logout();
    }

    const postRegister = function (context) {
        userModel.register(context.params);
    }

    const postLogin = function (context) {
        userModel.login(context.params);
    }

    return {
        getRegister,
        getLogin,
        getLogout,
        postLogin,
        postRegister,
    }
}();    