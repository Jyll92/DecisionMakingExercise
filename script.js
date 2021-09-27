// 1
let randomNum = Math.floor(Math.random() * 5) + 1;
console.log(randomNum);
// 1b
if (randomNum >= 4) {
    console.log("randomNum is greater than or equal to 4");
} else if (randomNum > 1) {
    console.log("randomNum is equal to 2 or 3");
} else {
    console.log("randomNum is 1");
}
// 1c
if (randomNum != 3) {
    console.log("randomNum is NOT 3");
}
// 1d
if (randomNum != 3 && randomNum !=5) {
    console.log("randomNum is NOT 3 or 5");
}
// 1e
if (randomNum == 4 || randomNum == 2) {
    console.log("randomNum is equal to 2 or 4");
}

// Bonus
// 2
console.log(randomNum >= 4 ? "randomNum is greater than or equal to 4" : "randomNum is less than 4");

// 3
switch (randomNum) {
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        break;
}