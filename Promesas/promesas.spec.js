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

       /*var title = browser.getTitle();


       if(title==="Protractor practice website - Banking App"){

        console.log("Title matches");

       }else{

        console.log("Title does not match");

       }

        browser.sleep(2000);

       */

    });




});