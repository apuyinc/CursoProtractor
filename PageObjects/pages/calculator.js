var CalculatorPage = function() {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var operator = element(by.model('operator'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));
    var history = element.all(by.repeater('result in memory'));

    this.get = function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
    };

    this.setFirstNumber = function(number) {
        firstNumber.sendKeys(number);
    };

    this.setSecondNumber = function(number) {
        secondNumber.sendKeys(number);
    };

    this.selectOperator = function(functionOperator) {
        operator.element(by.cssContainingText('option', functionOperator)).click();
    };

    this.calculate = function() {
        goButton.click();
    };

    this.getLatestResult = function() {
        return latestResult.getText();
    };

    this.getAllResults = function() {
        return history;
    };

    this.getSpecificResult = function(order) {
        return history.get(order).getText();
    };

    this.getLastResultFromHistory = function() {
        return history.first().getText();
    };

    this.getFirstResultFromHistory = function() {
        return history.last().getText();
    };

    this.getSpecificResultTotal = function(order) {
        return history.get(order).element(by.xpath('td[3]')).getText();
    }
}

module.exports = new CalculatorPage();