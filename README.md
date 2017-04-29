# generator-d3-plugin-ts 
[![MIT License][license-image]][license-url]
[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]

> [Yeoman](http://yeoman.io) generator to scaffold out a [D3](https://d3js.org/) v4 plugin boilerplate with typescript

If you want to generate a d3 plugin boilerplate with **javascript** instead of typescript use the [generator-d3-plugin](https://github.com/akash-goswami/generator-d3-plugin) from [Akash Goswami](https://github.com/akash-goswami).

## Installation

First, install [Yeoman](http://yeoman.io) and generator-d3-plugin-ts using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-d3-plugin-ts
```

Then generate your new project:

```bash
yo d3-plugin-ts
```
and follow the prompts.

## Details

- The plugins are build using rollup which is suggested by D3.

- Unit test cases can be written in tape with typescript, tape is added in devDependencies by default.

- The plugin can be tested using `npm test`.
	- TDD can be started using `npm run test:tdd`
	- Code Coverage can be started using `npm run test:coverage`

- The plugin can be build using `npm run prepublish`.

- The build is created in `/build` folder.
	- The typings are created in `/build/typings` folder.
	- The ES2015 module is created in `/build/jsnext` folder.
	- The UMD module is created in `/build/` folder.

- Local server with live reloading and TDD can be achieved by running `npm start`. 

- The examples are found in the `/example` folder. It is recommended that you use this folder to display an example of your plugin.


## Read more

Read more about [D3 v4 Plugin](https://bost.ocks.org/mike/d3-plugin/) and [reusable chart component](http://bl.ocks.org/cpbotha/5073718) for plugins.

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).


[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[npm-image]: https://badge.fury.io/js/generator-d3-plugin-ts.svg
[npm-url]: https://npmjs.org/package/generator-d3-plugin-ts

[travis-image]: https://travis-ci.org/smartin85/generator-d3-plugin-ts.svg?branch=master
[travis-url]: https://travis-ci.org/smartin85/generator-d3-plugin-ts

[daviddm-image]: https://david-dm.org/smartin85/generator-d3-plugin-ts.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/smartin85/generator-d3-plugin-ts

[coveralls-image]: https://coveralls.io/repos/smartin85/generator-d3-plugin-ts/badge.svg
[coveralls-url]: https://coveralls.io/r/smartin85/generator-d3-plugin-ts
