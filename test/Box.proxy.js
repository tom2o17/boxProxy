const { expect } = require('chai');
let Box;
let box;

describe('Box (proxy)', function () {
    beforeEach(async function () {
      Box = await ethers.getContractFactory("Box");
      box = await upgrades.deployProxy(Box, [42], {initializer: 'store'});
    });
   
    // Test case
    it('retrieve returns a value previously initialized', async function () {
      // Test if the returned value is the same one
      // Note that we need to use strings to compare the 256 bit integers
      expect((await box.retrieve()).toString()).to.equal('42');

      // TODO add more test cases and check out how to implement this with different function
      
    });
  });