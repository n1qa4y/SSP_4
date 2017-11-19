var lodash = require('lodash');

var names_s = ['LSP', 'Cocaine', 'MMA', 'Flowers', 'Test'];
var names_2s = ['Req', 'Linkin park', 'Wi-fi', 'Trains'];

lodash.each([names_s, names_2s], function (nameGroup) {
    DrugTest(nameGroup);
});

function DrugTest(values) {
    lodash.find(values, function (name) {
        if (name === 'Cocaine'){
            console.log(name +' - Wow, you have big troubles.');
        }
        else {
            console.log(name +' - Okay, no problems.');
        }
    });
}