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

module.exports = {
  collection: collection,
  router: router,
};
