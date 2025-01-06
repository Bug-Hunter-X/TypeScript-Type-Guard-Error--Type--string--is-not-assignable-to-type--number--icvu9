function printNumber(num: number): void {
  console.log(num);
}

function processNumber(num: number | string): void {
  if (typeof num === 'number') {
    printNumber(num as number); // Solution 1: Type assertion
  } else {
    console.log(typeof num);
  }
}

//Alternative Solution: Function Overloading
function processNumber2(num: number): void; 
function processNumber2(num: string): void; 
function processNumber2(num: number | string): void {
  if (typeof num === 'number') {
    printNumber(num); 
  } else {
    console.log(typeof num);
  }
} 