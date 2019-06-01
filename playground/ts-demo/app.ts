
// •	The Type System 

// var x : string = "Some String";

// x = true;

// •	Destructuring 

// var arr = ["foo", "bar", "bam"];
// var [arr1, arr2, arr3] = arr;

// console.log(arr3);      //bam

// arr3 = "Baz";

// console.log(arr);



// •	Class Constructors


// import { Student } from './student';
// import { Person } from './person';

// var obj : Person = {
//     firstName : "Foo",
//     lastName: "Bar",
//     dob : new  Date("Dec 2, 1986")

// }

// let foo = new Student(obj);
// console.log(foo.greet());

// •	Working with Modules
// •	Arrow Functions
// •	Template Strings


class Foo {}
class Bar{}
class Bam{
    constructor(private foo : Foo, private bar : Bar){}
}

new Bam(new Foo(), new Bar());





// 