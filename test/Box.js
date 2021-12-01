const { expect } = require('chai');
const { ethers } = require('hardhat');

let Box;
let box;

// Start the test block
describe('Box', function() {
    beforeEach(async function () {
       Box = await ethers.getContractFactory('Box');
       box = await Box.deploy();
       await box.deployed(); 
    });

    it('Retrieve returns a value previously stored', async function () {
        // store a value 
        await box.store(42);
        // Tests id the returned value is the same one
        // Important!!!: Strings are needed to compare the 256 bit integers 
        expect((await box.retrieve()).toString()).to.equal('42');
    });
});