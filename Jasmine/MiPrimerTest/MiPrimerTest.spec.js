describe('Protractor Mi Primer Test', function() {
    it('Should be able to open a browser page', function() {
        browser.get('https://angularjs.org/');

        element(by.model('yourName')).sendKeys('capitole consulting');
        
        var hola = element(by.binding('yourName'));
        expect(hola.getText()).toBe('Hagamos que esto falle')
    })
})