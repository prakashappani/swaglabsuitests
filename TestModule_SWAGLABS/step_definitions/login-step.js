module.exports = function () {
    'use strict';

    this.Given(/^I load the url$/, function (callback) {
        console.log("Accessing the " + browser.params.env + " Environment");
        loginPage.get(envData.login.url).then(function () {
            console.log("URL :" + envData.login.url);
            browser.sleep(1000).then(function () {
                callback();
            });
        });
    });

    this.When(/^I enter valid credentials$/, function (callback) {
        console.log("On the login page");
        helper.clearWebElement(loginPage.userId());
        helper.setDisplayValue(loginPage.userId(), envData.login.username);
        helper.clearWebElement(loginPage.passWd());
        helper.setDisplayValue(loginPage.passWd(), envData.login.password);
        loginPage.signInButton().click().then(function () {
            browser.sleep(1000).then(function () {
                callback();

            });
        });
    });

    this.Given(/^I read from a (.*) file$/, function (csvFile, callback) {
        helper.getCsvFormatData(csvFile).then(function (dataTable) {
            for (let i = 1; i < dataTable.length; i++) {
                const line = dataTable[i].split(',');
                helper.clearWebElement(loginPage.userId());
                helper.setDisplayValue(loginPage.userId(), line[0]);
                helper.clearWebElement(loginPage.passWd());
                helper.setDisplayValue(loginPage.passWd(), line[1]);
                loginPage.signInButton().click().then(function () {
                    browser.sleep(2000).then(function () {
                        callback();
                    });
                });
            }
        });
    });

     this.When(/^I enter (.*) (.*) login page$/, function (username, password, callback) {
        console.log("On the login page");
        helper.clearWebElement(loginPage.userId());
        helper.setDisplayValue(loginPage.userId(), username);
        helper.clearWebElement(loginPage.passWd());
        helper.setDisplayValue(loginPage.passWd(), password);
        loginPage.signInButton().click().then(function () {
            browser.sleep(1000).then(function () {
                callback();
            });
        });
    });
};









