'use strict';


let menu = document.getElementsByClassName("menu")[0],
    menuItems = document.getElementsByClassName('menu-item'),
    menuElements = document.querySelectorAll(".menu-item"),
    title = document.getElementById("title"),
    adv = document.getElementsByClassName("adv")[0],
    pro = document.querySelector("#prompt");
    //a = document.getElementsByClassName('adv');

menu.insertBefore(menuElements[2], menuElements[1]);

let menuNode = document.createElement("li");
menuNode.innerHTML="POsition_5";
menuNode.classList.add("menu-item");
menuNode.TextContent = "Last Stop";
menu.appendChild(menuNode);

document.body.style.backgroundImage = "url('img/apple_true.jpg')";

title.textContent = "Мы продаем только подлинную технику Apple" ;

adv.remove() ;

let answer = prompt("Do you like Apple products?");
pro.textContent = answer ;


console.log(adv[0]);
console.log(menu);

// console.log(menuItems[3]);
//document.body.appendChild(menuNode);


/*
menuItemExtra.classList.add("menu-item");
menuItemExtra.innerHTML = "position_5" ;
menu.appendChild(menuItemExtra);
*/
