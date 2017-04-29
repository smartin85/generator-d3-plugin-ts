'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-d3-plugin-ts:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        pluginName: 'generator-d3-plugin-ts-test',
        pluginDescription: 'Test description',
        githubUsername: 'someUser',
        authorName: 'John Doe'
      });
  });

  it('creates files', () => {
    assert.file([
      'bower.json',
      'package.json',
      'README.md',
      'rollup.config.js',
      '.gitignore',
      '.npmignore',
      'tsconfig.json',
      'src/generatorD3PluginTsTest.ts',
      'src/index.ts',
      'test/generatorD3PluginTsTest-test.ts',
      'test/tsconfig.json'
    ]);
  });
});
