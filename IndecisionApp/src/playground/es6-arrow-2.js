
const add = (a,b) =>{
    return a + b;

};


console.log(add(50,50));


const user = {
    name: 'Julian',
    cities: ['New York', 'KL'],
    printplaces(){
        return this.cities.map((city) => this.name + ' has lived in ' + city);
        return cityMaps;
    }
};

console.log(user.printplaces());


// Challenge

const multiplier = {
    numbers: [10,20,30],
    multiplyBy: 3,
    multiply(){
        return this.numbers.map((num) => num*this.multiplyBy);
    }
};

console.log(multiplier.multiply());
