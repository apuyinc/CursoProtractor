describe('Protractor Mi Primer Test', function() {
    it('Esto es un smoke test', function() {
        browser.get('https://angularjs.org/');

        element(by.model('yourName')).sendKeys('Smoke Test');
        
        var hola = element(by.binding('yourName'));
        expect(hola.getText()).toBe('Hello Smoke Test')
    })
})