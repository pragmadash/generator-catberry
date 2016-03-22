'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('generator-catberry:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({})
      .withPrompts({})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'package.json'
    ]);
  });
});
