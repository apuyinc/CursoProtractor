describe('angularjs homepage todo list', function() {
    
    it('should add a todo', function() {
      browser.get('https://angularjs.org');
  
      element(by.model('todoList.todoText')).sendKeys('Hacer los ejercicios del curso');
      element(by.css('[value="add"]')).click();
  
      var todoList = element.all(by.repeater('todo in todoList.todos'));
      expect(todoList.count()).toEqual(3);
      expect(todoList.get(2).getText()).toEqual('Hacer los ejercicios del curso');
  
      // lo marcamos como completado
      todoList.get(2).element(by.css('input')).click();
      var completedAmount = element.all(by.css('.done-true'));
      expect(completedAmount.count()).toEqual(2);
    });

    it('suma 2 + 1', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
    
        element(by.model('first')).sendKeys('1');
        element(by.model('second')).sendKeys('2');
        element(by.model('operator')).element(by.cssContainingText('option', '+')).click();
        element(by.id('gobutton')).click();

        expect(element(by.repeater('result in memory').row(0).column('result.value')).getText()).toBe('3');
        
        element(by.repeater('result in memory').row(0).column('result.value')).getText().then(function(text) {
            expect(text).toBe('3');
        });
    });
  });