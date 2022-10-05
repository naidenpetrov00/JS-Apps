const requester = function () {
    const post = async function (data, url) {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
        });
    };

    const get = async function (url) {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    };

    return {
        post,
        get,
    };
}();