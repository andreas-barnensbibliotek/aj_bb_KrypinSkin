var _ = require("lodash");
var $ = require("jquery");
var bb_API = require("./model/apiServiceHandler.js");
var PubSubHandler = require("./model/PubSubHandler.js");
var bb_pagebehaviors = require("./app_modules/krypinPageBahavior.js");
var bb_HB_Handler = require("./model/handlebarTemplateHandler.js");
var appsettingsobject = require("./appsettings.js");
var globalmessages = appsettingsobject.usermessages;
var appsettings = appsettingsobject.config;
module.exports = {
    init: function (userid) {
        let moduleName = 'Start';
        bb_pagebehaviors.init(moduleName);
        this.cacheDom();
        this.BindEvent(userid);
        this.Render(userid);        
        
        /////////////////////////////////////////////////////

    },
    cacheDom: function () {
        this.$bb_aj_MainKrypinSkinContainer = $('.aj_bb_KrypinSkin');
        this.$bb_bb_aj_MainScore = $('.bibblomonMainscore');
        this.$bb_aj_buttonitem_del_laserjustnu = $('.buttonitem_del_laserjustnu');
        
    },
    BindEvent: function (userid) {
        let that = this;

        PubSubHandler.callEvents.on("userScoreupdate", function (highscore) {
            that.$bb_bb_aj_MainScore.html(highscore + " xp");
        });

        this.$bb_aj_MainKrypinSkinContainer.on("click", '.buttonitem_del_laserjustnu', function (e) {
            if (confirm(globalmessages.laserjustnu.confirmRemove)) {               
                that.removefromLaserjustnu(userid);
            };
            return true;
        })

    },
    Renderbiblomon: function (userid) {
        let that = this;
        let apiurl = appsettings.api.bibblomonlistor.getuserbibblomonlist;

        bb_API.getjsondata(apiurl(userid), function (data) {
            let d = data;
            // Kör Event: UpdateImg på alla som är subsciber på eventet
            PubSubHandler.callEvents.emit("userScoreupdate", data.Monvalue);
            that.$bb_bb_aj_MainScore.html(data.Monvalue + " xp");
        });
    },
    Renderlaserjustnu: function (userid) {
        let divid = "#laserjustnuItems";
        let that = this;

        if (this.checkIfDivExist(divid)) {       
            let apiurl = appsettings.api.installningar.laserjustnu;
            let handlebartemplate = appsettings.handlebartemplate.hb_laserjustnu_tmp;
        
            bb_API.getjsondata(apiurl(userid), function (data) {
                       
                bb_HB_Handler.injecthtmltemplate(divid, handlebartemplate, data, function () {
                    //jplist.init();            
                });
             });
        };
    },
    RenderUserLatestBoktips: function (userid) {
        let that = this;
        let divid = "#bb_aj_userlatestboktips";

        if (this.checkIfDivExist(divid)) {            
            let apiurl = appsettings.api.installningar.userlatestboktips;
            let handlebartemplate = appsettings.handlebartemplate.hb_userlatestboktips_tmp;

            bb_API.getjsondata(apiurl(userid), function (data) {

                bb_HB_Handler.injecthtmltemplate(divid, handlebartemplate, data, function () {
                    //jplist.init();            
                });
            });
        };
    },
    RenderuserScoreupdate: function (userid) {
        let that = this;
        let apiurl = appsettings.api.bibblomonlistor.getuserbibblomonlist;

        bb_API.getjsondata(apiurl(userid), function (data) {
            let d = data;
            // Kör Event: UpdateImg på alla som är subsciber på eventet
            PubSubHandler.callEvents.emit("userScoreupdate", data.Monvalue);
            that.$bb_bb_aj_MainScore.html(data.Monvalue + " xp");
        });
    },
    Render: function (userid) {
        this.Renderlaserjustnu(userid);
        this.RenderUserLatestBoktips(userid);
        this.RenderuserScoreupdate(userid);
    },
    checkIfDivExist: function (divid) {
        let myElem = document.getElementById(divid);
        return (myElem === null) ? true : false;         
    },
    removefromLaserjustnu: function (userid) {
        let that = this;
        let apiurl = appsettings.api.installningar.updatesettings;
        bb_API.getjsondata(apiurl(userid,3,0), function (data) {
            console.log("laser justnu bok borttagen");
            that.Renderlaserjustnu(userid);
        });

    }
    
};
