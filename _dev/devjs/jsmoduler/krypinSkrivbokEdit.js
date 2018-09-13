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
        this.BindEvent(userid);
    },
    cacheDom: function () {
        this.$bb_aj_Form_txtWriterTitle = $("#txtWriterTitle");
        this.$bb_aj_Form_cmdSend = $("#cmdSendSkrivbokForm");
        this.$bb_aj_Form_cmdReset = $("#cmdResetSkrivbokForm");       
    },
    BindEvent: function (userid) {
        let that = this;

        this.$bb_aj_Form_cmdReset.on('click', function (e) {
            that.rensaEditform();
            return false;
        });

        this.$bb_aj_Form_cmdSend.on('click', function (e) {
            let cmdtyp = $(this).attr("data-cmd");

            if (cmdtyp == "add") {
                if (confirm("Är du säker på att du vill ")) {
                    that.addSkrivbokItem(userid);
                    that.rensaEditform();

                };
            };
            if (cmdtyp == "edit") {
                if (confirm("Är du säker på att du vill ")) {
                    that.editSkrivbokItem(userid);
                    that.rensaEditform();
                };
            };
                        
            return false;
        });
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

                tinymce.activeEditor.execCommand("mceInsertContent", false, item.Story);                
                
            });
        });
    },
    rensaEditform: function () {
        this.$bb_aj_Form_txtWriterTitle.val("");

        helperobj.HelpersetSelectedIndex(document.getElementById("drpTypavBerattelse"), "0");
        helperobj.HelpersetSelectedIndex(document.getElementById("drp_AJKrypInWritedelad"), "1");
        
        this.$bb_aj_Form_cmdSend.attr("data-id", "0");

        tinyMCE.activeEditor.setContent('');
    },
    addSkrivbokItem: function (userid) {
        let apiurl = appsettings.api.skrivbokenlistor.addskribokenItem;
        this.ApiPostHandler(apiurl(), userid);
    },
    updateSkrivbokItem: function (userid) {
        let apiurl = appsettings.api.skrivbokenlistor.editskribokenItem;
        this.ApiPostHandler(apiurl(), userid);
    },
    deleteSkrivbokItem: function (userid) {
        let apiurl = appsettings.api.skrivbokenlistor.delskribokenItem;
        this.ApiPostHandler(apiurl(), userid);
    },
    ApiPostHandler: function (apiurl, userid) {
        let itmdata = this.HelpercollectFormValues(userid);

        bb_API.postjsondata(apiurl,itmdata, function (data) {
            console.log("APIPOST KLAR!!!!");
        });
    },
    Render: function (apiurl, handlebartemplate, userid) {
        let that = this; //spara this

        bb_API.getjsondata(apiurl, function (data) {

            bb_HB_Handler.injecthtmltemplate("#bb_aj_modalContainer", handlebartemplate, data, function () {
                console.log("api kört!");

            });
        });
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


