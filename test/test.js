import assert from 'assert';
import { min } from '../js/app.js';
import { moyen } from '../js/app.js';
describe('algotableau', function(){
  it('should return 0', function(){
    assert.equal(min([1,2,3,4,5,6,7,8,9,0,1000,29374]),0)
  });
  it('should return -9', function(){
    assert.equal(min([1,2,3,4,5,6,7,8,-9,0,1000,29374]),-9)
  });
  it('should return undifined', function(){
    assert.equal(min([]),undefined)
  });
});
describe('algotableau', function(){
  it('should return 15', function(){
    assert.equal(moyen([10,20]),15)
  });
  it('should return undifined', function(){
    assert.equal(moyen([]),undefined)
  });
});