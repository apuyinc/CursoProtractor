using = require('jasmine-data-provider');

var TestData = require('../testData.json');
var TestData2 = require('../testData2.js');


describe("Test calculator",function() {

    beforeEach(function() {
      browser.get(TestData.urlToTest);
      console.log("Test site URL is:" + TestData.urlToTest);
    });

    it("sumas", function() {
      element(by.model('first')).sendKeys(TestData.data.uno);
      element(by.model('second')).sendKeys(TestData.data.dos);
      element(by.id('gobutton')).click();

      expect(element(by.binding('latest')).getText()).toEqual(TestData.data.tres);
    })

    using([{primerNumero:TestData.data.dos,    segundoNumero:TestData.data.uno, resultado:TestData.data.uno},
           {primerNumero:TestData.data.cuatro, segundoNumero:TestData.data.uno, resultado:TestData.data.tres}], 
           function(data){
      it("restas", function() {
        element(by.model('first')).sendKeys(data.primerNumero);
        element(by.model('second')).sendKeys(data.segundoNumero);
        element(by.model('operator')).element(by.cssContainingText('option', '-')).click();
        element(by.id('gobutton')).click();
  
        expect(element(by.binding('latest')).getText()).toEqual(data.resultado);
      })
    })

    using(TestData2.ValidData, function(data, description) {
      it("suma con: "+description, function() {
        element(by.model('first')).sendKeys(data.firstNumber);
        element(by.model('second')).sendKeys(data.secondNumber);
        element(by.model('operator')).element(by.cssContainingText('option', '+')).click();
        element(by.id('gobutton')).click();

        expect(element(by.binding('latest')).getText()).toEqual(data.total);
      })
    })

    using(TestData2.InvalidData, function(data, description) {
      it("suma con: "+description, function() {
        element(by.model('first')).sendKeys(data.firstNumber);
        element(by.model('second')).sendKeys(data.secondNumber);
        element(by.model('operator')).element(by.cssContainingText('option', '+')).click();
        element(by.id('gobutton')).click();

        expect(element(by.binding('latest')).getText()).toEqual(data.total);
      })
    })
    
});