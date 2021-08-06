var tableLength = 12;
var tourDestinations = ['coxsbazar', 'nepal', 'vutan', 'paris'];

tourDestinations.indexOf('vutan');

var fourthDestination = tourDestinations[3];
tourDestinations[1] = 'srilanka';

tourDestinations.push('London');
tourDestinations.pop();

if (tourDestinations[1] == 'nepal') {
    console.log('Phara ahare ahare');
}
else if (tourDestinations[1] == 'china') {
    console.log('china tor kache jamuna');
}
else if (tourDestinations.length == 4) {
    console.log('aro taka ase aro besi ghurbo');
}
else {
    console.log('kothao jamuna basai thakmu ar mosa marbo');
}

var eggPrice = 32;
var myBudget = 32;
if (eggPrice <= myBudget) {
    console.log('ami dim khabo.');
}

if (eggPrice >= myBudget) {
    console.log('lebu diye vat khabo');
}