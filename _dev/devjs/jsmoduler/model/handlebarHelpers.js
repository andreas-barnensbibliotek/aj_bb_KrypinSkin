var _ = require("lodash");
var $ = require("jquery");
var appsettingsobject = require("./../appsettings.js");

module.exports = {
    init: function () {

        //Handlebars.registerHelper('datagroupname', function (name) {            
        //    return name.replace(/\s/g, "");
        //});

        Handlebars.registerHelper('datagroupname', function (name) {
            var ind = name.indexOf("i", 0);
            name.replaceAt(ind, "o");
            return name.replace(/\s/g, "");
        });

        let Counter = 1;
        Handlebars.registerHelper('count', function (index) {
            return "grupp" + index;
        });
        
        Handlebars.registerHelper('categoryimg', function (catid) {
            let settingsobj = appsettingsobject.skrivbokimages;
            let imglist = settingsobj.catimagesrc;

            let catimgobj = _.find(imglist, function (o) { return o.catid == catid; });
            let tmpimg = settingsobj.catimgbase + catimgobj.imgsrc;
            let retimg = "<img title=" + catimgobj.catname + " src=" + tmpimg + " />";
            return retimg;
        });
    }
}


