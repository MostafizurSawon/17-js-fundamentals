var danishPrice = 50;
var butterBreadPrice = 25;
var toastBiscuitPrice = 10;
var myBudget = 7;
var packedWell = false;

if (danishPrice < myBudget) {
    console.log('Danish kheye danish jabo');
}
else if (butterBreadPrice < myBudget) {
    console.log('Butter bon diye cha khamu');
}
else if (toastBiscuitPrice < myBudget) {
    console.log('toast biscuit khamu');
}
else {
    console.log('Batasha diye cha khabo.');
}

if (danishPrice < myBudget) {
    if (packedWell == true) {
        console.log('danish khabo')
    }
    else {
        console.log('danish khamu na! karon ami khawar age machi kheye felse ordhek')
    }
}
