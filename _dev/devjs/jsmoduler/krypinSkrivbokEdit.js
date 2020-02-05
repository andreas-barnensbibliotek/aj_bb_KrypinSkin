var $ = require("jquery");
var bb_API = require("./model/apiServiceHandler.js");
var bb_HB_Handler = require("./model/handlebarTemplateHandler.js");
var helperobj = require("./app_modules/krypinHelperFunctions.js");
var appsettingsobject = require("./appsettings.js");
var appsettings = appsettingsobject.config;
let _formObj = {
    Approved:"",
    Category:"",
    Gillar:"",
    Inserted:"",
    Publish:"",
    SkrivID:"",
    Story:"",
    Title: "",
    UserID:"",
    UserName: ""
};

module.exports = {
    init: function (userid) {
        this.cacheDom();        
    },
    cacheDom: function () {
        this.$bb_aj_Form_txtWriterTitle = $("#txtWriterTitle");
        this.$bb_aj_Form_lblWriterTitle = $("#lblWriterTitle");
        this.$bb_aj_Form_lblAJKrypInWriteContent = $("#lblAJKrypInWriteContent");
        this.$bb_aj_Form_cmdSend = $("#cmdSendSkrivbokForm");
        this.$bb_aj_Form_cmdReset = $("#cmdResetSkrivbokForm");
        this.$bb_aj_skrivbokenForm_exempleImg = $(".skrivbokenExempleimg .bookitem-image img");
    },   
    getskrivbookByIdForEdit: function (skrivbokid, userid) {
        let apiurl = appsettings.api.skrivbokenlistor.getuserskribokenByID;
        let handlebartemplate = appsettings.handlebartemplate.hb_skrivbokModalView_tmp;

        this.Render(apiurl(skrivbokid, userid), handlebartemplate, userid);

    },
    updskrivbookEditor: function (skrivbokid, userid) {
        let that = this;
        let apiurl = appsettings.api.skrivbokenlistor.getuserskribokenByID;
        
        this.rensaEditform();
        bb_API.getjsondata(apiurl(skrivbokid, userid), function (data) {

            $.each(data.SkrivbokenList, function (index, item) {               
                that.$bb_aj_Form_txtWriterTitle.val(item.Title);
                that.$bb_aj_Form_cmdSend.attr("data-id", item.SkrivID);

                helperobj.HelpersetSelectedIndex(document.getElementById("drpTypavBerattelse"), item.Category);
                helperobj.HelpersetSelectedIndex(document.getElementById("drp_AJKrypInWritedelad"), item.Publish);
                that.$bb_aj_skrivbokenForm_exempleImg.attr('src', helperobj.getimageHelper(item.Category));
                tinymce.activeEditor.execCommand("mceInsertContent", false, item.Story);                
                
            });
        });
    },
    rensaEditform: function () {
        this.$bb_aj_Form_txtWriterTitle.val("");

        helperobj.HelpersetSelectedIndex(document.getElementById("drpTypavBerattelse"), "0");
        helperobj.HelpersetSelectedIndex(document.getElementById("drp_AJKrypInWritedelad"), "1");
        this.$bb_aj_skrivbokenForm_exempleImg.attr("src", "/DesktopModules/bb_aj_Skrivboken_Krypin/images/skrivbok_default256_36.png");
        this.$bb_aj_Form_cmdSend.attr("data-id", "0");

        tinyMCE.activeEditor.setContent('');
    },
    addSkrivbokItem: function (userid, callback) {
        let apiurl = appsettings.api.skrivbokenlistor.addskribokenItem;
        this.ApiPostHandler(apiurl(), userid, function (retval) {
            callback(retval);
        });
    },
    updateSkrivbokItem: function (userid, callback) {
        let apiurl = appsettings.api.skrivbokenlistor.editskribokenItem;
        this.ApiPostHandler(apiurl(), userid, function (retval) {
            callback(retval);
        });
    },
    deleteSkrivbokItem: function (skrivbokid, userid, callback) {       
        let apiurl = appsettings.api.skrivbokenlistor.delskribokenItem;
        _formObj.SkrivID = skrivbokid;
        _formObj.UserID = userid;

        bb_API.postjsondata(apiurl(), _formObj, function (data) {
            callback(true);
        });
    },
    ApiPostHandler: function (apiurl, userid, callback) {
        let itmdata = this.HelpercollectFormValues(userid);        
        if (this.validateSave(itmdata)) {
            bb_API.postjsondata(apiurl, itmdata, function (data) {
                callback(true);
            });
        } else {
            callback(false);
        };        
    },
    Render: function (apiurl, handlebartemplate, userid) {
        let that = this; //spara this

        bb_API.getjsondata(apiurl, function (data) {

            bb_HB_Handler.injecthtmltemplate("#bb_aj_modalContainer", handlebartemplate, data, function () {
                console.log("api kört!");

            });
        });
    },
    validateSave: function () {
        let retobj = true;
        let stylefalse = "color:red; font-weight:bold;"
        if (!_formObj.Title) {
            this.$bb_aj_Form_lblWriterTitle.attr("style", stylefalse);
            retobj = false;
        }
        if (!_formObj.Story) {
            this.$bb_aj_Form_lblAJKrypInWriteContent.attr("style", stylefalse);
            retobj = false;
        }
        if (retobj) {           
            this.$bb_aj_Form_lblWriterTitle.removeAttr("style");
            this.$bb_aj_Form_lblAJKrypInWriteContent.removeAttr("style");
        }
        return retobj;
    },
    HelpercollectFormValues: function (userid) {
        _formObj.SkrivID = this.$bb_aj_Form_cmdSend.attr("data-id");
        _formObj.UserID = userid;
        _formObj.Approved = 0;
        _formObj.Title = this.$bb_aj_Form_txtWriterTitle.val();
        _formObj.Story = tinyMCE.activeEditor.getContent();
        _formObj.Category = document.getElementById("drpTypavBerattelse").value;
        _formObj.Publish = document.getElementById("drp_AJKrypInWritedelad").value;

        return _formObj;
    }
};
