const accountId=6772;
let email="tushar@gmail.com";
var accountPassword="1234";
accountCity="Gujarat";
let accountState; //undefined

// accountId=555; //can not change because of const
email="jay@gmail.com";
accountPassword="qwer";
accountCity="suart";

// accountId=2; //not allowed
console.log(accountId);

/*
    prefer not to use var
    beacause of issue in block scope and functional scope
*/

console.table([accountId,email,accountPassword,accountCity,accountState]);
