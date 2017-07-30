(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuAppDishesController', MenuAppDishesController);

MenuAppDishesController.$inject = ['myitems'];
function MenuAppDishesController(myitems) {
  var itemMenu = this;
  itemMenu.mycategory = myitems.data.category.name;
  itemMenu.myitems    = myitems.data.menu_items;
}

})();
