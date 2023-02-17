function name(a) {
  console.log( "My name is " + a)
}
name("Nagima");

function conus (height, radius) {
  let v = (1/3 * 3.14) * height * radius **2
  console.log("The valume of the conus " + v)
}
conus(2, 10);

function getLength(a) {
  return a.length;
}
console.log(getLength("My name is Nagima"));

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