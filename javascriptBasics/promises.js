describe("testing angular applications", function(){
    it('manejando promesas con protractor', function() {
        browser.get("http://juliemr.github.io/protractor-demo/");

        //browser.sleep(10000);
        element(by.css(".input-small")).click();

        console.log("despues del click");

        browser.getTitle().then(function(title) {
           console.log(title);
        });
        
        console.log("después de resolver promesa");

        browser.sleep(10000);
        //console.log(browser.getTitle());
    });
});