var shoppingPage = function () {
    var THIS = this;


    this.getcartList = function (url) {
        return element(by.css('.app_logo'));
    };

    this.getitemsList = function (url) {
        return element.all(by.css('.btn_inventory'))
    }
}
module.exports = new shoppingPage();


