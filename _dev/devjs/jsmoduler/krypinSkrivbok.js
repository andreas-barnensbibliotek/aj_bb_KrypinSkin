var _ = require("lodash");
var $ = require("jquery");
var bb_pagebehaviors = require("./app_modules/krypinPageBahavior.js");
var bb_containerbehaviors = require("./app_modules/krypinContainerBehavior.js");
var bb_API = require("./model/apiServiceHandler.js");
var bb_HB_Handler = require("./model/handlebarTemplateHandler.js");
var appsettingsobject = require("./appsettings.js");
var appsettings = appsettingsobject.config;

module.exports = {
    init: function (userid) {

        let moduleName = 'Skrivbok';
        bb_containerbehaviors.init(moduleName);
        bb_pagebehaviors.init(moduleName);
        this.cacheDom();
        this.BindEvent(userid);
        this.initbooklist(userid);

    },
    cacheDom: function () {
        
    },
    BindEvent: function (userid) {
        let that = this;               

    },    
    getskrivbooklist: function (apiurl, userid) {
        let handlebartemplate = appsettings.handlebartemplate.hb_skrivbokenlist_tmp;
        this.Render(apiurl, handlebartemplate, userid);
    },
    initbooklist: function (userid) {
        let apiurl = appsettings.api.skrivbokenlistor.getuserskribokenlist;
        this.getskrivbooklist(apiurl(userid), userid);
    },    

    Render: function (apiurl, handlebartemplate, userid) {
        let that = this; //spara this

        bb_API.getjsondata(apiurl, function (data) {
            bb_HB_Handler.injecthtmltemplate("#bb_aj_skrivbokentemplatecontainer", handlebartemplate, data, function () {
                jplist.init();

            });
        });
    }
};

