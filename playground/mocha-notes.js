const assert = require('assert');
const ganache = require('ganache-cli');

// Web3 is uppercase because it has a constructor
const Web3 = require('web3');

// instance variable will be lowercase

const web3 = new Web3(ganache.provider());

class Car {

    park(){

        return 'stopped';
    }

    drive(){

        return 'vroom';

    }
}

let car;

beforeEach( () => {

    car = new Car();

});


describe('Car',( ) => {


it('can park', () => {

    assert.equal(car.park(), 'stopped');

})

it('can drive', () => {

    assert.equal(car.drive(), 'vroom');

});

});