"use strict";

let time, money;
function start() {
    time = prompt("Enter please todays date in format YYYY-MM-DD:", ""),
    money = +prompt("How much do you make per month?", ""); // convert to number
    console.log('hello within function');
    console.log(typeof(money) + "   " +money);
    while ( money==null || isNaN(money) || money =="" ) {
       // console.log(typeof(money) + "  inside while  " +money);        

        money = +prompt("How much do you make per month?", ""); // convert to number
    
    }
}
start();
console.log('hello');
