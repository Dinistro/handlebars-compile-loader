var handlebars = require('handlebars');
var handlebarsWax = require('handlebars-wax');

module.exports = function(source) {
    this.cacheable();

    let options = this.query;

    var hb = handlebars;//|| gulpHb.handlebars.create();
    var wax = handlebarsWax(hb, options);

    if (options.partials) {
  		wax.partials(options.partials);
  	}

  	if (options.helpers) {
  		wax.helpers(options.helpers);
  	}

  	if (options.decorators) {
  		wax.decorators(options.decorators);
  	}

  	if (options.data) {
  		wax.data(options.data);
  	}

    var template = wax.compile(source);

    return 'module.exports =' + JSON.stringify(template(options.data));
};
