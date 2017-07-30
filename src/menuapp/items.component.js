(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/menuapp/templates/items.template.html',
  bindings: {
    mycategory2: '<mycategory',
    myitems2: '<myitems'
  }
});

})();
