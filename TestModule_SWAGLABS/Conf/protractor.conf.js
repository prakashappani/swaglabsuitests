exports.config = {

 // ---- While testing locally
 sauceUser: null,
 sauceKey: null,
 sauceSeleniumAddress: null,

 directConnect: true,
 firefoxPath: null,

 // Spec patterns are relative to the location of this config.
 specs: [],

 // Patterns to exclude.
 exclude: [],

 // Organize spec files into suites. To run specific suite, --suite=<name of suite>
 suites: {
  Regression: [
   '../Features/login.feature',
  ]

 },

 // Browser options
 multiCapabilities: [{
   browserName: 'chrome',
   count: 1,
   shardTestFiles: false,
   maxInstances: 1,
   'chromeOptions': {
    args: ['--no-sandbox', '--test-type=browser'],
    // Set download path and avoid prompting for download even though
    // this is already the default on Chrome but for completeness
    prefs: {
     'download': {
      'prompt_for_download': false,
      'directory_upgrade': true,
      'default_directory': './Downloads'
     }
    }
   }
  }

 ],

 maxSessions: -1,

 allScriptsTimeout: 250000,

 // How long to wait for a page to load.
 getPageTimeout: 650000,

 // Before launching the application
 beforeLaunch: function() {},

 // Application is launched but before it starts executing
 onPrepare: function() {

  // Create reports folder if it does not exist
  var folderName = (new Date()).toString().split(' ').splice(1, 4).join(' ');
  var mkdirp = require('mkdirp');
  var reportsPath = "./Reports/";
  mkdirp("./Reports/");
  //        mkdirp("./Reports/", function (err) {
  //            if (err) {
  //                console.error(err);
  //            } else {
  //            }
  //        });

  browser.manage().deleteAllCookies();
  browser.manage().timeouts().pageLoadTimeout(50000);
  browser.manage().timeouts().implicitlyWait(50000);
  //browser.driver.manage().window().setSize(1280, 1440);
  //browser.driver.manage().window().setSize(1600, 1000);
  browser.driver.manage().window().maximize();

  chai = require('chai');
  expect = chai.expect;
  path = require('path');
  Cucumber = require('cucumber');
  fs = require('fs');

  loginPage = require('../PageObjects/login-po.js');
  logoutPage = require('../PageObjects/logout-po.js');
  ShoppingPage = require('../PageObjects/shopping-po.js');
  helper = require('../PageObjects/helper-po.js');
  envData = require('../envData/env.' + browser.params.env + '.js').envData;
  browser.ignoreSynchronization = true;
 },

 //Browser parameters for feature files.
 params: {
  env: 'qa'
 },

 resultJsonOutputFile: null,

 // If true, protractor will restart the browser between each test.
 // CAUTION: This will cause your tests to slow down drastically.
 restartBrowserBetweenTests: false,

 // Custom framework in this case cucumber
 framework: 'custom',
 frameworkPath: require.resolve('protractor-cucumber-framework'),
 cucumberOpts: {

  // define your step definitions in this file
  require: [
   '../step_definitions/login-step.js',
   '../step_definitions/logout_step.js',
   '../step_definitions/shopping-step.js',
  ],

  format: 'pretty'
 }
};