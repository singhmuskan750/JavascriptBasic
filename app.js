let ranks = [1, 2, 3, 4];

console.log(
    ranks.map((e, index) => {
        return e * 100;
    })
);

let newarr = ranks.map((e, index) => {
    if(e%2===0)
        return e
})
console.log(newarr);