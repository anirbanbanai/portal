function sum(a,b,c){
     const args = [...arguments];
    //  console.log(args)
    const result = a + b + c;
    return result;
}
// console.log(arguments);
const total = sum(334,33,55,55);
// console.log(total)

console.log( sum.length)