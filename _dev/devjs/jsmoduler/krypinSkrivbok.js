var _ = require("lodash");
var $ = require("jquery");
var editorHandler = require("./jsExternal/tinymceEditorSettings.js");
var modalobj = require("./jsExternal/modal_plugin.js");
var bb_pagebehaviors = require("./app_modules/krypinPageBahavior.js");
var bb_containerbehaviors = require("./app_modules/krypinContainerBehavior.js");
var bb_API = require("./model/apiServiceHandler.js");
var bb_HB_Handler = require("./model/handlebarTemplateHandler.js");
var helperobj = require("./app_modules/krypinHelperFunctions.js");
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
        this.$bb_aj_Form_txtWriterTitle = $("#txtWriterTitle");
        this.$bb_aj_Form_cmdSend = $("#cmdSendSkrivbokForm");
        this.$bb_aj_Form_cmdReset = $("#cmdResetSkrivbokForm");
        this.$bb_aj_Form_exempleImg = $(".skrivbokenExempleimg .bookitem-image img"); 
        this.$bb_aj_berattelseCatdrp = $("#drpTypavBerattelse");
        this.$bb_aj_aj_bb_formBlock = $('.aj_bb_formBlock');
        this.$bb_aj_cmdAdd = $('#bb_aj_cmdAdd');
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
            $("html, body").animate({ scrollTop: $('.bb_aj_gridItem_Header').offset().top }, "slow");

            let skrivbokid = $(this).attr("data-id");
            that.$bb_aj_Form_cmdSend.attr("data-cmd", "edit");
            that.$bb_aj_Form_cmdSend.html("&Auml;ndra");
            that.$bb_aj_aj_bb_formBlock.show("slow");
            that.updskrivbookEdiorbyID(skrivbokid, userid);            
            return false;
        });
        this.$bb_aj_Form_cmdSend.on('click', function (e) {
            let cmdtyp = $(this).attr("data-cmd");

            if (cmdtyp == "add") {
                if (confirm("Är du säker på att du vill lägga till texten?")) {                   
                    formeditObj.addSkrivbokItem(userid, function () {
                        // rensa och uppdatera sidan
                        that.formupdate(userid);                        
                    });
                };
            };

            if (cmdtyp == "edit") {
                if (confirm("Är du säker på att du vill ändra texten?")) {                 
                    formeditObj.editSkrivbokItem(userid, function () {
                        // rensa och uppdatera sidan
                        that.formupdate(userid);
                       
                    });                    
                    // sätt sendbutton till default
                    that.$bb_aj_Form_cmdSend.attr("data-cmd", "add");
                    that.$bb_aj_Form_cmdSend.html("Spara"); 
                };
            };
           
            return false;
        });

        this.$bb_aj_MainKrypinSkinContainer.on("click", ".buttonitem_tabort", function (e) {
            let skrivbokid = $(this).attr("data-id");

            if (confirm("Är du säker på att du vill tabort texten?")) {
                formeditObj.deleteSkrivbokItem(skrivbokid, userid, function () {
                    that.formupdate(userid);                    
                });                
            };
            return false;
        });

        this.$bb_aj_Form_cmdReset.on('click', function (e) {
            formeditObj.rensaEditform();
            that.$bb_aj_Form_cmdSend.attr("data-cmd", "add");
            that.$bb_aj_Form_cmdSend.html("Spara");
            return false;
        });

        this.$bb_aj_MainKrypinSkinContainer.on('change', '#drpTypavBerattelse', function (e) {
            let valdcat = $(this).val();
            that.$bb_aj_Form_exempleImg.attr('src', helperobj.getimageHelper(valdcat));
            return false;
        });

        this.$bb_aj_MainKrypinSkinContainer.on('click', '.skrivboklistshow', function (e) {
            $('.aj_bb_formBlock').toggle("slow");
            $(this).toggleClass("grader180");
            return false;
        });
        
        this.$bb_aj_MainKrypinSkinContainer.on('click', '#bb_aj_cmdAdd', function (e) {
            $('.aj_bb_formBlock').toggle("slow");
            $(this).toggleClass("grader180");
            formeditObj.rensaEditform();
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
    formupdate : function (userid) {
        formeditObj.rensaEditform();
        this.initbooklist(userid)
    },
    initbooklist: function (userid) {
        let apiurl = appsettings.api.skrivbokenlistor.getuserskribokenlist;
        this.getskrivbooklist(apiurl(userid), userid);
    },   
    Render: function (apiurl, handlebartemplate, userid, ordername) {
        let that = this; //spara this
        ordername = ordername || "asc";

        bb_API.getjsondata(apiurl, function (data) {
            let skrivboken = data.SkrivbokenList;
            data.SkrivbokenList = _.orderBy(skrivboken, ['Title'], [ordername]);           

            bb_HB_Handler.injecthtmltemplate("#bb_aj_skrivbokentemplatecontainer", handlebartemplate, data, function () {               
                //jplist.init();            
            });
        });
        
    }
  


};

