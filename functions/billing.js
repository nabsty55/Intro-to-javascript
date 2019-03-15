
const billedAmount = (amountTendered, transactionCharge) => amountTendered-0.25*amountTendered;
console.log("This is what the billed amount is (less transaction charges);" + billedAmount(100000, 0.025));
