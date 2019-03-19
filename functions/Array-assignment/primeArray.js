
const shuffle = require('./shuffle');
var arr = [];


const primelogger = (min, max) => {
  for( var Number = min; Number <= max; Number++)
   {
     count = 0;
     for (i = 2; i <= Number/2; i++)
     {
     if(Number%i === 0)
     {
         count++;
       break;
   }
     }
     if(count == 0 && Number != 1 )
     {
   console.log(Number);
   arr.push(Number);

     }

   }
   //return 0;
}

console.log(primelogger(1,100));
console.log("__________________________________________prime array");
console.log(arr);
console.log("__________________________________________shuffled array");


console.log(shuffle(arr));
let sortAscending = array => {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

console.log("==============================array in ascending order");
console.log(sortAscending(arr));
