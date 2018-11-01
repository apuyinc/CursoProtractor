describe('Protractor Mi Primer Test', function() {
    it('Should be able to open a browser page', function() {
        browser.get('https://angularjs.org/');

        element(by.model('yourName')).sendKeys(browser.params.texto);
        
        var hola = element(by.binding('yourName'));
        expect(hola.getText()).toBe('Hello Capitole Consulting!')
    })
})