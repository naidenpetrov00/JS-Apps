(async function () {
    const getTemplateString = async (name) => {
        const path = `./templates/${name}-template.hbs`;
        const response = await fetch(path);
        return response.text();
    };

    const getTemplate = async (name) => {
        const templatestring = await getTemplateString(name);
        return Handlebars.compile(templatestring);
    };

    const cardTemplate = await getTemplateString('card');
    Handlebars.registerPartial("card", cardTemplate);

    const cardsListFunc = await getTemplate('cards-list');

    document.getElementById('contacts')
        .innerHTML = cardsListFunc({ contacts });
}());