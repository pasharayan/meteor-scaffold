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
      routeName: changeCase.camelCase(name),
      pubsubName: changeCase.camelCase(name),
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
      //TODO: Not sure if i should have called this collectionName
      // instead of serverName - collectionName is used differently above
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
      //TODO: Not sure if i should have called this collectionName
      // instead of serverName - collectionName is used differently above
      serverName: changeCase.pascalCase(name),
    };
  }
};

var clientIndexJs = {
  //TODO: Find a way to create folders with variableNames
  RESULT_DIRECTORY: './client/templates/{{variableName}}',
  TEMPLATE_FILENAME: 'clientIndexJs.tmpl',
  OUTPUT_FILENAME: '{{variableName}}Index.js',
  templateData: function(name) {
    return {
      variableName: name,
      //TODO: Not sure if i should have called this collectionName
      // instead of serverName - collectionName is used differently above
      serverName: changeCase.pascalCase(name),
    };
  }
};

var clientNewJs = {
  //TODO: Find a way to create folders with variableNames
  RESULT_DIRECTORY: './client/templates/{{variableName}}',
  TEMPLATE_FILENAME: 'clientNewJs.tmpl',
  OUTPUT_FILENAME: '{{variableName}}New.js',
  templateData: function(name) {
    return {
      variableName: name,
      //TODO: Not sure if i should have called this collectionName
      // instead of serverName - collectionName is used differently above
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
  clientIndexJs: clientIndexJs,
  clientNewJs: clientNewJs,
};
