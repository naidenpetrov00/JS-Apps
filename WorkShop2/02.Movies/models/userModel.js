const userModel = function () {
    const register = function (params) {
        const data = {
            email: params.email,
            password: params.password,
            repeatPassword: params.repeatPassword,
        }
        if (data.password === data.repeatPassword) {
            storage.saveUser(data);
        }
        else {
            alert("Passwords should be equal!");
        }
    }

    const logout = function () {
        storage
    }

    return {
        register,
        logout
    }
}();