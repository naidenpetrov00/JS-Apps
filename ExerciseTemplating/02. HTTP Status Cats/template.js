(() => {
    const getTemplate = async () => {
        const path = './templates/catTemplate.hbs';
        const response = await fetch(path);
        const result = await response.text();

        return Handlebars.compile(result);
    }

    const renderCatTemplate = async () => {
        const template = await getTemplate();

        const renderer = template({
            cats: window.cats,
        })

        document.getElementById('allCats').innerHTML = renderer;
    }

    renderCatTemplate();
})()