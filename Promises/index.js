

// Simple Function

// function Success()
// {
//     console.log("Success ")
// }

// function failure()
// {
//     console.log("failure")
// }

// function CheckPromise(userinput,Success,failure)
// {
//     userinput===true ? Success() : failure() ;
// }

// CheckPromise(true,Success,failure);


//******** */ Promises Practice Example#1 ************

// let promise = new Promise(
//     function(resolve , reject)
//     {
//         setTimeout(
//             function(){
//                 console.log("New Promise");
//                 reject()
//             },2000   )

//         })
//         promise.then(
//             function()
//             {
//                 console.log("Promise Resolve")
//             }
//         )
     

//******** */ Promises Practice Example#2 ************

// function Success(){console.log("Success")}
// function Failure(){console.log("Failure")}
// function CheckuserPromise(userinput)
// {
//     new Promise(function(resolve,reject){
//         if(userinput)
//         resolve()
//         else
//         reject()

//     })
// }
// CheckuserPromise(true)



//******** */ Very Imp Promises Practice Example#3 ************

// const anyFuntion = ()=> {
//     return Math.floor(Math.random() * 10) % 2 === 0 ? true : false;
// };

// const resolveFunction =()=> {
//     console.log("Success")
// }
// const rejectFunction = () =>{
//     console.log("Failure")
// }

// const result = new Promise((resolve, reject) => {

//     setTimeout(() => (anyFuntion() ? resolve() : reject()), 2000);

// });
// result.then(resolveFunction).catch(rejectFunction);
// console.log("Hello World")


//******** */ Very Imp Promises Practice Example#4 ************

// const result = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         console.log("new Promise");
//         resolve()
//     }, 2000);

// });
// result.then(function(){

//     console.log(" Promise Resolve");
//     return 2;   // Yeah next .then(etc) ko Value send krdy ga
// })
// .then(function(var1){
//     console.log(var1);
//     return var1 +2; // Yeah next .then(etc) ko Value send krdy ga "Same"
// })
// .then(function(var2){
//     console.log(var2);
    
// })

// .catch(function(){
//     console.log("ERROR");
// })