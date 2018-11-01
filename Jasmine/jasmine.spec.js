describe("Seccion Jasmine", function() {
    var foo;
    var bar;

    beforeAll(function() {
        console.log('before all');
        foo = 0;
        bar = 0;
    });

    beforeEach(function() {
        foo++;
        console.log('before each, foo + 1 = ' + foo);
    });

    afterAll(function() {
        console.log('after all');
        console.log('foo:' + foo);
        console.log('bar:' + bar);
    });

    afterEach(function() {
        bar++;
        console.log('after each, bar + 1 = '+ bar);
    });
  
    it('prueba de expect que acaba en pass', function() {
        expect(true).toBe(true);
        console.log("PRIMER TEST");
        console.log('foo:' + foo);
        console.log('bar:' + bar);
    })

    it('con otra prueba de expect que acaba en fail', function() {
        expect(false).toBe(true);
        console.log("SEGUNDO TEST");
        console.log('foo:' + foo);
        console.log('bar:' + bar);
    })

    it('otra prueba de expect negativamente positiva xD', function() {
        console.log("TERCER TEST");
        console.log('foo:' + foo);
        console.log('bar:' + bar);
        expect(false).not.toBe(true);
    })

    xit('este test no se va a ejecutar, por lo que no se incrementan los valores de foo y bar', function() {
        console.log("CUARTO TEST");
        expect(false).toBe(true);
    });

});