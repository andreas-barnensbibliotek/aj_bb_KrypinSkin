var $ = require("jquery");
// sköter globala settings och sidövergripande händelser och inställningar dynamiskt satta on runtime. måste skicka med modulens namn (moduletypID) tex Booklist, Skrivbok, bibblomon m.m
module.exports = {
    init: function (moduletypID) {
        this.cacheDom(moduletypID);
        this.BindEvent();
        this.Settings();
    },
    cacheDom: function (modtypID) {
        this.$cmdMenyOpen=  $('.kk_bb_open' + modtypID);
    },
    BindEvent: function () {        
    },
    Settings: function () {
        this.$cmdMenyOpen.addClass('bb_aj_valdmeny');
    }
}