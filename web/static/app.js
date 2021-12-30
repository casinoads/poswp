

// get graph data from python
// function querySiteData(text) {
//     req = $.ajax({
//         url: '/SiteDetails.json',
//         type: 'GET',
//         contentType: "application/json; charset=utf-8",
//         data: JSON.stringify({ query: text })
//     });

//     req.done(function (data) {
//         graph(data['url'], data['user'], data['pass'])

//     });
// }


// get console outputs from python
// function queryLogs() {
//     req = $.ajax({
//         url: '/update',
//         type: 'POST',
//     });

//     req.done(function (data) {
//         var i;
//         for (i = 1; i < 21; i++) {
//             $('#logs-' + i).html(data.console[i - 1]);
//         }
//     });
// }


// // update python logs on page load
// $(document).ready(function () {
//     queryLogs()
// });


// // update python logs every 10 seconds
// $(document).ready(function () {
//     setInterval(function () {
//         queryLogs()
//     }, 10000);
// });


// draw graph on page load for last 7 days
$(document).ready(function () {
    querySiteData('SITE DETAILS');
});


// update graph every 5 minutes
// $(document).ready(function () {
//     setInterval(function () {
//         var selText = $('#dropdownMenuButton').text();
//         //const SiteDetails = require('./SiteDetails.json');

//         //console.log(SiteDetails[selText].value);
//         querySiteData(selText);
//     }, 300000);
// });



// change graph according to drop down data selected by user
// $(".dropdown-menu a").click(function () {
//     var selText = $(this).text();
//     $(this).parents('.dropdown').find('.dropdown-toggle').html(selText);

//     querySiteData(selText);
// });


