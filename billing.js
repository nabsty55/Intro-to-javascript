//This is the percentage that determines the transaction charge
var transactionCharge = 0.025;
var amountTendered = 100000;
var billedAmount = amountTendered-(0.025*amountTendered);
console.log ("This is what the billed amount is (less transaction charges);");
console.log (billedAmount);
