var _ = require("lodash");
var $ = require("jquery");
require('jquery-ui-dist/jquery-ui.js');
var bb_pagebehaviors = require("./app_modules/krypinPageBahavior.js");
var bb_containerbehaviors = require("./app_modules/krypinContainerBehavior.js");
var bb_API = require("./model/apiServiceHandler.js");
var bb_HB_Handler = require("./model/handlebarTemplateHandler.js");
var appsettingsobject = require("./appsettings.js");
var appsettings = appsettingsobject.config;
const _myboolistID = "1000000000";

module.exports = {
    init: function (userid) {       
        
        let moduleName = 'Booklist';
        bb_containerbehaviors.init(moduleName);
        bb_pagebehaviors.init(moduleName);
        this.cacheDom();
        this.BindEvent(userid);
        this.initbooklist(userid);
       
    },
    cacheDom: function () {
        this.$aj_bb_KrypinMainGrid = $('.bb_aj_krypincontainer');
        this.$bb_aj_booklistMain = $('#bb_aj_booklistMain');
        this.$bb_aj_booklist_Mod = $('#bb_aj_booklist_Mod');
        this.$bb_aj_addbooklist = $('#cmdNyBoklista');        
    },
    BindEvent: function (userid) {
        let that = this;

        this.$bb_aj_booklistMain.on('click', '#bb_aj_cmdAdd_Booklist', function (e) { alert('#bb_aj_cmdAdd_Booklist') });
        this.$bb_aj_booklistMain.on('click', '.buttonitem_booktip', function (e) { alert('.buttonitem_booktip') });
        
       
        this.$bb_aj_booklist_Mod.on('click', '#cmdAvbryt', function (e) {
            bb_containerbehaviors.closeboxbehavior();
            return false;
        });

        this.$bb_aj_booklistMain.on('click', '.buttonitem_tabort', function (e) {
            let bokid = $(this).attr("data-itemid");
            let booklistid = $(this).attr("data-bookistid");
            that.delbookitemfromlist(booklistid, bokid, userid)
        });

        this.$bb_aj_addbooklist.on('click', function (e) {
            let boklistanamnElement =$("#txtBoklistanamn");
            let boklistanamn = boklistanamnElement.val();
            if (!boklistanamn) {
                alert("Du måste skriva något!");
                boklistanamnElement.focus();
                return false;
            };
            let result = confirm("Vill du lägga till denna boklista?");
            if (result) {                             
                    that.addBooklist(boklistanamn, userid);                    
            };            
        });

        this.$bb_aj_booklistMain.on('click', '.bb_aj_booklistDelete', function (e) {
            let booklistid = $(this).attr("data-bookistid");
            if (!isBooklistMybooks(booklistid)) { // mina böcker går inte att tabort
                let result = confirm("Vill du ta bort boklistan?");
                if (result) {
                    that.delBooklist(booklistid, userid);
                };
            }
            return false;
        });

        this.$bb_aj_booklistMain.on('click', '.bb_aj_booklistEditname', function (e) {
            let booklistid = $(this).attr('data-bookistid');
            if (!isBooklistMybooks(booklistid)) { // mina böcker går inte att tabort
                $('.bb_aj_booklistname' + booklistid).toggle();
                $('.bb_aj_editbooklistnamnBlock' + booklistid).toggle();
            };
            return false;
        });
        
        this.$bb_aj_booklistMain.on('click', '.cmdeditBoklista', function (e) {
            let booklistid = $(this).closest(".aj_bb_KrypinMainGrid").attr("data-bookistid");
            let textnyttnamn = $(this).siblings(".editBoklistanamn").val();
            
            if (!isBooklistMybooks(booklistid)) { // mina böcker går inte att tabort
                let result = confirm("Vill du byta namn?");
                if (result) {
                    if (textnyttnamn && booklistid) {
                        that.editBooklist(booklistid, textnyttnamn, userid);
                        $('.bb_aj_booklistname' + booklistid).show();
                        $('.bb_aj_editbooklistnamnBlock' + booklistid).hide();
                    };
                };
            };
                        
            return false;
        });

        this.$bb_aj_booklistMain.on('click', '.cmdAvbryt', function (e) {
            let booklistid = $(this).closest(".aj_bb_KrypinMainGrid").attr("data-bookistid");            
            $('.bb_aj_booklistname' + booklistid).show();            
            $('.bb_aj_editbooklistnamnBlock' + booklistid).hide();
            return false;
        });
        this.$bb_aj_booklistMain.on('click', '.title-clear-btn', function (e) {
            $('.listfilter').val("");
            jplist.resetControls();
            return false;
        });

       
       
    },    
    Apiupdate: function (apiurl, userid) {
        let that = this; //spara this
        bb_API.getjsondata(apiurl, function (data) {
            that.initbooklist(userid);
        });
    },
    Apiupdateajax: function (apiurl, userid) {
        let that = this; //spara this
        bb_API.getjsondata(apiurl, function (data) {            
        });
    },
    getbooklist : function (apiurl, userid) {
        let handlebartemplate = appsettings.handlebartemplate.hb_booklist_tmp;
        this.Render(apiurl, handlebartemplate, userid);       
    },
    initbooklist : function (userid) {    
        let apiurl = appsettings.api.boklistor.getuserboklist;
        this.getbooklist(apiurl(userid), userid);        
    },    
    delbookitemfromlist: function (booklistid, bokid, userid) {        
        let apiurl = appsettings.api.boklistor.deluserbokitem; //get apiurl funktionen från appsettings
        //let handlebartemplate = appsettings.handlebartemplate.hb_booklist_tmp;
        jplist.resetControls();
        this.Apiupdate(apiurl(booklistid, bokid, userid), userid);
    },
    addbookitemfromlist: function (booklistid, bokid, userid) {
        let apiurl = appsettings.api.boklistor.adduserbokitem; //get apiurl funktionen från appsettings
        //let handlebartemplate = appsettings.handlebartemplate.hb_booklist_tmp;

        this.Apiupdateajax(apiurl(booklistid, bokid, userid), userid);
    },
    addBooklist: function (boklistnamn, userid) {
        let apiurl = appsettings.api.boklistor.addbooklist; //get apiurl funktionen från appsettings
        //let handlebartemplate = appsettings.handlebartemplate.hb_booklist_tmp;
        jplist.resetControls();
        this.Apiupdate(apiurl(boklistnamn, userid), userid);
    },
    editBooklist: function (booklistid, boklistnamn, userid) {
        let apiurl = appsettings.api.boklistor.editbooklist; //get apiurl funktionen från appsettings
        //let handlebartemplate = appsettings.handlebartemplate.hb_booklist_tmp;
        jplist.resetControls();
        this.Apiupdate(apiurl(booklistid,boklistnamn, userid), userid);
    },
    delBooklist: function (booklistid, userid) {
        let apiurl = appsettings.api.boklistor.delbooklist; //get apiurl funktionen från appsettings
        //let handlebartemplate = appsettings.handlebartemplate.hb_booklist_tmp;
        jplist.resetControls();
        this.Apiupdate(apiurl(booklistid, userid), userid);
    },
    
    Render: function (apiurl, handlebartemplate, userid) {
        let that = this; //spara this

        bb_API.getjsondata(apiurl, function (data) {
            bb_HB_Handler.injecthtmltemplate("#bb_aj_booklistMain", handlebartemplate, data, function () {
                 jplist.init();

                new dragdrop.start((dom, api) => {
                   
                    dom.addEventListener('drop', (event) => {
                        
                        let bokid;
                        let frombooklistid;
                        let tobooklistid, c, testare;

                        try {
                            bokid = event.currentTarget.activeElement.attributes[2].value;
                            frombooklistid = event.currentTarget.activeElement.attributes[3].value;
                            var parent = getClosest(event.target, '.bb_aj_gridItem');
                            tobooklistid = $(parent).attr('data-bookistid');
                            if (!tobooklistid) {
                                tobooklistid = event.target.attributes[2].value;
                            };
                            
                        }
                        catch (err) {
                            bokid = 0;
                            frombooklistid = 0;
                            tobooklistid = 0;
                        };

                        if (tobooklistid) {
                            if (frombooklistid != tobooklistid) {
                                that.delbookitemfromlist(frombooklistid, bokid, userid);
                                that.addbookitemfromlist(tobooklistid, bokid, userid);

                            };
                        };                     
                        
                    })
                });
                
            });
        });
    }    
};

// helper
var isBooklistMybooks = function (booklistid) {

    if (booklistid == _myboolistID) {
        return true;
    } else {
        return false;
    }
};


var getClosest = function (elem, selector) {

    // Element.matches() polyfill
    if (!Element.prototype.matches) {
        Element.prototype.matches =
	        Element.prototype.matchesSelector ||
	        Element.prototype.mozMatchesSelector ||
	        Element.prototype.msMatchesSelector ||
	        Element.prototype.oMatchesSelector ||
	        Element.prototype.webkitMatchesSelector ||
	        function (s) {
	            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
	                i = matches.length;
	            while (--i >= 0 && matches.item(i) !== this) { }
	            return i > -1;
	        };
    }

    // Get the closest matching element
    for (; elem && elem !== document; elem = elem.parentNode) {
        if (elem.matches(selector)) return elem;
    }
    return null;

};