var $ = require("jquery");
var appsettingsobject = require("./../appsettings.js");


module.exports = {   
    injecthtmltemplate: function (targetClass, usetemplateName, currentdata, callback) {
       
        $.get(usetemplateName, function (data) {
            var temptpl = Handlebars.compile(data);
            $(targetClass).html(temptpl(currentdata));
            callback();
        }, 'html');
    }
}
String.prototype.replaceAt = function (index, char) {
    return this.substr(0, index) + char + this.substr(index + 1);
    //   this will 'replace' the character at index with char ^
}

Handlebars.registerHelper('datagroupname', function (name) {
    var ind = name.indexOf("i", 0);
    name.replaceAt(ind, "o");
    return name.replace(/\s/g, "");
});
var Counter = 1;
Handlebars.registerHelper('count', function (index) {
    return "grupp" + index;
});