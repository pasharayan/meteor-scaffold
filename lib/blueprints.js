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
  //TODO: Find a way to create folders with variableNames
  RESULT_DIRECTORY: './server/methods/',
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
  //TODO: Find a way to create folders with variableNames
  RESULT_DIRECTORY: './server/publications/',
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
