module.exports = function () {
    'use strict';
    var i;

    this.Given(/^I'm on the Inventory container$/, function (callback) {
        ShoppingPage.getcartList().isDisplayed().then(function (isPresent) {
            expect(isPresent).to.equal(true);
            callback();
        });
    });


    this.When(/^I Add the (.*) to the cart$/, function (item1, callback) {
        if (item1 == 'Sauce Labs Bike Light')
            i = 1;
        else
            i = 4;
        ShoppingPage.getitemsList().get(i).click().then(function () {
            callback();
        });
    });


    this.When(/^I click on the shopping cart button$/, function (callback) {
        element(by.css('.shopping_cart_container')).click().then(function () {
            browser.sleep(1000).then(function () {
                callback();
            });
        });

    });

    this.Then(/^I should be able to see the items (.*) in the cart$/, function (item1, callback) {
        var list = element.all(by.css('.inventory_item_name'));
        list.get(0).getText().then(function (text) {
            expect(text).to.equal(item1.trim());
            callback();
        });
    });


    this.Then(/^I should see the Inventory container$/, function (callback) {
        element(by.css('.app_logo')).isDisplayed().then(function (isPresent) {
            expect(isPresent).to.equal(true);
            callback();
        });
    });


    this.When(/^I add (.*) to the shopping cart$/, function (items, table, callback) {
        for (let i = 0; i < table.hashes().length; i++) {
            let name = table.rows()[i].toString()
            let xpth = `//div[contains(text(), '${name}')]`
            element(by.xpath(xpth)).click()
            element(by.xpath('//button[@class=\'btn_primary btn_inventory\']')).click()
            element(by.xpath('//button[@class=\'inventory_details_back_button\']')).click()
            callback()
        }
    });


    this.Then(/^I should verify "All Products" are in the shopping cart$/, function (table, callback) {
        var list = element.all(by.css('.inventory_item_name'));
        for (let i = 0; i < table.hashes().length; i++) {
            let exp = table.rows()[i].toString()
            list.get(i).getText().then(function (text) {
                expect(text).to.equal(exp);
            });
        }
        callback();
    });

    this.Then(/^I click on continue shopping button$/, function (callback) {
        element(by.css('a.btn_secondary')).click().then(function () {
            browser.sleep(1000).then(function () {
                callback();
            });
        });
    });

};



