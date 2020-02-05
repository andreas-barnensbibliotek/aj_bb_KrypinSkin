var _ = require("lodash");
var $ = require("jquery");
var appsettingsobject = require("./../appsettings.js");
var appsettings = appsettingsobject.config;

module.exports = {
    init: function () {
       

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
            if (!catimgobj) {
                catimgobj=  _.find(imglist, function (o) { return o.catid == 0; });
            };
            let tmpimg = settingsobj.catimgbase + catimgobj.imgsrc;
            let retimg = "<img title=" + catimgobj.catname + " src=" + tmpimg + " />";
            return retimg;
        });

        Handlebars.registerHelper('categoryUrlimg', function (imgsrc) {          

            if (!imgsrc) {
                let settingsobj = appsettingsobject.skrivbokimages;
                let imglist = settingsobj.catimagesrc;
                let catimgobj = _.find(imglist, function (o) { return o.catid == 0; });
                imgsrc = settingsobj.catimgbase + catimgobj.imgsrc;
            };
            
            return imgsrc
        });

        Handlebars.registerHelper('isbookinlaserjustnu', function (bookid) {

            return (bookid > 0) ? true : false;

        });

        Handlebars.registerHelper('booklistdpr', function(userbooklistobj, bookid, BlID) {
            if (_.isEmpty(userbooklistobj)) {
                return '';
            } else {
                return booklistHandler.dropdownhtml(userbooklistobj, bookid,BlID);
            }
        });
    }
}

let booklistHandler = (function() {
	function isBookInList(tmpbooklist, bookid) {
		let ret = false;

		for (const itm of Object.keys(tmpbooklist)) {
			if (tmpbooklist[itm].Bookid == bookid) {
				ret = true;
			}
		}
		return ret;
	}

	function dropdownhtml(userbooklistobj, bookid, BlID) {
		let visa = false;

		// let retstrTop = '<div class="align-self-start">';
		// retstrTop += '<div class="dropdown dropleft">';

		//ikoner här

		let retstrlinks =
			'<div class="dropdown-menu" aria-labelledby="dropdownMenuButton" data-currbookid="' +
			bookid +
			'" >';
			retstrlinks +=
			'<a class="dropdown-item" href="/katalog_4_2/tabid/1469/Default.aspx?bookid=' +
			bookid +
            '"><div class=""><i class="fa fa-arrow-circle-right"></i> G&aring; till boken</a></div>';	
            
			retstrlinks +=
			'<a class="dropdown-item" href="/Krypin/bk_aj_boktips_Krypin/tabid/1431/Default.aspx?bookid=' +
			bookid +
            '"><i class="fa fa-pencil"></i> Skriv boktips</a>';		
    
		retstrlinks +=
			'<div class="addtobooklistHeader"><b>L&auml;gg i boklista</b></div>';

		let retstrBooklist = '';
		if (userbooklistobj) {
			for (const key of Object.keys(userbooklistobj)) {
				// console.log('Lista ' + key, userbooklistobj[key]);

				let tmpbooklist = userbooklistobj[key].BooklistItems;

				retstrBooklist +=
					'<div><a class="dropdown-item booklistHandler" data-boklistid="' +
					userbooklistobj[key].BlID +
					'" data-bookid="' +	bookid ;					

				if (booklistHandler.isBookInList(tmpbooklist, bookid)) {
					// console.log('Bok i listan: ' + key);
					retstrBooklist +=
					'" data-inlist="1" href="#"><i class="fa fa-check-circle" style="color:green;"></i> ';
					visa = true;
				} else{
                    retstrBooklist +=
						'" data-inlist="0" href="#"><i class="fa fa-circle-o"></i>  ';
					visa = true;
                }
				retstrBooklist += userbooklistobj[key].Booklistname + '</a></div>';
			}
		}	

		let retstrEnd = '</div>';

		let retstr =
			 retstrlinks + retstrBooklist + retstrEnd;
		return retstr;
	}

	return {
		isBookInList: isBookInList,
		dropdownhtml: dropdownhtml
	};
})();

