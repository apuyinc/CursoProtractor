describe("Locators", function() {
  it("locators basicos", function() {
    browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
    element(by.name("username")).sendKeys("user1");
    element(by.id("password")).sendKeys("Password");
    element(by.model("model[options.key]")).sendKeys("users")
    element(by.css("button.btn.btn-danger")).click();
    //element(by.buttonText("Login")).click();
    browser.sleep(5000);
  })  

 
});
  