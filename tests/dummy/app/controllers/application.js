import Ember from 'ember';

export default Ember.Controller.extend({
  rows: 4,
  cols: 4,
  weightOfYes: 50,
  defaults: {},

  setDefaults: Ember.on('init', function() {
    let defaults = {
      rows: this.get('rows'),
      cols: this.get('cols'),
      weightOfYes: this.get('weightOfYes')
    };

    this.set('defaults', defaults);
  }),

  actions: {
    restart: function() {
      for ( let key of Object.keys(this.get('defaults')) ) {
        this.set(key, this.get('defaults')[key]);
      }
    },

    refresh: function() {
      this.notifyPropertyChange('weightOfYes');
    }
  }
});
