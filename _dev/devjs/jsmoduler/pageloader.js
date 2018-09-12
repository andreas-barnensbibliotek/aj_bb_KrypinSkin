var startpage = require("./krypinStart.js");
var booklistpage = require("./krypinBooklists.js");
var skrivbokenpage = require("./krypinSkrivbok.js");
var boktipspage = require("./krypinBoktips.js");
var scoreboardpage = require("./krypinScoreboard.js");
var bibblomonpage = require("./krypinBibblomon.js");
var inventorypage = require("./krypinInventory.js");
var shoppage = require("./krypinShop.js");
var installningarpage = require("./krypinInstallningar.js");
var appsettings = require("./appsettings.js");
var $ = require("jquery");

module.exports = {
    pagerequest: function (page, userid) {      
     
        var loadpage = function (tmppage, tmpuserid) {
            //jplist.init();
            let requestpage = {
                'bb_aj_Start_Krypin': function () {
                    startpage.init();
                    console.log("logga detta " + appsettings.config.dnnURL);
                    return false;
                },
                'bb_aj_Boklistor_Krypin': function () {
                    booklistpage.init(tmpuserid);
                    return false;
                },
                'bb_aj_Skrivboken_Krypin': function () {
                    skrivbokenpage.init(tmpuserid);
                    return false;
                },
                'bb_aj_Boktips_Krypin': function () {
                    boktipspage.init(tmpuserid);
                    return false;
                },
                'bb_aj_Scoreboard_Krypin': function () {
                    scoreboardpage.init(tmpuserid);
                    return false;
                },
                'bb_aj_Bibblomon_Krypin': function () {
                    bibblomonpage.init(tmpuserid);
                    return false;
                },
                'bb_aj_Inventarie_Krypin': function () {
                    inventorypage.init(tmpuserid);
                    return false;
                },
                'bb_aj_shop_Krypin': function () {
                    shoppage.init(tmpuserid);
                    return false;
                },
                'bb_aj_setup_krypin': function () {
                    installningarpage.init(tmpuserid);
                    return false;
                },                
                'default': function () {
                    startpage.init(tmpuserid);
                    return false;
                }
            };
            return (requestpage[tmppage] || requestpage['default'])();
        }

        loadpage(page, userid);
    }
}
