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
        
        let moduleName = 'Booklist';
        bb_containerbehaviors.init(moduleName);
        bb_pagebehaviors.init(moduleName);
        this.cacheDom();
        this.BindEvent(userid);
        this.initbooklist(userid);
       
    },
    cacheDom: function () {                     
        this.$bb_aj_booklistMain = $('#bb_aj_booklistMain');
       
    },
    BindEvent: function (userid) {
        let that = this;
        this.$bb_aj_booklistMain.on('click', '#bb_aj_cmdAdd_Booklist', function (e) { alert('#bb_aj_cmdAdd_Booklist') });
        this.$bb_aj_booklistMain.on('click', '.buttonitem_booktip', function (e) { alert('.buttonitem_booktip') });
        
        this.$bb_aj_booklistMain.on('click', '.buttonitem_tabort', function (e) {
            let bokid = $(this).attr("data-itemid");
            let booklistid = $(this).attr("data-bookistid");
            that.delbookitemfromlist(booklistid, bokid, userid)
        });        
    },    
    Apiupdate: function (apiurl, userid) {
        let that = this; //spara this
        bb_API.getjsondata(apiurl, function (data) {
            that.initbooklist(userid);
        });
    },
    getbooklist : function (apiurl, userid) {
        let handlebartemplate = appsettings.handlebartemplate.hb_booklist_tmp;
        this.Render(apiurl, handlebartemplate, userid);       
    },
    initbooklist : function (userid) {    
        let apiurl = appsettings.api.boklistor.getuserboklist;
        this.getbooklist(apiurl(userid), userid);        
    },
    delbookitemfromlist: function (booklistid, bokid, userid) {        
        let apiurl = appsettings.api.boklistor.deluserbokitem; //get apiurl funktionen från appsettings
        let handlebartemplate = appsettings.handlebartemplate.hb_booklist_tmp;

        this.Apiupdate(apiurl(booklistid, bokid, userid), userid);
    }, Render: function (apiurl, handlebartemplate, userid) {
        bb_API.getjsondata(apiurl, function (data) {
            bb_HB_Handler.injecthtmltemplate("#bb_aj_booklistMain", handlebartemplate, data, function () {
                jplist.init();
            });
        });
    }
    
};




//var initbooklist = function (userid) {    
//    var apiurl = appsettings.api.boklistor.getuserboklist;
//    getbooklist(apiurl(userid), userid);
//}

//var getbooklist = function (apiurl, userid) {

//    var handlebartemplate = appsettings.handlebartemplate.hb_booklist_tmp;

//    bb_API.getjsondata(apiurl, function (data) {
//        bb_HB_Handler.injecthtmltemplate("#bb_aj_booklistMain", handlebartemplate, data);
//    });
//}



//var users = [
//    { 'user': 'barney',  'age': 36, 'active': true },
//    { 'user': 'fred',    'age': 40, 'active': false },
//    { 'user': 'pebbles', 'age': 1,  'active': true }
//];

//var test = function () {
//    var namn = $('.kk_aj_CurrentPageType').html();
//    var t = _.find(users, function (o) { return o.age == 40; });


//}

//var bb_containerbehaviors = {
//    init: function (moduletypID) {
//        this.cacheDom(moduletypID);
//        this.bindEvent();
//        this.render();
//    },
//    cacheDom: function (modtypid) {
//        this.$bb_aj_cmdAdd = $('#bb_aj_cmdAdd_' + modtypid);
//        this.$bb_aj_cmdSetting = $('#bb_aj_cmdSetting_' + modtypid);
//        this.$bb_aj_Container = $('.bb_aj_Container');
//        this.$bb_aj_AddContainer = $('.bb_aj_AddContainer_' + modtypid);
//        this.$bb_aj_SettingsContainer = $('.bb_aj_SettingsContainer_' + modtypid);
//    },
//    bindEvent: function () {        
//        this.$bb_aj_cmdAdd.on('click', this.addboxbehavior.bind(this));
//        this.$bb_aj_cmdSetting.on('click', this.settingsboxbehavior.bind(this));
//    },
//    render: function () {
//        this.$bb_aj_Container.hide();
//    },        
//    addboxbehavior: function () {        
//        this.$bb_aj_AddContainer.slideToggle(500);
//        if (this.$bb_aj_SettingsContainer.is(':visible')) {
//            this.$bb_aj_SettingsContainer.hide(500);
//        };
//    },
//    settingsboxbehavior: function () {
        
//        this.$bb_aj_SettingsContainer.slideToggle(500);
//        if (this.$bb_aj_AddContainer.is(':visible')) {
//            this.$bb_aj_AddContainer.hide(500);
//        };
//    }
//};


//var boklistSettingModule = (function () {
//    //cacheDom
//    var $el = $('#bb_aj_booklist_Mod');
//    var $bb_aj_setupbooklist = $('#bb_aj_setupbooklist');
//    var $bb_aj_addbooklist = $('#bb_aj_addbooklist');
//    var $bb_aj_installningarSettings = $('.bb_aj_installningarSettings');
//    var $bb_aj_installningarAdd = $('.bb_aj_installningarAdd');

//    //BindEvent
//    $bb_aj_setupbooklist.on('click', settingsboxbehavior);
//    $bb_aj_addbooklist.on('click', addboxbehavior);

//    var settingsboxbehavior = function () {
//        $bb_aj_installningarSettings.slideToggle(500);
//        if ($bb_aj_installningarAdd.is(':visible')) {
//            $bb_aj_installningarAdd.hide(500);
//        };
//    };
//    var addboxbehavior = function () {
//        $bb_aj_installningarAdd.slideToggle(500);
//        if ($bb_aj_installningarSettings.is(':visible')) {
//            $bb_aj_installningarSettings.hide(500);
//        };
//    };
//    return {
//        openSettings: settingsboxbehavior,
//        openadd: addboxbehavior
//    };
//})();


//(function () {

    //var boklistSettingModule = {
    //    init: function () {
    //        this.cacheDom();
    //        this.bindEvent();
    //        this.render();
    //    },
    //    cacheDom: function () {           
    //        this.$bb_aj_cmdaddbooklist = $('#bb_aj_cmdaddbooklist');
    //        this.$bb_aj_cmesetupbooklist = $('#bb_aj_cmesetupbooklist');
    //        this.$bb_aj_BooklistAddContainer = $('.bb_aj_BooklistAddContainer');
    //        this.$bb_aj_BooklistSettingscontainer = $('.bb_aj_BooklistSettingscontainer');
            
    //    },
    //    bindEvent: function () {
    //        this.$bb_aj_cmesetupbooklist.on('click', this.settingsboxbehavior.bind(this));
    //        this.$bb_aj_cmdaddbooklist.on('click', this.addboxbehavior.bind(this));
    //    },
    //    render: function () {
    //        this.$bb_aj_BooklistAddContainer.hide();
    //        this.$bb_aj_BooklistSettingscontainer.hide();
    //    },
    //    settingsboxbehavior: function () {
    //        this.$bb_aj_BooklistSettingscontainer.slideToggle(500);
    //        if (this.$bb_aj_BooklistAddContainer.is(':visible')) {
    //            this.$bb_aj_BooklistAddContainer.hide(500);
    //        };
    //    },
    //    addboxbehavior: function () {
    //        this.$bb_aj_BooklistAddContainer.slideToggle(500);
    //        if (this.$bb_aj_BooklistSettingscontainer.is(':visible')) {
    //            this.$bb_aj_BooklistSettingscontainer.hide(500);
    //        };
    //    }
    //};
    

//})
