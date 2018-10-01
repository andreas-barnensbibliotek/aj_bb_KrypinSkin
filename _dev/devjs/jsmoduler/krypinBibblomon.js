var _ = require("lodash");
var $ = require("jquery");
require('jquery-ui-dist/jquery-ui.js');
var bb_pagebehaviors = require("./app_modules/krypinPageBahavior.js");
var bb_containerbehaviors = require("./app_modules/krypinContainerBehavior.js");
var PubSubHandler = require("./model/PubSubHandler.js");
var bb_API = require("./model/apiServiceHandler.js");
var bb_HB_Handler = require("./model/handlebarTemplateHandler.js");
var appsettingsobject = require("./appsettings.js");
var appsettings = appsettingsobject.config;

module.exports = {
    init: function (userid) {
        let moduleName = 'Bibblomon';
        bb_containerbehaviors.init(moduleName);
        bb_pagebehaviors.init(moduleName);
        this.cacheDom();
        this.BindEvent(userid);
        this.initbibblomonList(userid);
        
    },
    cacheDom: function () {
        this.$bb_bb_aj_MainScore = $('.bb_aj_MainScore');
        //this.$bb_aj_booklist_Mod = $('#bb_aj_booklist_Mod');
        //this.$bb_aj_addbooklist = $('#cmdNyBoklista');        
    },
    BindEvent: function (userid) {
        let that = this;
                
        PubSubHandler.callEvents.on("userScoreupdate", function (highscore) {
            that.$bb_bb_aj_MainScore.html(highscore + " xp");
        });
    },    
    
    getbibblomonList : function (apiurl, userid) {
        let handlebartemplate = appsettings.handlebartemplate.hb_bibblomonlist_tmp;
        this.Render(apiurl, handlebartemplate, userid);       
    },
    initbibblomonList: function (userid) {        
        let apiurl = appsettings.api.bibblomonlistor.getuserbibblomonlist;
        this.getbibblomonList(apiurl(userid), userid);
    },        
    Render: function (apiurl, handlebartemplate, userid) {
        let that = this; //spara this

        bb_API.getjsondata(apiurl, function (data) {
            let d = data;
            // Kör Event: UpdateImg på alla som är subsciber på eventet
            PubSubHandler.callEvents.emit("userScoreupdate", data.Monvalue);
            bb_HB_Handler.injecthtmltemplate("#bb_aj_bibblomonlistMain", handlebartemplate, data, function () {
                jplist.init();
                
            });
        });
    }    
};
