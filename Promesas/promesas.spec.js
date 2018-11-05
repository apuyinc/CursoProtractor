describe('curso protractor',function(){
    
    it('entendiendo manejo de promesas',function(){

        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
       
        browser.sleep(5000);
        element(by.css('.btn.btn-primary.btn-lg')).click();
        
        console.log("despues de click");

        //browser.sleep(20000);

        //console.log(browser.getTitle()); //esta promesa todavía no ha sido resuelta.
       
        browser.getTitle().then(function(title){   //para poder resolver la promesa

            console.log(title);
        });

        it('Permite comparar un label', function() {
            browser.get('https://angularjs.org');
    
            element(by.model('yourName')).sendKeys('Jose Luis');
            
            //expect(element(by.binding('yourName')).getText()).toBe('Hello Jose Luis!');
            console.log("antes de la promesa");
            element(by.binding('yourName')).getText().then(function(nombre){console.log(nombre)});
            console.log("después de la promesa");
        })

    });


});