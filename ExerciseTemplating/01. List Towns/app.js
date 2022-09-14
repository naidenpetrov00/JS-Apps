const errorHandling = {
    emptyInput: 'Please enter towns'
};

const loadTowns = () => {
    let towns = document.getElementById('towns').value;
    if (!towns) {
        alert(errorHandling.emptyInput);
    }
    else {
        towns = towns
            .split(', ')
            .map(element =>
                ({ name: element })
            )
        renderTowns(towns);
    }
};

const renderTowns = async (towns) => {
    const template = await getTemplate();
    const rendered = template({ towns });

    document.getElementById('root').innerHTML = rendered;
};;

const getTemplate = async () => {
    const path = './templates/listTemplate.hbs';
    const response = await fetch(path);
    const result = await response.text();
    return Handlebars.compile(result)
}