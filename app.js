let concert =  true;

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
attendConcert.then((data)=>console.log(data)).then((error)=>console.log(error))


// attendConcert.then((data)=>console.log(data));
// attendConcert.catch((error)=>console.log(error));