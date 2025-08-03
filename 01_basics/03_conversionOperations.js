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


// operation

let value=3;
let negValue=-value;
// console.log(negValue); //-3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**3);
// console.log(2%3);

console.log(1+"2");//12
console.log(1+2+"2");32
console.log("1"+2);//12
console.log("1"+1+"2"+1); //1121

console.log(+true); //1
console.log(+""); //0

//prefix and postfix ++num num++











