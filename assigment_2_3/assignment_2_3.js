"use strict";
// ES6 Example of how to fill created nested object and how extract its values !!

let time = prompt("Enter please todays date in format YYYY-MM-DD:", ""),
    money = +prompt("How much do you make per month?", ""); // convert to number

let appData = { monthlyBudget:money,
                timeData:time,
                expenses:{},        //obligatory payments
                optionalExpences:{},
                extraIncome:[],
                savings:false, };
let expenceType, expenceAmount;

/*      // same cycle but with operator FOR
for (let i=0; i<2; i++){  // option with for cycle
    expencesType = prompt("Enter type of your expence in the month ... ", "");
    expenceAmount = +prompt("How much do you have to spend? ", "");  //prompt amount and convert it to number
    console.log(typeof(expencesType));
    console.log(typeof(expenceAmount));
    if(typeof(expencesType)==='string' && typeof(expencesType)!=null &&
        expencesType != '' && typeof(expenceAmount)!=null && expenceAmount !=''
        && expencesType.length < 20 ) {
        console.log("data is correct");
        appData.optionalExpences[expencesType]=expenceAmount;
    } else {
        alert ("Please enter correct data.");
        i-- ;
    }
}       */


/*    // same cycle but with operator WHILE
let i=0;    // cycle while
while (i<2) {
    expencesType = prompt("Enter type of your expence in the month ... ", "");
    expenceAmount = +prompt("How much do you have to spend? ", "");  //prompt amount and convert it to number
    console.log(typeof(expencesType));
    console.log(typeof(expenceAmount));
    if(typeof(expencesType)==='string' && typeof(expencesType)!=null &&
        expencesType != '' && typeof(expenceAmount)!=null && expenceAmount !=''
        && expencesType.length < 20 ) {
        console.log("data is correct");
        appData.optionalExpences[expencesType]=expenceAmount;
    } else {
        alert ("Please enter correct data.");
        i-- ;

    }
    i++;
    console.log("i----" + i);
}           */


let i=0;
do {
    expenceType = prompt("Enter type of your expence in the month ... ", "");
    expenceAmount = +prompt("How much do you have to spend? ", "");  //prompt+convert it to number
    if(typeof(expencesType)==='string' && typeof(expencesType)!=null &&
        expencesType != '' && typeof(expenceAmount)!=null && typeof(expenceAmount) !=''
        && expenceType.length < 20 ) {
        //  console.log("data is correct"); // data check up for correctness
        appData.optionalExpences[expencesType]=expenceAmount;
    } else {
        alert ("Please enter correct data.");
        i-- ;

    }
    i++;
}
while (i<2) ;

console.log("optinal Expences---" + "\t" + appData.optionalExpences[expencesType]);
console.log("Budget per day is " + appData.monthlyBudget/30);
