var $ = require("jquery");
var bb_API = require("./model/apiServiceHandler.js");
var bb_HB_Handler = require("./model/handlebarTemplateHandler.js");
var helperobj = require("./app_modules/krypinHelperFunctions.js");
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
    TipID: "0",
    ImgSrc: ""
}

module.exports = {
    init: function (userid, booktipID) {

        if (booktipID) {

        }
        this.cacheDom();              
    },
    cacheDom: function () {
        this.$bb_aj_Form_txtboktipsTitle = $("#txtboktipsTitle");
        this.$bb_aj_Form_lblboktipsTitle = $("#lblboktipsTitle");
        this.$bb_aj_Form_lblAJKrypInWriteContent = $("#lblAJKrypInWriteContent");
        
        this.$bb_aj_Form_cmdSend = $("#cmdSendBoktipsForm");
        this.$bb_aj_Form_cmdReset = $("#cmdResetBoktipsForm");
        this.$bb_aj_boktipsFormMeta = $('#bb_aj_boktipsFormMeta');
        this.$bb_aj_boktipsForm_exempleImg = $(".boktipsExempleimg .bookitem-image img");
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
                that.HelperUpdateFormValues(item);
                //that.$bb_aj_Form_cmdSend.attr("data-id", item.TipID);
                //that.$bb_aj_Form_txtboktipsTitle.val(item.Title);
                //tinymce.activeEditor.execCommand("mceInsertContent", false, item.Review);
                                
                //helperobj.HelpersetSelectedIndex(document.getElementById("drpBoktipSuitableAgeMin"), item.LowAge);
                //helperobj.HelpersetSelectedIndex(document.getElementById("drpBoktipSuitableAgeMax"), item.HighAge);
                //helperobj.HelpersetSelectedIndex(document.getElementById("drpBoktipAmnen"), item.Category);
                //that.$bb_aj_boktipsFormMeta.attr('data-approved', item.Approved);
                //that.$bb_aj_boktipsFormMeta.attr('data-author', item.Author);
                //that.$bb_aj_boktipsFormMeta.attr('data-bookid', item.Bookid);
                //that.$bb_aj_boktipsFormMeta.attr('data-usernamn', item.UserName);
                //that.$bb_aj_boktipsFormMeta.attr('data-Userage', item.Userage);
                //that.$bb_aj_boktipsForm_exempleImg.attr('src', item.ImgSrc);
               
            });
        });
    },
    rensaEditform: function () {
        this.$bb_aj_Form_cmdSend.attr("data-id", "0");
        this.$bb_aj_Form_txtboktipsTitle.val("");
        tinyMCE.activeEditor.setContent('');
        helperobj.HelpersetSelectedIndex(document.getElementById("drpBoktipSuitableAgeMin"), "1");
        helperobj.HelpersetSelectedIndex(document.getElementById("drpBoktipSuitableAgeMax"), "1");
        helperobj.HelpersetSelectedIndex(document.getElementById("drpBoktipAmnen"), "1");
        this.$bb_aj_boktipsFormMeta.attr('data-approved', "0");
        this.$bb_aj_boktipsFormMeta.attr('data-author', "");
        this.$bb_aj_boktipsFormMeta.attr('data-bookid', "0");
        this.$bb_aj_boktipsFormMeta.attr('data-usernamn', "");
        this.$bb_aj_boktipsFormMeta.attr('data-Userage', "0");
        this.$bb_aj_boktipsForm_exempleImg.attr('src', helperobj.getimageHelper("0"));        
        this.$bb_aj_Form_cmdSend.attr("data-id", "0");     
        
    },
    addBoktipsItem: function (userid, callback) {
        let apiurl = appsettings.api.boktipslistor.addboktipsItem;
        this.ApiPostHandler(apiurl(),userid, function (retval) {
            callback(retval);
        });
    },
    editBoktipsItem: function (userid, callback) {
        let apiurl = appsettings.api.boktipslistor.editboktipsItem;
        this.ApiPostHandler(apiurl(), userid, function (retval) {
            callback(retval);
        }); },
    deleteBoktipsItem: function (tipid, userid,callback) {
        let apiurl = appsettings.api.boktipslistor.delboktipsItem;
        
        _formObj.TipID = tipid;
        _formObj.Userid = userid;
        bb_API.postjsondata(apiurl(), _formObj, function (data) {
            callback();
        });
    },
    updBoktipsEditorByBookid: function (bookid) {
        let that = this;
        let apiurl = appsettings.api.boktipslistor.getbookContextByBookID;

        //this.rensaEditform();
        bb_API.getjsondata(apiurl(bookid), function (data) {
            $.each(data.Boktips, function (index, item) {
                that.HelperUpdateFormValues(item);               
            });
        });
    },
    ApiPostHandler: function (apiurl, userid, callback) {
        let itmdata = this.HelpercollectFormValues(userid);
        if (this.validateSave(itmdata)){           
            bb_API.postjsondata(apiurl,itmdata, function (data) {           
                callback(true);
            });
        }else{
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
        let retobj =true;
        let stylefalse= "color:red; font-weight:bold;"
        if (!_formObj.Title) {
            this.$bb_aj_Form_lblboktipsTitle.attr("style", stylefalse);
            retobj= false;
        }
        if (!_formObj.Review) {
            this.$bb_aj_Form_lblAJKrypInWriteContent.attr("style", stylefalse);
            retobj = false;
        }
        if (retobj) {
            this.$bb_aj_Form_lblboktipsTitle.removeAttr("style");
            this.$bb_aj_Form_lblAJKrypInWriteContent.removeAttr("style")
        }
        return retobj;
    }, 
    HelpercollectFormValues: function (userid) {    
        
        _formObj.Approved = this.$bb_aj_boktipsFormMeta.attr('data-approved');
        _formObj.Author = this.$bb_aj_boktipsFormMeta.attr('data-author');
        _formObj.Bookid = this.$bb_aj_boktipsFormMeta.attr('data-bookid');
        _formObj.Title= this.$bb_aj_Form_txtboktipsTitle.val();
        _formObj.Userage = this.$bb_aj_boktipsFormMeta.attr('data-Userage');
        _formObj.HighAge= document.getElementById("drpBoktipSuitableAgeMax").value;
        _formObj.LowAge= document.getElementById("drpBoktipSuitableAgeMin").value;
        _formObj.Review= tinyMCE.activeEditor.getContent();
        _formObj.Tiptype= "0",
        _formObj.Userid= userid;
        _formObj.UserName = this.$bb_aj_boktipsFormMeta.attr('data-usernamn');
        _formObj.Category = document.getElementById("drpBoktipAmnen").value;
        _formObj.TipID = this.$bb_aj_Form_cmdSend.attr("data-id");
        _formObj.ImgSrc = this.$bb_aj_boktipsForm_exempleImg.attr('src');
        return _formObj;
    },
    HelperUpdateFormValues: function (item) {
        let that = this;
        that.$bb_aj_Form_cmdSend.attr("data-id", item.TipID);
        that.$bb_aj_Form_txtboktipsTitle.val(item.Title);
        if (!item.Review) {
            item.Review = "";
        }
        tinyMCE.activeEditor.execCommand("mceInsertContent", false, item.Review);

        helperobj.HelpersetSelectedIndex(document.getElementById("drpBoktipSuitableAgeMin"), item.LowAge);
        helperobj.HelpersetSelectedIndex(document.getElementById("drpBoktipSuitableAgeMax"), item.HighAge);
        helperobj.HelpersetSelectedIndex(document.getElementById("drpBoktipAmnen"), item.Category);
        that.$bb_aj_boktipsFormMeta.attr('data-approved', item.Approved);
        that.$bb_aj_boktipsFormMeta.attr('data-author', item.Author);
        that.$bb_aj_boktipsFormMeta.attr('data-bookid', item.Bookid);
        that.$bb_aj_boktipsFormMeta.attr('data-usernamn', item.UserName);
        that.$bb_aj_boktipsFormMeta.attr('data-Userage', item.Userage);
        that.$bb_aj_boktipsForm_exempleImg.attr('src', item.ImgSrc);
        return item;
    }
};


