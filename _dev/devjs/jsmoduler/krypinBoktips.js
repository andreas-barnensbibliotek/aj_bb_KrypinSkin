var _ = require("lodash");
var $ = require("jquery");
var editorHandler = require("./jsExternal/tinymceEditorSettings.js");
var modalobj = require("./jsExternal/modal_plugin.js");
var PubSubHandler = require("./model/PubSubHandler.js");
var autocompleteobj = require("./jsExternal/autocompleteModule.js");
var bb_pagebehaviors = require("./app_modules/krypinPageBahavior.js");
var bb_containerbehaviors = require("./app_modules/krypinContainerBehavior.js");
var bb_API = require("./model/apiServiceHandler.js");
var bb_requestObj = require("./model/urlRequestHandler.js");
var helperobj = require("./app_modules/krypinHelperFunctions.js");
var bb_HB_Handler = require("./model/handlebarTemplateHandler.js");
var formeditObj = require("./krypinBoktipsEdit.js");

var appsettingsobject = require("./appsettings.js");
var appsettings = appsettingsobject.config;

module.exports = {
    init: function (userid) {        
        let moduleName = 'Boktips'
        let reqObj = bb_requestObj.checkparamsinurl();
        autocompleteobj.init('#txtboktipsTitle');
        modalobj.init();
       
        formeditObj.init(userid, reqObj.bookid);        
        bb_containerbehaviors.init(moduleName);
        bb_pagebehaviors.init(moduleName);
       
        this.cacheDom();
        this.BindEvent(userid);
        this.initbooklist(userid,reqObj.bookid);      
    },
    cacheDom: function () {
        this.$bb_aj_MainKrypinSkinContainer = $('.aj_bb_KrypinSkin');
        this.$bb_aj_ModalMainContainer = $('#bb_aj_modalContainer');
        this.$bb_aj_Form_txtboktipsTitle = $("#txtboktipsTitle");
        this.$bb_aj_boktipsForm_cmdSend = $("#cmdSendBoktipsForm");
        this.$bb_aj_boktipsForm_cmdReset = $("#cmdResetBoktipsForm");
        this.$bb_aj_boktipsForm_exempleImg = $(".boktipsExempleimg .bookitem-image img");
        this.$bb_aj_bb_boktipsFormBlock = $('.aj_bb_formBlock');
        this.$bb_aj_boktipsCmdAdd = $('#bb_aj_cmdAdd');
    },
    BindEvent: function (userid) {
        let that = this;

        editorHandler.init();
        
        PubSubHandler.callEvents.on("updateImg", function (data) {
            that.updboktipsbyBookID(data);
        });

        this.$bb_aj_MainKrypinSkinContainer.on('click', '.bb_aj_closeModal', function (e) {
            modalobj.closeModal();
            return false;
        });
        this.$bb_aj_MainKrypinSkinContainer.on('click', '.bb_aj_openInModal', function (e) {
            let skrivbokid = $(this).attr("data-id");
            that.getboktipsbyID(skrivbokid, userid);
            modalobj.openInModal();
            return false;
        });

        this.$bb_aj_MainKrypinSkinContainer.on('click', '.buttonitem_edit', function (e) {
            $("html, body").animate({ scrollTop: $('.bb_aj_gridItem_Header').offset().top }, "slow");

            let tipid = $(this).attr("data-id");
            that.$bb_aj_boktipsForm_cmdSend.attr("data-cmd", "edit");
            that.$bb_aj_boktipsForm_cmdSend.html("&Auml;ndra");
            that.$bb_aj_bb_boktipsFormBlock.show("slow");
            that.updboktipsEdiorbyID(tipid, userid);
            return false;
        });
        this.$bb_aj_boktipsForm_cmdSend.on('click', function (e) {
            let cmdtyp = $(this).attr("data-cmd");

            if (cmdtyp == "add") {
                let msg = helperobj.htmlencoderHelper("&Auml;r du s&auml;ker p&aring; att du vill l&auml;gga till boktipset?");
                if (confirm(msg)) {
                    formeditObj.addBoktipsItem(userid, function () {
                        // rensa och uppdatera sidan
                        that.formupdate(userid);
                    });
                };
            };

            if (cmdtyp == "edit") {
                let msg = helperobj.htmlencoderHelper("&Auml;r du s&auml;ker p&aring; att du vill &auml;ndra i boktipset?");
                if (confirm(msg)) {                    
                        formeditObj.editBoktipsItem(userid, function () {
                            // rensa och uppdatera sidan
                            that.formupdate(userid);
                        });
                        // sätt sendbutton till default
                        that.$bb_aj_boktipsForm_cmdSend.attr("data-cmd", "add");
                        that.$bb_aj_boktipsForm_cmdSend.html("Spara");
                    };
                };

                return false;
            
        });

        this.$bb_aj_MainKrypinSkinContainer.on("click", ".buttonitem_tabort", function (e) {
            let tipid = $(this).attr("data-id");
            let msg = helperobj.htmlencoderHelper("&Auml;r du s&auml;ker p&aring; att du vill ta bort boktipset?");
            if (confirm(msg)) { 
            formeditObj.deleteBoktipsItem(tipid, userid, function () {
                    that.formupdate(userid);
                });
            };
            return false;
        });

        this.$bb_aj_boktipsForm_cmdReset.on('click', function (e) {
            formeditObj.rensaEditform();
            that.$bb_aj_boktipsForm_cmdSend.attr("data-cmd", "add");
            that.$bb_aj_boktipsForm_cmdSend.html("Spara");
            return false;
        });

        this.$bb_aj_MainKrypinSkinContainer.on('change', '#drpTypavBerattelse', function (e) {
            let valdcat = $(this).val();
            
            return false;
        });

        this.$bb_aj_MainKrypinSkinContainer.on('click', '.skrivboklistshow', function (e) {
            $('.aj_bb_formBlock').toggle("slow");
            $(this).toggleClass("grader180");
            return false;
        });

        this.$bb_aj_MainKrypinSkinContainer.on('click', '#bb_aj_boktipsCmdAdd', function (e) {
            $('.aj_bb_formBlock').toggle("slow");
            $(this).toggleClass("grader180");
            formeditObj.rensaEditform();
            return false;
        });
        this.$bb_aj_MainKrypinSkinContainer.on('click', '.boktipslistshow', function (e) {
            
            $('.aj_bb_formBlock').toggle("slow");
            $(this).toggleClass("grader180");
            return false;
        });

    },
    getboktipslist: function (apiurl, userid) {
        let handlebartemplate = appsettings.handlebartemplate.hb_boktipslist_tmp;
        this.Render(apiurl, handlebartemplate, userid);
    },
    getboktipsbyID: function (tipid, userid) {
        formeditObj.getBoktipsByIdForEdit(tipid, userid);
    },
    updboktipsEdiorbyID: function (tipid, userid) {
        formeditObj.updBoktipsEditor(tipid, userid);
    },
    updboktipsbyBookID: function (bookid) {
        formeditObj.updBoktipsEditorByBookid(bookid);
    },
    formupdate: function (userid) {
        formeditObj.rensaEditform();
        this.initbooklist(userid)
    },
    initbooklist: function (userid, bookid) {
        let apiurl = appsettings.api.boktipslistor.getuserboktipslist;
        this.getboktipslist(apiurl(userid), userid);
        if (bookid) {
            formeditObj.updBoktipsEditorByBookid(bookid);
        };
    },
    Render: function (apiurl, handlebartemplate, userid, ordername) {
        let that = this; //spara this
        ordername = ordername || "asc";

        bb_API.getjsondata(apiurl, function (data) {
            let boktipsobj = data.Boktips;
            data.Boktips = _.orderBy(boktipsobj, ['Title'], [ordername]);

            bb_HB_Handler.injecthtmltemplate("#bb_aj_boktipstemplatecontainer", handlebartemplate, data, function () {
                //jplist.init();            
            });
        });

    }
};
