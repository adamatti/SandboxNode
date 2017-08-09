const expect = require('expect.js')

module.exports = function() {
    this.Given(/^an order \- id: (.*)$/, function (id) {
        //TODO implement
    })

    this.When(/^I submit it \- region: (.*)$/, function (region) {
        //TODO implement
    })

    this.Then(/^I receive a response \- msg: (.*)$/, function (msg) {
        //TODO implement
        expect(true).to.eql(true)
    })
}