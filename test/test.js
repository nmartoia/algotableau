import assert from 'assert';
import { algotableau } from '../js/app.js';

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('algotableau', function(){
  it('should return test_controller', function(){
    assert.equal(algotableau([1,2,3,4,5,6,7,8,9,0,1000,29374]),0)
  });
  it('should return movie_and_book', function(){
    assert.equal(algotableau([1,2,3,4,5,6,7,8,9,0,1000,29374]),2534.916666666667)
  });
  it('should return app7_test', function(){
    assert.equal(algotableau(['7','2.6','8']),[7,2.6,8])
  });
  it('should return home', function(){
    assert.equal(algotableau([1,2,3,4]),[1,3],[2,4] )
  });
  it('should return play-movie', function(){
    assert.equal(algotableau([1,2,3,4,5,6,7,8,9][4,8,47]),[4,8] )
  });
  it('should return 1', function(){
    assert.equal(algotableau([1,2,3,1,3,5,5,4,8]),[2,4,8] )
  });
  it('should return salut_les_mec', function(){
    assert.equal(algotableau("mec"),1353 )
  });
});