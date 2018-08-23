var $ = require("jquery");
var appsettingsobject = require("./../appsettings.js");

module.exports = {
    init: function () {

        Handlebars.registerHelper('datagroupname', function (name) {
            
            return name.replace(/\s/g, "");
        });

        
    }
}