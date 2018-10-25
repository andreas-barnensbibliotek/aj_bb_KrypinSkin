var _ = require("lodash");
var $ = require("jquery");

var bb_pagebehaviors = require("./app_modules/krypinPageBahavior.js");
var bb_containerbehaviors = require("./app_modules/krypinContainerBehavior.js");
var PubSubHandler = require("./model/PubSubHandler.js");
var bb_API = require("./model/apiServiceHandler.js");
var bb_HB_Handler = require("./model/handlebarTemplateHandler.js");
var bb_scoreboardHelper = require("./model/krypinScoreboardHelper.js");
var appsettingsobject = require("./appsettings.js");
var appsettings = appsettingsobject.config;

module.exports = {
    init: function (userid) {       
        let moduleName = 'Scoreboard';
        bb_pagebehaviors.init(moduleName);
        this.cacheDom();
        this.BindEvent(userid);
        this.initBadges(userid);
        /////////////////////////////////////////////////////

    },
    cacheDom: function () {
        // badge main block
        this.$aj_bb_KrypinMainGrid = $('.aj_bb_KrypinMainGrid');
        // skrivboken badges fasta 6st        
        this.$bb_aj_skrivbokenbadgeblock = $('#bb_aj_skrivbokenbadgeblock');
        // boktips badges fasta 5st 
        this.$bb_aj_boktipsbadgeblock = $('#bb_aj_boktipsbadgeblock');
        // Lista på övriga badges dynamiskt antal 
        this.$bb_aj_specialbadgeblock = $('#bb_aj_specialbadgeblock');
        // lista med alla highscorebadges mindre i storlek
        this.$bb_aj_highscorebadgeblock = $('#bb_aj_highscorebadgeblock');
        // scorebox endast poäng boxen
        this.$bb_aj_scoreBox = $('.bb_aj_scoreBox');
    },
    BindEvent: function (userid) {
        let that = this;
    },
    initBadges: function (userid) {
        let apiurl = appsettings.api.scoreboard.getuserbadgeslist;
        let handlebartemplate = appsettings.handlebartemplate.hb_boktipslist_tmp;

        this.Render(apiurl(userid), handlebartemplate, userid);
        
    },   
    SkribokenbadgesBlock_upd: function (listdata) {
        let handlebartemplate = appsettings.handlebartemplate.hb_skribokenbadges_tmp;
        bb_HB_Handler.injecthtmltemplate("#bb_aj_skrivbokenbadgeblock", handlebartemplate, listdata, function () {
            console.log("skrivboken badges");
        });
    },
    BoktipsbadgesBlock_upd: function (listdata) {
        let handlebartemplate = appsettings.handlebartemplate.hb_boktipsbadges_tmp;
        bb_HB_Handler.injecthtmltemplate("#bb_aj_boktipsbadgeblock", handlebartemplate, listdata, function () {
            console.log("boktips badges");
        });
    },
    SpecialbadgesBlock_upd: function (listdata) {
        let handlebartemplate = appsettings.handlebartemplate.hb_specialbadges_tmp;
        bb_HB_Handler.injecthtmltemplate("#bb_aj_specialbadgeblock", handlebartemplate, listdata, function () {
            console.log("skrivboken badges");
        });
    },
    HighscorebadgesBlock_upd: function (listdata) {
        let handlebartemplate = appsettings.handlebartemplate.hb_highscorebadges_tmp;
        bb_HB_Handler.injecthtmltemplate("#bb_aj_highscorebadgeblock", handlebartemplate, listdata, function () {
            console.log("skrivboken badges");
        });
    },
    Render: function (apiurl, handlebartemplate, userid) {
        let that = this;
        bb_API.getjsondata(apiurl, function (data) {
            bb_scoreboardHelper.collectBadgeblock(data, function (badgesObj) {                
                that.SkribokenbadgesBlock_upd(badgesObj);
                that.BoktipsbadgesBlock_upd(badgesObj);
                that.SpecialbadgesBlock_upd(badgesObj);
                that.HighscorebadgesBlock_upd(badgesObj);                
            });            
        });
    }
};

