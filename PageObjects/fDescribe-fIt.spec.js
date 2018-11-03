describe("Focused specs", function() {

    // Any spec declared with fit is focused.
    
      fit("focused y se ejecuta", function() {
        console.log(1);
        expect(true).toBeTruthy();
      });
    
      it('no focused, no se ejecuta', function(){
        expect(true).toBeFalsy();
        console.log(2);
      });
    
    // You can focus on a describe with fdescribe
    
      fdescribe('describe focused', function(){
        it('se ejecuta', function(){
          console.log(3);
          expect(true).toBeTruthy();
        });
    
        it('tambien se ejecuta', function(){
          console.log(4);
          expect(true).toBeTruthy();
        });
      });
    
    // If you nest focused and unfocused specs inside fdescribes, only focused specs run.
    
      fdescribe('otro describe focused', function(){
        fit("focused y se ejecuta", function() {
          console.log(5);
          expect(true).toBeTruthy();
        });
    
        it('no focused, no se ejecuta', function(){
          console.log(6);
          expect(true).toBeFalsy();
        });
       });
    });