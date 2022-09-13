(function (scope) {
    
    const templateCache = {};
    const getTemplateString = async (name) => {
        if (!templateCache[name]) {
            const path = `./templates/${name}-template.hbs`;
            const response = await fetch(path);
            const template = response.text();
            templateCache[name] = template;
        }

        return templateCache[name];
    };

    const getTemplate = async (name) => {
        const templatestring = await getTemplateString(name);
        return Handlebars.compile(templatestring);
    };

    window.templates = { getTemplate, getTemplateString };
}(window))