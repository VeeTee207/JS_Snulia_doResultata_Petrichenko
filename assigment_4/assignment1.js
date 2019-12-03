"use strict";
// ES6 Example of how to fill created nested object and how extract its values !!

let time, money;

function start() {
    time = prompt("Enter please todays date in format YYYY-MM-DD:", "");
    money = +prompt("How much do you make per month?", ""); // convert to number
    // console.log('hello within function');
    // console.log(typeof(money) + "   " +money);
    while ( money==null || isNaN(money) || money =="" ) {       
        money = +prompt("How much do you make per month?", ""); // convert to number
    }
}
let expencesType, expenceAmount,
    optExpencesType, optExpenceAmount ;

start();

let appData = { monthlyBudget:money,    
                timeData:time, 
                expenses:{},        //obligatory payments
                optionalExpences:{},
                income:[],
                savings:true,
                chooseExpences:function(){
                    for (let i=0; i<2; i++){  
                        expencesType = prompt("Enter type of your expence in the month ... ", "");
                        expenceAmount = +prompt("How much do you have to spend? ", "");  //prompt amount and convert it to number 
                        if(typeof(expencesType)==='string' && typeof(expencesType)!=null && 
                        expencesType != '' && typeof(expenceAmount)!=null && expenceAmount !=''
                        && expencesType.length < 20 ) 
                        {
                            appData.expenses[expencesType]=expenceAmount;
                        } else {
                            console.log("Please enter correct data.");
                            i-- ;
                                }
                    }
                },
                detectDayBudget:function(){
                    appData.moneyPerDay = appData.monthlyBudget/30;
                    alert ("Budget per day is " + appData.moneyPerDay);
                },
                detectLevel:function(){
                    if (appData.moneyPerDay < 100) {
                        console.log ("This is a mimimum wage!");
                    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                        console.log ("This is a middle wage !");
                    } else if (appData.moneyPerDay > 2000) {
                        console.log ("This is a high levek in salary!");
                    } else {
                        console.log ("Surprice )))...just mistake!");
                    }
                },
                chooseOptExpences: function(){
                    for (let i=0; i<2; i++){  
                        optExpencesType = prompt("Enter type of optional expence in the month ... ", "");
                        optExpenceAmount = +prompt("Show that opt amount for this: ", "");  //prompt amount and convert it to number 
                        
                        appData.optionalExpences[optExpencesType]= optExpenceAmount;
                        
                    }
                },
                checkSavings: function() {
                    if (appData.savings == true){
                        let savedMoney = +prompt("Enter money on your savings accounts: ",""),
                        savingProcentage = +prompt("Enter percentage of your savings: ","");
                        appData.monthIncome = savedMoney/100/12*savingProcentage ;
                        alert ("Your monthly earnings from savings : " + 
                                                            appData.monthIncome.toFixed(2));
                        
                    }
                } ,
                chooseIncome: function(){
                    let items ;
                    do {
                        items = prompt("Do u have any other source of income?(use comma as divider) ", "");
                        }
                    //make sure that items are not empty, are not canceled and up to 20 symbols     
                    while(items == '' || items == null || items.length > 20 );
                    appData.income = items.split(",");
                    appData.income.sort();
                    console.log( "extra sources of income: " );
                    (appData.income).forEach(function (value,i,arr) {
                        console.log(i + ":  " + value);
                    } ) ;
                },
             };  

for (let i in appData) {
    console.log(i + ":  " + appData[i]);
}   

           
/*let expencesType, expenceAmount,
    optExpencesType, optExpenceAmount ;


chooseExpences();
 
detectDayBudget() ;

detectLevel();

chooseOptExpences() ;

checkSavings() ;  


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
        console.log ("This is a mimimum wage!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("This is a middle wage !");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("This is a high levek in salary!");
    } else {
        console.log ("Surprice )))...just mistake!");
    }
}



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
}       */
