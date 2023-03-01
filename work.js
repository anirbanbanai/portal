// let me = {
//     number: 23,
//     name: 'Anirban',
//     isSingle: true,
//     friend: [
//         name = 'null',
//         ages = [12, 34, 56, 33, 66, 32]
//     ],
//     plan: {
//         blockchain: [
//             learn = 'solidity',
//             work = 'hard',
//             isFinite = false,
//         ]
//     },
//     all: function add(number) {
//         return this.number * number;
//     }

// };

// const sol = me.all.add(23);
// console.log(sol)


const mysun = (num1,num2)=>{
    if((num1+ num2) %2 === 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(mysun(71,32))