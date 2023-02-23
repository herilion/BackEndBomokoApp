const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require('../index.js');

chai.use(chaiHttp);
const expect = chai.expect;
describe('get all users', () => {
    it('should get all users from data base', () => {
        chai.request(app)
            .get('/api/auth/allusers/6389d490268c57d0918d9c88')
            .send({
                email: "",
                username: "Heritier LIONGE",
            })
            .end((err, res) => {
                expect(res.body).to.be.an('array');
                expect(err).to.be.null;
                expect(res).to.have.status(200);
            });
    });
});
describe('user connect', () => {
    it('should connect', () => {
        chai.request(app)
            .post('/api/auth/login')
            .send({
                username: "chako",
                email: "chako@yahoo.com",
                password: "123456789"
            })
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
            });
    })
})
