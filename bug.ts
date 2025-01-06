function printNumber(num: number): void {
  console.log(num);
}

function processNumber(num: number | string): void {
  if (typeof num === 'number') {
    printNumber(num); // Type 'string' is not assignable to type 'number'.
  } else {
    console.log(typeof num); 
  }
}