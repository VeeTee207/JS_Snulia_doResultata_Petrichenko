"use strict";
// ES6 Example of how to fill created nested object and how extract its values !!

let time, money;

function start() {
    time = prompt("Enter please todays date in format YYYY-MM-DD:", ""),
    money = +prompt("How much do you make per month?", ""); // convert to number
    // console.log('hello within function');
    // console.log(typeof(money) + "   " +money);
    while ( money==null || isNaN(money) || money =="" ) {       
        money = +prompt("How much do you make per month?", ""); // convert to number
    }
}

start()

let appData = { monthlyBudget:money,    
                timeData:time, 
                expenses:{},        //obligatory payments
                optionalExpences:{},
                extraIncome:[],
                savings:true, };  
let expencesType, expenceAmount;

function chooseExpences() {
    // option with for cycle
    for (let i=0; i<2; i++){  
        expencesType = prompt("Enter type of your expence in the month ... ", "");
        expenceAmount = +prompt("How much do you have to spend? ", "");  //prompt amount and convert it to number 
        if(typeof(expencesType)==='string' && typeof(expencesType)!=null && 
        expencesType != '' && typeof(expenceAmount)!=null && expenceAmount !=''
        && expencesType.length < 20 ) 
        {
            appData.expenses[expencesType]=expenceAmount;
        } else {
            alert ("Please enter correct data.");
            i-- ;
                }
    } 
} 

function detectDayBudget() {
    appData.moneyPerDay = appData.monthlyBudget/30;
    // console.log(temp.toFixed(2)) ;
    alert ("Budget per day is " + appData.moneyPerDay);
}

function detectLevel() {                                                // Расчет уровня достатка
    if (appData.moneyPerDay < 100) {
        console.log ("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("Это высокий уровень достатка!");
    } else {
        console.log ("Ошибочка...!");
    }
}

let optExpencesType, optExpenceAmount ;

function chooseOptExpences() {
    // option with for cycle
    for (let i=0; i<2; i++){  
        optExpencesType = prompt("Enter type of optional expence in the month ... ", "");
        optExpenceAmount = +prompt("Show that opt amount for this: ", "");  //prompt amount and convert it to number 
        if(typeof(optExpencesType)==='string' && typeof(optExpenceAmount)!=null && 
        optExpencesType != '' && typeof(optExpenceAmount)!=null && optExpenceAmount !=''
        && optExpencesType.length < 20 ) 
        {
            appData.optionalExpences[optExpencesType]=optExpenceAmount;
        } else {
            alert ("Please enter correct data.");
            i-- ;
                }
    } 
}       

function checkSavings(){
    if (appData.savings == true){
        let savedMoney = +prompt("Enter money on your savings accounts: ",""),
        savingProcentage = +prompt("Enter percentage of your savings: ","");
        appData.monthIncome = savedMoney/100/12*savingProcentage ;
        alert ("Your monthly earnings from savings : " + 
                                            appData.monthIncome.toFixed(2));
        
    }
}


chooseExpences();
 
detectDayBudget() ;

detectLevel();

chooseOptExpences() ;

checkSavings() ;


// console.log("optinal Expences---" + "\t" + appData.optionalExpences[expencesType]); 
// console.log("Budget per day is " + difineDayBudget);


/*      // cycle while
let i=0;    
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

/*
let i=0;
do {
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
} 
while (i<2) ;   */


/* let moneysAfterExpenceses = appData.monthlyBudget - appData.optionalExpences[expencesType],
    alertPrompt = "So, U can spend up to " + moneysAfterExpenceses/30 + "per day." ;   */