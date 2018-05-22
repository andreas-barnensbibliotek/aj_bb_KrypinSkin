var _ = require("lodash");
var $ = require("jquery");
module.exports = {
    init: function (value) {

        $('.kk_bb_openBooklists').addClass('bb_aj_valdmeny');
        //lodash.init();
        // booklist mainblock buttons
        // visa addboklist menyn

        $('#bb_aj_setupbooklist').on('click', function () {
            $('.bb_aj_installningarSettings').slideToggle(500);
            if ($('.bb_aj_installningarAdd').is(':visible')) {
                $('.bb_aj_installningarAdd').hide(500);
            };
        });
        // visa boklist settings menyn
        $('#bb_aj_addbooklist').on('click', function () {
            $('.bb_aj_installningarAdd').slideToggle(500);
            if ($('.bb_aj_installningarSettings').is(':visible')) {
                $('.bb_aj_installningarSettings').hide(500);
            };
        });
        /////////////////////////////////////////////////////
        test();
    }

};
var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
];

  var test = function () {
      var namn = $('.kk_aj_CurrentPageType').html();
      var t = _.find(users, function (o) { return o.age == 40; });
      

  }
