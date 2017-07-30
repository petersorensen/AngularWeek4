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
    controller: 'MenuAppCategoryController as categoryMenu2',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('itemMenu', {
    url: '/item-menu/{categoryShortName}',
    templateUrl: 'src/menuapp/templates/menuappdishes.template.html',
    controller: 'MenuAppDishesController as itemMenu2',
    resolve: {
      myitems: ['$stateParams','MenuDataService', function ($stateParams,MenuDataService) {
        console.log("'itemMenu' finder myitems for "+ "'"+$stateParams.categoryShortName+"'")
        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
      }]
    }
  });
}

})();
