// functions
function calculateTax(income: number, texYear: number): number {

    if(texYear < 2022)
        return income * 1.2;

    return income * 1.3;

}


calculateTax(10_000, 2022);  // We should pass exact two arguments
// calculateTax(10_000, "2022"); // Compilation Error
// calculateTax(10_000); // Compilation Error

function calculateTax1(income: number, texYear = 2022): number {

    if(texYear < 2022)
        return income * 1.2;

    return income * 1.3;

}


 


