var handlebars = require('handlebars');
var handlebarsWax = require('handlebars-wax');

module.exports = function (source) {
    this.cacheable();

    let addToDependencies = (option) => {
        if (typeof option === 'string') {
            this.dependency(option);
        } else if (Array.isArray(option)) {
            option.forEach((item) => {
                this.dependency(item);
            });
        }
    };

    let options = this.query;
    var hb = handlebars;

    var wax = handlebarsWax(hb, options);

    if (options.partials) {
        wax.partials(options.partials);

        addToDependencies(options.partials);
    }

    if (options.helpers) {
        wax.helpers(options.helpers);

        addToDependencies(options.helpers);
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

