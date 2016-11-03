import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  brand: DS.attr(),
  description: DS.attr(),
  cost: DS.attr(),
  image: DS.attr(),
  sale: DS.attr(),
  sale_cost: DS.attr()
});
