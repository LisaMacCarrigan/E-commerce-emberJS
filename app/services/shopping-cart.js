import Ember from 'ember';

export default Ember.Service.extend({

  items: [],
  total_cost: null,

  add(item) {
    this.get('items').pushObject(item);
  },

  // remove(item) {
  //   var cart = this.get('items');
  //
  //   for (var i = 0; i < cart.length; i++) {
  //     if (cart[i] === item) {
  //       cart.splice(i, 1);
  //     }
  //   }
  //   this.set('items', cart);
  // },

  remove(item) {
    this.get('items').removeObject(item);
  }

  // cost() {
  //   var
  // }

});


// the display itself is not updating itself.
// service not displaying changes - google search
