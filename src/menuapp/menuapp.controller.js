(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuAppCategoryController', MenuAppCategoryController);

MenuAppCategoryController.$inject = ['categories'];
function MenuAppCategoryController(categories) {
  var categoryMenu = this;
  categoryMenu.categories = categories.data;
}

})();
