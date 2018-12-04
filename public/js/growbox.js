$(function () {
    // datacontainers
    var _growtypemaxlevsrc = new Array();
    var _growtypestartsrc = new Array();
    var _growtypeid = new Array();
    var _growtypename = new Array();
    var _server = "http://localdev.kivdev.se"
    //var _server = "http://nytt.barnensbibliotek.se"
    var _imgbasesrc = _server +"/desktopmodules/barnensbiblService/growmodapi/webbilds/";
    var serverUrl = _server +"/desktopmodules";

    var _userid = $('#barnensbiblCurrentUserid').html();
    var _visituserid = $('#barnensbiblCurrentUserid').html();
    var _aktuellUserid;
    var _visitKrypin = false;
    var _usrboxid = $('.usrboxid').html();

    var _itemArrboxid = "";
    var _itemArrId = new Array();
    var _itemArrNamn = new Array();
    var _itemArrLev = new Array();
    var _itemArrSrc = new Array();

    var $mainbox = $(".aj_bb_KrypinSkin");



    if (_userid != _visituserid) {
        _aktuellUserid = _visituserid;
        _visitKrypin = true;
        $('#growitmShowDel').hide();

    } else {
        _aktuellUserid = _userid;
        $('#growitmShowDel').show();
    };

    init();

    function init() {
        filltyparray();
        if (renderGrowBoxes(_usrboxid)) {
            listGrowitems();
        }
    }


    // CLICK EVENTS ------------------------------------------------------------------------------------------------------------------
    /////////////// ------------------------------------------------------------------------------------------------------------------
    $mainbox.on("click",".itmbox", function () {
        if (_visitKrypin) {

        } else {
            // Save to server uppdaterings datum--------TODO--------
            var aktuellItmNr = $(this).attr('rev');
            var itmindex = aktuellItmNr;
            growItemMaintainUpdate(itmindex);
            // -----------------------------------------TODO--------

            $('a', this).show(1000, function () {

                $(this).delay(3000).hide(1000, function () {
                    if (renderGrowBoxes(_usrboxid)) {
                        listGrowitems();
                    }
                });
            });
        }
        return false;
    });

    $mainbox.on("click",".itmadm", function () {
        if (_visitKrypin) {

        } else {
            var aktuellItmNr = $(this).attr('rev');
            var idt = "#" + $(this).attr('id');
            var text = "<div class='editgbox' rel='" + aktuellItmNr + "' >";
            text += "<div class='editg1' rev='" + aktuellItmNr + "'><a href='' class='imgitm' rel='0' rev='" + aktuellItmNr + "' name='" + _growtypename[0] + "' ><img src='" + _imgbasesrc + _growtypemaxlevsrc[0] + "' alt='" + _growtypename[0] + "' /></a></div>";
            text += "<div class='editg2' ><a href='' class='itmNext' rev='" + aktuellItmNr + "' rel='0'>Nästa</a><a href='' class='itmCancel' rev='" + aktuellItmNr + "'>Avbryt</a></div> </div>";

            $(idt).html(text);
        }
        return false;
    });

    $mainbox.on("click",".itmCancel", function () {
        if (_visitKrypin) {

        } else {
            var aktuellItmNr = "#itmadm" + $(this).attr('rev');
            $(aktuellItmNr).html("<a href='' class='itmi1'>Välj växt</a>");
        }
        return false;
    });

    $mainbox.on("click",".itmNext", function () {
        if (_visitKrypin) {

        } else {
            var aktuellItmNr = $(this).attr('rev');
            var idt = "#itmadm" + aktuellItmNr;
            var ordningsNr = $(this).attr('rel');
            var nyttordningsNr = ordningsNr;
            if (ordningsNr < _growtypemaxlevsrc.length - 1) {
                nyttordningsNr++;
            } else {
                nyttordningsNr = 0;
            }

            var text = "<div class='editgbox' rev='" + aktuellItmNr + "' >";
            text += "<div class='editg1' rev='" + aktuellItmNr + "'><a href='' class='imgitm' rev='" + aktuellItmNr + "' rel='" + nyttordningsNr + "' name='" + _growtypename[nyttordningsNr] + "'><img src='" + _imgbasesrc + _growtypemaxlevsrc[nyttordningsNr] + "' alt='" + _growtypename[nyttordningsNr] + "'  /></a></div>";
            text += "<div class='editg2' ><a href='' class='itmNext' rev='" + aktuellItmNr + "'rel='" + nyttordningsNr + "'>Nästa</a><a href='' class='itmCancel' rev='" + aktuellItmNr + "'>Avbryt</a></div> </div>";
            $(idt).html(text);
        }
        return false;
    });

   
   $mainbox.on("click",".imgitm", function () {
        if (_visitKrypin) {

        } else {
            var aktuellItmNr = $(this).attr('rev');
            var idt = "#itmadm" + aktuellItmNr;
            var IndexNr = $(this).attr('rel');

            //do Ajax Call-------------------
            addItemTypeToService(IndexNr);

            $(idt).removeClass('itmadm').addClass('itmbox');
        }
        return false;
    });

  
       $mainbox.on("click",".itmimgadel", function () {
        if (_visitKrypin) {

        } else {
            var idx = $(this).attr('rel');
            if (confirm("Är du säker på att du vill tabort växten?")) {
                if (delgrowItem(idx)) {
                    if (renderGrowBoxes(_itemArrboxid)) {
                        listGrowitems();
                    }
                }
            }
        }
        return false;
    });
    
        $mainbox.on("click","#AJKrypingrowdelbox", function () {
        if (_visitKrypin) {

        } else {
            $('.itmimgadel').toggle();
        }
        return false;
    });

    $mainbox.on("click","#growhelpbox", function () {
        $('#AJKrypingrowInfo').toggle();
        return false;
    });

    // HELPERS  ------------------------------------------------------------------------------------------------------------------
    /////////////// ------------------------------------------------------------------------------------------------------------------

    function setGrowBoxId() {
        $('#growmainbox ul').attr("rev", _itemArrboxid);
    }

    function listGrowitems() {
        var emptyFlag = false;
        var htmloutput = "";

        var t = _itemArrId.length + 1;

        for (var i = 0; i < t && i <= 4; i++) {

            if (_itemArrId.length > i) {
                if (_itemArrSrc[i]) {
                    htmloutput += "<li>";
                    htmloutput += "<div class='itmbox' id='itmadm" + i + "' rev='" + i + "' title='Klicka för att vattna'>";
                    var srct = _imgbasesrc + _itemArrSrc[i];
                    htmloutput += "<div class='itmimg' style='background-image: url(" + srct + ");'>";
                    htmloutput += "<a href='' class='itmimga' ><img src='" + _imgbasesrc + "vattenkanna4.png' /> </a>";
                    htmloutput += "</div>";
                    htmloutput += "<div class='itmimgadel' rel='" + i + "'><a  href='#' ><img src='" + _imgbasesrc + "delMess.png' /></a>";
                    htmloutput += "</div>";
                    htmloutput += "</li>";
                } else {
                    emptyFlag = true;
                };

            } else {
                emptyFlag = true;
            };

            if (emptyFlag) {
                htmloutput += "<li>";
                if (!_visitKrypin) {
                    htmloutput += "<div class='itmadm' id='itmadm" + i + "' rev='" + i + "'>";
                    htmloutput += "<a href='' class='itmi1'>Välj växt</a>";
                    htmloutput += "</div>";
                }
                htmloutput += "</li>";
                break;
            };

        }
        $('#growmainbox ul').html(htmloutput);
    };

    function dagensdatum() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //Januari är 0!
        var yyyy = today.getFullYear();

        if (dd < 10) { dd = '0' + dd } if (mm < 10) { mm = '0' + mm } today = yyyy + '-' + mm + '-' + dd;

        return today;
    };

    // Array Remove - By John Resig (MIT Licensed)
    Array.prototype.remove = function (from, to) {
        var rest = this.slice((to || from) + 1 || this.length);
        this.length = from < 0 ? this.length + from : from;
        return this.push.apply(this, rest);
    };
    // SERVICE CALLS ----------------------------------------------------------------------------------------------------
    ////////////////-----------------------------------------------------------------------------------------------------


    // -------------> GETTERS -------------------------------------------------------------------------------------------
    ////////////////-----------------------------------------------------------------------------------------------------
    function renderGrowBoxes(boxid) {
        // DO Ajaxcall  ------------------
        //localhost:54268/DotNetNuke/desktopmodules/barnensbiblservice/growmodapi/growmodservice.aspx?devkey=growmod&cmdtyp=getbox&boxid=2
        var ret = false;
        var str = "";
        var visit = 0;
        if (_visitKrypin) {
            visit = 1;
        }
        $.ajax({
            type: "GET",
            url: serverUrl + "/barnensbiblservice/growmodapi/growmodservice.aspx?callback=?",
            data: { devkey: "growmod", cmdtyp: "getbox", json: "p", boxid: boxid, usrid: _aktuellUserid, visit: visit },
            dataType: "jsonp",
            async: false,
            success: function (data) {
                _itemArrboxid = data.growmodservice.boxid;

                var i = 0;
                $.each(data.growmodservice.items, function (item, val) {
                    _itemArrId[i] = val.id;
                    _itemArrNamn[i] = val.namn;
                    _itemArrLev[i] = val.level;
                    _itemArrSrc[i] = val.imgsrc;

                    i++;
                });
                ret = true;
            },
            error: function (xhr, ajaxOptions, thrownError) {
                // alert("Nått blev fel!");
            }
        });

        return ret;
    }



    // -------------> ADD -------------------------------------------------------------------------------------------
    ////////////////-----------------------------------------------------------------------------------------------------
    function addItemTypeToService(IndexNr) {
        //DO AJAXCALL --------------- 
        //localhost:54268/DotNetNuke/desktopmodules/barnensbiblservice/growmodapi/growmodservice.aspx?devkey=growmod&cmdtyp=ny&boxid=1&itmid=2
        var itmid = _growtypeid[IndexNr];
        var boxid = _itemArrboxid;

        var ret = false;
        $.ajax({
            type: "GET",
            url: serverUrl + "/barnensbiblservice/growmodapi/growmodservice.aspx?callback=?",
            data: { devkey: "growmod", cmdtyp: "ny", json: "p", boxid: boxid, itmid: itmid },
            dataType: "jsonp",
            async: false,
            success: function (data) {
                ret = true;
            },
            error: function (xhr, ajaxOptions, thrownError) {
                // alert("Nått blev fel!");
            }
        });

        if (renderGrowBoxes(boxid)) {
            listGrowitems();
        }
        return ret;
    }

    // -------------> EDIT/UPDATE -------------------------------------------------------------------------------------------
    ////////////////-----------------------------------------------------------------------------------------------------
    function growItemMaintainUpdate(idx) {
        //var nydatum = dagensdatum();
        var itmid = _itemArrId[idx];
        var boxid = _itemArrboxid;

        //DO AJAXCALL ---------------
        //localhost:54268/DotNetNuke/desktopmodules/barnensbiblservice/growmodapi/growmodservice.aspx?devkey=growmod&cmdtyp=upd&boxid=2&itmid=6
        var ret = false;
        $.ajax({
            type: "GET",
            url: serverUrl + "/barnensbiblservice/growmodapi/growmodservice.aspx?callback=?",
            data: { devkey: "growmod", cmdtyp: "upd", json: "p", boxid: boxid, itmid: itmid },
            dataType: "jsonp",
            async: false,
            success: function (data) {
                ret = true;
                if (renderGrowBoxes(boxid)) {
                    listGrowitems();
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                //alert("Nått blev fel!");
            }
        });

        return ret;
    }


    // -------------> DELETE -------------------------------------------------------------------------------------------
    ////////////////-----------------------------------------------------------------------------------------------------
    function delgrowItem(idx) {
        var itmid = _itemArrId[idx];
        var boxid = _itemArrboxid;

        //DO AJAXCALL ---------------
        //localhost:54268/DotNetNuke/desktopmodules/barnensbiblservice/growmodapi/growmodservice.aspx?devkey=growmod&cmdtyp=del&boxid=2&itmid=2
        var ret = false;
        $.ajax({
            type: "GET",
            url: serverUrl + "/barnensbiblservice/growmodapi/growmodservice.aspx?callback=?",
            data: { devkey: "growmod", cmdtyp: "del", json: "p", boxid: boxid, itmid: itmid },
            dataType: "jsonp",
            async: false,
            success: function (data) {
                ret = true;
            },
            error: function (xhr, ajaxOptions, thrownError) {
                //alert("Nått blev fel!");
            }
        });

        //tabort item from index
        _itemArrId.remove(idx)
        _itemArrNamn.remove(idx)
        _itemArrLev.remove(idx)
        _itemArrSrc.remove(idx)

        if (renderGrowBoxes(boxid)) {
            listGrowitems();
        };

        return ret;
    }

    function filltyparray() {
        // DO Ajaxcall  ------------------
        //localhost:54268/DotNetNuke/desktopmodules/barnensbiblservice/growmodapi/growmodservice.aspx?devkey=growmod&cmdtyp=growtypes
        var ret = false;
        var str = "";
        $.ajax({
            type: "GET",
            url: serverUrl + "/barnensbiblservice/growmodapi/growmodservice.aspx?callback=?",
            data: { devkey: "growmod", cmdtyp: "growtypes", json: "p" },
            dataType: "jsonp",
            async: false,
            success: function (data) {
                _itemArrboxid = data.growmodservice.boxid;
                var i = 0;
                $.each(data.growmodservice.items, function (item, val) {

                    _growtypemaxlevsrc[i] = val.maxsrc;
                    _growtypestartsrc[i] = val.startsrc;
                    _growtypename[i] = val.namn;
                    _growtypeid[i] = val.typid;

                    i++;
                });
                ret = true;
            },
            error: function (xhr, ajaxOptions, thrownError) {
                // alert("Nått blev fel!");

            }
        });
    }
   $mainbox.on("click",".krypinfavoapprove", function () {
        var tousr = $(this).attr('rev'); //to userid
        var fromusr = $(this).attr('rel'); //fromusr
        if (updatekrypinfavorit(fromusr, tousr)) {
            alert("Krypin lagt som favorit");
        } else {
            alert("NÃ¥tt blev fel fÃ¶rsÃ¶k igen!");
        }
        return false;
    });
    function  
    updatekrypinfavorit(fromuserid, touserid) {
        // DO Ajaxcall  ------------------
        //http://localhost:54268/DotNetNuke/DesktopModules/AJBarnensKrypin/controls/krypinfavservice.aspx?devkey=krypinfav&cmdtyp=updfav&frmusr=15&tousr=12&json=p
        var ret = false;
        var str = "";
        $.ajax({
            type: "GET",
            url: serverUrl + "/AJBarnensKrypin/controls/krypinfavservice.aspx?callback=?",
            data: { devkey: "krypinfav", cmdtyp: "updfav", frmusr: fromuserid, tousr: touserid, json: "p" },
            dataType: "jsonp",
            async: false,
            success: function (data) {

                ret = true;
            },
            error: function (xhr, ajaxOptions, thrownError) {
                // alert("Nått blev fel!");

            }
        });
        return ret;
    }

});           //function end