
let chai = require('chai');
let chaiHttp = require('chai-http');

chai.use(chaiHttp);
const url = 'localhost:3000'
const expect = chai.expect;

describe("Probando API que retorna valor de pi:", function () {

    describe("Probando API valor calculado de PI: ", function () {
        it('Deberia devoler codigo 200', (done) => {
            chai.request(url)
                .get('/pi/?random_limit=10')
                .send()
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    done();
                });
        });

        it('Deberia devoler un valor texto', (done) => {
            chai.request(url)
                .get('/pi/?random_limit=10')
                .send()
                .end(function (err, res) {
                    expect(res.text).to.be.a('string')
                    done();
                });
        });

    });
});
