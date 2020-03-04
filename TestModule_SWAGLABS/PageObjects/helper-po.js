require('fs');

var helper = function () {

    this.clearWebElement = function (element) {
        return element.clear();
    };

    this.setDisplayValue = function (element, displayValue) {
        return element.sendKeys(displayValue);
    };

    this.getCsvFormatData = function (fileName) {
        const filePath = './' + fileName;
        let fileContent;
        return new Promise(resolve => {
            fileContent = fs.readFileSync(filePath, {encoding: 'utf8'});
            resolve(fileContent.split(/\r?\n/g));
        })
    };
}
module.exports = new helper();