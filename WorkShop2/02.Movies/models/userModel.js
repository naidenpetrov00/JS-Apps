const userModel = function () {
    const register = function (params) {
        const data = {
            email: params.email,
            password: params.password
        }
        if (params.password === params.repeatPassword) {
            storage.saveUser(data);
        }
        else {
            alert("Passwords should be equal!");
        }
    }

    const login = async function (logInfo) {
        const users = await requester.get(storage.urlForUsers);

        for (const key in users) {
            if (Object.hasOwnProperty.call(users, key)) {
                const user = users[key];

                if (user.email === logInfo.email &&
                    user.password === logInfo.password) {
                        storage.logUser(logInfo);
                }
            }
        }
    }

    const logout = function () {
        storage.removeCurrUser();
    }

    return {
        register,
        logout,
        login,
    }
}();