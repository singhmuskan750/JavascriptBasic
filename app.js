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