// Primitive
let num=33
let name="tushar"
let isLoggedIn=true
let state=null
let num2=123456789n
let city=undefined


//Non-Primitive
//array onject function
let arr=["tushar","hitesh","meet"]
let myObj={
    name:"tushar",
    age:21,
    city:"bhavnagar"
}

let myFun=function(){
    console.log("hello tushar");
    
}

//Stack(Primitive)  copy 
//Heap(Non-Primitive) original

let youTube="tusharsolankidotcom"
let anotherYoutube=youTube
anotherYoutube="abc@google.com"
console.log(anotherYoutube);// abc@google.com
console.log(youTube); //tusharsolankidotcom

//because of stack only changes apply in copy not in original value

let myObj1={
    name:"tushar",
    email:"tushar@google.com",
    upi:"tushar@ybl"

}

let myObj2=myObj1;

myObj2.name="secondname";
console.log(myObj2); //{ name: 'secondname', email: 'tushar@google.com', upi: 'tushar@ybl' }
console.log(myObj1); //{ name: 'secondname', email: 'tushar@google.com', upi: 'tushar@ybl' }

//in a heap(non primitive) datatype changes are applin original value







