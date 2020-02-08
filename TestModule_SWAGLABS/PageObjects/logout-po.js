/**
 * Created by srikanth on 6/26/18.
 */

var logoutPage = function() {
	var THIS = this;
	var pageHeader = by.css('h1');

	this.pageTitle = ' ';
	this.welcomeText = ' ';

	this.get = function (url) {
		return browser.get(url);
	};
	this.clickhamburger=function(){
		return element(by.css('div.bm-burger-button')).click();
	};

	this.logOutButton = function () {
		return element(by.css('#logout_sidebar_link'));
	};

}
module.exports = new logoutPage();


