module.exports = function() {
	'use strict';

	this.Given(/^I load the url$/, function (callback) {
		console.log("Accessing the " + browser.params.env + " Environment");
		loginPage.get(envData.login.url).then(function () {
			console.log("URL :" + envData.login.url);
			browser.sleep(5000).then(function () {
				callback();
			});
		});
	});

	this.When(/^I enter valid credentials$/, function (callback) {
		console.log("On the login page");
		helper.clearWebElement(loginPage.userId());
		helper.setDisplayValue(loginPage.userId(), envData.login.username);
		//	loginPage.nextButton().click().then(function () {
		helper.clearWebElement(loginPage.passWd());
		helper.setDisplayValue(loginPage.passWd(), envData.login.password);
		loginPage.signInButton().click().then(function () {
			browser.sleep(3000).then(function () {
				callback();

			});
		});
	});


};









