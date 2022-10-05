const storage = function () {
    const urlForUsers = 'https://usersbase-9ef41-default-rtdb.firebaseio.com/.json';
    const logged = false;

    const saveUser = function (data) {
        logUser(data)
        requester.post(data, storage.urlForUsers);
    };

    const logUser = function (data) {
        localStorage.setItem(data.email, data.password);
    };

    const removeCurrUser = function () {
        localStorage.clear();
    };

    const removeUser = function () {
        removeCurrUser();
        requester.delete();
    };

    return {
        logUser,
        saveUser,
        removeUser,
        removeCurrUser,
        urlForUsers,
    }
}();