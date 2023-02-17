// 1 task
function name(a) {
  console.log( "My name is " + a)
}
name("Nagima");
// 2 task
function conus (height, radius) {
  let v = (1/3 * 3.14) * height * radius **2
  console.log("The valume of the conus " + v)
}
conus(2, 10);
// 3 task
function getLength(a) {
  return a.length;
}
console.log(getLength("My name is Nagima"));
//  4 task
function num(a) {
  if(a % 2 === 0) {
    console.log( a + " This number is even.")
  }
  else if (a % 2 !== 0) {
    console.log(a + " This number is odd.")
  }
}
num(9);
num(10);
num(15);
// task 5
function getDegree(a) {
  console.log( a ** 2)
}
getDegree(2);
getDegree(10);

function getDegree2(a) {
  return a ** 2;
}
console.log(getDegree2(5));
// task 6

// task 7
function getNum(a, b, c, d, e){
  return "This is " + (a + b + c+ d+ e);
}
console.log(getNum(5, 6, 8, 9, 1));

// task 8

for (let i = 0; i <= 33; i +=3)
console.log(i);

for( let a =0; a <= 10; a ++){
    console.log("Square of " + a + " equal to " + a*a)
  }