var SiteDetails = {
    "aidnews.org": {
        "url": "aidnews.org",
        "user": "admin",
        "pass": "JNH$@f%oN3"
    },
    "f5tadalafil.com": {
        "url": "f5tadalafil.com",
        "user": "admin",
        "pass": "3%6#%%Z1lI"
    },
    "money-remit.com": {
        "url": "money-remit.com",
        "user": "admin",
        "pass": "UZ@R%@R8%i"
    },
    "moneyfreeturn.com": {
        "url": "moneyfreeturn.com",
        "user": "admin",
        "pass": "#Cy1LD##Wj"
    },
    "free-kickgame.com": {
        "url": "free-kickgame.com",
        "user": "admin",
        "pass": "N6Y#T%p2#f"
    },
    "168campaign.com": {
        "url": "168campaign.com",
        "user": "admin",
        "pass": "Y69R$inKSq"
    },
    "clubbet99.com": {
        "url": "clubbet99.com",
        "user": "admin",
        "pass": "6O2pOV@7vK"
    },
    "onlinemoney411.net": {
        "url": "onlinemoney411.net",
        "user": "admin",
        "pass": "vkg%1SU%V$"
    },
    "worldsportsupply.com": {
        "url": "worldsportsupply.com",
        "user": "admin",
        "pass": "MGZ&#6z$1K"
    },
    "onlinemoviesportsandtv.com": {
        "url": "onlinemoviesportsandtv.com",
        "user": "admin",
        "pass": "GGcF5$x#%i"
    },
    "fayettesports.com": {
        "url": "fayettesports.com",
        "user": "admin",
        "pass": "UvMaXnsH$5"
    },
    "online-motorsport.com": {
        "url": "online-motorsport.com",
        "user": "admin",
        "pass": "9psR1%w@5I"
    },
    "games-hacked.com": {
        "url": "games-hacked.com",
        "user": "admin",
        "pass": "PK7OW4qR$4"
    },
    "goldmine-games.com": {
        "url": "goldmine-games.com",
        "user": "admin",
        "pass": "4XZbV&9&oF"
    },
    "tahdahgames.com": {
        "url": "tahdahgames.com",
        "user": "admin",
        "pass": "%s8nV5j7Cg"
    },
    "gohotgame.com": {
        "url": "gohotgame.com",
        "user": "admin",
        "pass": "%xwUhTZJD7"
    },
    "edarathegame.com": {
        "url": "edarathegame.com",
        "user": "admin",
        "pass": "6ox6g@yiMU"
    },
    "wegamealot.com": {
        "url": "wegamealot.com",
        "user": "admin",
        "pass": "PUI&p&@8k1"
    },
    "allheartsports.com": {
        "url": "allheartsports.com",
        "user": "admin",
        "pass": "Cv@XIE4EHh"
    },
    "riverbedgame.com": {
        "url": "riverbedgame.com",
        "user": "admin",
        "pass": "WYt7@Rp@Ge"
    },
    "moonfarmgames.com": {
        "url": "moonfarmgames.com",
        "user": "admin",
        "pass": "Sa$2&j0XlF"
    },
    "junketgame.com": {
        "url": "junketgame.com",
        "user": "admin",
        "pass": "z7XO%x@W5P"
    },
    "luderiagames.com": {
        "url": "luderiagames.com",
        "user": "admin",
        "pass": "L9$80T$0f6"
    },
    "getgamerduel.com": {
        "url": "getgamerduel.com",
        "user": "admin",
        "pass": "wG%JYS8YaB"
    },
    "unblockedgamesinfo.com": {
        "url": "unblockedgamesinfo.com",
        "user": "admin",
        "pass": "jaUZKZ9W9%"
    },
    "victory789.com": {
        "url": "victory789.com",
        "user": "admin",
        "pass": "a1Q6V%tZGO"
    },
    "kitews.com": {
        "url": "kitews.com",
        "user": "admin",
        "pass": "#&#DO7x3M#"
    },
    "progame88.com": {
        "url": "progame88.com",
        "user": "admin",
        "pass": "M&S0taBdpQ"
    },
    "winningbet888.com": {
        "url": "winningbet888.com",
        "user": "admin",
        "pass": "$%M1D4@BaO"
    },
    "sbowin123.com": {
        "url": "sbowin123.com",
        "user": "admin",
        "pass": "L@%&f@cDV3"
    },
    "clubgame77.com": {
        "url": "clubgame77.com",
        "user": "admin",
        "pass": "Uv08%@XiK3"
    },
    "united1688.com": {
        "url": "united1688.com",
        "user": "admin",
        "pass": "1%%sD%v%eN"
    },
    "moneyworldresearch.com": {
        "url": "moneyworldresearch.com",
        "user": "admin",
        "pass": "H25$kaQoNR"
    },
    "goodbyealiensgame.com": {
        "url": "goodbyealiensgame.com",
        "user": "admin",
        "pass": "IXa9@b$cbG"
    },
    "bertsmotorsports.com": {
        "url": "bertsmotorsports.com",
        "user": "admin",
        "pass": "8EpiL4$0oV"
    },
    "throughthepensports.com": {
        "url": "throughthepensports.com",
        "user": "admin",
        "pass": "SI4KEDer$Y"
    },
    "teongame.com": {
        "url": "teongame.com",
        "user": "admin",
        "pass": "aUr@4OT#ys"
    },
    "gamespluto.com": {
        "url": "gamespluto.com",
        "user": "admin",
        "pass": "TJibh&X%q8"
    },
    "ff0000game.com": {
        "url": "ff0000game.com",
        "user": "admin",
        "pass": "0Y5t$K#9A3"
    },
    "foodseriousgame.com": {
        "url": "foodseriousgame.com",
        "user": "admin",
        "pass": "BG%w$2CVgN"
    },
    "moreiogames.com": {
        "url": "moreiogames.com",
        "user": "admin",
        "pass": "JqYsO%9@Lp"
    },
    "addictinghelicoptergames.com": {
        "url": "addictinghelicoptergames.com",
        "user": "admin",
        "pass": "7Re@%&z31T"
    },
    "madden18gameplay.com": {
        "url": "madden18gameplay.com",
        "user": "admin",
        "pass": "LhT@rV#HN5"
    },
    "narcosthegame.com": {
        "url": "narcosthegame.com",
        "user": "admin",
        "pass": "l7L@BtmO26"
    },
    "titanium-games.com": {
        "url": "titanium-games.com",
        "user": "admin",
        "pass": "PSa&A#p30%"
    },
    "ovagamess.com": {
        "url": "ovagamess.com",
        "user": "admin",
        "pass": "hL%xzL8P@$"
    },
    "xtragamesinternational.com": {
        "url": "xtragamesinternational.com",
        "user": "admin",
        "pass": "C%2HawO82N"
    },
    "yachtclubgame.com": {
        "url": "yachtclubgame.com",
        "user": "admin",
        "pass": "KrJP$qwTF2"
    },
    "tethergamer.com": {
        "url": "tethergamer.com",
        "user": "admin",
        "pass": "L0S1T#%m2J"
    },
    "gamesyoum7.com": {
        "url": "gamesyoum7.com",
        "user": "admin",
        "pass": "pq5$&M7Glq"
    },
    "sboups.com (มีโดนเมนแล้ว)": {
        "url": "sboups.com (มีโดนเมนแล้ว)",
        "user": "",
        "pass": ""
    },
    "ufah-ball555.com": {
        "url": "ufah-ball555.com",
        "user": "admin",
        "pass": "@r$n0ywRFW"
    }
}


$(".dropdown-menu a").click(function () {
    var selText = $(this).text();
    $(this).parents('.dropdown').find('.dropdown-toggle').html(selText);
    //console.log(selText)
    querySiteData(selText);
});

function querySiteData(text) {
    var req = "";
   var req = SiteDetails[text];
   // console.log(req.url)
    document.getElementById("site_urlselect").innerHTML = req.url;
    document.getElementById("site_userselect").innerHTML = req.user;
    document.getElementById("site_passselect").innerHTML = req.pass;
}