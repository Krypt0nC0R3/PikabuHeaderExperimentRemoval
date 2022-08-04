// ==UserScript==
// @name         Pikabu Experiment removal
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://pikabu.ru/*
// @require  https://code.jquery.com/jquery-3.5.0.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pikabu.ru
// @grant        none
// ==/UserScript==

(function() {
    $("div[data-feed-key=best]").attr("id",$("div[data-feed-key=my_lent]").attr("id"));
    $("div[data-feed-key=my_lent]").removeAttr("id");
    let best = $("div[data-feed-key=best]");
    let feed = $("div[data-feed-key=my_lent]");
    best.attr("data-feed-key","my_lent");
    feed.attr("data-feed-key","best");

    best.children("a").html("Подписки");
    feed.children("a").html("Лучшее");

    best.children("a").attr("href","/subs");
    feed.children("a").attr("href","/best");

    if(best.hasClass("header-menu__item_current")){
        best.removeClass("header-menu__item_current");
        feed.addClass("header-menu__item_current");
    }
    else if(feed.hasClass("header-menu__item_current")){
        feed.removeClass("header-menu__item_current");
        best.addClass("header-menu__item_current");
    }
})();