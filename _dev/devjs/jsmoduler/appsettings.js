﻿
module.exports = {
    config:  (function(){
        let _apiserver = "http://localhost:59015";
        let _dnnURL = "http://localdev.kivdev.se";
        let _devkey = "alf";
        let _apidevkeyend = "/devkey/" + _devkey + "/?type=jsonp&callback=?";
        let _localOrServerURL = "";
        let _htmltemplateURL = "/Portals/_default/Skins/bb_DAGOBAH_krypin/htmltemplates/";

        let _hb_booklist_template = _dnnURL + _htmltemplateURL + "boklistor_lista.txt";
        let _hb_booklistItem_template = _dnnURL + _htmltemplateURL + "booklistitems.txt";
        let _fn_userboklist = function (userid) {
            return _apiserver + "/Api_v3.1/booklist/uid/" + userid + _apidevkeyend;
        }
        let _fn_deluserbokItem = function (booklistid, bookid, userid) {
            return _apiserver + "/Api_v3.1/booklist/typ/delbook/blistid/" + booklistid +"/value/" +bookid+ "/uid/" + userid+ _apidevkeyend;
        }        

        return {
            apiserver: _apiserver,
            dnnURL: _dnnURL,
            localOrServerURL: _localOrServerURL,
            htmltemplateurl: _dnnURL + _htmltemplateURL,
            devkey: _devkey,
            handlebartemplate: {
                hb_booklist_tmp: _hb_booklist_template,
                bh_booklistitm_tmp: _hb_booklistItem_template
            },
            api:{
                boklistor:{
                    getuserboklist: _fn_userboklist,
                    deluserbokitem: _fn_deluserbokItem
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
    })()
}

