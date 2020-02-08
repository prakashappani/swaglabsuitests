module.exports = function(grunt) {
 'use strict';


 grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),

  jshint: {
   files: ['Gruntfile.js', 'StepDefinitions/*.js', 'step_definitions/*.js'],
   options: {
    // options here to override JSHint defaults
    globals: {
     jQuery: true,
     console: true,
     module: true,
     document: true
    }
   }

  },

  execute: {
   target: {}
  },

  shell: {
   options: {
    stdout: true
   },
   disableSSL: {
    command: 'npm config set strict-ssl false'
   },

   npm_install: {
    command: 'npm install --only=dev'
   },
   npm_update: {
    command: 'npm update --only=dev'
   },
   protractor_install: {
    command: 'node ./node_modules/protractor/bin/webdriver-manager update --ignore_ssl'
   },


  },
  protractor: {
   default: {
    options: {
     keepAlive: false,
     configFile: grunt.option('conf'),
     args: {
      suite: grunt.option('suite'),
      params: {
       env: grunt.option('env'),
      }
     }
    },
   },

   test: {
    options: {
     keepAlive: false,
     configFile: grunt.option('conf'),
     args: {
      cucumberOpts: grunt.option('spec'),
      suite: grunt.option('suite'),
      params: {
       env: grunt.option('env')
      }
     }
    }
   },

   browser: {
    options: {
     keepAlive: false,
     configFile: grunt.option('conf'),
     args: {
      cucumberOpts: grunt.option('spec'),
      suite: grunt.option('suite'),
      browser: grunt.option('browser'),
      params: {
       env: grunt.option('env')
      }
     }
    },
   },

   noSuite: {
    options: {
     keepAlive: false,
     configFile: grunt.option('conf'),
     args: {
      params: {
       env: grunt.option('env')
      }
     }
    },
   },
   singlerun: {},
   auto: {
    keepAlive: false,
    options: {
     args: {
      seleniumPort: 4444
     }
    }
   }
  },


 });

 var target = grunt.option('target') || 'def';

 grunt.loadNpmTasks('grunt-contrib-jshint');

 grunt.loadNpmTasks('grunt-execute');

 grunt.loadNpmTasks('grunt-contrib-jshint');

 grunt.loadNpmTasks('grunt-shell-spawn');

 grunt.loadNpmTasks('grunt-protractor-runner');

 //grunt.loadNpmTasks('perfjankie');

 grunt.registerTask('default', function(arg) {
  try {
   grunt.task.run('jshint');
   grunt.task.run('execute:target');
   grunt.task.run('shell');
   grunt.task.run('protractor:default');

  } catch (e) {
   // Something went wrong.
   grunt.verbose.or.write(msg).error().error(e.message);
   grunt.fail.warn('Something went wrong.');
  }
 });

 grunt.registerTask('test', function(arg) {
  try {
   grunt.task.run('jshint');
   grunt.task.run('execute:target');
   grunt.task.run('shell');
   grunt.task.run('protractor:test');

  } catch (e) {
   // Something went wrong.
   grunt.verbose.or.write(msg).error().error(e.message);
   grunt.fail.warn('Something went wrong.');
  }
 });

 grunt.registerTask('noSuite', function(arg) {
  try {
   grunt.task.run('jshint');
   grunt.task.run('execute:target');
   grunt.task.run('shell');
   grunt.task.run('protractor:noSuite');

  } catch (e) {
   // Something went wrong.
   grunt.verbose.or.write(msg).error().error(e.message);
   grunt.fail.warn('Something went wrong.');
  }
 });


 grunt.registerTask('browser', function(arg) {
  try {
   grunt.task.run('jshint');
   grunt.task.run('execute:target');
   grunt.task.run('shell');
   grunt.task.run('protractor:browser');

  } catch (e) {
   // Something went wrong.
   grunt.verbose.or.write(msg).error().error(e.message);
   grunt.fail.warn('Something went wrong.');
  }
 });


};