import { yesOrNo } from 'dummy/helpers/yes-or-no';
import { module, test } from 'qunit';

module('Unit | Helper | yes or no');

var hasYesAndNo = function(numberOfAttempts, weightOfYes) {
  let hasYes = false,
      hasNo = false;

  for (var i = 0; i < numberOfAttempts; i++) {
    let result = yesOrNo([weightOfYes]);
    if (  result && !hasYes ) { hasYes = true; }
    if ( !result && !hasNo  ) { hasNo  = true; }
    if (  hasYes &&  hasNo  ) { break; }
  }

  return {
    hasYes: hasYes,
    hasNo: hasNo
  };
};

test('it works for unweighted inquiries', function(assert) {
  let numberOfAttempts = 100,
      result = hasYesAndNo(numberOfAttempts);

  assert.equal(result.hasYes, true, 'has had a yes');
  assert.equal(result.hasNo, true, 'has had a no');
});

test('it can return yes all the time', function(assert) {
  let numberOfAttempts = 100,
      result = hasYesAndNo(numberOfAttempts, 1);

  assert.equal(result.hasYes, true, 'has had a yes');
  assert.equal(result.hasNo, false, 'has not had a no');
});

test('it can return no all the time', function(assert) {
  let numberOfAttempts = 100,
      result = hasYesAndNo(numberOfAttempts, 0);

  assert.equal(result.hasYes, false, 'has not had a yes');
  assert.equal(result.hasNo, true, 'has had a no');
});
