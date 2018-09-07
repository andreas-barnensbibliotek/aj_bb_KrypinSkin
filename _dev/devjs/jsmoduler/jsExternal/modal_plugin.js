var jQuery = require("jquery");

module.exports = {
    init:function () {
        this.cacheDom();
        this.bindEvent();
        this.render();
    },
    cacheDom: function () {
        this.$bb_aj_MainKrypinSkinContainer = $('.aj_bb_KrypinSkin');
        this.$bb_aj_ModalMainContainer = $('#bb_aj_modalContainer');
        //this.$bb_aj_bb_aj_closeModal = $('.bb_aj_closeModal');
        //this.$bb_aj_bb_aj_openModal = $('.bb_aj_openInModal');
    },
    bindEvent: function () {
        
       
    },
    closeModal: function () {
        this.$bb_aj_ModalMainContainer.fadeOut("slow");
    },
    openInModal: function () {
        this.$bb_aj_ModalMainContainer.fadeIn("slow");
    },
    render: function () {

    }
    

};