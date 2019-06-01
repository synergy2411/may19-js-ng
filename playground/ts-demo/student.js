"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        // this.firstName = firstName;
        this.lastName = lastName;
    }
    Student.prototype.greet = function () {
        return "Hello " + this.firstName + " " + this.lastName;
    };
    return Student;
}());
exports.Student = Student;
