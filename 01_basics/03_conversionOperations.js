let score=33;

console.log(typeof(score)); //number

score="33"
let valueInNUmber=Number(score)
console.log(typeof(valueInNUmber)); //number

score="33abc"
valueInNUmber=Number(score)
console.log(typeof(valueInNUmber)); //number
console.log(valueInNUmber); //NaN

score=null
valueInNUmber=Number(score)
console.log(valueInNUmber); //0

score=undefined
valueInNUmber=Number(score)
console.log(valueInNUmber); //NaN

//true=>1 "string"=>NaN

let isLoggedIn=1;
let booleanValue=Boolean(isLoggedIn); //true
//""=>false "tushar"=>true 1=>true 0=>false
console.log(booleanValue);

let someNumber=33
let stringValue=String(someNumber)
console.log(stringValue);
console.log(typeof stringValue); //string






