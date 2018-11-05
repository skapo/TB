// ==UserScript==
// @name         BitTube No Offline
// @namespace    http://tampermonkey.net/
// @version      1.0.3.1
// @description  BitTube Never Stop Ever Again
// @author       ReaperBot
// @updateURL    https://raw.githubusercontent.com/skapo/TB/master/myscript.js
// @downloadURL  https://raw.githubusercontent.com/skapo/TB/master/myscript.js
// @match        *.bit.tube/*
// @grant        none
// ==/UserScript==
(function () {
    'use strict';
    var page
    var offline
    var selected
    var bittube
    

    var fileme = [
        'https://bit.tube/play?hash=BRjyDqLDuo1rt9PZCibl&channel=82091',
        'https://bit.tube/play?hash=BRenwDPKEriE4qpvYJ7P&channel=38479',
    ];
    
    setInterval(mySearch, 5000);
    
    function random_item(items) {
        return items[Math.floor(Math.random() * items.length)];
    }

    function mySearch() {
        page = document.body.textContent.toLowerCase() || document.body.innerText.toLowerCase();
        offline = page.indexOf("offline") !== -1;
        selected = page.indexOf("selected") !== -1;
        bittube = page.indexOf("bittube") == -1;
        if (offline || selected || bittube) {
            setTimeout(function () {
                window.location.href = random_item(fileme)
            }, 3000);
        }
    }

    

    function getRndInteger(min, max) {
        return (Math.floor(Math.random() * (max - min)) + min) * 1000;
    }

    setInterval(reloadOk, getRndInteger(5760, 7200));

    function reloadOk() {
        window.location.href = random_item(fileme)
    }

})();