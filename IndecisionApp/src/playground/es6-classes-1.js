class Person {

    constructor(name='Anonymous',age=0){
        this.name = name;
        this.age = age;
        console.log(this.name);
    }

    getGreeting() {
        return `Hi. I am ${this.name}.`;

    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`

    }


}

class Student extends Person{

    constructor(name,age,major='Undecided'){
        super(name,age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    
    getDescription(){
        return 'testing';
    }
}



class Traveller extends Person{

    constructor(name,age,home){
        super(name,age);
        this.homeLocation = home;
        
    }

    hasLocation(){
        return !!this.homeLocation;
    }

    getGreeting(){
        let ret = super.getGreeting();
        if (this.hasLocation){
            ret += ` I live in ${this.homeLocation}. `;
        }
        return ret;
    }

}
const me = new Person("Julian Lim",20);
console.log(me.getDescription());

const other = new Traveller("Julian",22,"Malaysia");
console.log(other.getGreeting())