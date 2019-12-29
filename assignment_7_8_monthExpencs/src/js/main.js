"use strict";

let startBtn = document.getElementById ("start"),

    budgetValue = document.getElementsByClassName("budget-value")[0],
    dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalexpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
monthsavingsValue = document.getElementsByClassName("monthsavings-value")[0],
yearsavingsValue = document.getElementsByClassName("yearsavings-value")[0],

    expensesItems = document.getElementsByClassName("expenses-item"),
    expensesItemBtn = document.getElementsByTagName("button")[0],

optionalExpensesBtn = document.getElementsByTagName("button")[1],
optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),

countBtn = document.getElementsByTagName("button")[2],



incomeItems = document.querySelector(".choose-income"),
savings = document.querySelector("#savings"),
savingsAmmount = document.querySelector(".choose-sum"),
savingsPercent = document.querySelector(".choose-percent"),
yearValue = document.querySelector(".year-value"),
monthValue = document.querySelector(".month-value"),
dayValue = document.querySelector(".day-value");

let time, money;


startBtn.addEventListener('click',function() { 
  time = prompt("Enter please todays date in format YYYY-MM-DD:", "");
  money = +prompt("How much do you make per month, in RUR?", ""); // convert to number

  while ( money==null || isNaN(money) || money =="" ) {       
      money = +prompt("How much do you make per month?", ""); // convert to number
  }
  appData.monthlyBudget = money;
  appData.time = time;
  budgetValue.textContent = money.toFixed() ;
  yearValue.value = new Date(Date.parse(time)).getFullYear() ;
  monthValue.value = new Date (Date.parse(time)).getMonth()+1;
  dayValue.value = new Date(Date.parse(time)).getDate()+1;
} ) ;

expensesItemBtn.addEventListener('click', function(){

    let sum = 0 ;
    for (let i=0; i<expensesItems.length; i++){  
        let expenceType = expensesItems[i].value,
        expenceAmount = expensesItems[++i].value;  
        if(typeof(expenceType)==='string' && typeof(expenceType)!=null && 
        expenceType != '' && typeof(expenceAmount)!=null && expenceAmount !=''
        && expenceType.length < 20 ) 
        {
            appData.expenses[expenceType]=expenceAmount;
            sum += +expenceAmount;  // correct data
        } else {
            i-- ;
                }
    }
    expensesValue.textContent = sum ;
}) ;

optionalExpensesBtn.addEventListener('click', function(){

        for (let i=0; i<optionalExpensesItem.length; i++){ 
            
            appData.optionalExpences[i] = optionalExpensesItem[i].value;
            optionalexpensesValue.textContent += appData.optionalExpences[i] + " ";        
        }

});

countBtn.addEventListener('click', function(){
    if (appData.monthlyBudget != undefined) {

        appData.moneyPerDay = (+appData.monthlyBudget/30).toFixed(2); 
        dayBudgetValue.textContent = appData.moneyPerDay ;
        if (appData.moneyPerDay <= 100) {
            levelValue.textContent = "This is a mimimum wage!";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
            levelValue.textContent = "This is a middle wage !";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "This is a high level in salary!";
        } else {
            levelValue.textContent = "Surprice )))...just mistake!";
        } 
    } else {
        dayBudgetValue.textContent='Mistake.. There is NOT monthly buget yet!' ;
    }  
}) ;

//incomeItems.addEventListener('change', function(){
incomeItems.addEventListener('input', function(){
    let items = incomeItems.value;
    appData.income = items.split(',');
    incomeValue.textContent = appData.income ;
}) ;

savings.addEventListener('click', function(){
    if (appData.savings == true) {
        appData.savings = false;
        
    } else {
        appData.savings = true ;
    }
}) ;

savingsAmmount.addEventListener('input', function(){
    if (appData.savings == true ) {
        let sum = +savingsAmmount.value,
        percent = +savingsPercent.value ;
        appData.monthIncome = sum/100/12*percent ;
        appData.yearIncome = sum*(percent/100) ;
        monthsavingsValue.textContent = appData.monthIncome.toFixed(2) ;
        yearsavingsValue.textContent = appData.yearIncome.toFixed(2) ; 
    
        
    }
    
}) ;

savingsPercent.addEventListener('input', function(){
    if (appData.savings == true )  {
        let sum = +savingsAmmount.value,
        percent = +savingsPercent.value ;
        
        appData.monthIncome = sum/100/12*percent ;
        appData.yearIncome = sum*(percent/100) ;
        monthsavingsValue.textContent = appData.monthIncome.toFixed(2) ;
        yearsavingsValue.textContent = appData.yearIncome.toFixed(2) ; 
    } 
}) ;



let appData = { monthlyBudget:money,    
                timeData:time, 
                expenses:{},        //obligatory payments
                optionalExpences:{},
                income:[],
                savings:false,          
             };  

