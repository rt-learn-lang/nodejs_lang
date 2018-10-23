var fs = require('fs')


// Callback using Anonymous function
fs.readFile('./data.json', function(err, data) {});


// Callback using arrow function
fs.readFile('./data.json', (err, data) => {})