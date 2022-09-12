const parse = (template, data) => {
    return Object.keys(data)
        .reduce((template, prop) => {
            const placeholder = `{{${prop}}}`;
            template = template.replace(placeholder, data[prop]);
            return template;
        }, template);
}

console.log(parse("My name is {{name}} and iam {{age}} years old", { name: "Pesho", age: 5}));