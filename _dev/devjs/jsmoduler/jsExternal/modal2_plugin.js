
module.exports = {
    init:function () {
        this.cacheDom();       
    },
    cacheDom: function () {
        this.$bb_aj_MainKrypinSkinContainer = $('.aj_bb_KrypinSkin');
        this.$bb_aj_ModalMainContainer = $('#bb_aj_GenericModalContainer');
        //this.$bb_aj_bb_aj_closeModal = $('.bb_aj_closeModal');
        //this.$bb_aj_bb_aj_openModal = $('.bb_aj_openInModal');
    },    
    closeModal: function () {
        this.$bb_aj_ModalMainContainer.fadeOut("slow");
    },
    openInModal: function () {
        this.$bb_aj_ModalMainContainer.fadeIn("slow");
    }   

};