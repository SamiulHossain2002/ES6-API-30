const user ={
    id:3291038,
    name:'samiul',
    login: true,
    age:20,
    address:'pabna'
}

// JSON=Javascript Object Notation.

const stringifyFormat = JSON.stringify(user); //string CONVERT type.
const objectConvert= JSON.parse(stringifyFormat); //object CONVERT type.
// console.log(objectConvert);


const company ={
    name:'web-developer',
    ceo:{
        name:"ALI-VAI",
        id:1,
        food:'kacchi',
    },
    web:{
        work:'website developer',
        employee:11,
        framework:'react',
        
    }
};
const database= JSON.stringify(company);
const convert = JSON.parse(database)
console.log(convert);
