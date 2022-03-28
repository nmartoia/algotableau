import assert from 'assert';
import { min } from '../js/app.js';
import { moyen } from '../js/app.js';
import { nostring } from '../js/app.js';
import { pair } from '../js/app.js';
import { doublon } from '../js/app.js';
import { sansdoublons } from '../js/app.js';
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
  it('should return NaN', function(){
    assert.equal(moyen([]),NaN)
  });
});
describe('algotableau', function(){
  it('should return [1,2,3,4,5]', function(){
    assert.deepEqual(nostring([1,2,3,4,5,'trkdd','6']),[1,2,3,4,5])
  });
});
describe('algotableau', function(){
  it('should return [[2,4,6],[1,3,5]]', function(){
    assert.deepEqual(pair([1,2,3,4,5,6]),[[2,4,6],[1,3,5]])
  });
});
describe('algotableau', function(){
  it('should return [2,5]', function(){
    assert.deepEqual(doublon([1,2,3,4,5,6],[5,39,2,8,9]),[2,5])
  });
});
describe('algotableau', function(){
  it('should return [1,5,6,3,4,2]', function(){
    assert.deepEqual(sansdoublons([1,5,6,1,3,4,2,5]),[1,5,6,3,4,2])
  });
});