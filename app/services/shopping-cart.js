import Ember from 'ember';

export default Ember.Service.extend({

  items: [],

  add(item) {
    this.get('items').pushObject(item);
  },

  remove(item) {
    // for each item in the itemsarray, find the item that === this particular item
    //   when true, delete this item in the items array.

    var updated_items = this.get('items');

    for (var i = 0; i < updated_items.length; i++) {
      if (updated_items[i] === item) {
        updated_items.splice(i, 1);
      }
    }
    this.set('items', updated_items);
  }

});


// the display itself is not updating itself.
// service not displaying changes - google search
