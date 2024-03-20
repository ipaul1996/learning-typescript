"use strict";
function calculateTax(income, texYear) {
    if (texYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000, 2022);
function calculateTax1(income, texYear = 2022) {
    if (texYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
