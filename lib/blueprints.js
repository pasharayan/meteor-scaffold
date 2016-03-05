var changeCase = require('change-case');

var collection = {
  RESULT_DIRECTORY: './lib/collections/',
  TEMPLATE_FILENAME: 'collection.tmpl',
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
};
