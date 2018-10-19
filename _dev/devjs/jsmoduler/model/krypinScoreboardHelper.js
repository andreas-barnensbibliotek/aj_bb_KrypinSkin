var _ = require("lodash");
var $ = require("jquery");


module.exports = {   
    collectBadgeblock: function (data, callback) {
        let that = this;
        let retobj = badgeslistObj;
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
        let retobj = badgeslistObj
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
        let retobj = badgeslistObj
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


var badgeslistObj= (function () {
    return {
        skrivbokenlist: [{
                "Userid": "0",
                "Awardid": "0",
                "Counter": "0",
                "UserLevel": "0",
                "AwardName": "",
                "Badgesrc": "/Portals/0/bokmarkelser/Lv1_Berattar_grey.png",
                "Beskrivning":  decodeURIComponent(escape("ej uppnådd berättare Level 1")),
                "Occures": "",
                "AwardGroup": "",
                "TolevelUp": "",
                "EarnFuncID": ""
            },
            {
                "Userid": "0",
                "Awardid": "0",
                "Counter": "0",
                "UserLevel": "0",
                "AwardName": "",
                "Badgesrc": "/Portals/0/bokmarkelser/Lv2_Berattare_grey.png",
                "Beskrivning":  decodeURIComponent(escape("ej uppnådd berättare Level 2")),
                "Occures": "",
                "AwardGroup": "",
                "TolevelUp": "",
                "EarnFuncID": ""
            },
            {
                "Userid": "0",
                "Awardid": "0",
                "Counter": "0",
                "UserLevel": "0",
                "AwardName": "",
                "Badgesrc": "/Portals/0/bokmarkelser/Lv3_Skribent_grey.png",
                "Beskrivning":  decodeURIComponent(escape("ej uppnådd Level 3 Skribent")),
                "Occures": "",
                "AwardGroup": "",
                "TolevelUp": "",
                "EarnFuncID": ""
            },
            {
                "Userid": "0",
                "Awardid": "0",
                "Counter": "0",
                "UserLevel": "0",
                "AwardName": "",
                "Badgesrc": "/Portals/0/bokmarkelser/Lv4_Storskribent_grey.png",
                "Beskrivning":  decodeURIComponent(escape("ej uppnådd Level 4 Storskribent")),
                "Occures": "",
                "AwardGroup": "",
                "TolevelUp": "",
                "EarnFuncID": ""
            },
            {
                "Userid": "0",
                "Awardid": "0",
                "Counter": "0",
                "UserLevel": "0",
                "AwardName": "",
                "Badgesrc": "/Portals/0/bokmarkelser/Lv5_Forfattare_grey.png",
                "Beskrivning":  decodeURIComponent(escape("ej uppnådd Level 5 Författare")),
                "Occures": "",
                "AwardGroup": "",
                "TolevelUp": "",
                "EarnFuncID": ""
            },
            {
                "Userid": "0",
                "Awardid": "0",
                "Counter": "0",
                "UserLevel": "0",
                "AwardName": "",
                "Badgesrc": "/Portals/0/bokmarkelser/Lv6_Guldforfattare_grey.png",
                "Beskrivning":  decodeURIComponent(escape("ej uppnådd Level 6 Guldförfattare")),
                "Occures": "",
                "AwardGroup": "",
                "TolevelUp": "",
                "EarnFuncID": ""
            }
        ],
        boktipslist: [{
                "Userid": "0",
                "Awardid": "0",
                "Counter": "0",
                "UserLevel": "0",
                "AwardName": "",
                "Badgesrc": "/Portals/0/bokmarkelser/btLv1_Boktipsar_grey.png",
                "Beskrivning":  decodeURIComponent(escape("ej uppnådd Level 1 Boktipsar")),
                "Occures": "",
                "AwardGroup": "",
                "TolevelUp": "",
                "EarnFuncID": ""
            },
            {
                "Userid": "0",
                "Awardid": "0",
                "Counter": "0",
                "UserLevel": "0",
                "AwardName": "",
                "Badgesrc": "/Portals/0/bokmarkelser/btLv2_Boktipsare_grey.png",
                "Beskrivning": decodeURIComponent(escape("ej uppnådd Level 2 Boktipsare")),
                "Occures": "",
                "AwardGroup": "",
                "TolevelUp": "",
                "EarnFuncID": ""
            },
            {
                "Userid": "0",
                "Awardid": "0",
                "Counter": "0",
                "UserLevel": "0",
                "AwardName": "",
                "Badgesrc": "/Portals/0/bokmarkelser/btLv3_Storboktipsare_grey.png",
                "Beskrivning": decodeURIComponent(escape("ej uppnådd Level 3 Storboktipsare")),
                "Occures": "",
                "AwardGroup": "",
                "TolevelUp": "",
                "EarnFuncID": ""
            },
            {
                "Userid": "0",
                "Awardid": "0",
                "Counter": "0",
                "UserLevel": "0",
                "AwardName": "",
                "Badgesrc": "/Portals/0/bokmarkelser/btLv4_Massboktipsare_grey.png",
                "Beskrivning": decodeURIComponent(escape("ej uppnådd Level 4 Massboktipsare")),
                "Occures": "",
                "AwardGroup": "",
                "TolevelUp": "",
                "EarnFuncID": ""
            },
            {
                "Userid": "0",
                "Awardid": "0",
                "Counter": "0",
                "UserLevel": "0",
                "AwardName": "",
                "Badgesrc": "/Portals/0/bokmarkelser/btLv5_BoktokTipsare_grey.png",
                "Beskrivning": decodeURIComponent(escape("ej uppnådd Level 5 Boktoktipsare")),
                "Occures": "",
                "AwardGroup": "",
                "TolevelUp": "",
                "EarnFuncID": ""
            }
        ],
        specialbadgeslist: [],
        highscorelist: [],
        skrivbokentitel: [
            { "titel": decodeURIComponent(escape("Berättar")) },
            { "titel": decodeURIComponent(escape("Berättare")) },
            { "titel": decodeURIComponent(escape("Skribent")) },
            { "titel": decodeURIComponent(escape("Storskribent")) },
            { "titel": decodeURIComponent(escape("Författare")) },
            { "titel": decodeURIComponent(escape("Guldförfattare")) },
        ],
        boktipstitel: [
            { "titel": "Boktipsar" },
            { "titel": "Boktipsare" },
            { "titel": "Storboktipsare" },
            { "titel": "MassBoktipsare" },
            { "titel": "BoktokTipsare" }
        ]
    };
})();

// använd alltid decodeURIComponent(escape(sträng)) för att koda om åäö 
// highscorelist: [{
//"Userid": "",
//"Awardid": "",
//"Counter": "",
//"UserLevel": "",
//"AwardName": "",
//"Badgesrc": "",
//"Beskrivning": "",
//"Occures": "",
//"AwardGroup": "",
//"TolevelUp": "",
//"EarnFuncID": ""
//}]
