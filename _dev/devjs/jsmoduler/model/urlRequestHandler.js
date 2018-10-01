//// ta hand om querystring parametrar och lagra dom i ett jsonobject urlparam.

module.exports = {
    checkparamsinurl: function (parmid) {
        let urlParams = {};
        let match,
            pl = /\+/g,  // Regex for replacing addition symbol with a space
            search = /([^&=]+)=?([^&]*)/g,
            decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
            query = window.location.search.substring(1);
               
        while (match = search.exec(query))
            urlParams[decode(match[1])] = decode(match[2]);

        if (!urlParams.tab) {
            let sPageURL = window.location.href.split('/');
            let index = sPageURL.indexOf("bookid");
            if (index > 0) {
                urlParams.bookid = sPageURL[index + 1];
            };
            index = sPageURL.indexOf("typ");
            if (index > 0) {
                urlParams.typ = sPageURL[index + 1];
            };
            //index = sPageURL.indexOf("id");
            //if (index > 0) {
            //    urlParams.arrid = sPageURL[index + 1];
            //};
            //console.log(urlParams.bookid);
            //console.log(urlParams.typ);
        }
        return urlParams;
    }
}