(async function () {
    const { getTemplate, getTemplateString } = window.templates;
    const cardTemplate = await getTemplateString('card');
    Handlebars.registerPartial("card", cardTemplate);

    const cardsListFunc = await getTemplate('cards-list');

    document.getElementById('contacts')
        .innerHTML = cardsListFunc({ contacts });
}());