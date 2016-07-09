import Ember from 'ember';

export default Ember.Service.extend({

  interval: 100,
  currentlyExecutedFunction: null,

  start: function(context, pollingFunction) {
    this.set('currentlyExecutedFunction', this.schedule(context, pollingFunction, [].slice.call(arguments, 2)));
  },

  stop: function() {
    Ember.run.cancel(this.get('currentlyExecutedFunction'));
  },

  schedule: function(context, func, args) {
    return Ember.run.later(this, function() {
      this.set('currentlyExecutedFunction', this.schedule(context, func, args));
      func.apply(context, args);
    }, this.get('interval'));
  },

  setInterval: function(interval) {
    this.set('interval', interval);
  }

});
