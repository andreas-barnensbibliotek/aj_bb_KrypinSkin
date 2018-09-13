var appsettingsobject = require("./../appsettings.js");

module.exports = {
    init: function () {
    },
    HelpersetSelectedIndex: function (s, valsearch) {
        // Loop through all the items in drop down list
        for (i = 0; i < s.options.length; i++) {
            if (s.options[i].value == valsearch) {
                // Item is found. Set its property and exit
                s.options[i].selected = true;
                break;
            };
        };
        return;
    },
    getimageHelper: function (catid) {
        let settingsobj = appsettingsobject.skrivbokimages;
        let imglist = settingsobj.catimagesrc;

        let catimgobj = _.find(imglist, function (o) { return o.catid == catid; });
        if (!catimgobj) {
            catimgobj = _.find(imglist, function (o) { return o.catid == 0; });
        };
        return settingsobj.catimgbase + catimgobj.imgsrc;

    }
}