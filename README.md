<div align="center">
  <h1>Handlebars compile Loader</h1>
</div>

<h2 align="center">Install</h2>

```bash
npm install --save-dev handlebars-compile-loader
```

<h2 align="center">Usage</h2>

Use [`handlebars-compile-loader`](https://github.com/dinistro/hndlebars-compile-loader) if you want to offlinecompile your handlebars files. 

### Via webpack config

**webpack.config.js**
```js
module.exports = {
  module: {
    rules: [
      {
        "test": /\.hbs$/,
        "loader": {
          "loader": "handlebars-compile-loader",
          "options": {
            partials: './src/assets/partials/**/*.hbs',
            helpers: './src/assets/helpers/*.js',
            data: './src/assets/data/**/*.{js,json}'
          }
        }
      }   
    ]
  }
}
```

**In your application**
```js
var template = require('./template.hbs');
```

<h2 align="center">Options</h2>

You can pass any handlebars-wax options to handlebars-compile-loader via loader options or query parameters.

For available options, look in the ['handlebars-wax documentation'](https://github.com/shannonmoeller/handlebars-wax).
