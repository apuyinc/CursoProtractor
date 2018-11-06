const calculatorPage = require('../pages/calculator.js');

describe('Calculator usando page objects: ', function() {
    beforeAll(function() {
      calculatorPage.get();
        //browser.get('http://juliemr.github.io/protractor-demo/');
    });

  /* beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  }); */

  it('suma 1 + 2', function() {

    // firstNumber.sendKeys(1);
    calculatorPage.setFirstNumber(1);
    // secondNumber.sendKeys(2);
    calculatorPage.setSecondNumber(2);
    
    //goButton.click();
    calculatorPage.calculate();

    // expect(latestResult.getText()).toEqual('3'); 
    expect(calculatorPage.getLatestResult()).toEqual('3');

  });

  it('resta 2 - 1', function() {
     // firstNumber.sendKeys(2);
     calculatorPage.setFirstNumber(2);

     // secondNumber.sendKeys(1);
     calculatorPage.setSecondNumber(1);

     // operator.element(by.cssContainingText('option', '-')).click();
     calculatorPage.selectOperator('-');

     // goButton.click();
     calculatorPage.calculate();

     // expect(latestResult.getText()).toEqual('1');
     expect(calculatorPage.getLatestResult()).toEqual('1');
   });

   it('multiplica 2 * 3', function() {
    calculatorPage.setFirstNumber(2);
    calculatorPage.setSecondNumber(3);
    calculatorPage.selectOperator('*');

    calculatorPage.calculate();

    expect(calculatorPage.getFirstResultFromHistory()).toContain('1 + 2');
    expect(calculatorPage.getLastResultFromHistory()).toContain('2 * 3');
    expect(calculatorPage.getSpecificResultTotal(0)).toEqual('6');
  });

});