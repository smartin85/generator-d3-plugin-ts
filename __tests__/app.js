'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

const files = [
  'bower.json',
  'package.json',
  'README.md',
  'LICENSE',
  'rollup.config.js',
  '.gitignore',
  '.npmignore',
  'tsconfig.json',
  '.travis.yml',
  'server.config.js',
  'src/index.ts',
  'test/tsconfig.json',
  'example/index.html'
];

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
      'src/generatorD3PluginTsTest.ts',
      'test/generatorD3PluginTsTest-test.ts'
    ].concat(files));
  });
});

describe('generator-d3-plugin-ts:app with prefix d3', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        pluginName: 'd3-generator-d3-plugin-ts-test',
        pluginDescription: 'Test description',
        githubUsername: 'someUser',
        authorName: 'John Doe'
      });
  });

  it('creates files', () => {
    assert.file([
      'src/generatorD3PluginTsTest.ts',
      'test/generatorD3PluginTsTest-test.ts'
    ].concat(files));
  });
});

describe('generator-d3-plugin-ts:app with prefix d3-plugin', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        pluginName: 'd3-plugin-super-plugin-test',
        pluginDescription: 'Test description',
        githubUsername: 'someUser',
        authorName: 'John Doe'
      });
  });

  it('creates files', () => {
    assert.file([
      'src/superPluginTest.ts',
      'test/superPluginTest-test.ts'
    ].concat(files));
  });
});
