(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuAppController', MenuAppController);

MenuAppController.$inject = ['categories'];
function MenuAppController(categories) {
  console.log("MenuAppController kaldt");
  var categoryMenu = this;
  categoryMenu.categories = categories.data;
  console.log(categoryMenu.categories)
  // categoryMenu.items2 = items2.data;
  // console.log(categoryMenu.items2)
}

// MenuappController.$inject = ['items2'];
// function MenuappController(items2) {
//     var itemMenu = this;
//     itemMenu.items2 = items2.data;
//     console.log(itemMenu.items2)
// }

})();
