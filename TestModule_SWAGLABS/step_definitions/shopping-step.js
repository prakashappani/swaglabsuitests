
module.exports = function() {
    'use strict';
    var i;

    this.Given(/^I'm on the Inventory container$/, function (callback) {
        ShoppingPage.getcartList().isDisplayed().then(function(isPresent) {
            expect(isPresent).to.equal(true);
            callback();
        });
    });


    this.When(/^I Add the (.*) to the cart$/, function (item1, callback) {
        if(item1 =='Sauce Labs Bike Light' )
            i =1;
        else
            i=4;
        ShoppingPage.getitemsList().get(i).click().then(function () {
            callback();
        });
    });


    this.When(/^I click on the shopping cart button$/, function (callback) {
        element(by.css('.shopping_cart_container')).click().then(function(){
            browser.sleep(1000).then(function () {
                callback();
            });
        });

    });

    this.Then(/^I should be able to see the items (.*) and (.*) in the cart$/, function (item1, item2, callback) {
        var list = element.all(by.css('.inventory_item_name'));
        list.get(0).getText().then(function(text) {
            list.get(1).getText().then(function (text2) {
                expect(text).to.equal(item1);
                expect(text2).to.equal(item2);
                callback();
            });
        });
    });


    this.Then(/^I should see the Inventory container$/, function (callback) {
        element(by.css('.app_logo')).isDisplayed().then(function(isPresent) {
            expect(isPresent).to.equal(true);
            callback();
        });
    });
};









