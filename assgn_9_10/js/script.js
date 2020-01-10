window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Timer  . The setting poit of deadline deadLine variable
    // It displays how many hours , minutes, seconds left until the dead line

    let deadLine = '2020-01-25 01:00';

    function getTimeRemaining(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000)%60) ,
        minutes = Math.floor(((t/1000)/60)%60) ,
        hours = Math.floor(((t/1000)/60)/60) ;
        // temp = Math.floor((10000/1000)%60) ;
        // let time = new Date().getTime();
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
         } ;
    }


    function setClock(id, endTime) {
        let timer = document.getElementById(id),
        hours = document.querySelector(".hours"),
        minutes = document.querySelector(".minutes") ,
        seconds = document.querySelector('.seconds') ,
        timeInterval = setInterval(updateClock, 1000) ;

        function updateClock() {
            let t = getTimeRemaining(endTime);
                hours.textContent = t.hours;
                minutes.textContent = t.minutes;
                seconds.textContent = t.seconds;
            if (t.total<=0) {
                clearInterval(timeInterval) ;
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';

            }
        }
    }
    setClock('time', deadLine) ;
});
