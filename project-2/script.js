var cursorOffset = {
    left : 0
  , top  : 0
 }
 
 document.getElementById('container').addEventListener("mousemove", function (e) {
   var $cursor = document.getElementById('cursor')
 
   $cursor.style.left = (e.pageX - cursorOffset.left) + 'px';
   $cursor.style.top = (e.pageY - cursorOffset.top) + 'px';
 
 }, false);

// console.log('Hello, World!');

// let p =
// document.getElementById('my-text');
// p.innerText = 'Hello, World!';

// let name= 'Husna';

// console.log(name)

// let greeting= 'Hello, ${name}'; // Becomes 'Hello, Husna'
// console.log(greeting);

// //A Leap year is a leap year if it is divisble by 400 OR
// // divisible by 4 but not 100.

// let year = 2022;
// let isLeapYear; // true or false

// isLeapYear = (year % 400 = 0) || (year % 4 = 0 && year % 100 

