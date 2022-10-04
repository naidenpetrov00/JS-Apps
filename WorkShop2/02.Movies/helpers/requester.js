const requester = function () {
    const post = async function (data, url) {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
        })

        response.json().then(data=>{
            console.log(data);
        })
    }

    return {
        post,
    }
}();