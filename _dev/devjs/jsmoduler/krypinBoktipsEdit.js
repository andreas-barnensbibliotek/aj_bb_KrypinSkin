var $ = require("jquery");
var bb_API = require("./model/apiServiceHandler.js");
var bb_HB_Handler = require("./model/handlebarTemplateHandler.js");
var appsettingsobject = require("./appsettings.js");
var appsettings = appsettingsobject.config;
let _formObj = {
    Approved: "0",
    Author: "",
    Bookid: "0",
    Title: "",
    Userage: "0",
    HighAge: "0",
    LowAge: "0",
    Review: "",
    Tiptype: "0",
    Userid: "0",
    UserName: "",
    Category: "0",
    TipID: "0"
}

module.exports = {
    init: function (userid) {
        this.cacheDom();              
    },
    cacheDom: function () {
        this.$bb_aj_Form_txtboktipsTitle = $("#txtboktipsTitle");
        this.$bb_aj_Form_cmdSend = $("#cmdSendBoktipsForm");
        this.$bb_aj_Form_cmdReset = $("#cmdResetBoktipsForm");
        this.$bb_aj_Form_exempleImg = $(".boktipsExempleimg .bookitem-image img");
    },
    
    getBoktipsByIdForEdit: function (tipid, userid) {
        let apiurl = appsettings.api.boktipslistor.getuserboktipsByTipID;
        let handlebartemplate = appsettings.handlebartemplate.hb_boktipsModalView_tmp;

        this.Render(apiurl(tipid, userid), handlebartemplate, userid);

    },
    updBoktipsEditor: function (tipid, userid) {
        let that = this;
        let apiurl = appsettings.api.boktipslistor.getuserboktipsByTipID;
        
        this.rensaEditform();
        bb_API.getjsondata(apiurl(tipid, userid), function (data) {

            $.each(data.Boktips, function (index, item) {
                that.$bb_aj_Form_cmdSend.attr("data-id", item.tipid);
                that.$bb_aj_Form_txtboktipsTitle.val(item.Title);
                tinymce.activeEditor.execCommand("mceInsertContent", false, item.Review);
                                
                that.HelpersetSelectedIndex(document.getElementById("drpBoktipSuitableAgeMin"), item.LowAge);
                that.HelpersetSelectedIndex(document.getElementById("drpBoktipSuitableAgeMax"), item.HighAge);
                that.HelpersetSelectedIndex(document.getElementById("drpBoktipAmnen"), item.Category);

                                
                
            });
        });
    },
    rensaEditform: function () {
        this.$bb_aj_Form_txtboktipsTitle.val("");
        tinyMCE.activeEditor.setContent('');
        this.HelpersetSelectedIndex(document.getElementById("drpBoktipSuitableAgeMin"), "1");
        this.HelpersetSelectedIndex(document.getElementById("drpBoktipSuitableAgeMax"), "1");
        this.HelpersetSelectedIndex(document.getElementById("drpBoktipAmnen"), "1");
                
        this.$bb_aj_Form_cmdSend.attr("data-id", "0");
       
        
    },
    addBoktipsItem: function (userid, callback) {
        let apiurl = appsettings.api.boktipslistor.addboktipsItem;
        this.ApiPostHandler(apiurl(),userid, function () {
            callback();
        });
    },
    editBoktipsItem: function (userid, callback) {
        let apiurl = appsettings.api.boktipslistor.editboktipsItem;
        this.ApiPostHandler(apiurl(), userid, function () {            
            callback();
        }); },
    deleteBoktipsItem: function (tipid, userid,callback) {
        let apiurl = appsettings.api.boktipslistor.delboktipsItem;
        
        _formObj.TipID = tipid;
        _formObj.Userid = userid;
        bb_API.postjsondata(apiurl(), _formObj, function (data) {
            callback();
        });
    },
    ApiPostHandler: function (apiurl, userid, callback) {
        let itmdata = this.HelpercollectFormValues(userid);

        bb_API.postjsondata(apiurl,itmdata, function (data) {           
            callback();
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
    HelpersetSelectedIndex: function (s, valsearch) {
        // Loop through all the items in drop down list
        for (i = 0; i < s.options.length; i++) {
            if (s.options[i].value == valsearch) {
                // Item is found. Set its property and exit
                s.options[i].selected = true;
                break;
            };
        };
        return;
    },
    HelpercollectFormValues: function (userid) {
        _formObj.SkrivID = this.$bb_aj_Form_cmdSend.attr("data-id");
        _formObj.UserID = userid;
        _formObj.Approved = 0;
        _formObj.Title = this.$bb_aj_Form_txtboktipsTitle.val();
        _formObj.Review = tinyMCE.activeEditor.getContent();
        _formObj.Category = document.getElementById("drpBoktipAmnen").value;
        _formObj.Publish = document.getElementById("drp_AJKrypInWritedelad").value;

        return _formObj;
    }
};


