module.exports = function () {
    'use strict';
    this.When(/^I logout from the application$/, function (callback) {
        logoutPage.clickhamburger().then(function () {
            logoutPage.logOutButton().click().then(function () {
                browser.sleep(1000).then(function () {
                    callback();
                });
            });
        });
    });

    this.Then(/^I should go back to the login page$/, function (callback) {
        loginPage.userId().isDisplayed().then(function (present) {
            expect(present).to.equal(true);
            callback();
        })
    });

};
