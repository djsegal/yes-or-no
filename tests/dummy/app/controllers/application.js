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

  triggerUpdate: function() {
    this.notifyPropertyChange('weightOfYes');
  },

  actions: {
    restart: function() {
      let didUpdate = false;
      for ( let key of Object.keys(this.get('defaults')) ) {
        let oldValue = this.get(key),
            newValue = this.get('defaults')[key];

        if ( newValue === oldValue ) { continue; }
        if ( !didUpdate ) { didUpdate = true; }
        this.set(key, newValue);
      }

      if ( !didUpdate ) { this.triggerUpdate(); }
    },

    refresh: function() {
      this.triggerUpdate();
    }
  }
});
