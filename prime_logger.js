var number = 2;
while (number < 10){
  var count = 0;
  for (var i = 0; i < number; i++){
    if (number%i == 0){
      count++;
    }
    if (count < 3){
      console.log ("2");
    }
  console.log (number);
  }
}
