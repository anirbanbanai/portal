
// // // // // /*
// // // // // truti

// // // // // 1. true
// // // // // 2. any number (+ve, -ve) will be truthy other than 0
// // // // // 3. any string is truty other than empty string

// // // // // falsy
// // // // // 1. false
// // // // // 2. 0
// // // // // 3. '' (empty string)
// // // // // 4. undefind
// // // // // */


// // // // // let x = null ;

// // // // // if(x){
// // // // //     console.log("value of X is trruti");
// // // // // }
// // // // // else{
// // // // //     console.log('value of X is false');
// // // // // }

// // // // let p = "java";
// // // // let q=p;
// // // // p='react';

// // // // console.log(q)

// // // const isTrue = 'false';
// // // if(!isTrue){
// // //     console.log('hello');
// // // }
// // // else{
// // //     console.log('world')
// // // }

// // function sum(p,q){
// //     p+q;
// // }
// // const rs = sum(2,3);
// // console.log(rs)

// if("2" === 2){
//   console.log('IMN');
// }
// else{
//     console.log('gg')
// }

function work(x,y=4){
    return x+y;
}
console.log(work(32))