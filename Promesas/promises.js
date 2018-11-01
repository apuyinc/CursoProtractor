describe("testing angular applications", function(){
    it('manejando promesas con protractor', function() {
        browser.get("http://juliemr.github.io/protractor-demo/");

        element(by.model("first")).sendKeys("1");
        element(by.model("second")).sendKeys("2");

        element(by.id("gobutton")).click();


        console.log("despues del click");

        console.log(browser.getTitle());
        /*browser.getTitle().then(function(title) {
           console.log(title);
        });*/
        
        console.log("después de resolver promesa");
        
       expect(element(by.binding("latest")).getText()).toEqual("3");
        //browser.sleep(10000);
        //console.log(browser.getTitle());
    });
});