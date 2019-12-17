
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
        $('#bb_aj_GenericModalContainer').fadeOut("slow");
        $('#bb_aj_modalContainer').fadeOut("slow");
    },
    openInModal: function () {
        $('#bb_aj_GenericModalContainer').fadeIn("slow");
        $('#bb_aj_modalContainer').fadeIn("slow");
    }   

};