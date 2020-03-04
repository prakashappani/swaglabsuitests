var loginPage = function () {
    var THIS = this;
    this.get = function (url) {
        return browser.get(url);
    };

    this.userId = function () {
        return element(by.id('user-name'));
    };

    this.passWd = function () {
        return element(by.id('password'));
    };

    this.signInButton = function () {
        return element(by.css('.btn_action'));
    };


}
module.exports = new loginPage();


