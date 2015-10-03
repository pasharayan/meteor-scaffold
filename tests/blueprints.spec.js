var fs = require('fs');
var blueprints = require('../lib/blueprints.js');

describe('Blueprints object', function() {
  it('should contain "collection" blueprint', function() {
    expect(blueprints.collection).toBeDefined();
  });
  it('should contain "router" blueprint', function() {
    expect(blueprints.router).toBeDefined();
  });
});

describe('Collection blueprint', function() {
  it('should contain "RESULT_DIRECTORY" attribute', function() {
    expect(blueprints.collection.RESULT_DIRECTORY).toBeDefined();
  });
  it('should contain "TEMPLATE_FILENAME" attribute', function() {
    expect(blueprints.collection.TEMPLATE_FILENAME).toBeDefined();
  });
  it('should contain "templateData" attribute', function() {
    expect(blueprints.collection.templateData).toBeDefined();
  });
});

describe('Router blueprint', function() {
  it('should contain "RESULT_DIRECTORY" attribute', function() {
    expect(blueprints.router.RESULT_DIRECTORY).toBeDefined();
  });
  it('should contain "TEMPLATE_FILENAME" attribute', function() {
    expect(blueprints.router.TEMPLATE_FILENAME).toBeDefined();
  });
  it('should contain "templateData" attribute', function() {
    expect(blueprints.router.templateData).toBeDefined();
  });
});
