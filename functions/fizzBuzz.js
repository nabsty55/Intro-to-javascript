//var x = 1;
const fizzBuzz = (startingNum) => {
  while (startingNum <= 100){
    if (startingNum%3===0 && startingNum%5===0){
      console.log("FizzBuzz");
    }else if (startingNum%3===0) {
      console.log("Fizz");
    }else if (startingNum%5===0){
      console.log("Buzz");
    }else{
      console.log(startingNum);
    }
    startingNum ++;
  }
}
console.log(fizzBuzz(1));
