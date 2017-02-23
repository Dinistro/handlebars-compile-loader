var configKey = 'handlebarsLoader';
var loaderUtils = require("loader-utils");

module.exports = function(source) {
    this.cacheable();
    var query = loaderUtils.parseQuery(this.query);


    console.log('query', this.query);

    if (this.options[configKey]) {
        console.log(this.options[configKey]);
    }

    return JSON.stringify(source);
};