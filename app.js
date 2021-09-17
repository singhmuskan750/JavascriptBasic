let concert =  false;

let attendConcert = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (concert) {
            resolve("BOB ATTENDED THE CONCERT"); 
        }
        else{
            reject("BOB DID NOT ATTENDED THE CONCERT");
        }
    }, 2000);
});

console.log(attendConcert)
// attendConcert.then((data)=>console.log(data)).then((error)=>console.log(error))


// async function afunc(){
//     try{
//         let result = await attendConcert
//         console.log(result)
//     }
//     catch(e){
//         console.log(e)
//     }
 
// }
// afunc()
let  afunc= async ()=>{
    try{
        let result = await attendConcert
        console.log(result)
    }
    catch(e){
        console.log(e)
    }
 
}
afunc()

// ES6 way for the same

// const afunc = async () =>{
//     let result = await attendConcert()
//     return result
// }



// attendConcert.then((data)=>console.log(data));
// attendConcert.catch((error)=>console.log(error));