var $ = require("jquery");
var appsettingsobject = require("./../appsettings.js");
var handelbarhelpers = require("./handlebarHelpers.js");

module.exports = {   
    injecthtmltemplate: function (targetClass, usetemplateName, currentdata, callback) {
        handelbarhelpers.init();
        
        $.get(usetemplateName, function (data) {
            var temptpl = Handlebars.compile(data);           
            $(targetClass).html(temptpl(currentdata));
            callback();
        }, 'html');
    },
    returnhtmltemplate: function (usetemplateName, currentdata, callback) {
        handelbarhelpers.init();
        
        $.get(usetemplateName, function (data) {
            var temptpl = Handlebars.compile(data);                      
            callback(temptpl(currentdata));
        }, 'html');
    }
}
//String.prototype.replaceAt = function (index, char) {
//    return this.substr(0, index) + char + this.substr(index + 1);
//    //   this will 'replace' the character at index with char ^
//}

