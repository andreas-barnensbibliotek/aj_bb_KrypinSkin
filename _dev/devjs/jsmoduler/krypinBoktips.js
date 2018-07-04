_ = require("lodash");
var $ = require("jquery");
var bb_pagebehaviors = require("./app_modules/krypinPageBahavior.js");
var bb_containerbehaviors = require("./app_modules/krypinContainerBehavior.js");

module.exports = {
    init: function (value) {
        let moduleName = 'Boktips'
        bb_containerbehaviors.init(moduleName);
        bb_pagebehaviors.init(moduleName);
        /////////////////////////////////////////////////////

    }
};