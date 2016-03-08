var changeCase = require('change-case');

var collection = {
  RESULT_DIRECTORY: './lib/collections/',
  TEMPLATE_FILENAME: 'collection.tmpl',
  OUTPUT_FILENAME: '{{variableName}}.js',
  templateData: function(name) {
    return {
      variableName: changeCase.pascalCase(name),
      collectionName: changeCase.snakeCase(name),
    };
  }
};

var router = {
  RESULT_DIRECTORY: './lib/routers/',
  TEMPLATE_FILENAME: 'router.tmpl',
  OUTPUT_FILENAME: '{{variableName}}.js',
  templateData: function(name) {
    return {
      variableName: name,
      routeName: changeCase.camelCase(name),
      pubsubName: changeCase.camelCase(name),
      serverName: changeCase.pascalCase(name),
    };
  }
};

var server = {
  RESULT_DIRECTORY: './server/methods/{{variableName}}',
  TEMPLATE_FILENAME: 'server.tmpl',
  OUTPUT_FILENAME: '{{variableName}}.js',
  templateData: function(name) {
    return {
      variableName: name,
      serverName: changeCase.pascalCase(name),
    };
  }
};

var publication = {
  RESULT_DIRECTORY: './server/publications/{{variableName}}',
  TEMPLATE_FILENAME: 'publication.tmpl',
  OUTPUT_FILENAME: '{{variableName}}.js',
  templateData: function(name) {
    return {
      variableName: name,
      serverName: changeCase.pascalCase(name),
    };
  }
};

var clientIndexJs = {
  RESULT_DIRECTORY: './client/templates/{{variableName}}',
  TEMPLATE_FILENAME: 'clientIndexJs.tmpl',
  OUTPUT_FILENAME: '{{variableName}}Index.js',
  templateData: function(name) {
    return {
      variableName: name,
      serverName: changeCase.pascalCase(name),
    };
  }
};

var clientNewJs = {
  RESULT_DIRECTORY: './client/templates/{{variableName}}',
  TEMPLATE_FILENAME: 'clientNewJs.tmpl',
  OUTPUT_FILENAME: '{{variableName}}New.js',
  templateData: function(name) {
    return {
      variableName: name,
      serverName: changeCase.pascalCase(name),
    };
  }
};

var clientEditJs = {
  RESULT_DIRECTORY: './client/templates/{{variableName}}',
  TEMPLATE_FILENAME: 'clientEditJs.tmpl',
  OUTPUT_FILENAME: '{{variableName}}Edit.js',
  templateData: function(name) {
    return {
      variableName: name,
      serverName: changeCase.pascalCase(name),
    };
  }
};

var clientIndexHtml = {
  RESULT_DIRECTORY: './client/templates/{{variableName}}',
  TEMPLATE_FILENAME: 'clientIndexHtml.tmpl',
  OUTPUT_FILENAME: '{{variableName}}Index.html',
  templateData: function(name) {
    return {
      variableName: name,
      serverName: changeCase.pascalCase(name),
    };
  }
};

var clientNewHtml = {
  RESULT_DIRECTORY: './client/templates/{{variableName}}',
  TEMPLATE_FILENAME: 'clientNewHtml.tmpl',
  OUTPUT_FILENAME: '{{variableName}}New.html',
  templateData: function(name) {
    return {
      variableName: name,
      serverName: changeCase.pascalCase(name),
    };
  }
};

var clientEditHtml = {
  RESULT_DIRECTORY: './client/templates/{{variableName}}',
  TEMPLATE_FILENAME: 'clientEditHtml.tmpl',
  OUTPUT_FILENAME: '{{variableName}}Edit.html',
  templateData: function(name) {
    return {
      variableName: name,
      serverName: changeCase.pascalCase(name),
    };
  }
};

var clientShowJs = {
  RESULT_DIRECTORY: './client/templates/{{variableName}}',
  TEMPLATE_FILENAME: 'clientShowJs.tmpl',
  OUTPUT_FILENAME: '{{variableName}}Show.js',
  templateData: function(name) {
    return {
      variableName: name,
      serverName: changeCase.pascalCase(name),
    };
  }
};

var clientShowHtml = {
  RESULT_DIRECTORY: './client/templates/{{variableName}}',
  TEMPLATE_FILENAME: 'clientShowHtml.tmpl',
  OUTPUT_FILENAME: '{{variableName}}Show.html',
  templateData: function(name) {
    return {
      variableName: name,
      serverName: changeCase.pascalCase(name),
    };
  }
};

//Make variables accessible to rest of package
module.exports = {
  collection: collection,
  router: router,
  server: server,
  publication: publication,
  clientIndexHtml: clientIndexHtml,
  clientIndexJs: clientIndexJs,
  clientNewHtml: clientNewHtml,
  clientNewJs: clientNewJs,
  clientEditJs: clientEditJs,
  clientEditHtml: clientEditHtml,
  clientShowHtml: clientShowHtml,
  clientShowJs: clientShowJs,
};
