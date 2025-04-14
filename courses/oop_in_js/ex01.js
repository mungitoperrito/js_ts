// Procedural style

let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWages(baseSalary, overtime, rate){
    return baseSalary + (overtime * rate)
}

console.log(getWages(baseSalary,overtime,rate));


// OO style
let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,

    getWages: function(){
        return this.baseSalary + (this.overtime * this.rate);
    }
};

console.log(employee.getWages())