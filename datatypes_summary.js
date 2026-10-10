// Primitive

// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 8273747382927374838848n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["ironmam", "thor", "spiderman"];
let myObj = {
    name: "Sahil",
    age: 20,
}

// const myFunction = function(){
//     console.log("hello world");   
// }

// console.log(typeof );


// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive),   Heap (non primitive)

let myYoutubename = "sahilgulia"

let anothername = myYoutubename
anothername = "sahilgulia12121"

// console.log(myYoutubename);
// console.log(anothername);

let userone = {
    email: "user@mail.com",
    upi: "Not.me"
}
 
let usertwo = userone

// console.log(userone);
// console.log(usertwo);

