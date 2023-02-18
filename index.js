// 1. Напишите функцию, которая выводит ваше имя и фамилию.
// functionName("Erjan", "Kydyrov") // My  name is Erjan Kydyrov

function name(a) {
  console.log( "My name is " + a)
}
name("Nagima");
// 2. Напишите функцию, которая выводит объем конуса по заданным параметрам - высота (height) и радиус (radius).
// functionName(height, radius) // Объем конуса равен ...

function conus (height, radius) {
  let v = (1/3 * 3.14) * height * radius **2
  console.log("The valume of the conus " + v)
}
conus(2, 10);
//3. Напишите функцию, которая принимает строку и возвращает ее длину.
// functionName(" ... ") // Длина строки равна ...

function getLength(a) {
  return a.length;
}
console.log(getLength("My name is Nagima"));


//  4. Напишите функцию, которая принимает число и проверяет, четное оно или нечетное.
// functionName(num) // Число - четное || Число - нечетное

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


// 5. Напишите функцию, которая возвращает квадрат числа.
// functionName(num) // Квадрат этого числа равен

function getDegree(a) {
  console.log( a ** 2)
}
getDegree(2);
getDegree(10);

function getDegree2(a) {
  return a ** 2;
}
console.log(getDegree2(5));


// 6. Напишите функцию, которая возвращает корень числа.
// functionName(num) // Корень этого числа равен

Math.sqrt(num) 
console.log(Math.sqrt(4));
console.log(Math.sqrt(125));





// 7. Напишите функцию, которая возвращает периметр пятиугольника.
// functionName(a, b, c, d, e) // Периметр - ...

function getNum(a, b, c, d, e){
  return "This is " + (a + b + c+ d+ e);
}
console.log(getNum(5, 6, 8, 9, 1));


// 8. Напишите цикл, который выводит каждое третье число в промежутке от 0 до 33.
// 0 3 6 9 ...

for (let i = 0; i <= 33; i +=3)
console.log(i);

// 9. Напишите цикл, вычисляющий факториал числа 8. (8!)
// ...
function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log( factorial(8) );
function factorial(a) {
  return(a!=1)? a* factorial(a-1) :1;
}
console.log(factorial(3));
// 10. Напишите цикл, который выводит квадраты чисел от 1 до 10.
// // 1 4 9 ...
for( let a =0; a <= 10; a ++){
    console.log("Square of " + a + " equal to " + a*a)
  }

  // 11. Напишите цикл, который вычисляет сумму чисел от 1 до 25.
// ... 

function sumTo(n) {
  let sum =1;
  for (let i= 1; i <= n; i ++) {
    sum += i;
  }
  return sum;
}
console.log(sumTo(25));

// 12. Напишите цикл, который печатает четные числа от 0 до 20.
// // 0 2 4

for ( let n =0; n <= 20; n ++) {
  if (n % 2 ===0) {
    console.log(n)
  }
}

// 13. Напишите цикл, который печатает нечетные числа от 1 до 15.
// // 1 3 ...
for ( let a =0; a <= 25; a ++){
  if (a % 2 ===1) {
    console.log(a)
  }
}
// 
// 14. Создайте массив из строк и добавьте в начало массива 2 новых элемента, а в конец 3.

let a = ["Nagima", "Nadira", "Venera"];
console.log(a);
a.unshift( "Nazima", "Piter");
console.log (a);
a.push(" Tilek", "Kayrat", "Shailobek");
console.log(a);

// // 15. Создайте массив чисел и вычислите сумму всех четных чисел в массиве.

// let b =[5, 4, 6, 7, 8, 10, 11];
// let result = 0; 
// for (c = 0; c < b.length; c ++) {
//   result += c; {
//   if(c % 2 ===0);
// }
// console.log( result);



// 17. Создайте массив строк и объедините их в одну строку. // ["I", "like", "to", "eat!"]
let elements = ["I", "like", "to", "eat"]; {
  console.log (elements.join(" "));
}


let elements2 = ["I", "wanna", "be", "happy"];{
  console.log (elements2.join(" "))
}
// 18. Создайте массив строк ["one", "two", "three"] и переверните его. // ["three", "two", "one"]

let row =["one", "two", "three", "four"];
console.log(row);
row.reverse();
console.log(row);

// Создайте массив из имен (минимум 3) и выведите каждое имя.
// // Hello Erjan Hello Ermek ... 

let names = ["Nagima", "Nazima", "Azima", "Ayana", "Nuraiym"] ; 
  for (let i = 0; i < names.length; i ++) {
    console.log("Hello " + names[i]);
  }

//   20. Создайте массив из чисел и выведите квадраты этих чисел. [2, 3, 4, 5]
// // 4 9 16 25
let numbers2 = [ 1, 2, 3, 4];
  for (let i = 0; i < numbers2.length; i ++) {
    console.log(numbers2[i] **2);
  }
  // 21. Создайте массив строк и проверьте есть ли такой элемент в массиве. // ["cat", "dog", "snake"] 

  let animals = ["cat", "dog", "snake", "lion"];
  for(let i = 0; i < animals.length; i ++) {
    function animals2([a]) {
      if (animals2 [a] === animals [i]) {
        console.log(animals2 [a] - true);
      }
      else {
        console.log(animals2[a] - false)
      }
    }
  }  
  animals2(["cat"]);
  animals2(["dog"]);