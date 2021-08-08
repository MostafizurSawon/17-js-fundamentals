var gotJob = false;
var moneySaved = 50000;
var hasFlat = false;
var hasHouse = true;

// if (gotJob == true && moneySaved > 200000) {
//     console.log('Lets marry!!');
// }
// else {
//     console.log('She is going for a rich kid!!!')
// }

// if (gotJob == true && moneySaved > 200000 && hasFlat == true) {
//     console.log('Lets marry!!');
// }
// else {
//     console.log('You need money, job and flat bro!!!')
// }

// if (gotJob == true || moneySaved > 200000) {
//     console.log('Lets Marry!!');
// }
// else {
//     console.log('u poor jobless!!!')
// }

if ((gotJob == true && moneySaved > 200000) || hasHouse == true) {
    console.log('Lets Marry!!');
}
else {
    console.log('You poor Jobless begger!!!')
}