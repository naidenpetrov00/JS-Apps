(() => {
    const getTemplate = async () => {
        const path = './templates/catTemplate.hbs';
        const response = await fetch(path);
        const result = await response.text();
        return Handlebars.compile(result);
    }

    const render = async () => {
        const template = await getTemplate();

        const renderer = template({
            monkeys: window.monkeys,
        })

        document.getElementsByClassName('monkeys')[0].innerHTML = renderer;
    }

    render();
})();