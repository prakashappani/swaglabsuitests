var helper = function() {

	this.clearWebElement = function(element) {
		return element.clear();
	};

	this.setDisplayValue = function(element, displayValue) {
		return element.sendKeys(displayValue);
	};


}
module.exports = new helper();