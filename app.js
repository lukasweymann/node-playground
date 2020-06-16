const _ = require("lodash");

const names = [ 'Andrey', 'John', 'Alex', 'Jane' ];

_.map(names, (name) => {
   console.log(`Hello  ${name}`); });
