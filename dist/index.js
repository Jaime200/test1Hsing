"use strict";
function UPCFn() {
    const upc = "796030114977";
    const upcReverse = upc.split("").reverse().join("");
    const firstChar = upcReverse.charAt(0);
    const arrUpcReverse = [...upcReverse.split("")];
    arrUpcReverse.shift();
    const result = getSumUPC(arrUpcReverse);
    console.log(validateUPC(result, Number(firstChar)) ? "Correcto" : "Incorrecto");
}
function getSumUPC(arrUpcReverse) {
    let evenNumber = 0;
    let oddNumber = 0;
    for (const [index, numberChar] of arrUpcReverse.entries()) {
        switch ((index + 1) % 2) {
            case 1:
                oddNumber += Number(numberChar);
                break;
            case 0:
                evenNumber += Number(numberChar);
                break;
        }
    }
    const result = (oddNumber * 3) + evenNumber;
    return result;
}
function validateUPC(resultNumber, firstCharNumber) {
    const mod = resultNumber % 10;
    switch (mod) {
        case 0: return (0 === firstCharNumber);
        default:
            console.log((10 - mod));
            return (10 - mod) === firstCharNumber;
    }
}
UPCFn();
