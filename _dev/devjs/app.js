var msg = require("./jsmoduler/pageloader.js");
var $ = require("jquery");

$(function(){
    $("#mainapp").attr('style','background:#fff;')
        .html("funkar!");
    msg.testar("ja du det funkar");
        

});
