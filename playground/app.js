// var x = "Some String";

// console.log(typeof x);

// x = 10;

// console.log(typeof x);

// x = true;

// console.log(typeof x);

// x = {};
// x = function(){}
// x = [];


// var x = "20";

// var z = 20;

// console.log(x == z);        // true
// console.log(x === z);        // false


// var y = 10;

// console.log(x+y);       // 2010
// console.log(x - y);       // 10


// Objects : 

//1. Literal Methods

// var myBooks = ["book1", "book2", "book3"];

// var box = {
//     width : 4,
//     length : 6,
//     getVolume : function(){
//         return this.width * this.length;
//     },
//     books : myBooks
// }

// box.size = 12;

// console.log(delete box.xyz);
// console.log(box);

// box.books.push("book4");
// console.log(box.books.length);      // 4
// console.log(myBooks.length);      // ?


// console.log(box.getVolume);




// var arr = ["Foo", 32, true, {}, function(){console.log("Hello World!")}, []];

// arr[4]();


//2. Constructor Methods

// function Person(firstName, lastName){
//     // var this = {}
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.sayHello = function(){
//         return "Hello " + this.firstName + " "+  this.lastName;
//         // return this.firstName +  this.lastName;
//     }
//     // return this;
// }

// Person.firstName = "Some Property";


// console.log(Person.firstName);


// var foo = new Person(10, -10);
// console.log(foo.firstName);
// var bam = new Person("Bam", "Baz");
// console.log(bam.sayHello());
// console.log(foo.sayHello());





//3. Instance Methods

// var Shoe = {
//     size : 9,
//     gender : "Women"
// }

// var magicShoe = Object.create(Shoe);


// console.log(magicShoe.hasOwnProperty('size'));  //False
// console.log(Shoe.hasOwnProperty('size'));  //true

// console.log(magicShoe.isPrototypeOf(Shoe));
// console.log(Shoe.isPrototypeOf(magicShoe));







// console.log(magicShoe);         // empty object { }

// console.log("Gender : ", magicShoe.gender);      // ?

// magicShoe.size = 10;

// console.log("SIZE : ", magicShoe.size);

// console.log(magicShoe);  // { size :10}


// var str = "Some String";
// var str2 = "Welcome to JavaScript";

// String.prototype.countAll = function(letter){
//     var counter = 0;

//     for(var i =0 ; i< this.length; i++){
//         if(this.charAt(i).toUpperCase() == letter.toUpperCase()){
//             counter++;
//         }
//     }

//     return counter;
// }

// console.log("Occurence : ", str2.countAll('a'));  


// Functions : aree first-class citizens

// function statement
// function add (num1 , num2){
//     return num1 + num2;
// }

// function expression
// var addition = function (num1 , num2){
//     return num1 + num2;
// }

// console.log(add(3,5));
// console.log(addition(3,5));          //


// IIFE : 

// (function(){
//     console.log("IIFE called");
// }());



// function b(){
//     var myVar =201;
//     function a(){
//         console.log(myVar);         //101
//     }
//     a();
// }

// var myVar =101;

// b();

//Nested function

// function mystery(){
//     var chooseNumber = function (){
//         return 12;
//     }
//     return chooseNumber;
//     var chooseNumber = function (){
//         return 12;
//     }
// }

// var nestedFunc = mystery
// console.log(mystery()());         //?


// Bind, call, apply

// global.firstName = "Global Fname";
// global.lastName = "Global Lname";

// var person = {
//     firstName: "Foo",
//     lastName: "Bar",
//     getFullName: function () {
//         var nestedOne =function() {
//             return this.firstName + " " + this.lastName;
//         }
//         return nestedOne();
//     }
// }

// console.log(person.getFullName());          //?


// Bind - returned function copy with new reference
// Call - actually call the function with new reference, 
// Apply - Same as call(), but with different way of supplying the parameter

// var user = {
//     fullName : "Foo Bar"
// }
// function sayHello (){
//     console.log("Hello " + this.fullName);
// }

// var copiedFunc = sayHello.bind(user);

// copiedFunc();

// Function borrowing

// var user = {
//     firstName : "Foo",
//     lastName : "Bar",
//     greet : function(){
//         return "Hi " + this.firstName + " " + this.lastName;
//     }
// }

// var user2 = {firstName : "Bam", lastName : "Baz"};

// var bindedFunc = user.greet.bind(user2);

// console.log(bindedFunc());


// function multiply(a,b,c){
//     return a*b*c;
// }

// var doubleValue = multiply.bind(null, 2);
// var tripleValue = multiply.bind(null, 3);

// console.log(doubleValue(4,3));      //24
// console.log(doubleValue(5,7));      // 70
// console.log(tripleValue(2,3));      // 18


// Call * Apply

// var user = {
//     fisrtName : "Foo",
//     lastName : "Bar",
//     greet : function(lang){
//         if(lang === 'en'){
//             return "Hello " + this.fisrtName + " " + this.lastName;
//         }else if(lang === 'es'){
//             return "Hola " + this.fisrtName + " " + this.lastName; 
//         }
//     }
// }
// var logName = function(language){
//     console.log("[LOGGER]", this.greet(language));
// }

// logName.call(user, "en");
// logName.apply(user, ["es"]);


//Closures

// function testClosure(){
//     var x = 4;
//     return function(){
//         return ++x;
//     }
// }

// var tempFunc = testClosure();
// console.log(tempFunc());        // 5
// console.log(tempFunc());        // ?


// function buildFunctions() {
//     var arr = [];

//     for (var i = 0; i < 3; i++) {
//         // let j = i;
//         // arr.push(function () {
//         //     return j;
//         // })


//         arr.push((function(j){
//             return function(){
//                 return j;
//             }
//         })(i))

//     }

//     return arr;
// }

// var arr = buildFunctions();

// console.log(arr[0]());      //3
// console.log(arr[1]());      //3
// console.log(arr[2]());      //3


// function demo(arr){
//     if(arr.length > 2){
//         let load= "LOADING";
//         console.log(flash);
//     }else{
//         let flash = "Flashing";

//     }
// }

// demo([1,2,3,4]);

// function Currying

// add(2,3,4);     // result : 9
// add(2)(3)(4);

// function add(num1) {    //3
//     return function (num2) {        //4
//         return function (num3) {
//             return num1 + num2 + num3;
//         }
//     }
// }

// var result = num1 => num2 => num3 => num1+num2+num3;

// var addByThree = add(3);
// var addThreeAndFour = addByThree(4);
// var result = addThreeAndFour(5);
// console.log(result)


// var jQuery = $ = (function dollarSign(selector){
//     return {
//         find : function(element){
//             return {
//                 change : function(text){
//                     return "Sample " + text;
//                 }
//             }
//         }
//     }
// })()

// dollarSign("#app").find("").change("")