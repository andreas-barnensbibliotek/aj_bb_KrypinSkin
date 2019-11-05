var $ = require("jquery");
var PubSubHandler = require("./../model/PubSubHandler.js");
var appsettingsobject = require("./../appsettings.js");
var appsettings = appsettingsobject.config;

module.exports = {
    init: function (ControlID) {
        var auto = new autoComplete({
            selector: ControlID,
            minChars: 2,
            source: function (term, response) {
                let url = appsettings.api.autocomplete.geturl;
                let test = url(10);
                let searchdata = { "Searchstr": term };
                $.ajax({
                    async: true,
                    type: "post",
                    dataType: 'json',
                    data:searchdata,
                    url: url(10),
                    success: function (data) {
                        let suggestions = [];

                        $.each(data.BookList, function (item, val) {
                            
                            suggestions.push([val.Title,val.Bookid]);
                            
                        });
                        
                        response(suggestions);
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        alert("Nått blev fel vid hämtning av arrangemang!");
                    }
                })

            },
            renderItem: function (item, search){
                //search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                //var re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
                // return '<div class="autocomplete-suggestion" data-bookid="' + item[1] + '">' + item[0].replace(re, "<b>$1</b>") + '</div>';
                return '<div class="autocomplete-suggestion" data-bookid="' + item[1] + '">' + item[0] + '</div>';

            },
            onSelect: function (e, term, item) {

                // Kör Event: UpdateImg på alla som är subsciber på eventet
                PubSubHandler.callEvents.emit("updateImg", item.dataset.bookid);
               
                return false;
            }
        });
    },
    demo: function () {
        let demo = new autoComplete({
            selector: '#txtboktipsTitle2',
            minChars: 1,
            source: function (term, suggest) {
                term = term.toLowerCase();
                var choices = ['ActionScript', 'AppleScript', 'Asp', 'Assembly', 'BASIC', 'Batch', 'C', 'C++', 'CSS', 'Clojure', 'COBOL', 'ColdFusion', 'Erlang', 'Fortran', 'Groovy', 'Haskell', 'HTML', 'Java', 'JavaScript', 'Lisp', 'Perl', 'PHP', 'PowerShell', 'Python', 'Ruby', 'Scala', 'Scheme', 'SQL', 'TeX', 'XML'];
                var suggestions = [];
                for (i = 0; i < choices.length; i++)
                    if (~choices[i].toLowerCase().indexOf(term)) suggestions.push(choices[i]);
                suggest(suggestions);
            }
        });
    }
};