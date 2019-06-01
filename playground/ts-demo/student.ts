
import { Person } from './person';

export class Student{
    private firstName : string;
    private lastName : string;

    // constructor(private firstName : string, lastName : string){
    constructor(obj : Person){
        this.firstName = obj.firstName;
        this.lastName = obj.lastName;
    }

    greet(){
        return "Hello " + this.firstName + " " + this.lastName;
    }
}
