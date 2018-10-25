var _ = require("lodash");
var $ = require("jquery");
var bb_pagebehaviors = require("./app_modules/krypinPageBahavior.js");
var bb_API = require("./model/apiServiceHandler.js");
var bb_HB_Handler = require("./model/handlebarTemplateHandler.js");

var appsettingsobject = require("./appsettings.js");
var appsettings = appsettingsobject.config;
var globalmessages = appsettingsobject.usermessages;

module.exports = {
    init: function (userid) {
        let moduleName = 'Setup';
        bb_pagebehaviors.init(moduleName);
       
        this.cacheDom();
        this.BindEvent(userid);
        this.initSettings(userid)
    },
    cacheDom: function () {
        this.$bb_aj_CurrentAvatar = $('#bk_aj_setup_avatar');
        this.$bb_aj_CurrentSkin = $('#bk_aj_setup_skin');
        this.$bb_aj_avatar_maingallery = $('#avatar_maingallery');
        this.$bb_aj_skin_maingallery = $('#skin_maingallery');
        this.$aj_bb_KrypinSkin = $(".aj_bb_KrypinSkin");

        this.$bb_aj_btnSettingSave = $('#btnSettingSave');
        this.$bb_aj_btnSettingTemp = $('#btnSettingTemp');
        this.$bb_aj_btnSettingAbort = $('#btnSettingAbort');

    },
    BindEvent: function (userid) {
        let that = this;

        this.$bb_aj_avatar_maingallery.on('click', '.bk_aj_setup_avatar_item', function (e) {
            let valdsrc = $(this).find('img').attr("src");
            let retID = $(this).attr("data-avataritm");

            that.$bb_aj_CurrentAvatar.attr("src", valdsrc);          
            appsettings.userinfo.avatarid = retID;
            return false;
        });

        this.$bb_aj_skin_maingallery.on('click', '.bk_aj_setup_skin_item', function (e) {
            let valdsrc = $(this).find('img').attr("src");
            let retID = $(this).attr("data-skinitm");
            let skinclass = $(this).attr("data-skinclass");

            that.$bb_aj_CurrentSkin.attr("src", valdsrc);            
            appsettings.userinfo.skinid = retID;
            that.$bb_aj_CurrentSkin.attr("data-skinclass", skinclass);
            return false;
        });

        this.$bb_aj_btnSettingTemp.on('click', function (e) {
            let skinclass = that.$bb_aj_CurrentSkin.attr("data-skinclass");
            that.tempupdateSkin(skinclass);

            return false;
        });

        this.$bb_aj_btnSettingAbort.on('click', function (e) {
            let skinclass = $(this).attr("data-default");
            that.$bb_aj_CurrentAvatar.attr("src", appsettings.userinfo.defaultavatarimg);
            that.$bb_aj_CurrentSkin.attr("src", appsettings.userinfo.defaultskinimg);
            that.$bb_aj_CurrentSkin.attr("data-skinclass", appsettings.userinfo.defaultskinclass);
            that.tempupdateSkin(skinclass);

            return false;
        });

        this.$bb_aj_btnSettingSave.on('click', function (e) {
            if (confirm(globalmessages.installningar.confirmSave)) {
                                
                that.updatesettings(userid, 1, appsettings.userinfo.avatarid, function (t) {                        
                    
                });
                that.updatesettings(userid, 2, appsettings.userinfo.skinid, function (x) {
                        return true;
                    });
            };
        });
        
    },
    updatesettings: function (userid, typ, value, callback) {
        let that = this;
        let apiurl = appsettings.api.installningar.updatesettings;
        bb_API.getjsondata(apiurl(userid, typ, value), function (data) {
            callback(data);
        });
    },
    tempupdateSkin: function (skinclass) {
        this.$aj_bb_KrypinSkin.removeClass(function (index, className) {
            return (className.match(/(^|\s)aj_bb_skin_\S+/g) || []).join(' ');
        }).addClass(skinclass);
    },
    getcurrentAvatarimg: function (settingslist) {
        let that = this; //spara this 
        let retobj = "defautlavatar_gubbeGlad";
        let retID = "33";
        let retsrc = appsettings.api.installningar.curAvatarsrc;

        $.each(settingslist.SettingOptionList, function (index, item) {
            if (item.SettingsID == settingslist.SettingValue) {
                retobj = item.SettingSrc;
                retID = item.SettingsID;
            };
        });       
        retsrc += retobj;
        that.$bb_aj_CurrentAvatar.attr("src", retsrc);
        appsettings.userinfo.avatarid = retID;
        appsettings.userinfo.defaultavatarimg = retsrc;
        appsettings.userinfo.defaultavatarid = retID;
               
        return true;
    },
    getcurrentskinimg: function (settingslist, getval) {
        let that = this; //spara this 
        let retobj = "GreenNycklpigeStyle";
        let retID = "2";
        let skinclass = "aj_bb_greenbg";
        let retsrc = appsettings.api.installningar.curSkinsrc;
               
        $.each(settingslist.SettingOptionList, function (index, item) {
            if (item.SettingsID == settingslist.SettingValue) {
                retobj = item.SettingName;
                retID = item.SettingsID;
                skinclass = item.SettingClass;
            };
        });

        retsrc += retobj + ".jpg";
        that.$bb_aj_CurrentSkin.attr("src", retsrc);              
        that.$bb_aj_CurrentSkin.attr("data-skinclass", skinclass);
        that.$bb_aj_btnSettingAbort.attr("data-default", skinclass);

        appsettings.userinfo.skinid = retID;
        appsettings.userinfo.defaultskinimg = retsrc;
        appsettings.userinfo.defaultskinclass = skinclass;
        appsettings.userinfo.defaultskinid = retID;
       
        return true;
    },
    initSettings: function (userid) {
        
        let apiurl = appsettings.api.installningar.src;
        this.render(userid, apiurl(userid));
        
    },
    render: function (userid, apiurl) {
        let that = this; //spara this        
        let handlebartemplateAvatar = appsettings.handlebartemplate.hb_settingsAvatar_tmp;
        let handlebartemplateSkin = appsettings.handlebartemplate.hb_settingsSkins_tmp;

        bb_API.getjsondata(apiurl, function (data) {
            
            that.getcurrentAvatarimg(data.SettingsList[0]);
            that.getcurrentskinimg(data.SettingsList[1]);

            bb_HB_Handler.injecthtmltemplate("#avatar_maingallery", handlebartemplateAvatar, data.SettingsList[0], function () {                
            });
            bb_HB_Handler.injecthtmltemplate("#skin_maingallery", handlebartemplateSkin, data.SettingsList[1], function () {                
            });
        });
    }
};
