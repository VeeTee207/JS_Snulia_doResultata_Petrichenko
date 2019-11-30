"use strict";
// ES6 Example of how to fill created nested object and how extract its values !!

let money = +prompt("How much do you make per month?", ""); // convert to number

let time = prompt("Enter please todays date in format YYYY-MM-DD:", "");
let appData = { monthlyBudget:money,
                timeData:time, 
                expenses:{},        //obligatory payments
                optionalExpences:{},
                extraIncome:[],
                savings:false, };  

let expencesType = prompt("Enter type of your expence in the month ... ", "");
let expenceAmount = +prompt("How much do you have to spend? ", "0");  //prompt amount and convert it to number 

appData.optionalExpences[expencesType]=expenceAmount;
let moneysAfterExpenceses = appData.monthlyBudget - appData.optionalExpences[expencesType];
let alertPrompt = "So, U can spend up to " + moneysAfterExpenceses/30 + "per day." ;

console.log(appData.optionalExpences);  
// console.log(appData.optionalExpences[expencesType]); 
console.log(moneysAfterExpenceses); 
alert(alertPrompt);

/*
let topObj = {obj:{},};
let a = 'first';
let b = 'second';
topObj.obj[a] = b;
console.log(topObj); 
console.log(topObj.obj[a]);         */
