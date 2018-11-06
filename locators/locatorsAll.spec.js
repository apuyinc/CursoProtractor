describe("elementAll",function() {
    
    it("Hacemos unos calculos",function(){

    browser.get("http://www.way2automation.com/angularjs-protractor/calc/");

    element(by.model("first")).sendKeys("5");
    element(by.model("second")).sendKeys("7");
    element(by.id("gobutton")).click();


    element(by.model("first")).sendKeys("4");
    element(by.model("second")).sendKeys("6");
    element(by.id("gobutton")).click();

}) ;


   it("Imprimimos primer row",function(){


    console.log("Imprimimos primer row")

    element(by.repeater("result in memory").row(0)).getText().then(function(text){

        console.log(text);

    })

    browser.sleep(2000);
}) ;


it("Imprimimos la primera columna",function(){


    console.log("Imprimimos la primera columna")

    element.all(by.repeater("result in memory").column("result.timestamp")).getText().then(function(text){

        console.log(text);

    })

    browser.sleep(2000);
}) ;


it("Imprimimos la tabla completa",function(){


    console.log("Imprimimos la tabla completa")

    element.all(by.repeater("result in memory")).getText().then(function(text){

        console.log(text);

    })

    browser.sleep(2000);
    }) ;
})