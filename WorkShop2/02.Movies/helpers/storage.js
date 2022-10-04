const storage = function () {
    const urlForUsers = 'https://usersbase-9ef41-default-rtdb.firebaseio.com/.json';

    const saveUser = function (data) {
        localStorage.setItem(data.email, data.password);
        requester.post(data, storage.urlForUsers);
    };

    const removeCurrUser = function(){
        localStorage.clear();
    };

    const removeUser = function(){
        removeCurrUser();
        requester.delete();
    };

    return {
        saveUser,
        removeUser,
        removeCurrUser,
        urlForUsers,
    }
}();