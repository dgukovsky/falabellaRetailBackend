
let chai = require('chai');

const expect = chai.expect;
const assert = chai.assert;

const apiFunctions = require("../app.js");

describe("Probando funciones del app.js", function () {
   
    describe("Probando funcion random: ", function () {
        it("Probando que la función retorne un entero ", function () {
            result = apiFunctions .randomInteger(1,10);
            expect(result).to.be.an("number");
        });

        it("Probando que la función retorne un valor dentro del limite inferior", function () {
            minLimit = 1;
            maxLimit = 10;
            result = apiFunctions.randomInteger(minLimit,maxLimit);
            assert.isAtLeast(result, minLimit, 'El numero es mayor o igual que limite inferior');
        });

        it("Probando que la función retorne un valor dentro del limite superior", function () {
            minLimit = 1;
            maxLimit = 10;
            result = apiFunctions.randomInteger(minLimit,maxLimit);
            assert.isAtMost(result, maxLimit, 'El numero es mayor o igual que limite superior');
        });
        
    });


});
