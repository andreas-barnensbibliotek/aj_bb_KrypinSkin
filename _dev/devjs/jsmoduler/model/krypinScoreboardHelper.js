var _ = require("lodash");
var $ = require("jquery");
var appsettingsobject = require("./../appsettings.js");
var appsettings = appsettingsobject.usermessages;

module.exports = {   
    collectBadgeblock: function (data, callback) {
        let that = this;
        let retobj = appsettings;
        $.each(data.Bokmarkelser, function (index, item) {

            switch (item.AwardGroup) {
                case 1:
                    retobj.skrivbokenlist = that.createskrivbokenlist(item);
                    break;
                case 2:
                    retobj.boktipslist = that.createboktipslist(item);
                    break;
                default:
                    if (item.Occures == 1) {
                        retobj.highscorelist.push(item);
                    } else {
                        retobj.specialbadgeslist.push(item);
                    };
                    break;
            };

        });
        callback(retobj);
    },
    createskrivbokenlist: function (skrivbokenobj) {
        let retobj = appsettings
        let i =1;
        $.each(retobj.skrivbokenlist, function (index, item) {
            if (i < skrivbokenobj.UserLevel) {
                retobj.skrivbokenlist[index].Badgesrc = item.Badgesrc.substring(0, item.Badgesrc.length - 9) + ".png";
                retobj.skrivbokenlist[index].Beskrivning = "Du innehar: " + retobj.skrivbokentitel[index].titel + " Level " + i;
                retobj.skrivbokenlist[index].AwardName = retobj.skrivbokentitel[index].titel;
            }
            if (i == skrivbokenobj.UserLevel) {
                retobj.skrivbokenlist[index] = skrivbokenobj
            }
            i++;
        });
        return retobj.skrivbokenlist;
    },
    createboktipslist: function (boktipsobj) {
        let retobj = appsettings
        let i = 1;
        $.each(retobj.boktipslist, function (index, item) {
            if (i < boktipsobj.UserLevel) {
                retobj.boktipslist[index].Badgesrc = item.Badgesrc.substring(0, item.Badgesrc.length - 9) + ".png";
                retobj.boktipslist[index].Beskrivning = "Du innehar: " + retobj.boktipstitel[index].titel + " Level " + i;
                retobj.boktipslist[index].AwardName = retobj.boktipstitel[index].titel;
            }
            if (i == boktipsobj.UserLevel) {
                retobj.boktipslist[index] = boktipsobj
            }
            i++;
        });
        
        return retobj.boktipslist;
    }
}
