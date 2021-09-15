console.log("Merged Class 1 ES6")

const arr = [1, 2, 3, 4]
console.log(arr[2])
const [one, two, three ]= arr
console.log(three)

function getscores(){
    return[90,100]
}
let [x, y, z] = getscores()
// x =10
console.log(x)
console.log(y)
console.log(z)

const obj = {
    name : "Muskan",
    email : "singhmuskan0099@gmail.com",
    age : "21"
}
console.log(obj.email)

let {name, email, age}=obj
console.log(email)

let person = {
    firstname : "Muskan",
    lastname : "Singh",
    age : 21,
    middlename:"DNA"
}

let {firstname, lastname,middlename=""}= person
console.log(firstname)
console.log(middlename)
console.log(lastname)