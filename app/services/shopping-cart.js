import Ember from 'ember';

export default Ember.Service.extend({

  items: [],
  total_cost: null,

  add(item) {
    this.get('items').pushObject(item);
  },

  remove(item) {
    this.get('items').removeObject(item);
  },

  calcTotal() {
    var cart = this.get('items');
    var current_cost = 0;

    cart.forEach(function(item) {
      current_cost += item.get('cost');
    });
    this.set('total_cost', current_cost.toFixed(2));
  }

});
