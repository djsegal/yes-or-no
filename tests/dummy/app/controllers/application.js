import Ember from 'ember';

export default Ember.Controller.extend({
  yesnoPoller: Ember.inject.service(),
  rows: 4,
  cols: 4,
  weightOfYes: 50,
  delay: 100,
  isTwinkling: false,
  defaults: {},

  setDefaults: Ember.on('init', function() {
    let defaults = {
      rows: this.get('rows'),
      cols: this.get('cols'),
      weightOfYes: this.get('weightOfYes'),
      isTwinkling: this.get('isTwinkling')
    };

    this.set('defaults', defaults);
  }),

  triggerUpdate: function() {
    this.notifyPropertyChange('weightOfYes');
  },

  updateDelay: Ember.observer('delay', function() {
    let poller = this.get('yesnoPoller'),
        delay = this.get('delay') * 10;

    poller.setInterval(delay);
  }),

  actions: {
    restart: function() {
      let poller = this.get('yesnoPoller'),
          isTwinkling = this.get('isTwinkling');
      if ( isTwinkling ) { poller.stop(); }

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
    },

    twinkle: function() {
      let poller = this.get('yesnoPoller'),
          isTwinkling = this.get('isTwinkling');

      this.set('isTwinkling', !isTwinkling);
      if ( isTwinkling ) { poller.stop(); return; }

      poller.start(this, function() {
        this.triggerUpdate();
      });
    }
  }
});
