require('./style.css');

const SampleMath = require('./math');
const Person = require('./person');

const person1 = new Person('Naiden');

person1.print(document.body, person1.greet());