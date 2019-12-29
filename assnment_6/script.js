'use strict';

let menu = document.getElementsByClassName("menu")[0],
    menuItems = document.getElementsByClassName("menu-item"),
    menuItemExtra = document.createElement("li") ,
    title = document.getElementById ("title"),
    promptForApple = document.querySelector("#prompt"),
    adv = document.getElementsByClassName("adv")[0];
    menuElemnts = document.querySelectorAll(".menu-item");

menu.insertBefore(menuItems[2], menuItems[1]); //swap positions 2 and 3 in menu

menuItemExtra.classList.add("menu-item");
menuItemExtra.innerHTML = "position_5" ;
menu.appendChild(menuItemExtra);     // add 5 field in the menu

title.textContent = " Мы продаем только подлинную технику Apple" ; // add подлинную

document.body.style.backgroundImage = "url('img/apple_true.jpg')" ; // background replaced

adv.remove() ; // remove advertizement

let user_opinion = prompt("Do you really love Apple products?"); // quest regarding Apple
promptForApple.textContent = user_opinion; // display Apples request
console.log(menuElemnts);
