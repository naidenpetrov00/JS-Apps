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

    const postRegister = function (context) {
        userModel
    }

    const postLogin = function(){

    }

    return {
        getRegister,
        getLogin,
        postLogin,
        postRegister,
    }
}();    