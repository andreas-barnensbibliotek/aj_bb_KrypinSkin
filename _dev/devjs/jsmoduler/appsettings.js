
module.exports = {
    config:  (function(){
        let _apiserver = "http://localhost:59015";
        let _dnnURL = "http://localdev.kivdev.se";
        let _devkey = "alf";
        let _apidevkeyend = "/devkey/" + _devkey + "/?type=jsonp&callback=?";
        let _localOrServerURL = "";
        let _htmltemplateURL = "/Portals/_default/Skins/bb_DAGOBAH_krypin/htmltemplates/";

        // Boklistor START
        //// template
        let _hb_booklist_template = _dnnURL + _htmltemplateURL + "boklistor_lista.txt";
        let _hb_booklistItem_template = _dnnURL + _htmltemplateURL + "booklistitems.txt";
        let _hb_skrivbokModal_View_template = _dnnURL + _htmltemplateURL + "skrivbokModal_View.txt";
        let _hb_boktipsModal_View_template = _dnnURL + _htmltemplateURL + "boktipsModal_View.txt";
        //// api
        let _fn_userboklist = function (userid) {
            return _apiserver + "/Api_v3.1/booklist/uid/" + userid + _apidevkeyend;
        };
        let _fn_adduserbokItem = function (booklistid, bookid, userid) {
            return _apiserver + "/Api_v3.1/booklist/typ/addbook/blistid/" + booklistid + "/value/" + bookid + "/uid/" + userid + _apidevkeyend;
        };
        let _fn_deluserbokItem = function (booklistid, bookid, userid) {
            return _apiserver + "/Api_v3.1/booklist/typ/delbook/blistid/" + booklistid + "/value/" + bookid + "/uid/" + userid + _apidevkeyend;
        };
        let _fn_addBooklist = function (boklistaNamn, userid) {
            return _apiserver + "/Api_v3.1/booklist/typ/addbooklist/blistid/0/value/" + boklistaNamn + "/uid/" + userid + _apidevkeyend;
        };
        let _fn_editBooklist = function (booklistid, boklistaNamn, userid) {
            return _apiserver + "/Api_v3.1/booklist/typ/editbooklist/blistid/" + booklistid + "/value/" + boklistaNamn + "/uid/" + userid + _apidevkeyend;
        };
        let _fn_delBooklist = function (booklistid, userid) {
            return _apiserver + "/Api_v3.1/booklist/typ/delbooklist/blistid/" + booklistid + "/value/0/uid/" + userid + _apidevkeyend;
        };
        
        // Skrivboken START
        //// Template
        let _hb_skrivbokenlist_template = _dnnURL + _htmltemplateURL + "skrivboken_lista.txt";
        //// API
        let _fn_userSkrivbokenlist = function (userid) {
            return _apiserver + "/Api_v3.1/skrivboken/cmdtyp/ByUserID/val/" + userid + "/typ/2/ap/0/pub/0" + _apidevkeyend;
        };
        let _fn_userSkrivbokenByID = function (bookid, userid) {
            return _apiserver + "/Api_v3.1/skrivboken/cmdtyp/BySkrivid/val/" + bookid + "/typ/" + userid + "/ap/0/pub/0" + _apidevkeyend;
        };
        let _fn_addskrivbokenItem = function () {
            return _apiserver + "/Api_v3.1/skrivboken/typ/addskrivboken/devkey/" + _devkey //+  _apidevkeyend;
        };
        let _fn_editskrivbokenItem = function () {
            return _apiserver + "/Api_v3.1/skrivboken/typ/editskrivboken/devkey/" + _devkey //+ _apidevkeyend;
        };
        let _fn_delskrivbokenItem = function () {
            return _apiserver + "/Api_v3.1/skrivboken/typ/deleteskrivbok/devkey/" + _devkey //+ _apidevkeyend;
        };
        
        // Boktips START
        //// Template
        let _hb_Boktipslist_template = _dnnURL + _htmltemplateURL + "boktips_lista.txt";
        //// API
        let _fn_userBoktipslist = function (userid) {
            return _apiserver + "/Api_v3.1/boktips/typ/ByUserId/val/" + userid + "/txtval/0" + _apidevkeyend;        
        };
        let _fn_userBoktipsByTipID = function (tipid, userid) {
            return _apiserver + "/Api_v3.1/boktips/typ/ByTipId/val/" + tipid + "/txtval/0" + _apidevkeyend;
        };
        //API POST
        let _fn_addBoktipsItem = function () {
            return _apiserver + "/Api_v3.1/boktips/typ/addboktips/devkey/" + _devkey //+  _apidevkeyend;           
        };
        let _fn_editBoktipsItem = function () {
            return _apiserver + "/Api_v3.1/boktips/typ/editboktips/devkey/" + _devkey //+ _apidevkeyend;
        };
        let _fn_delBoktipsItem = function () {
            return _apiserver + "/Api_v3.1/boktips/typ/deleteboktips/devkey/" + _devkey //+ _apidevkeyend;
        };
        
        return {
            apiserver: _apiserver,
            dnnURL: _dnnURL,
            localOrServerURL: _localOrServerURL,
            htmltemplateurl: _dnnURL + _htmltemplateURL,
            devkey: _devkey,
            handlebartemplate: {
                hb_booklist_tmp: _hb_booklist_template,
                hb_skrivbokenlist_tmp: _hb_skrivbokenlist_template,
                hb_skrivbokModalView_tmp: _hb_skrivbokModal_View_template,
                hb_boktipslist_tmp: _hb_Boktipslist_template,
                hb_boktipsModalView_tmp: _hb_boktipsModal_View_template
            },
            api:{
                boklistor:{
                    getuserboklist: _fn_userboklist,
                    adduserbokitem: _fn_adduserbokItem,
                    deluserbokitem: _fn_deluserbokItem,
                    addbooklist: _fn_addBooklist,
                    editbooklist: _fn_editBooklist,
                    delbooklist: _fn_delBooklist
                },
                skrivbokenlistor:{
                    getuserskribokenlist: _fn_userSkrivbokenlist,
                    getuserskribokenByID: _fn_userSkrivbokenByID,
                    addskribokenItem: _fn_addskrivbokenItem,
                    editskribokenItem: _fn_editskrivbokenItem,
                    delskribokenItem: _fn_delskrivbokenItem
                },
                boktipslistor: {
                    getuserboktipslist: _fn_userBoktipslist,
                    getuserboktipsByTipID: _fn_userBoktipsByTipID,
                    addboktipsItem: _fn_addBoktipsItem,
                    editboktipsItem: _fn_editBoktipsItem,
                    delboktipsItem: _fn_delBoktipsItem
                },
                devkeyend : _apidevkeyend
            },
            userinfo: {
                userid: "",
                rollid: "",
                skin: ""
            },

            debug: "false"
        }
    })(),
    skrivbokimages: (function () {
        return {
            catimgbase: "/DesktopModules/bb_aj_Skrivboken_Krypin/images/",
            catimagesrc: [
                 {
                     "catid": "0",
                     "catname": "&Ouml;vrigt",
                     "imgsrc": "skrivbok_default256_36.png"
                },
                {
                    "catid": "1",
                    "catname": "&Ouml;vrigt",
                    "imgsrc": "skrivbok_ovrigt256_36.png"
                },
                {
                    "catid": "2",
                    "catname": "&Ouml;vrigt",
                    "imgsrc": "skrivbok_ovrigt256_36.png"
                },
                {
                    "catid": "3",
                    "catname": "Ber&auml;ttelse",
                    "imgsrc": "skrivbok_berattelse-256_36.png"
                },
                {
                    "catid": "4",
                    "catname": "Dikt",
                    "imgsrc": "skrivbok_dikt-256_36.png"
                },
                {
                    "catid": "5",
                    "catname": "Tankar",
                    "imgsrc": "skrivbok_tankar256_36.png"
                },
                {
                    "catid": "6",
                    "catname": "&Ouml;vrigt",
                    "imgsrc": "skrivbok_ovrigt256_36.png"
                },
                {
                    "catid": "8",
                    "catname": "Deckare",
                    "imgsrc": "skrivbok_deckare256_36.png"
                },
                {
                    "catid": "9",
                    "catname": "Djur",
                    "imgsrc": "skrivbok_djur256_36.png"
                },
                {
                    "catid": "10",
                    "catname": "Fantasy",
                    "imgsrc": "skrivbok_fantasy256_36.png"
                },
                {
                    "catid": "11",
                    "catname": "Skr&auml;ck",
                    "imgsrc": "skrivbok_skrack256_36.png"
                },
                {
                    "catid": "12",
                    "catname": "K&auml;rlek",
                    "imgsrc": "skrivbok_karlek256_36.png"
                },
                {
                    "catid": "13",
                    "catname": "Ramsa",
                    "imgsrc": "skrivbok_ramsa256_36.png"
                },
                {
                    "catid": "15",
                    "catname": "Sorgligt",
                    "imgsrc": "skrivbok_sorgligt256_36.png"
                },
                {
                    "catid": "16",
                    "catname": "Humor",
                    "imgsrc": "skrivbok_skratta256_36.png"
                },
                {
                    "catid": "17",
                    "catname": "Sp&auml;nning",
                    "imgsrc": "skrivbok_spanning256_36.png"
                },
                {
                    "catid": "18",
                    "catname": "Sp&ouml;ken",
                    "imgsrc": "skrivbok_spoken256_36.png"
                },
                {
                    "catid": "19",
                    "catname": "&Auml;ventyr",
                    "imgsrc": "skrivbok_aventyr256_36.png"
                },
                {
                    "catid": "21",
                    "catname": "Hastar",
                    "imgsrc": "skrivbok_hastar256_36.png"
                }
            ]                
        };          
    })()
}

