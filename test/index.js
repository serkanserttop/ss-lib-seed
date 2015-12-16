var expect = require('chai').expect;
var myModule = require('../src/index');

describe('lib-seed', function() {
	it('setup works', function() {
		expect(true).to.be.true
	});
	it('getHello return Hello World', function() {
		expect(myModule.getHello() === 'Hello World').to.be.true
	});
});