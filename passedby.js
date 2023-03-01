
 let num1 = 5;
 let num2 = 7;

function multiply(a, b){
    a = 27;
    const result = a * b;
    return result;
}

const output = multiply(num1,num2);
console.log(output);

let student1 = {name:'Jolil', partner:'Boesha'};
let student2 = {name: ' Raj', partner:'Anika'};

function makeMovie(couple1, couple2){
    couple1.name = 'Ononto';
    couple2.partner = 'mim'
}

console.log(student1, student2)
makeMovie(student1, student2)
console.log(student1, student2)