describe('Calculadra', function() {

    it('suma 2 + 1', function() {
      browser.get('http://juliemr.github.io/protractor-demo/');
  
      element(by.model('first')).sendKeys('1');
      element(by.model('second')).sendKeys('2');
      element(by.model('operator')).element(by.cssContainingText('option', '+')).click();
      //element(by.id('gobutton')).click();
      element(by.css('.btn')).click();

      expect(element(by.binding('latest')).getText()).toEqual('3'); // see source code
    });

    it('resta 2 - 1', function() {
        element(by.model('first')).sendKeys('2');
        element(by.model('second')).sendKeys('1');
        element(by.model('operator')).element(by.cssContainingText('option', '-')).click();
        element(by.id('gobutton')).click();

        expect(element(by.binding('latest')).getText()).toEqual('1');
    })

    it('obtiene valor de primer operando', function() {
        element(by.model('first')).sendKeys('1');
        expect(element(by.model('first')).getAttribute('value')).toEqual('1');   
    })

    it('conteo operaciones en historial', function() {
        element(by.model('first')).sendKeys('1');
        element(by.model('second')).sendKeys('2');
        element(by.id('gobutton')).click();        

        element(by.model('first')).sendKeys('3');
        element(by.model('second')).sendKeys('4');
        element(by.id('gobutton')).click();

        expect(element.all(by.repeater("result in memory")).count()).toEqual(4);
    })
});