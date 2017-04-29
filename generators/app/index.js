'use strict';
const path = require('path');
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');
const pkgName = require('pkg-name');
const mkdirp = require('mkdirp');

function makePluginName(name) {
  return _.kebabCase(name).replace('d-3', 'd3');
}

function makePluginFnName(name) {
  if (name.length > 'd3-plugin-'.length && name.startsWith('d3-plugin-')) {
    name = name.replace('d3-plugin-', '');
  } else if (name.length > 'd3-'.length && name.startsWith('d3-')) {
    name = name.replace('d3-', '');
  }
  return _.camelCase(name);
}

module.exports = class extends Generator {

  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the amazing ' + chalk.red('d3-plugin-ts') + ' generator!'
    ));

    const githubUsernamePromise = new Promise(resolve => {
      try {
        this.user.github.username((err, username) => resolve(username)); // eslint-disable-line handle-callback-err
      } catch (err) {
        /* istanbul ignore next */
        resolve('');
      }
    });

    return githubUsernamePromise.then(githubUsername => {
      const prompts = {
        name: [
          {
            name: 'pluginName',
            message: 'Type in a name for your package',
            default: makePluginName(this.appname),
            filter: makePluginName
          },
          {
            type: 'confirm',
            name: 'pkgName',
            message: 'The name above already exists on npm or Bower, choose another?',
            default: true,
            when: function (answers) {
              var done = this.async();
              pkgName(answers.pluginName, function (err, available) {
                if (err) {
                  /* istanbul ignore next */
                  done(false);
                }
                if (!available.npm || !available.bower) {
                  return done(null, true);
                }

                done(false);
              });
            }
          }],
        info: [
          {
            name: 'pluginDescription',
            message: 'Type in a description for your plugin'
          },
          {
            name: 'githubUsername',
            message: 'What is your GitHub username?',
            default: githubUsername
          },
          {
            name: 'authorName',
            message: 'What is your name? (for copyright notice, etc.)',
            default: this.user.git.name
          }
        ]
      };

      const self = this;

      function promptForName() {
        return self.prompt(prompts.name).then(props => {
          if (props.pkgName) {
            return promptForName();
          }
          self.pluginName = props.pluginName;
          return self.prompt(prompts.info).then(props => {
            props.pluginName = self.pluginName;
            props.year = new Date().getFullYear();
            self.pluginDescription = props.pluginDescription;
            self.githubUsername = props.githubUsername;
            self.authorName = props.authorName;
            self.pluginFnName = makePluginFnName(self.pluginName);
            self.year = props.year;
            self.props = props;
          });
        }).catch(promptForName);
      }

      return promptForName();
    });
  }

  default() {
    if (path.basename(this.destinationPath()) !== this.props.pluginName) {
      this.log(
        'Your generator must be inside a folder named ' + this.props.pluginName + '\n' +
        'I\'ll automatically create this folder.'
      );
      mkdirp(this.props.pluginName);
      this.destinationRoot(this.destinationPath(this.props.pluginName));
    }
  }

  writing() {
    this.fs.copy(this.templatePath('_.gitignore'), this.destinationPath('.gitignore'));
    this.fs.copy(this.templatePath('_.npmignore'), this.destinationPath('.npmignore'));
    this.fs.copy(this.templatePath('tsconfig.json'), this.destinationPath('tsconfig.json'));
    this.fs.copy(this.templatePath('_travis.yml'), this.destinationPath('.travis.yml'));
    this.fs.copy(this.templatePath('server.config.js'), this.destinationPath('server.config.js'));
    this.fs.copy(this.templatePath('test/tsconfig.json'), this.destinationPath('test/tsconfig.json'));
    this.fs.copy(this.templatePath('src/_srcFile.ts'), this.destinationPath(`src/${this.pluginFnName}.ts`));

    this.fs.copyTpl(this.templatePath('test/_testFile-test.ts'), this.destinationPath(`test/${this.pluginFnName}-test.ts`), this);
    this.fs.copyTpl(this.templatePath('src/_index.ts'), this.destinationPath('src/index.ts'), this);
    this.fs.copyTpl(this.templatePath('_bower.json'), this.destinationPath('bower.json'), this);
    this.fs.copyTpl(this.templatePath('_README.md'), this.destinationPath('README.md'), this);
    this.fs.copyTpl(this.templatePath('_package.json'), this.destinationPath('package.json'), this);
    this.fs.copyTpl(this.templatePath('_rollup.config.js'), this.destinationPath('rollup.config.js'), this);
    this.fs.copyTpl(this.templatePath('_LICENSE'), this.destinationPath('LICENSE'), this);
    this.fs.copyTpl(this.templatePath('example/_index.html'), this.destinationPath('example/index.html'), this);
  }

  install() {
    this.npmInstall();
  }

  end() {
    this.log(`${chalk.green.underline('Your new d3 plugin is ready!')}
    
    Your plugin is in /src/
    Your tests are in /test/
    Your example is in /example/

    ${this.createDir ? ('do ' + chalk.red.bold('cd ' + this.packageName)) : ''}
    To build it run ${chalk.red.bold('npm run prepublish')}
    To start TDD and a local web server with live reloading for your example, run ${chalk.red.bold('npm start')}
    To start only TDD run ${chalk.red.bold('npm run test:tdd')}
    To start a single Test run  ${chalk.red.bold('npm test')}
    To get a coverage report run ${chalk.red.bold('npm run test:coverage')}
    `);
  }
};
