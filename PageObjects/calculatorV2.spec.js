describe('Protractor Demo App', function() {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var operator = element(by.model('operator'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));
  
    beforeEach(function() {
      browser.get('http://juliemr.github.io/protractor-demo/');
    });
  
    it('Test nombre de la pagina', function() {
      expect(browser.getTitle()).toEqual('Super Calculator');
    });
  
    it('suma 2 + 1', function() {
      firstNumber.sendKeys(1);
      secondNumber.sendKeys(2);
  
      goButton.click();
  
      expect(latestResult.getText()).toEqual('3');
    });
  
    it('resta 2 - 1', function() {
      firstNumber.sendKeys(2);
      secondNumber.sendKeys(1);
      operator.element(by.cssContainingText('option', '-')).click();
      goButton.click();

      expect(latestResult.getText()).toEqual('1');
    });
  
    it('obtiene valor del primer operando', function() {
      firstNumber.sendKeys(1);
      expect(firstNumber.getAttribute('value')).toEqual('1');
    });
  });