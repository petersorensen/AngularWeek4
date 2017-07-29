(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider
  
  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })
  .state('categoryMenu', {
    url: '/category-menu',
    templateUrl: 'src/menuapp/templates/menuapp.template.html',
    controller: 'MenuAppController as categoryMenu',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }] //,
      // items2: ['ItemListService', function (ItemListService) {
      //   return ItemListService.getItems().menu_items;
      // }]
    }
  })
  console.log("home configured");
  console.log("categoryMenu configured");

  // .state('itemMenu', {
  //   url: '/item-menu/item-menu/{categoryShortName}',
  //   templateUrl: 'src/menuapp/templates/menuapp.template.html',
  //   controller: 'MenuAppController as itemMenu',
  //   resolve: {
  //     items: ['MenuDataService', function (MenuDataService) {
  //       return MenuDataService.getItemsForCategory(categoryShortName);
  //     }]
  //   }
  // });
}

})();
