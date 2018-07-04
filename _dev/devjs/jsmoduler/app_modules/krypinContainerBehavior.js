var $ = require("jquery");
// sköter slidning och öppning av settingsblocken. måste skicka med modulens namn (moduletypID) tex Booklist, Skrivbok, bibblomon m.m.
module.exports = {
    init: function (moduletypID) {
        this.cacheDom(moduletypID);
        this.bindEvent();
        this.render();
    },
    cacheDom: function (modtypid) {
        this.$bb_aj_cmdAdd = $('#bb_aj_cmdAdd_' + modtypid);
        this.$bb_aj_cmdSetting = $('#bb_aj_cmdSetting_' + modtypid);
        this.$bb_aj_Container = $('.bb_aj_Container');
        this.$bb_aj_AddContainer = $('.bb_aj_AddContainer_' + modtypid);
        this.$bb_aj_SettingsContainer = $('.bb_aj_SettingsContainer_' + modtypid);
        this.$bb_aj_cmdClose = $('.bb_aj_CloseContainer');
    },
    bindEvent: function () {
        this.$bb_aj_cmdAdd.on('click', this.addboxbehavior.bind(this));
        this.$bb_aj_cmdSetting.on('click', this.settingsboxbehavior.bind(this));
        this.$bb_aj_cmdClose.on('click', this.closeboxbehavior.bind(this));
    },
    render: function () {
        this.$bb_aj_Container.hide();
    },
    addboxbehavior: function () {
        this.$bb_aj_AddContainer.slideToggle(500);
        if (this.$bb_aj_SettingsContainer.is(':visible')) {
            this.$bb_aj_SettingsContainer.hide(500);
        };
    },
    settingsboxbehavior: function () {
        this.$bb_aj_SettingsContainer.slideToggle(500);
        if (this.$bb_aj_AddContainer.is(':visible')) {
            this.$bb_aj_AddContainer.hide(500);
        };
    },
    closeboxbehavior: function () {
        this.$bb_aj_Container.hide(500);
    }
};

