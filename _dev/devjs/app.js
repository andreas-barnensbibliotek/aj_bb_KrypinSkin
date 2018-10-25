var pageloader = require("./jsmoduler/pageloader.js");
var appsettingsobject = require("./jsmoduler/appsettings.js");
var $ = require("jquery");

$(function () {

    var appsettings = appsettingsobject.config;
    appsettings.userinfo.userid =7017 // $('.kk_aj_userid').html();

    var currentpage = $('.kk_aj_CurrentPageType').html();

    var init = function () {
      
        let userskin = $('.bb_aj_userskinsetting').html();
        $('#aj_bb_KrypinSkin').addClass(userskin);

        pageloader.pagerequest(currentpage, appsettings.userinfo.userid);
             
    }

    init();

});
