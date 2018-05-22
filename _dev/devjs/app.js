var pageloader = require("./jsmoduler/pageloader.js");
var appsettingsobject = require("./jsmoduler/appsettings.js");
var $ = require("jquery");

$(function () {

    var appsettings = appsettingsobject.config;
    appsettings.userinfo.userid = $('.kk_aj_userid').html();

    var currentpage = $('.kk_aj_CurrentPageType').html();
    
        
    //$("#mainapp").attr('style','background:#fff;')
      //  .html("funkar!");
        
        
    var init = function () {
        pageloader.pagerequest(currentpage);

    }

    init();

});
