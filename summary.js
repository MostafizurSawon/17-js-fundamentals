var tableLength = 12;
var tourDestinations = ['coxsbazar', 'nepal', 'Bhutan', 'paris'];

var position = tourDestinations.indexOf('Bhutan');
console.log(position);

var fourthDestination = tourDestinations[3];
tourDestinations[1] = 'srilanka';
console.log(tourDestinations)
tourDestinations.push('London');
tourDestinations.pop();

if (tourDestinations[1] == 'nepal') {
    console.log('Pahare ahare ahare');
}
else if (tourDestinations[1] == 'china') {
    console.log('china tor kache jabona');
}
else if (tourDestinations.length == 4) {
    console.log('aro taka ase aro besi ghurbo');
}
else {
    console.log('kothao jabona basai thakbo ar mosha marbo');
}

var eggPrice = 32;
var myBudget = 32;
if (eggPrice <= myBudget) {
    console.log('ami dim khabo.');
}

if (eggPrice >= myBudget) {
    console.log('lebu diye vat khabo');
}