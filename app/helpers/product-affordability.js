import Ember from 'ember';

export function productAffordability(params) {
  var productPrice = params[0].get('cost');
  // var name = params[1];
  // var othername = params[2];
  // alert(name);
  // alert(othername);

  if (productPrice >= 50) {
    return '$$$';
  } else if (productPrice >= 25) {
    return '$$';
  } else if (productPrice < 25) {
    return '$';
  }
}

export default Ember.Helper.helper(productAffordability);
