var _ = require("lodash");
var $ = require("jquery");
var editorHandler = require("./jsExternal/tinymceEditorSettings.js");
var modalobj = require("./jsExternal/modal_plugin.js");
var bb_pagebehaviors = require("./app_modules/krypinPageBahavior.js");
var bb_containerbehaviors = require("./app_modules/krypinContainerBehavior.js");
var bb_API = require("./model/apiServiceHandler.js");
var bb_HB_Handler = require("./model/handlebarTemplateHandler.js");
var formeditObj = require("./krypinSkrivbokEdit.js");

var appsettingsobject = require("./appsettings.js");
var appsettings = appsettingsobject.config;

module.exports = {
    init: function (userid) {
        let moduleName = 'Skrivbok';
        modalobj.init();
        formeditObj.init(userid);
        bb_containerbehaviors.init(moduleName);
        bb_pagebehaviors.init(moduleName);
        this.cacheDom();
        this.BindEvent(userid);
        this.initbooklist(userid);

    },
    cacheDom: function () {
        this.$bb_aj_MainKrypinSkinContainer = $('.aj_bb_KrypinSkin');
        this.$bb_aj_ModalMainContainer = $('#bb_aj_modalContainer');
    },
    BindEvent: function (userid) {
        let that = this;        
        editorHandler.init();      

        this.$bb_aj_MainKrypinSkinContainer.on('click', '.bb_aj_closeModal', function (e) {
            modalobj.closeModal();
            return false;
        });
        this.$bb_aj_MainKrypinSkinContainer.on('click', '.bb_aj_openInModal', function (e) {
            let skrivbokid = $(this).attr("data-id");
            that.getskrivbookbyID(skrivbokid, userid);
            modalobj.openInModal();
            return false;
        });
        
        this.$bb_aj_MainKrypinSkinContainer.on('click', '.buttonitem_edit', function (e) {            
            let skrivbokid = $(this).attr("data-id");
            that.updskrivbookEdiorbyID(skrivbokid, userid);            
            return false;
        });
        
        
    },    
    getskrivbooklist: function (apiurl, userid) {
        let handlebartemplate = appsettings.handlebartemplate.hb_skrivbokenlist_tmp;
        this.Render(apiurl, handlebartemplate, userid);
    },
    getskrivbookbyID: function (skrivbokid, userid) {
        formeditObj.getskrivbookByIdForEdit(skrivbokid, userid);
    },
    updskrivbookEdiorbyID: function (skrivbokid, userid) {
        formeditObj.updskrivbookEditor(skrivbokid, userid);
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

