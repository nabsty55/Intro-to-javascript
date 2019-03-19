const ageCalc = (dob, currentDate) => currentDate.slice(6,10) - dob.slice(6,10);
console.log(ageCalc("01-01-1990", "15-03-2019"));
