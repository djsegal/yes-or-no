import Ember from 'ember';

export function yesOrNo(params/*, hash*/) {
  var weightOfYes = params[0];
  if ( typeof weightOfYes === 'undefined' ) { weightOfYes = 0.5; }

  var isYes = Math.random() < weightOfYes ? true : false;
  return isYes;
}

export default Ember.Helper.helper(yesOrNo);
