﻿
var _ = require("lodash");
var $ = require("jquery");
require('jquery-ui-dist/jquery-ui.js');
var bb_pagebehaviors = require("./app_modules/krypinPageBahavior.js");
var bb_containerbehaviors = require("./app_modules/krypinContainerBehavior.js");
var bb_API = require("./model/apiServiceHandler.js");
var bb_HB_Handler = require("./model/handlebarTemplateHandler.js");
var modalhandler =require("./jsExternal/modal2_plugin.js");
var appsettingsobject = require("./appsettings.js");
var appsettings = appsettingsobject.config;
var globalmessages = appsettingsobject.usermessages;
const _myboolistID = "1000000000";

module.exports = {
    init: function (userid) {       
        
        let moduleName = 'Booklist';
        bb_containerbehaviors.init(moduleName);
        bb_pagebehaviors.init(moduleName);
        modalhandler.init();
        this.cacheDom();
        this.BindEvent(userid);
        this.initbooklist(userid);
       
    },
    cacheDom: function () {
        this.$aj_bb_KrypinMainGrid = $('.bb_aj_krypincontainer');
        this.$bb_aj_booklistMain = $('#bb_aj_booklistMain');
        this.$bb_aj_booklist_Mod = $('#bb_aj_booklist_Mod');
        this.$bb_aj_addbooklist = $('#cmdNyBoklista');      
       this.$bb_aj_GenericModalContainer = $('#bb_aj_GenericModalContainer');
    },
    BindEvent: function (userid) {
        let that = this;
        

        this.$bb_aj_booklistMain.on('click', '#bb_aj_cmdAdd_Booklist', function (e) { return true; });
        this.$bb_aj_booklistMain.on('click', '.buttonitem_booktip', function (e) { return true; });
        
       
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
                alert(globalmessages.boklist.confirmAlert);
                boklistanamnElement.focus();
                return false;
            };
            let result = confirm(globalmessages.boklist.confirmAdd);
            if (result) {                             
                    that.addBooklist(boklistanamn, userid);                    
            };            
        });

        this.$bb_aj_booklistMain.on('click', '.bb_aj_booklistDelete', function (e) {
            let booklistid = $(this).attr("data-bookistid");
            if (!isBooklistMybooks(booklistid)) { // mina böcker går inte att tabort
                let result = confirm(globalmessages.boklist.confirmDel);
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
        
      //  this.$bb_aj_booklistMain.on('click', '.booklistPrint', function (e) {
      //      let booklistid = $(this).attr('data-bookistid');
      //      let boklistNamn = $('.bb_aj_booklistname' + booklistid).html();
      //      console.log("booklistid: "+ booklistid);          
                       
      //      that.printModal(booklistid,userid,boklistNamn);

      //      modalhandler.openInModal();
		    //return false;
      //  });

        $('body').on('click', '.booklistPrint', function (e) {
            let booklistid = $(this).attr('data-bookistid');
            let boklistNamn = $('.bb_aj_booklistname' + booklistid).html();
            console.log("booklistid: " + booklistid);

            that.printModal(booklistid, userid, boklistNamn);

            modalhandler.openInModal();
            return false;
        });

        this.$bb_aj_GenericModalContainer.on('click', '#bb_aj_PrintBoklistTemplate', function (e) {
            
            let printobj={                
                userid : $(this).attr('data-userid'),
                booklistid : $(this).attr('data-boklistId'),
                bgimg : $('#print_bgVal').val(),
                color : $('#print_RubrikColorVal').val(),
                font : $('#print_RubrikTypsnittVal').val(),
                Rubrik: $(this).attr('data-boklistNamn')
            };

            let url = appsettings.api.boklistor.printUrl 
            console.log(url(printobj));
            let win = window.open(url(printobj), "Title", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=200,top="+(screen.height-400)+",left="+(screen.width-840));
            

            //modalhandler.openInModal();
		    return false;
        });

        this.$bb_aj_GenericModalContainer.on('click', '.bb_aj_closeModal', function (e) {
            modalhandler.closeModal();
		    return false;
        });
        

        this.$bb_aj_booklistMain.on('click', '.cmdeditBoklista', function (e) {
            let booklistid = $(this).closest(".aj_bb_KrypinMainGrid").attr("data-bookistid");
            let textnyttnamn = $(this).siblings(".editBoklistanamn").val();
            
            if (!isBooklistMybooks(booklistid)) { // mina böcker går inte att tabort
                let result = confirm(globalmessages.boklist.confirmEdit);
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
        this.$bb_aj_booklistMain.on('click', '.buttonitem_readnow', function (e) {
            let bokid = $(this).attr("data-itemid");
            that.Laserjustnu(userid, bokid);            
            return false;
        });

        this.$bb_aj_booklistMain.on('click', '.boklistshow', function (e) {
            let boklistid = $(this).attr("data-bookistid");            
            $('.bb_aj_gridItem[data-bookistid=' + boklistid + "] .item").toggle();
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
    printModal: function(boklistid, userid,boklistNamn){
        let hbtempl = appsettings.handlebartemplate.hb_PrintModalVal_tmp; 
        let data = {
            boklistid: boklistid,
            userid: userid,
            boklistNamn: boklistNamn
        };

        bb_HB_Handler.injecthtmltemplate("#bb_aj_GenericModalContainer", hbtempl, data, function () {
            console.log("klart!");
         });
    },
    // printbooklist :function(boklistid,userid){
    //     let apiurl = appsettings.api.boklistor.getuserboklist;        
    //     let hbtempl = appsettings.handlebartemplate.hb_PrintBoklist_tmp; 

    //     // hämta från api
    //     bb_API.getjsondata(apiurl(userid), function (data) {
    //          console.log("data: " + data.Booklists);
    //         let valdboklista= _.find(data.Booklists, function(o) { return o.BlID == boklistid; } );
    //         console.log(valdboklista);

    //         bb_HB_Handler.returnhtmltemplate( hbtempl, valdboklista, function (html) {
    //             alert("hjälp")
    //             console.log("html "+ html);
    //             //win.document.body.innerHTML = html;
    //         });
    //     });
    // },
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
    Laserjustnu: function (userid, bookid) {
        let that = this;
        let apiurl = appsettings.api.installningar.updatesettings;
        bb_API.getjsondata(apiurl(userid, 3, bookid), function (data) {

            that.initbooklist(userid);
        });

    },
    
    Render: function (apiurl, handlebartemplate, userid) {
        let that = this; //spara this

        bb_API.getjsondata(apiurl, function (data) {
            bb_HB_Handler.injecthtmltemplate("#bb_aj_booklistMain", handlebartemplate, data, function () {
                 jplist.init();

                new dragdrop.start(function (dom, api) {

                    dom.addEventListener('drop', function (event) {
                        
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
                return false;
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