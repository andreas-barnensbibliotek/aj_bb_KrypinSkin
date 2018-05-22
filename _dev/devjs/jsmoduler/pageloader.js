var startpage = require("./krypinStart.js");
var booklistpage = require("./krypinBooklists.js");
var skrivbokenpage = require("./krypinSkrivbok.js");
var boktipspage = require("./krypinBoktips.js");
var scoreboardpage = require("./krypinScoreboard.js");
var bibblomonpage = require("./krypinBibblomon.js");
var inventorypage = require("./krypinInventory.js");
var shoppage = require("./krypinShop.js");
var installningarpage = require("./krypinInstallningar.js");

var $ = require("jquery");
module.exports = {
    pagerequest: function (page) {      
     
        var loadpage = function (tmppage) {
            
            let requestpage = {
                'bb_aj_Start_Krypin': function () {
                    startpage.init();
                    return false;
                },
                'bb_aj_Boklistor_Krypin': function () {
                    booklistpage.init();
                    return false;
                },
                'bb_aj_Skrivboken_Krypin': function () {
                    skrivbokenpage.init();
                    return false;
                },
                'bb_aj_Boktips_Krypin': function () {
                    boktipspage.init();
                    return false;
                },
                'bb_aj_Scoreboard_Krypin': function () {
                    scoreboardpage.init();
                    return false;
                },
                'bb_aj_Bibblomon_Krypin': function () {
                    bibblomonpage.init();
                    return false;
                },
                'bb_aj_Inventarie_Krypin': function () {
                    inventorypage.init();
                    return false;
                },
                'bb_aj_shop_Krypin': function () {
                    shoppage.init();
                    return false;
                },
                'bb_aj_setup_krypin': function () {
                    installningarpage.init();
                    return false;
                },
                'bb_aj_setup_krypin': function () {
                    booklistpage.init();
                    return false;
                },
                'default': function () {
                    startpage.init();
                    return false;
                }
            };
            return (requestpage[tmppage] || requestpage['default'])();
        }

        loadpage(page);
    }
}
