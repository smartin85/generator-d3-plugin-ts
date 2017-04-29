# <%= pluginName %>
[![BSD 3-Clause License][license-image]][license-url]
[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Coverage percentage][coveralls-image]][coveralls-url]

<%= pluginDescription %>

## Installing

If you use NPM, `npm install --save <%= pluginName %>`. If you use Bower, `bower install --save <%= pluginName %>`. Otherwise, download the [latest release](https://github.com/<%= githubUsername %>/<%= pluginName %>/releases/latest).

```html
<script src="https://d3js.org/d3.v4.min.js"></script>
<script src="https://unpkg.com/<%= pluginName %>@latest"></script>
<script>

var answer = d3.<%= pluginFnName %>(); // 42 - the answer to the ultimate question of life, the universe, and everything

</script>
```

[Try <%= pluginName %> in your browser.](https://tonicdev.com/npm/<%= pluginName %>)

## API Reference

<a href="#<%= pluginFnName %>" name="<%= pluginFnName %>">#</a> d3.<b><%= pluginFnName %></b>();

Computes the answer to the ultimate question of life, the universe, and everything.

[license-image]: https://img.shields.io/badge/License-BSD%203--Clause-blue.svg
[license-url]: LICENSE

[npm-image]: https://badge.fury.io/js/<%= pluginName %>.svg
[npm-url]: https://npmjs.org/package/<%= pluginName %>

[bower-image]: https://badge.fury.io/bo/<%= pluginName %>.svg
[bower-url]: https://badge.fury.io/bo/<%= pluginName %>

[travis-image]: https://travis-ci.org/<%= githubUsername %>/<%= pluginName %>.svg?branch=master
[travis-url]: https://travis-ci.org/<%= githubUsername %>/<%= pluginName %>

[daviddm-image]: https://david-dm.org/<%= githubUsername %>/<%= pluginName %>.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/<%= githubUsername %>/<%= pluginName %>

[coveralls-image]: https://coveralls.io/repos/<%= githubUsername %>/<%= pluginName %>/badge.svg
[coveralls-url]: https://coveralls.io/r/<%= githubUsername %>/<%= pluginName %>
