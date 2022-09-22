class Person {
    constructor(name) {
        this.name = name;
    };

    greet() {
        return `Hello my name is ${this.name}`
    };

    print(selector, mesagee) {
        selector.innerHTML = mesagee
    };
    
};

module.exports = Person;