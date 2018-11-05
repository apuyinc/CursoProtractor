var using = require('jasmine-data-provider');

describe('test subtraction with data provider - direct array', function () {
    using([{a: 5, b: 2, expected: 3}, {a: 25, b: 26, expected: -1}], function (data) {
        it('should calc with operator -', function () {
            var result = calculator.calc(data.a, data.b, '-');

            expect(result).toEqual(data.expected);
        });
    });
});

describe('test addition with data provider - provider function', function () {
    function plusProvider() {
        return [
            {a: 2, b: 3, expected: 5},
            {a: '14', b: 15, expected: 29}
        ];
    }

    using(plusProvider, function (data) {
        it('should calc with operator +', function () {
            var result = calculator.calc(data.a, data.b, '+');
            expect(result).toEqual(data.expected);
        });
    });
});

describe('My fantastic test', function () {
    var objectDataProvider = {
        'OK Test': {a: 6, b: 3, expected: 9}, 'KO Test': {a: 8, b: 1, expected: 10}
    };

    using(objectDataProvider, function (data, description) {
        it(description, function () {
            var result = calculator.calc(data.a, data.b, '+');
            expect(result).toEqual(data.expected);
        });
    });
});