// bubble sort algorithm, mimics default sort behavior
// function bubble(input, compareFunction) {
//     let arr = input;
//     if (compareFunction === undefined)
//     {
//         arr = input.map(String);
//         compareFunction = (a, b) => {
//             if (a < b) {
//                 return -1;
//             }
// 
//             if (a > b) {
//                 return 1;
//             }
// 
//             return 0;
//         };
//     }
// 
//     for (let last = arr.length - 1; last != 0;--last) {
//         for (let j = 0; j < last; ++j) {
//             if (compareFunction(arr[j], arr[j + 1]) > 0) {
//                 let tmp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = tmp;
//             }
//         }
//     }
// 
//     return arr.map(Number);
// }

// let arr = [ 11, 9, 7, 5, 4, 1 ]
// 
//  console.log(bubble(arr));
//  console.log(bubble(arr, (a, b) => a - b));
//  console.log(bubble(arr, (a, b) => b - a));

// function Student(name, score, specialty)
// {
//     this.name = name;
//     this.score = score;
//     this.specialty = specialty;
//
//     this[Symbol.toPrimitive] = function(hint) {
//        if (hint == "string")
//        {
//            return "Student " + this.name + " studies " + this.specialty;
//        }
//        if (hint == "number")
//        {
//            return this.score;
//        }
//     }
// }
//
// let students = [];
// students.push(new Student('Cara', 85, 'art'))
// students.push(new Student('Bob', 77, 'math'))
// students.push(new Student('Ann', 91, 'economy'))

// console.log(bubble(students, (a, b) => b - a));
// console.log(students)
// alert(students[0])
// console.log(students[0] - students[1]);


// STACK = LIFO last in first out!
// let stack = [];
// 
// stack.push("xxx");
// stack.push("yyy");
// console.log(stack.pop());
// console.log(stack);

// STACK = FIFO first in first out!
// let queue = [];
//
// queue.push("xxx");
// queue.push("yyy");
// console.log(queue.shift());
// console.log(queue);

// let matrix = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
// matrix.length = 2;
//
// for (let i = 0; i < matrix.length; ++i)
// {
//     for (let j = 0; j < matrix[i].length; ++j)
//     {
//         console.log(matrix[i][j]);
//     }
// }

// let obj = {
//   message: "hello",
//   foo(name) {
//     console.log(this.message + ' ' + name);
//   }
// };
// 
// let detached = obj.foo;
// //detached()
// detached.call(obj, 'levon');
// detached.apply(obj, ['levon']);
// 
// let obj = {
//   bar(first, second, third)
//   {
//     alert(third)
//       console.log(`${first} -> ${second}`)
//   }
// }
// 
// let detached = obj.bar;
// 
// detached.apply(obj, [2, 3])
// detached.call(obj, 2, 3)
// 
// obj.bar(2, 3)

// let x = 'name';
// 
// class User {
// 
//   constructor(name) {
//     // вызывает сеттер
//     this.name = name;
//   }
// 
//   get [x]() {
//     return this._name;
//   }
// 
//   set [x](value) {
//     if (value.length < 4) {
//       alert("Имя слишком короткое.");
//       return;
//     }
//     this._name = value;
//   }
// 
// }
// 
// let user = new User("Иван");
// alert(user.name); // Иван
// 
// 
// 
// class Person {
//   constructor(name)
//   {
//     this._name = name;
//   }
// }
// 
// 
// let y = new Person("levon");
// y = { name: 'levon' };
// y = 5;
// y = 'levon'

// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }
// 
//   render() {
//     let date = new Date();
// 
//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;
// 
//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;
// 
//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;
// 
//     let output = this.template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);
// 
//     console.log(output);
//   }
// 
//   stop() {
//     clearInterval(this.timer);
//   }
// 
//   start() {
//     console.log('old');
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }
// 
// class ExtendedClock extends Clock {
//   constructor(x, precision = 1000) {
//     super(x);
//     this.precision = precision;
//   }
// 
//   start() {
//     console.log('new');
//     this.render();
//     this.timer = setInterval(() => this.render(), this.precision);
//   }
// }
// 
// 
// let clock = new ExtendedClock({ template: "h : m : s"}, 2000);
// clock.start();

// class Character
// {
//   constructor(health)
//   {
//     this.health = health;
//   }
// 
//   static compare(lhs, rhs) {
//     return lhs.health === rhs.health;
//   }
// 
//   sayHi()
//   {
//     console.log(`**************************`)
//     console.log(`Hello, my name is ${this.name()}`)
//     console.log(`**************************`)
//   }
// 
//   getHit(dmg)
//   {
//     this.health -= dmg;
//   }
// }
// 
// class Knight extends Character
// {
//   constructor()
//   {
//     super(250);
//   }
// 
//   attack()
//   { 
//     console.log("SWORD!");
//   }
// 
//   name()
//   {
//     return "Knight";
//   }
// }
// 
// class Archer extends Character
// {
//   constructor()
//   {
//     super(200);
//   }
// 
//   attack()
//   { 
//     console.log("ARROW!");
//   }
// 
//   name()
//   {
//     return "Archer";
//   }
// }
// 
// class Wizard extends Character
// {
//   constructor()
//   {
//     super(150);
//   }
// 
//   attack()
//   { 
//     console.log("SPELL!");
//   }
// 
//   name()
//   {
//     return "Wizard";
//   }
// }
// 
// //let chars =[ new Knight(), new Archer(), new Wizard() ];
// //for (let char of chars)
// //{
// //  char.sayHi();
// //}
// 
// let first = new Knight();
// first.sayHi()
// console.log(first.health)
// first.getHit(50);
// console.log(first.health)
// let second = new Knight();
// console.log(second.health)
// console.log(Character.compare(first, new Archer()));


function findKiller(obj, arr) {
  for(const [key, value] of Object.entries(obj)) {
//    let result = true;
//    for(let killed of arr) {
//      const isIn = value.includes(killed);
//      result = result && isIn;
//    }

    let result = arr.every(function(x) {
      return value.includes(x);
    });
    if (result) {
      return key;
    }
  }
}

console.log(
  findKiller({
    'Johnny': ['David', 'Kyle', 'Lucas'],
    'James': ['Jacob', 'Bill', 'Lucas'],
    'Peter': ['Lucy', 'Kyle']
}, ['Lucas', 'Bill'])
);