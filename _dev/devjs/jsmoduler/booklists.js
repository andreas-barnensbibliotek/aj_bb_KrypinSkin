var $ = require("jquery");
module.exports = {
    init: function (value) {
        
        // booklist mainblock buttons
        // visa addboklist menyn
        $('#bb_aj_addbooklist').on('click', function () {
            $('.bb_aj_BooklistAdd').slideToggle(500);
            if ($('.bb_aj_BooklistSettings').is(':visible')) {
                $('.bb_aj_BooklistSettings').hide(500);
            };
        });
        // visa boklist settings menyn
        $('#bb_aj_setupbooklist').on('click', function () {
            $('.bb_aj_BooklistSettings').slideToggle(500);
            if ($('.bb_aj_BooklistAdd').is(':visible')) {
                $('.bb_aj_BooklistAdd').hide(500);
            };
        });
        /////////////////////////////////////////////////////
    }
}
