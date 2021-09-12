let ranks = [1, 2, 3, 4, 5, 6];

console.log(
    ranks.map((e, index) => {
        return e * 100;
    })
);
// map Array
let newmaparr = ranks.map((e, index) => {
    if(e%2===0)
        return e
})
console.log(newmaparr);

// filter Array

let newfilterarr = ranks.filter((e, index) => {
    if(e%2===0)
        return e
})
console.log(newfilterarr);