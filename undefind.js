/*
  8 way to get Undefind

  1. variable that is not initialized will give undefind
  2. function with no return
  3. parameter that will passed undefind
  4. if retent has nothing on the right side will return
  5. 

*/ 
// let first;
// console.log(first)

//  function third(a,b,c,d){
//     const total = a + b + c + d;
//     console.log()
//  }

function noNegetive(a,b){
    if(a < 0 || b < 0){
        return 
    }
    return a + b;
}

const total = noNegetive(2,-7);
console.log(total)